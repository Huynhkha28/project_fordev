import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router'
let nameusercurrent = "kaly1234";
let name ="";
let purchased = [];
let datacourse=[]
export default function Learning() {

  const router= useRouter()



  const [courseData, setCourseData] = useState([]);
  const [courseDatauser, setcourseDatauser] = useState([]);



  useEffect(() => {
    const getcourseuser = async () => {
      try {
        const response = await fetch(`http://localhost:3003/searchuser/${nameusercurrent}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (response.ok) {
          const myJSON = await response.text();
          const data = JSON.parse(myJSON);
          setcourseDatauser(data);
         // alert(courseDatauser)

          data.map((i) => {
            sessionStorage.setItem('sessionName', i.name);
            Object.keys(i).forEach((key) => {
              if (key === 'enrolledCourses') {
                const enrolledCourses = i[key].map(course => course._id);
                purchased = enrolledCourses;
              }
            });
          });

          getCourseData();
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const getCourseData = async () => {
      for (const courseId of purchased) {
        try {
          const response = await fetch(`http://localhost:3003/searchcourse/${courseId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          });

          if (response.ok) {
            const myJSON = await response.text();
            const datacourse = JSON.parse(myJSON);
            console.log('Course successful:', datacourse);
            setcourseDatauser(datacourse)
           // alert(data._id)

            datacourse.map((i) => {
              alert(i.title)
              //da lay duoc
            })
            


            // Handle the course data as needed
          } else {
            console.error('Error:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    getcourseuser();
  }, []);


const handledirectid = (id) => {
   router.push('/learning/'+id)
    
  }
  

 return (
   <>
     
     <div className="mt">
       
        {
       
       
      courseDatauser.map((course) => (
        <div className="container mx-auto w-1/4 flex-1" onClick={()=>handledirectid(course._id)  }  key={course._id}>
          <div>
            {/* Image */}
          </div>
      
          <div className="flex">
            <div className="flex-1">{course.title}</div>
          </div>
          <div className="flex">
            <div className="flex-1">{course.description}</div>
            <div className="flex-1">How many people enroll in the course</div>
          </div>
          <div className="flex">
            <div className="flex-1">{course.instructor}</div>
          </div>
        </div>
      ))
     }
       


    </div>
    
     

  </>
);

}
