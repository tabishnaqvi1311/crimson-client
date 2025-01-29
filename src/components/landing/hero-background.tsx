'use client';

import { useEffect, useState } from "react";

export default function HeroBg() {

    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const displayJobs = [
        { name: "Thumbnail Artist", style: { top: '90px', left: '20px' } },
        { name: "Video Editor", style: { top: '50px', left: '100px' } },
        { name: "Animator", style: { top: '370px', left: '200px' } },
        { name: "Sound Artist", style: { top: '150px', left: '300px' } },
        { name: "Content Writer", style: { top: '432px', left: '400px' } },
        { name: "SEO", style: { top: '210px', left: '400px' } },
        { name: "Marketing", style: { top: '250px', left: '30px' } },
        { name: "Talent Manager", style: { top: '290px', left: '900px' } },
        { name: "Cameraman", style: { top: '330px', left: '850px' } },
        { name: "Ad Manager", style: { top: '50px', left: '900px' } },
        { name: "Graphic Designer", style: { top: '200px', left: '900px' } },
        { name: "Social Media Manager", style: { top: '400px', left: '800px' } },
        { name: "Production Assistant", style: { top: '500px', left: '300px' } },
        { name: "Lighting", style: { top: '300px', left: '400px' } },
    ];

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            // Calculate position relative to center of screen
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Calculate distance from center
            const deltaX = (e.clientX - centerX) / 10;  // Divide by 20 to reduce movement intensity
            const deltaY = (e.clientY - centerY) / 20;

            // Move in opposite direction of mouse
            setOffset({ x: -deltaX, y: -deltaY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative w-full h-full hidden sm:block">
            {displayJobs.map((job, index) => (
            <div
                key={index}
                className="absolute bg-[#1c2736] p-3 rounded-lg -z-10 transition-all duration-200"
                style={{
                ...job.style,
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                }}
            >
                {job.name}
            </div>
            ))}
        </div>
    );
}