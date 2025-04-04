import Link from 'next/link'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  return (
    <footer className="flex-center mt-10">
      <div className=" bg-green-100 dark:bg-black padding-container max-container flex w-full flex-col gap-14 ">
        <div className=" flex flex-col items-start justify-center gap-[10%] mt-3 md:mt-5 md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="logo.svg" alt="logo" width={85} height={40}
            className=''/>
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}> 
                <ul className="regular-14 flex flex-col gap-4 text-gray-30 dark:text-gray-30 hover:text-green-50">
                  {columns.links.map((link) => (
                    <li key={link.id}> 
                      <Link href="/">{link.menu}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn key="contact" title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <Link href="/" key={index} className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="regular-14 whitespace-nowrap dark:text-gray-30 hover:text-green-50">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn key="socials" title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 hover:text-green-50">
                  {SOCIALS.links.map((link) => (
                    <li key={link.id}> 
                      <Link href="/">
                        <Image src={link.social_link} alt="logo" width={24} height={24} className="dark:invert dark:hover:bg-green-50" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20 dark:bg-gray-30" />
        <p className="regular-14 w-full text-center dark:text-gray-30 hover:text-green-50">2025 HiCamp | Tous droits réservés</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer

