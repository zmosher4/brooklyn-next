'use client';
import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const fadeInRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = fadeInRef.current; // Capture the ref value in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the captured variable in cleanup
      }
    };
  }, []);

  return (
    <div className="p-16 mr-32">
      <div
        ref={fadeInRef}
        className={`font-thin flex flex-col h-screen items-start  space-y-6 justify-center transition-opacity duration-1000 ${
          isVisible ? 'animate-fadeIn' : 'opacity-0'
        }`}
      >
        <div className="text-xl">BROOKLYN MONTGOMERY</div>
        <div>brmontgo@syr.edu</div>{' '}
        <div>
          {' '}
          Department of Geography and the Environment Maxwell School of
          Citizenship and Public Affairs{' '}
        </div>
        <div> 048 Eggers Hall Syracuse, New York 13244</div>
        <div className="pt-32 text-nowrap text-xs md:text-lg pr-16">
          Webiste made by Zach Mosher | zmosher4@gmail.com
        </div>
      </div>
    </div>
  );
}
