import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Detail({ _id }) {
    const router = useRouter();

    const [detailCourse, setDetailCourse] = useState([]);
    useEffect(() => {
        const fetchDetailCourse = async (_id) => {
            try {
                const response = await fetch(`http://localhost:3003/detail/${_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify()
                }
                )
                if (response.status !== 200) {
                    throw new Error('Failed to fetch course detail');
                }
                const data = await response.json();
                setDetailCourse(data);
            }
            catch (err) {
                console.error(err);
            }
        };
        if (_id) {
            fetchDetailCourse(_id);
        }
    }, [_id]);
    console.log(detailCourse);
    return (
        <div>Detail</div>
    )
}