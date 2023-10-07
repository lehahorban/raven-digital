import { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg?react";
import Burger from "../../assets/burger.svg?react";
import Close from "../../assets/close.svg?react";
import { Link } from "react-scroll";
import data from "../../data/menu.json";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <header
      id="home"
      className="py-5 px-5  fixed left-[50%] translate-x-[-50%] z-50 bg-main/70 w-full"
    >
      <div className="flex items-center justify-between gap-20 max-w-[1350px] m-auto">
        <Link
          offset={-10000}
          smooth={true}
          duration={500}
          className="cursor-pointer"
          to="home"
          spy={true}
        >
          <Logo />
        </Link>
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
                    onClick={() => setActive(false)}
                    offset={-148}
                    duration={500}
                    activeClass={"active"}
                    smooth={true}
                    spy={true}
                    to={path}
                    className="text-white font-medium text-3xl cursor-pointer"
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
                    offset={-148}
                    duration={500}
                    activeClass={"active"}
                    smooth={true}
                    spy={true}
                    to={path}
                    className="text-white font-medium text-xl cursor-pointer hover:text-red-300 transition-all duration-300"
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
