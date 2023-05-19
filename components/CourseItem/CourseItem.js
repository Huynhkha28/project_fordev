
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';

export default function CourseItem() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const handle_getallcourse = async () => {
      try {
        const response = await fetch('http://localhost:3003/searchallcourse', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify()
        });
        const data = await response.json();
        console.log('Response:', data);
        if (response.ok) {
          setCourseData(data); // Update the course data state
        } else {
          console.error('Error:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    handle_getallcourse();
  }, []);

  return (
      <>
          


          <div className="container flex justify-center items-center">  
               {
              
        courseData.map((course) => (
        <div className="container mx-auto w-1/4 flex-1" key={course.id}>
          <div>
            {/* Image */}
          </div>
          <div className="container" id="displaytitle">
            {course.title}
          </div>
            <div className="flex">
            <div className="flex-1">{course.instructor} </div>
        
          </div>
          <div className="flex">
            <div className="flex-1">{course.price} </div>
            <div className="flex-1">How many people enroll in the course</div>
          </div>
                
          <div className="flex">
            <div className="flex-1">{course.duration}   </div>
            <div className="flex-1">Buy now</div>
            <div className="flex-1">Add to cart</div>
          </div>
        </div>
      ))}
              
          </div>
         
    </>
  );
}
