import React from "react";
import { useRouter } from "next/router";
export default function Detail() {
    const router = useRouter();
    const { id } = router.query;
    
    return (
        <div>Detail</div>
    )
}