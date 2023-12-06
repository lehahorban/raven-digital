import { useEffect, useState } from "react";

export const useScroll = (sectionSelector, linkClass, activeClass) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(sectionSelector);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sectionSelector]);

  useEffect(() => {
    const links = document.querySelectorAll(`.${linkClass}`);
    links.forEach((link) => {
      const linkHref = link.getAttribute("href")?.replace("#", "");
      if (activeSection === linkHref) {
        link.classList.add(activeClass);
      } else {
        link.classList.remove(activeClass);
      }
    });
  }, [activeSection, linkClass, activeClass]);

  const scrollToSection = (id, offset = 0) => {
    console.log(document.getElementById(id).offsetTop + offset);
    window.scrollTo({
      top: document.getElementById(id).offsetTop + offset,
      behavior: "smooth",
    });
  };

  return [scrollToSection, activeSection];
};
