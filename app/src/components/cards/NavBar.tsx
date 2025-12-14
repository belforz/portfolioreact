import { useCallback, useEffect, useState } from "react";
import { Bars2Icon, XMarkIcon , MoonIcon, SunIcon} from "@heroicons/react/24/solid";
import { Figure } from "../figure";
import portfolio from "../../portfolio";
import { useDarkMode } from "../../hooks/useDarkMode";

interface NavBarProps {
  showTransition: boolean;
}

export function NavBar({
  showTransition,
}: NavBarProps) {
  const { darkModeActive, toggleDarkMode } = useDarkMode();
  const [dropDownActive, setDropDownActive] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [hideNavShadow, setHideNavShadow] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);


  const onScroll = useCallback(() => {
    const currScrollPosition = window.scrollY;

    setHideNavShadow(currScrollPosition <= 60);

    if (dropDownActive) {
      setShowNavbar(true);
      setPrevScrollPosition(currScrollPosition);
      return;
    }

    if (
      currScrollPosition < 0 ||
      Math.abs(currScrollPosition - prevScrollPosition) < 60
    ) {
      return;
    }
    setShowNavbar(currScrollPosition < prevScrollPosition);
    setPrevScrollPosition(currScrollPosition);
    setDropDownActive(false);
  }, [prevScrollPosition, dropDownActive]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };

  }, [onScroll]);
  return (
    <nav
      className={`block w-full sticky top-0 z-10 transition-all duration-500 bg-${darkModeActive ? 'black' : 'white'} ${
        !showNavbar ? "translate-y-[-100%]" : "translate-y-0"
      } `}
      id="navbar"
    >
      <div
        className={`flex items-start md:items-center md:flex-wrap md:justify-between xl:justify-center px-9 md:py-4 backdrop-blur-sm transition-shadow duration-500 ${darkModeActive ? 'bg-black' : 'bg-white'} ${hideNavShadow ? (darkModeActive ? "shadow-lg bg-black/80" : "shadow-lg") : ""}`}
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
            <XMarkIcon className={` cursor-pointer h-10 w-10 ${darkModeActive ? 'fill-slate-300' : 'fill-gray-500'}`} />
          ) : (
            <Bars2Icon className={`cursor-pointer h-10 w-10 ${darkModeActive ? 'fill-slate-300' : 'fill-gray-500'}`} />
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
                        className={`transition-all motion-reduce:transition-none duration-500 delay-[${50 * (index + 1)}ms] ${showTransition ? 'translate-y-0 opacity-100': 'translate-y-4 opacity-0'} text-${darkModeActive ? 'white' : 'black'}`}
                    >
                        <a className={`block cursor-pointer text-xl py-2 px-6 bg-transparent text-button-color transition ease-in-out hover:bg-button-color hover:text-white ${darkModeActive ? 'hover:text-white' : ''} focus:bg-button-color focus:text-white active:bg-button-color active:text-white duration-300`}>
                            {link.label}
                        </a>
                       
                    </li>
                ))}
                {(
                    <li
                        className={`transition-all motion-reduce:transition-none duration-500 delay-[250ms] ${showTransition ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                    >
                        <button onClick={toggleDarkMode} className={`block ${dropDownActive ? 'px-6' : ''}`}>
                            {darkModeActive ? (
                                <div className="flex items-center space-x-2">
                                    <Figure icon={MoonIcon} size={dropDownActive ? 30 : 50} className="cursor-pointer text-white hover:text-yellow-400" />
                                    <span className="p-2 cursor-pointer text-white hover:text-yellow-400">Modo Escuro</span>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2">
                                    <Figure icon={SunIcon} size={dropDownActive ? 30 : 50} className="cursor-pointer text-black hover:text-yellow-400" />
                                    <span className="p-2 cursor-pointer text-black hover:text-yellow-400">Modo Claro</span>
                                </div>
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
