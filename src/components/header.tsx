import Link from "next/link";
import Button from "./button";
import MobileMenu from "./mobile-menu";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="flex justify-between items-center px-20 py-6">
        <Link href="/" className="font-black text-2xl">
          Kev<span className="text-blue-500">The</span>Dev
        </Link>
        {/* mobile navbar */}
        <MobileMenu />
        {/* desktop navbar */}
        <ul className="hidden md:flex md:gap-x-4">
          <li>
            <Link href="#about" id="nav-about">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" id="nav-skills">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" id="nav-projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#experience" id="nav-experience">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#contact" id="nav-contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          <Button
            href="https://www.github.com/kevyyar"
            bgColor="bg-blue-500"
            textColor="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
