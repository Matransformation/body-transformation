"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((o) => !o);

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
        <ul className="hidden md:flex gap-6 text-sm font-medium">
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
          <li style={{ display: 'flex', alignItems: 'center' }}>
  <Link
    href="/contact"
    style={{
      backgroundColor: '#F97316',
      color: 'white',
      padding: '0.4rem 1rem',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '0.875rem',
      textDecoration: 'none',
      lineHeight: '1',
      display: 'inline-block',
    }}
  >
    Contact
  </Link>
</li>

        </ul>

        {/* Mobile hamburger + MENU */}
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

      {/* Mobile menu drawer */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-white/90 backdrop-blur-sm"
          onClick={toggleMenu}
        >
          <div
            className="relative h-full flex flex-col items-center justify-center space-y-6 text-lg font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture stylisé */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F97316] shadow focus:outline-none"
              aria-label="Fermer le menu"
            >
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>

            <Link
              href="/"
              className="hover:text-primary transition"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              href="/coaching"
              className="hover:text-primary transition"
              onClick={toggleMenu}
            >
              Coaching
            </Link>
            <Link
              href="/planning"
              className="hover:text-primary transition"
              onClick={toggleMenu}
            >
              Planning
            </Link>
            <Link
              href="/tarifs"
              className="hover:text-primary transition"
              onClick={toggleMenu}
            >
              Tarifs
            </Link>
            <Link
              href="/temoignages"
              className="hover:text-primary transition"
              onClick={toggleMenu}
            >
              Témoignages
            </Link>
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
