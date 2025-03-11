'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from './button';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <Menu onClick={handleClick} className="text-2xl cursor-pointer md:hidden" />
      <div
        className={`fixed inset-y-0 left-0 z-10 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <X onClick={handleClick} className="text-2xl cursor-pointer" />
        </div>
        <ul className="flex flex-col gap-y-4 px-8">
          <li>
            <a href="#about" className="text-gray-800 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-800 hover:text-blue-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-800 hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-800 hover:text-blue-500">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <Button
              href="https://www.github.com/kevyyar"
              bgColor="bg-blue-500"
              textColor="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </Button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-0 bg-black/50 transition-opacity duration-300"
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default MobileMenu;
