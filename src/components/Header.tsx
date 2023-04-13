import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navLinks = [
    {
      title: 'Home',
      url: '/',
      icon: 'fa-sharp fa-solid fa-house',
    },
    {
      title: 'Favorites',
      url: '/favorites',
      icon: 'fa-regular fa-heart',
    },
  ];

  return (
    <header className="sticky top-0 left-0 px-4 w-full h-14 flex items-center justify-between bg-white shadow-sm z-20">
      <Link className="flex items-center gap-x-2" href={'/'}>
        {/* LOGO IS JUST A PLACE HOLDER. AUTHOR: https://dribbble.com/shots/14513038-JoyVerse-Bible-App */}
        <img src="/logo.png" className="w-7 h-9" alt="" />
      </Link>

      <button className="z-30 lg:hidden">
        <i onClick={() => setIsMenuOpen(!isMenuOpen)} className="fa-solid fa-bars"></i>
      </button>

      {/* Desktop menu */}
      <nav className="hidden lg:flex items-center gap-x-6">
        {navLinks.map((link, index) => (
          <Link key={index} href={`${link.url}`} className="flex items-center gap-x-1">
            <motion.i whileHover={{ scale: 1.2 }} className={`mt-0.5 ${link.icon}`}></motion.i>
            {link.title}
          </Link>
        ))}
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed top-0 right-0 h-screen w-full bg-black bg-opacity-40"
          >
            <motion.nav
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ ease: 'easeOut' }}
              className="absolute top-0 right-0 px-4 pt-10 w-3/5 h-screen flex flex-col gap-y-4 bg-white shadow-md z-20"
            >
              {navLinks.map((link, index) => (
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  key={index}
                  className="pb-3 border-b flex bg-white items-center gap-x-2"
                  href={link.url}
                >
                  <i className={`mt-0.5 ${link.icon}`}></i>
                  {link.title}
                </Link>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
