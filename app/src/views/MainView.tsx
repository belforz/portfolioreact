import { useState, useEffect} from "react";
import SplashAnimation from "../components/splash";
import { About } from "../components/about";
import { NavBar } from "../components/cards/NavBar";
import portfolio from "../portfolio";
import { useDarkMode } from "../hooks/useDarkMode";
import { Landing } from "../components/landing";
import { Icon } from "../components/icon";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Contact } from "../components/contact";
import { Experience } from "../components/workcard";
import { Project } from "../components/project";
import { Skills } from "../components/skills";
import { ChatMiniLeandro } from "../components/chatbot";

export default function MainView() {
  const [showSplash, setShowSplash] = useState(portfolio.splashScreen);
  const { darkModeActive } = useDarkMode();
  const [popUpVisible, setPopUpVisible] = useState(true);

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  if (showSplash) {
    return (
      <SplashAnimation
        onComplete={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  }

  return (
    <div className={`min-h-screen overscroll-contain bg-${darkModeActive ? 'black' : 'white'} ${darkModeActive ? 'text-white' : 'text-slate-700'} text-base md:text-xl`}>
      <NavBar showTransition={portfolio.transitions.active} />

      <div
        className="min-h-full !mx-10" 
      >
        <div className="flex flex-col md:grid md:grid-cols-6">
          <div className="col-span-1 flex-initial relative mx-auto md:mx-0 order-2 md:order-none">
            <ul className="md:fixed md:bottom-20 md:left:0 md:right:0 mb-7 flex items-center space-x-8 gap-8 md:flex-col md:space-y-4 md:space-x-0">
              <li className="transition-all motion-reduce:transition-none duration-500">
                <a href={portfolio.socialMediaLinks.github} target="_blank">
                  <img
                    src={darkModeActive ? "assets/github-copilot-branco.png" : "assets/github-icon-novo.svg"}
                    className="h-8 w-8 md:h-12 md:w-12 transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300"
                    style={{ fill: "currentColor" }}
                  />
                </a>
              </li>
              <li className="transition-all motion-reduce:transition-none duration-500 delay-[100ms]">
                <a href={portfolio.socialMediaLinks.linkedin} target="_blank">
                  <Icon
                    icon={faLinkedin}
                    size={'2x'}
                    color={darkModeActive ? "white" : "black"}
                    className="transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300"
                  />
                </a>
              </li>
              <li className="transition-all motion-reduce:transition-none duration-500 delay-[200ms]">
                <a
                  href={portfolio.socialMediaLinks.photography}
                  target="_blank"
                >
                  <Icon
                    icon={faCamera}
                    size={'2x'}
                    color={darkModeActive ? "white" : "black"}
                    className="transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-4 flex-1 flex-col order-1 md:order-none ">
            <div className="container mx-auto max-w-full 2xl:max-w-6xl">

            <Landing
              content={portfolio.greeting}
              transitions={portfolio.transitions}
            />

            <About
              content={{
                autobiography: portfolio.about.autobiography,
                techStack: portfolio.about.techStack,
                photo1Link: portfolio.about.photo1Link,
                photo2Link: portfolio.about.photo2Link,
              }}
              transitions={portfolio.transitions}
            />
            <Experience
              content={{ experiences: portfolio.experiences }}
              transitions={portfolio.transitions}
            />
            <Skills
              content={{ skills: portfolio.skills }}
              transitions={portfolio.transitions}
            />

            <Project 
              content={{ works: portfolio.works}}
              transitions={portfolio.transitions}
            />
            <Contact
              content={portfolio.contact}
              transitions={portfolio.transitions}
            />
            <ChatMiniLeandro
        visible={popUpVisible}
        onUpdateVisible={setPopUpVisible}
      />
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}
