import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import { createClient } from 'next-sanity'
import PortableText from "react-portable-text"
import Navbar from '@/components/navbar'
import Link from 'next/link'

const Post = ({ blog, profile }) => {
  const router = useRouter()
  const { slug } = router.query

  return <>

    <Head>
      {/* <meta charset="utf-8" /> */}

      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />

      <title>{blog.title}</title>

      <meta property="og:title" content="How to become a frontend developer | Atom Template" />

      <meta property="og:locale" content="en_US" />

      <link
        rel="canonical"
        href="//post"
      />

      <meta
        property="og:url"
        content="//post"
      />

      <meta
        name="description"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

      <meta name="theme-color" content="#5540af" />

      <meta property="og:site_name" content="Atom Template" />

      <meta property="og:image" content="//assets/img/social.jpg" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@tailwindmade" />

      <link
        // crossorigin="crossorigin"
        href="https://fonts.gstatic.com"
        rel="preconnect"
      />

      <link
        as="style"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="preload"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />

      <link
        // crossorigin="anonymous"
        href="/assets/styles/main.min.css"
        media="screen"
        rel="stylesheet"
      />

      <script
        defer
        src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
      ></script>

      <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>



      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
      />

      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js" async/>

      <script>
        hljs.highlightAll();
      </script>

    </Head>

<Navbar profile={profile}/>

    <div id="main" className="relative">

      {/* <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
              <img src="/assets/img/logo.svg" className="w-24 lg:w-48" alt="logo image" />
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">

              <li className="group pl-6">

                <a
                  href="/#about"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >About</a          >

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

                <a
                  href="/#services"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >Services</a          >

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

                <a
                  href="/#portfolio"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >Portfolio</a          >

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

                <a
                  href="/#clients"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >Clients</a          >

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

                <a
                  href="/#work"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >Work</a          >

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

                <a
                  href="/#statistics"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >Statistics</a          >

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

                <a
                  href="/#blog"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >Blog</a          >

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

                <a
                  href="/#contact"
                  className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                >Contact</a          >

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
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"

      >
        <div
          className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
        >
          <button
            className="absolute top-0 right-0 mt-4 mr-4"

          >
            <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
          </button>

          <ul className="mt-8 flex flex-col">

            <li className="py-2">

              <a
                href="/#about"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >About</a        >

            </li>

            <li className="py-2">

              <a
                href="/#services"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >Services</a        >

            </li>

            <li className="py-2">

              <a
                href="/#portfolio"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >Portfolio</a        >

            </li>

            <li className="py-2">

              <a
                href="/#clients"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >Clients</a        >

            </li>

            <li className="py-2">

              <a
                href="/#work"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >Work</a        >

            </li>

            <li className="py-2">

              <a
                href="/#statistics"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >Statistics</a        >

            </li>

            <li className="py-2">

              <a
                href="/#blog"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >Blog</a        >

            </li>

            <li className="py-2">

              <a
                href="/#contact"
                className="pt-0.5 font-header font-semibold uppercase text-white"
              >Contact</a        >

            </li>

          </ul>
        </div>
      </div> */}


      <div><div className="container py-6 md:py-10 mt-14">
        <div className="mx-auto max-w-4xl">
          <div className="">
            <h1
              className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl"
            >
              {blog.title}
            </h1>
            <div className="flex items-center pt-5 md:pt-10">
              <div>
                <img
                  src="/assets/img/blog-author.jpg"
                  className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                  alt="author image"
                />
              </div>
              <div className="pl-5">
                <span className="block font-body text-xl font-bold text-grey-10"
                >By Aahan
                </span          >
                <span className="block pt-1 font-body text-xl font-bold text-grey-30"
                >Created Date & time
                </span          >
              </div>
            </div>
          </div>
          <div className="prose max-w-none pt-8"><h2 id="lorem-ipsum-dolor-sit-amet">{blog.title}</h2>

            <p>{blog.metadesc}</p>

            <div>
              
              <PortableText
                // Pass in block content straight from Sanity.io
                content={blog.content}
                projectId="1i8zageg"
                dataset="production"
                // Optionally override marks, decorators, blocks, etc. in a flat
                // structure without doing any gymnastics
                serializers={{
                  h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                  li: ({ children }) => <li className="special-list-item">{children}</li>,
                  
                }}
              />
              
              </div>

            <h3 id="lorem-ipsum-dolor-sit-amet-1">Lorem ipsum dolor sit amet</h3>

            <p>Possent quippe. Conata fera ab Hersilie iam auditur haesit. Culpa ignis retia Aonides ictus crescendo micantes, petere, ambustaque vicem in digitos iubet cornigeris.</p>

            <ul>
              <li>Iura demens satus vino simulac celanda</li>
              <li>Exhibuere frustra utque</li>
              <li>Iura demens satus vino simulac celanda</li>
              <li>Exhibuere frustra utque</li>
              <li>Panda pars umidus</li>
            </ul>

            <h4 id="lorem-ipsum-dolor-sit-amet-2">Lorem ipsum dolor sit amet</h4>

            <p>Possent quippe. Conata fera ab Hersilie iam auditur haesit. Culpa ignis retia Aonides ictus crescendo micantes, petere, ambustaque vicem in digitos iubet cornigeris.</p>

            <div className="language-plaintext highlighter-rouge"><div className="highlight"></div></div>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          </div>
          <div className="flex pt-10">
            <Link
              href="/"
              className="rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
            >Frontend</Link      >
            <Link
              href="/"
              className="ml-2 block rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20"
            >Design</Link     >
          </div>
          <div className="mt-10 flex justify-between border-t border-lila py-12">
            <Link href="/" className="flex items-center">
              <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
              <span
                className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5"
              >Previous Post</span        >
            </Link>
            <Link href="/" className="flex items-center">
              <span
                className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5"
              >Next Post</span        >
              <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
            </Link>
          </div>
          <div
            className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20"
          >
            <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
              <img
                src="/assets/img/blog-author.jpg"
                className="rounded-full shadow"
                alt="author image"
              />
            </div>
            <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
              <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                Christy Smith
              </h3>
              <p
                className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.

              </p>
              <div className="flex items-center justify-center pt-5 md:justify-start">
                <Link href="/">
                  <i
                    className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"
                  ></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i
                    className="bx bxl-twitter text-2xl text-primary hover:text-yellow"
                  ></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i
                    className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"
                  ></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i
                    className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"
                  ></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i
                    className="bx bxl-instagram text-2xl text-primary hover:text-yellow"
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2022. All right reserved, ATOM.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <Link href="/">
              <i
                className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
              ></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </Link>
            <Link href="/" className="pl-4">
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </Link>
          </div>
        </div>
      </div>

    </div>

    <script src="/assets/js/main.js" async/>




  </>
}

export default Post

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const client = createClient({
    projectId: "1i8zageg",
    dataset: "production",
    apiVersion: "2023-03-18",
    useCdn: false
  });

  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);

  const profilequery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profilequery);
  
  return {

    props: {
      blog,
      profile
    }
  };
}