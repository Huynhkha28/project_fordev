  import React, { useState, useEffect } from "react";
  import { useRouter } from "next/router";
  import Image from "next/image";
  import Header from "@/components/Header/Header";

  export default function Detail() {
    const router = useRouter();
    const { id } = router.query;
    const [courseDatauser, setCourseDatauser] = useState([]);// do cai nay 

    useEffect(() => {
      const getCourseUser = async () => {
        try {
          if (id) {
            const response = await fetch(`http://localhost:3003/searchcourse/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },
            });

            if (response.ok) {
              const data = await response.json();
              console.log(data);
              setCourseDatauser(data);





            } else {
              console.error('Error:', response.statusText);
            }
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      getCourseUser();
    }, [id]);// id do doan code nay -> id thay doi la update lai lun , neu xoa no chi chay 1 lan run , id khi thay doi khong bat duoc su kien do -> k lay data duoc

    return (
      <div className="detail">
        <p>heelppp</p>
        {courseDatauser.map((course) => ( 
          <div className="container mx-auto w-1/4 flex-1" onClick={() => handledirectid(course._id)} key={course._id}>
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

            <div className="flex">
              <div className="flex-1">{course.lessons[0].title}</div>
              <div></div>
            </div>

            

            <div>


{course.lessons.map((lesson) => (
            <div className="flex" key={lesson._id}>
              <div className="flex-1">{lesson.title}</div>
            </div>
          ))}

            </div>

          </div>
        ))}
      </div>
    );
  }
