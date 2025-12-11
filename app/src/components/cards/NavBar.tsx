import { useCallback, useEffect, useState } from "react";
import { matchRoutes } from "react-router-dom";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface NavBarProps {
  showTransition: boolean;
  darkModeActive: boolean;
  toggleDarkMode: () => void;
}

export function NavBar({
  showTransition,
  darkModeActive,
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
        className={`flex items-start md:items-center md:flex-wrap md:justify-between xl:justify-center px-9 md:py-4 bg-white dark:bg-black backdrop=blur-sm transition-shadow duration-300 ${hideNavShadow ? "shadow-lg dark:bg-black[.8]" : ""}`}
      >
        <a href="/#landing-page">
          {/* Logo */}
          <div
            className={`transition-all motion-reduce:transition-none duration-500 ${
              showTransition ? "opacity-1 blur-0" : "opacity-0 blur-sm"
            }`}
          >
            <div>
              <p className="text-5xl md:text-7xl font-bold">L.B</p>
            </div>
          </div>
        </a>
        <button
          onClick={() => setDropDownActive(!dropDownActive)}
          className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 xl:hidden transition-all motion-reduce:transition-none duration-500 ${showTransition ? "opacity-1 blur-0" : "opacity-0 blur-sm"}`}
        >
          {dropDownActive ? (
            <XMarkIcon className="h-10 w-10 dark:fill-slate-300" />
          ) : (
            <Bars2Icon className="h-10 w-10 dark:fill-slate-300" />
          )}
        </button>
        <div className="hidden w-full xl:block xl:w-auto items-center" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 xl:p-0 mt-4 xl:flex-row xl:space-x-8 xl:mt-0">
                {[
              { href: "/#about-section", label: "Sobre" },
              { href: "/#experience-section", label: "Experiências" },
              { href: "/#skills-section", label: "Habilidades" },
              { href: "/#work-section", label: "Projetos" },
              { href: "/#contact-section", label: "Contato" },
            ].map((link,index) => (
                    <li key={index}
                        className={`transition-all motion-reduce:transition-none duration-500 delay-${50 * (index + 1)}ms ${showTransition ? 'translate-y-0 opacity-1': 'translate-y-4 opacity-0'}`}
                    >
                        <a className="block py-2 px-6 bg-transparent border border-button-color shadow-sm shadow-button-color text-button-color transition ease-in-out hover:bg-button-color hover:text-white hover:dark:text-slate-300 focus:bg-button-color focus:text-white active:bg-button-color active:text-white duration-300">
                            {link.label}
                        </a>
                       
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </nav>
  );
}
