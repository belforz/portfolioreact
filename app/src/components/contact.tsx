import { useRef } from "react";
import { useOnIntersect } from "../hooks/onIntersect";
import type { ContactProps } from "../types/sections";
import useDarkMode from "../hooks/useDarkMode";

export function Contact({ content, transitions }: ContactProps) {
  const contactSection = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const { darkModeActive } = useDarkMode()
  const intersectionVisible = useOnIntersect(contactSection, transitions.showOnce, {
    threshold: transitions.thresholdOption,
  });
  const visible =
    transitions.active &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches
      ? intersectionVisible
      : true;

    return (
    <section
    ref={contactSection}
    id="contact-section"
    className="min-h-screen w-full flex flex-col"
    >
    <div className={`relative flex py-5 items-center ${
        visible
            ? "translate-y-0 opacity-100 blur-0"
            : "translate-y-4 opacity-0 blur-sm"
    }transition-all motion-reduce:transition-none duration-500`}>
      
    <div className={`flex-grow border-t  ${darkModeActive ? 'border-white' : 'border-black'} border-1`}></div>
    <h1 className={`text-3xl font-bold px-5 ${darkModeActive ? 'text-white' : 'text-slate-700'}`}>📭Contato</h1>
    <div className={`flex-grow border-t ${darkModeActive ? 'border-white' : 'border-black'} border-1`}></div>

    </div>
    <div className={`flex flex-col my-auto transition-all motion-reduce:transition-none duration-500 delay-300 ${
          visible
            ? "translate-y-0 opacity-100 blur-0"
            : "translate-y-4 opacity-0 blur-sm"
        }`}
    > 
      <div className={`flex flex-col my-auto transition-all duration-500 delay-300 ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-4 opacity-0 blur-sm'}`}>
        {content.formEmbedLink ? (
          <iframe
            src={content.formEmbedLink}
            style={{ border: "none" }}
            className="mb-10 min-h-screen w-full"
          />
        ) : (
          <div className="space-y-8 mx-auto text-center">
            <h1 className={`text-3xl !font-extrabold mb-4 text-center ${darkModeActive ? 'text-white' : 'text-slate-700'}`}>Vamos nos falando...</h1>
            {content.externalLink?.note.map((msg, idx) => (
              <p key={idx} className="text-slate-500 p-8 dark:text-slate-300">{msg}<br /></p>
            ))}
            <div className="flex flex-col gap-4 sm:flex-row items-center justify-center space-y-5 sm:space-x-5">
              {content.externalLink?.link.email ? (
                <>
                  <a href={`mailto:${content.externalLink.link.email}`}>
                    <button className="py-2 px-6 bg-transparent border border-purple-500 shadow-sm shadow-purple-500 text-purple-500 hover:text-white hover:bg-purple-500 duration-300 focus:bg-purple-500 focus:text-white active:bg-purple-500 active:text-white">
                      Mande-me um email
                    </button>
                  </a>
                  <p className="text-sm mt-8 sm:mt-0 text-slate-300 dark:text-slate-500">
                    {content.responseTimeMessage || "Normalmente respondo em 24 horas."}
                  </p>
                </>
              ) : (
                <a href={content.externalLink?.link.other} target="_blank" rel="noopener noreferrer">
                  <button className="py-2 px-6 bg-transparent border border-purple-500 shadow-sm shadow-purple-500 text-purple-500 hover:text-white hover:bg-purple-500 duration-300">
                    Reach Out
                  </button>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>

    </section>

    
)


}
