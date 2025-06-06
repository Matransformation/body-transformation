"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuMobileOpen, setIsSubMenuMobileOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSubMenu = () => setIsSubMenuOpen((prev) => !prev);
  const toggleSubMenuMobile = () => setIsSubMenuMobileOpen((prev) => !prev);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/653a5f900c5b9_clmenceromainlogobodytransformation.png"
            alt="Logo Body Transformation"
            width={80}
            height={20}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium items-center">
          <li>
            <Link href="/" className="hover:text-primary transition">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/coaching" className="hover:text-primary transition">
              Coaching
            </Link>
          </li>
          <li>
            <Link href="/dietetique" className="hover:text-primary transition">
              Diététique
            </Link>
          </li>
          <li>
            <Link href="/pilates" className="hover:text-primary transition">
              Pilates
            </Link>
          </li>
          <li>
            <Link href="/planning" className="hover:text-primary transition">
              Planning
            </Link>
          </li>
          <li>
            <Link href="/tarifs" className="hover:text-primary transition">
              Tarifs
            </Link>
          </li>
          <li>
            <Link href="/temoignages" className="hover:text-primary transition">
              Témoignages
            </Link>
          </li>

          {/* Autres services - Desktop Dropdown */}
          <li className="relative">
            <button
              onClick={toggleSubMenu}
              className="hover:text-primary transition flex items-center gap-1 focus:outline-none"
            >
              Autres services
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${
                  isSubMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isSubMenuOpen && (
              <ul className="absolute bg-white border rounded shadow-lg mt-2 z-50 min-w-[180px] right-0">
                <li>
                  <Link
                    href="/coaching-prive"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsSubMenuOpen(false)}
                  >
                    Coaching privé
                  </Link>
                </li>
                <li>
                  <Link
                    href="/evenements"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsSubMenuOpen(false)}
                  >
                    Évènements
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Contact button */}
          <li>
            <Link
              href="/contact"
              className="bg-[#F97316] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-black" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-black" />
          )}
          <span className="ml-2 uppercase font-semibold text-black">MENU</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-white/90 backdrop-blur-sm"
          onClick={toggleMenu}
        >
          <div
            className="relative h-full flex flex-col items-center justify-center space-y-6 text-lg font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fermer bouton */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F97316] shadow"
              aria-label="Fermer le menu"
            >
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>

            <Link href="/" onClick={toggleMenu}>
              Accueil
            </Link>
            <Link href="/dietetique" onClick={toggleMenu}>
              Diététique
            </Link>
            <Link href="/pilates" onClick={toggleMenu}>
              Pilates
            </Link>
            <Link href="/coaching" onClick={toggleMenu}>
              Coaching
            </Link>
            <Link href="/planning" onClick={toggleMenu}>
              Planning
            </Link>
            <Link href="/tarifs" onClick={toggleMenu}>
              Tarifs
            </Link>
            <Link href="/temoignages" onClick={toggleMenu}>
              Témoignages
            </Link>

            {/* Autres services - Mobile */}
            <button
              onClick={toggleSubMenuMobile}
              className="flex items-center gap-1 focus:outline-none"
            >
              Autres services
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${
                  isSubMenuMobileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isSubMenuMobileOpen && (
              <div className="flex flex-col items-center space-y-2">
                <Link href="/coaching-prive" onClick={toggleMenu}>
                  Coaching privé
                </Link>
                <Link href="/evenements" onClick={toggleMenu}>
                  Évènements
                </Link>
              </div>
            )}

            <Link
              href="/contact"
              className="bg-[#F97316] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
