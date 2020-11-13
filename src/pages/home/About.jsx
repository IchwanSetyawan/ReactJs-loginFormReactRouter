import React, { useState, useEffect } from "react";
import { useParams } from 'react-router'

const data = [
  { _id: 1, nama: "noobee", desc: "Ini halaman Noobecamp" },
  { _id: 2, nama: "me", desc: "software developer" },
  { _id: 3, nama: "project", desc: "project noobecamp" },
  { _id: 4, nama: "default", desc: "ini halaman about" },
];

export default function About() {
    const {nama} = useParams();
    const [show, setShow] = useState(data[3]);
    
    useEffect(() => {
        let dataToShow = data.find((d)=>{
            return d.nama === nama
        });
        if(typeof dataToShow === "undefined") dataToShow = data[3]
        setShow(dataToShow);
    }, [nama])



    return (
        <div>
            <h1>{show.desc}</h1>
        </div>
    )
}
