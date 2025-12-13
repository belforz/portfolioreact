import { useCallback, useEffect, useState } from "react";
import { Bars2Icon, XMarkIcon , MoonIcon, SunIcon} from "@heroicons/react/24/solid";
import { Figure } from "../figure";
import portfolio from "../../portfolio";

interface NavBarProps {
  showTransition: boolean;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

export function NavBar({
  showTransition,
  darkMode,
  toggleDarkMode,
}: NavBarProps) {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [hideNavShadow, setHideNavShadow] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);


  const onScroll = useCallback(() => {
    const currScrollPosition = window.scrollY;

    setHideNavShadow(currScrollPosition <= 60);

    if (
      currScrollPosition < 0 ||
      Math.abs(currScrollPosition - prevScrollPosition) < 60
    ) {
      return;
    }
    setShowNavbar(currScrollPosition < prevScrollPosition);
    setPrevScrollPosition(currScrollPosition);
    setDropDownActive(false);
  }, [prevScrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };

  }, [onScroll]);
  return (
    <nav
      className={`block w-full sticky top-0 z-10 transition-all duration-300 ${
        !showNavbar ? "translate-y-[-100%]" : "translate-y-0"
      } `}
      id="navbar"
    >
      <div
        className={`flex items-start md:items-center md:flex-wrap md:justify-between xl:justify-center px-9 md:py-4 bg-white dark:bg-black backdrop-blur-sm transition-shadow duration-300 ${hideNavShadow ? "shadow-lg dark:bg-black/80" : ""}`}
      >
        <a href="/#landing-page">
          {/* Logo */}
          {/* <div
            className={`transition-all motion-reduce:transition-none duration-500 ${
              showTransition ? "opacity-100 blur-0" : "opacity-0 blur-sm"
            }`}
          >
            <div>
              <p className="text-5xl md:text-7xl font-bold text-black dark:text-white">L.B</p>
            </div>
          </div> */}
        </a>
        <button
          onClick={() => setDropDownActive(!dropDownActive)}
          className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 xl:hidden transition-all motion-reduce:transition-none duration-500 ${showTransition ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
        >
          {dropDownActive ?
          
          (
            <XMarkIcon className="h-10 w-10 dark:fill-slate-300" />
          ) : (
            <Bars2Icon className="h-10 w-10 dark:fill-slate-300" />
          )}
        </button>

        <div className={`w-full xl:block xl:w-auto items-center ${dropDownActive ? 'block' : 'hidden' }`} id="navbar-default">
            <ul className="font-medium gap-8 flex flex-col p-4 xl:p-0 mt-4 xl:flex-row xl:space-x-8 xl:mt-0 xl:items-center">
                {[
              { href: "/#about-section", label: "😎 Sobre" },
              { href: "/#experience-section", label: "🛡️ Experiências" },
              { href: "/#skills-section", label: "💻 Habilidades" },
              { href: "/#work-section", label: "🧱 Projetos" },
              { href: "/#contact-section", label:  "📭 Contato" },
              { href: portfolio.greeting.resumeLink, label: "📄 Currículo" },
            ].map((link,index) => (
                    <li key={index}
                        className={`transition-all motion-reduce:transition-none duration-500 delay-${50 * (index + 1)}ms ${showTransition ? 'translate-y-0 opacity-100': 'translate-y-4 opacity-0'}`}
                    >
                        <a className="block cursor-pointer text-xl py-2 px-6 bg-transparent text-button-color transition ease-in-out hover:bg-button-color hover:text-white hover:dark:text-slate-300 focus:bg-button-color focus:text-white active:bg-button-color active:text-white duration-300">
                            {link.label}
                        </a>
                       
                    </li>
                ))}
                {darkMode !== undefined && toggleDarkMode && (
                    <li
                        className={`transition-all motion-reduce:transition-none duration-500 delay-[250ms] ${showTransition ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                    >
                        <button onClick={toggleDarkMode} className={`block ${dropDownActive ? 'px-6' : ''}`}>
                            {darkMode ? (
                                <Figure icon={MoonIcon} size={dropDownActive ? 30 : 50} className="cursor-pointer text-slate-300 hover:text-yellow-400" />
                            ) : (
                                <Figure icon={SunIcon} size={dropDownActive ? 30 : 50} className="cursor-pointer text-slate-400 hover:text-yellow-400" />
                            )}
                        </button>
                    </li>
                )}
            </ul>
        </div>
      </div>
    </nav>
  );
}
