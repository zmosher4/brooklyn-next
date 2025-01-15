'use client';

import Image from 'next/image';
import Link from 'next/link';
import map1 from '@/assets/mapimg1.webp';

export default function MapHeader() {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="w-full border-t-2 border-[#30574e]">
      <div className="flex flex-wrap">
        <div className="relative w-full md:w-[50%]">
          <Image
            src={map1}
            alt="Mapping Portfolio"
            className="object-cover w-full"
          />
          <div className="absolute inset-0 flex justify-center items-center text-shadow-md font-bold text-6xl">
            Mapping Portfolio
          </div>
        </div>
        <div className="relative w-full md:w-[50%] p-8">
          <h3 className="text-[#30574e] text-2xl font-bold">Page Navigation</h3>
          <div className="text-[#30574e] underline underline-offset-2 mt-8">
            <ul className="space-y-2">
              <li className="list-disc">
                <Link
                  href="#introduction"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('introduction');
                  }}
                >
                  Introduction
                </Link>
              </li>
              <li className="list-disc">
                <Link
                  href="#sketch-maps"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('sketch-maps');
                  }}
                >
                  Sketch Maps
                </Link>
              </li>
              <li className="list-disc">
                <Link
                  href="#statement"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('statement');
                  }}
                >
                  Reflexivity Statement
                </Link>
              </li>
              <li className="list-disc">
                Maps
                <ul className="ml-8 space-y-2">
                  <li className="list-[circle]">
                    <Link
                      href="#map-1"
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('map-1');
                      }}
                    >
                      Map 1
                    </Link>
                  </li>
                  <li className="list-[circle]">
                    <Link
                      href="#map-2"
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('map-2');
                      }}
                    >
                      Map 2
                    </Link>
                  </li>
                  <li className="list-[circle]">
                    <Link
                      href="#map-3"
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('map-3');
                      }}
                    >
                      Map 3
                    </Link>
                  </li>
                  <li className="list-[circle]">
                    <Link
                      href="#map-4"
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('map-4');
                      }}
                    >
                      Map 4
                    </Link>
                  </li>
                  <li className="list-[circle]">
                    <Link
                      href="#map-5"
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('map-5');
                      }}
                    >
                      Map 5
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
