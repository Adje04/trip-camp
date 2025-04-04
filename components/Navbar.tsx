'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '../constants'
import Button from './Button'
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };



  return (
    <nav className=" bg-green-100 dark:bg-black dark:text-white flex-between max-container padding-container w-full top-0 sticky z-30 py-3">
      <Link href="/">
        <Image src="/logo.svg" alt='logo' width={85} height={40} />
      </Link>

      <div className="flex-center gap-4 lg:hidden ">
        <button
          onClick={toggleDarkMode}
          className="bg-green-50 flex-center cursor-pointer gap-2 rounded-full px-0.5 py-0.5"
        >
          {isDark ? (
            <Image src="dark.svg" width={32} height={32} alt="close"
              className='inline-block' />
          ) : (
            <Image src="light.svg" alt="menu" height={32} width={32}
              className='inline-block' />
          )}
        </button>
        <button
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <Image src="/close.svg" width={32} height={32} alt="close"
              className='inline-block bg-black' />
          ) : (
            <Image src="menu.svg" alt="menu" height={32} width={32}
              className='inline-block  dark:invert' />
          )}
        </button>
      </div>


      <div className={`absolute top-full left-0 h-screen lg:h-auto  dark:bg-black   bg-green-100 shadow-md lg:static  w-[250px] lg:w-auto lg:bg-transparent lg:shadow-none lg:flex ${navbar ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-0">
          
          {NAV_LINKS.map((link) => (

            <li key={link.slug} className="text-2xl lg:text-[14px] pb-3 lg:pb-0 text-white lg:px-2  lg:border-b-0 ">
              <Link  
              href={link.href}
                className='regular-16 text-gray-50 dark:text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50'
                onClick={() => setNavbar(!navbar)}
              >
                {link.label}

              </Link>
            </li>
          ))}

          <li className="lg:hidden pt-3">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_green_2 dark:btn_green_dark"
              onClick={() => setNavbar(false)}
            />
          </li>
        </ul>

      </div>

      {/* Login button on larger screens */}
      <div className="lg:flex-center gap-2 hidden">

        <button onClick={toggleDarkMode} className="bg-green-50 p-2  rounded-full">
          <Image
            src={isDark ? "/dark.svg" : "/light.svg"}
            alt="theme toggle"
            width={32}
            height={32}
          />
        </button>
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant='btn_green_2 dark:btn_green_dark'
          onClick={() => setNavbar(!navbar)}
        />

      </div>
    </nav>
  )

}

export default Navbar





