import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          if (
            scrollPos >= el.offsetTop &&
            scrollPos < el.offsetTop + el.offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      window.scrollTo({
        top: section.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] lg:px-[15vw] ${
        isScrolled
          ? "bg-[#0a061a]/70 backdrop-blur-xl border-b border-purple-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer tracking-wide">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mahfooj
          </span>{" "}
          Alam
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-300 relative">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition duration-300 ${
                  activeSection === item.id
                    ? "text-purple-400"
                    : "hover:text-white"
                }`}
              >
                {item.label}
              </button>

              {/* Animated Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-5">
          {[{
            icon: <FaGithub size={20} />,
            link: "https://github.com/mahfoojalam2025",
          },
          {
            icon: <FaLinkedin size={20} />,
            link: "www.linkedin.com/in/mahfooj-alam2008",
          },
          {
            icon: <FaInstagram size={20} />,
            link: "https://www.instagram.com/mahfooj.decode/",
          }].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300 
              hover:shadow-[0_0_15px_rgba(130,69,236,0.8)] 
              hover:scale-110 rounded-full"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-purple-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-purple-500 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a061a]/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl mt-2 shadow-xl">
          <ul className="flex flex-col items-center space-y-6 py-8 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`text-lg transition ${
                    activeSection === item.id
                      ? "text-purple-400"
                      : "hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* Social Icons Mobile */}
            <div className="flex space-x-6 pt-4">
              <FaGithub size={22} />
              <FaLinkedin size={22} />
              <FaInstagram size={22} />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;