"use client";
import { NewsSectionData } from "../Data/NewsSectionData";
import { useRef } from "react";
import "../globals.css";

const NewsSectionDataMapping = () => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex items-center overflow-hidden mt-[24px]">
      <ul
        ref={scrollRef}
        className="flex items-center gap-2 whitespace-nowrap overflow-x-auto scrollbar-hide"
      >
        {NewsSectionData.map((news, idx) => (
          <div className="border-1 border-slate-300 rounded-[5px] p-1">
            <li key={idx} className="text-[18px] mx-2 inline-block">
              <a
                href={`#${news.title.toLowerCase()}`}
                className="hover:text-blue-500"
              >
                {news.title}
              </a>
            </li>
          </div>
        ))}
      </ul>

      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 p-2 transform translate-x-full transition-transform hover:text-blue-500"
      >
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
};

export default NewsSectionDataMapping;
