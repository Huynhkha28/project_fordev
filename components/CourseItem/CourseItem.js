
import Link from "next/link";
import Image from "next/image";
import  {useRouter}  from "next/router";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from '@fortawesome/free-solid-svg-icons';
export default function CourseItem() {
  const router = useRouter();
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
   const handleClickToDetail = (id) => {
      router.push('/detail/' + id);
      console.log(id);
   }
  return (
    <>
      <div className="container flex justify-center items-center">
        <div className="w-9/12 flex row">
          {
            courseData.map((course) => (
              <div className="container flex flex-col w-3/12 mx-2 p-2 border hover:shadow-md hover:border-gray-400 hover:cursor-pointer hover:bg-slate-100 rounded-[10px]" key={course.id} onClick={() => handleClickToDetail(course._id)}>
                <div className="h-[145px]">
                  <Image src={"/../public/image/2473048_8255_5.jpg"}
                    width={260} height={145} alt="Picture of the course" />
                </div>
                <div className=" title justify-start	w-full mt-2">
                  <span className="text-base font-semibold">{course.title}</span>
                </div>
                <div className="flex w-full mt-1">
                  <span >{course.instructor} </span>
                </div>
                <div className="flex justify-between w-full mt-1">
                  <div className="flex w-1/2 font-semibold">{course.price} $</div>
                  <div className="flex w-1/2 justify-end items-center"><FontAwesomeIcon icon={faUsers} />13000</div>
                </div>
                <div className="flex w-full mt-2">
                  <div className="flex-1 w-3/12">{course.duration}   </div>
                  <button className="flex-1 border w-full flex justify-center mr-1 px-2 py-[6px] items-center text-sm hover:bg-sky-500 hover:text-white rounded-[6px]">Buy now</button>
                  <button className="flex-1 border w-full flex justify-center ml-1 px-2 py-[6px] text-sm hover:bg-sky-500 items-center hover:text-white rounded-[6px]">Add to cart</button>
                </div>
              </div>
            ))}
        </div>

      </div>
    </>
  );
}
