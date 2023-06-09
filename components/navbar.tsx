import React from 'react'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Head from "next/head";
import Script from "next/script";
import imageUrlBuilder from '@sanity/image-url'
import { useEffect } from "react";
import Link from 'next/link';


const Navbar = ({profile}) => {
  return (
    <>
    <div>
       <div className="w-full z-50 top-0 py-3 sm:py-5  absolute bg-[#463492]">
        <div className="container flex items-center justify-between">
          <div>
            <Link href="/">
              <h2 className= "text-white">{profile.title}</h2>
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center mr-5">

              <li className="group pl-6">

                <Link href="#about"> <span

                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >About</span> </Link>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

              <Link href="#services"><span

                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Services</span ></Link>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

              <Link href="#portfolio"><span

                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Portfolio</span></Link>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

              <Link href="#clients"><span

                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Clients</span></Link>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

              <Link href="#work"><span

                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Work</span></Link>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

              <Link href="#statistics"><span

                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Statistics</span></Link>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

              <Link href="#blog"><span

                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Blog</span></Link>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

              <Link href="#contact"><span

                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Contact</span></Link>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

            </ul>
          </div>
          <div className="block lg:hidden">
            <button >
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black  lg:hidden" >
        <div
          className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
        >
          <button
            className="absolute top-0 right-0 mt-4 mr-4"

          >
            <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
          </button>

          <ul className="mt-8 flex flex-col ">

            <li className="py-2">

              <span

                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >About</span        >

            </li>

            <li className="py-2">

              <span

                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Services</span        >

            </li>

            <li className="py-2">

              <span

                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Portfolio</span        >

            </li>

            <li className="py-2">

              <span

                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Clients</span        >

            </li>

            <li className="py-2">

              <span

                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Work</span        >

            </li>

            <li className="py-2">

              <span

                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Statistics</span        >

            </li>

            <li className="py-2">

              <span

                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Blog</span        >

            </li>

            <li className="py-2">

              <span

                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Contact</span        >

            </li>

          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
export async function getServerSideProps() {
  const client = createClient({
    projectId: "1i8zageg",
    dataset: "production",
    apiVersion: "2023-03-18",
    useCdn: false
  });

  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);

  const profilequery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profilequery);
  return {
    props: {
      blogs,
      profile
    }
  };
}
