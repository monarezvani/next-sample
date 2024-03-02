"use client";
import { useState } from "react";
import { navItems } from "@/config/Constants";
import LogoImg from "@/public/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-8">
      <div className="content flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <Image
            src={LogoImg}
            alt="Logo"
            width={97}
            height={22}
            className="mr-8"
          />
          <ul className="hidden md:flex md:flex-row md:items-center">
            {navItems.map((item) => (
              <li key={item.id} className="mx-8 leading-24">
                <Link
                  className="text-textColor font-semiBold text-xs"
                  href={item.link}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-textColor font-semiBold text-xs focus:outline-none flex flex-col justify-center items-center"
          >
            <div className="p-4 space-y-2 bg-primary rounded shadow">
              <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
            </div>
          </button>
        </div>
        <div className="hidden md:flex">
          <Link
            className="text-textColor font-semiBold text-xs mx-8"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="mx-8 button max-[640px]:button-sm max-[768px]:button-md max-[1280px]:button-xl max-[1536px]:button-lg button-primary"
            href="/signUp"
          >
            Sign up
          </Link>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden">
          {navItems.map((item) => (
            <li key={item.id} className="py-2">
              <Link
                className="block px-4 py-2 text-textColor font-semiBold text-xs"
                href={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
