import { useState, useEffect, useRef } from "react";
import type { AboutProps } from "../types/sections";


export function About({content, transitions} : AboutProps) {
    const aboutSection = useRef<HTMLDivElement | null>(null)
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if( entry.isIntersecting) {
                    setVisible(true);
                    if(transitions.showOnce) {
                        observer.disconnect();
                    }
                }
            },
            {
                threshold: transitions.thresholdOption
            }
        );

        if( aboutSection.current){
            observer.observe(aboutSection.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [transitions])

    return (
    <section ref={aboutSection} id="about-section" className="w-full">
      <div
        className={`relative flex py-5 items-center ${
          visible
            ? "translate-y-0 opacity-1 blur-0"
            : "translate-y-4 opacity-0 blur-sm"
        } transition-all motion-reduce:transition-none duration-500`}
      >
        <h1 className="text-3xl font-bold pr-5">😎 Sobre</h1>
        <div className="flex-grow border-t border-black dark:border-white border-1"></div>
      </div>
      <div
        className={`flex flex-col gap-y-4 xl:grid xl:grid-cols-2 xl:gap-x-5 xl:gap-y-0 mb-36 text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-300 ${
          visible
            ? "translate-y-0 opacity-1 blur-0"
            : "translate-y-4 opacity-0 blur-sm"
        }`}
      >
        <div className="order-2 xl:order-none">
          {content.autobiography.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
              <br />
              <br />
            </p>
          ))}
        </div>
        <div className="grid gap-y-4 order-1 xl:order-none">
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <img
                src={content.photo}
                className="shadow-md"
                loading="lazy"
                alt="Photo 1"
              />
            </div>
            <div>
              <img
                src={content.photo}
                className="shadow-md"
                loading="lazy"
                alt="Photo 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );


}

