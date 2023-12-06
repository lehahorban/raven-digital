import { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg?react";
import Burger from "../../assets/burger.svg?react";
import Close from "../../assets/close.svg?react";
import data from "../../data/menu.json";
import { useScroll } from "../../hook/useScroll";
import { Link } from "react-scroll";

const Header = () => {
  const [active, setActive] = useState(false);
  const [scrollToSection] = useScroll(".section", "link", "active");
  const [currentLink, setCurrentLink] = useState("about");

  useEffect(() => {
    if (active) {
      document.body.classList.add("body-overflow-hidden");
    } else {
      document.body.classList.remove("body-overflow-hidden");
    }
    const matchMedia = window.matchMedia("(min-width: 1280px)");

    const changeActive = () => {
      if (matchMedia.matchMedia) {
        setActive(false);
      }
    };
    matchMedia.addEventListener("change", changeActive);
    return () => {
      matchMedia.removeEventListener("change", changeActive);
    };
  }, [active]);

  return (
    <header
      id="home"
      className="py-5 px-5  fixed  z-50 bg-main/70 w-full section"
    >
      <div className="flex items-center justify-between gap-20 max-w-[1350px] m-auto">
        <a
          href="#home"
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <Logo />
        </a>
        <button
          className="xl:hidden relative z-50"
          type="button"
          onClick={() => setActive(!active)}
        >
          {!active ? <Burger className="block xl:hidden" /> : <Close />}
        </button>
        {active ? (
          <nav className="absolute top-0 p-10  left-0 h-screen w-full bg-black z-[20] xl:hidden flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center justify-center gap-8">
              {data.menuItems.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    onClick={() => {
                      setActive(false), setCurrentLink(path);
                    }}
                    offset={-92}
                    duration={500}
                    smooth={true}
                    to={path}
                    className={`text-white font-medium text-3xl cursor-pointer hover:text-red-300 transition-all duration-300 ${
                      currentLink === path ? "active" : ""
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <nav className="hidden xl:block">
            <ul className="flex gap-14">
              {data.menuItems.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={`#${path}`}
                    offset={-92}
                    duration={500}
                    smooth={true}
                    to={path}
                    className="text-white font-medium text-xl cursor-pointer hover:text-red-300 transition-all duration-300 link"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
