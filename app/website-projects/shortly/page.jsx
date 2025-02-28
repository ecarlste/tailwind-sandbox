import React from 'react';
import { Poppins } from 'next/font/google';
import styles from './styles.module.css';

import NavBar from '../../../components/shortly/nav/NavBar';
import Footer from '../../../components/shortly/footer/Footer';
import CallToActionSection from '../../../components/shortly/CallToActionSection';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: "--poppins-font",
});

/**
 * Renders the main layout for the Shortly link shortening service page.
 *
 * This component constructs the primary UI of the Shortly site, including the navigation bar,
 * hero section with headline and call-to-action, link shortening form with sample links and error messaging,
 * advanced statistics preview, feature highlight boxes, and concluding call-to-action and footer sections.
 * Modular CSS styling is applied using a combination of the Poppins font variable and CSS modules.
 */
function ShortlySitePage() {
  return (
    <main className={`${poppins.variable} ${styles.shortly}`}>
      <NavBar />

      {/* Hero Section */}
      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* Content Container */}
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              More than just shorter links
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <a
                href="#"
                className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="mb-24 mx-auto md:w-[32rem] lg:mb-0 lg:w-1/2">
            <img src="/images/shortly/illustration-working.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Shorten Section */}
      <section id="shorten" className="relative bg-gray-100">
        {/* Shorten Container */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Form */}
          <form
            id="link-form"
            className="relative flex flex-col w-full p-10 -mt-10 space-y-4 bg-dark-violet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          >
            <input
              type="text"
              className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-hidden"
              placeholder="Shorten a link here"
              id="link-input"
            />

            <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyan-light focus:outline-hidden md:py-2">
              Shorten It!
            </button>

            {/* Error Message */}
            <div
              id="err-msg"
              className="absolute left-7 bottom-3 text-red text-sm italic"
            ></div>
          </form>

          {/* Link 1 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-very-dark-violet md:text-left">
              https://frontendmentor.io
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-between-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/k4IKyk</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-hidden">
                Copy
              </button>
            </div>
          </div>

          {/* Link 2 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-very-dark-violet md:text-left">
              https://twitter.com/frontendmentor
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-between-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/gxOXp9</div>
              <button className="p-2 px-8 text-white bg-dark-violet rounded-lg hover:opacity-70 focus:outline-hidden">
                Copy
              </button>
            </div>
          </div>

          {/* Link 3 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-very-dark-violet md:text-left">
              https://linkedin.com/frontend-mentor
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-between-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/gob3X9</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-hidden">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>
      {/* Feature Box Section */}
      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* Horizontal Line */}
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
          {/* Vertical Line  */}
          <div className="absolute left-1/2 w-2 h-full -ml-1 bg-cyan md:hidden"></div>

          {/* Box 1 */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image Positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container for Background & Center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-very-dark-violet">
                <img src="/images/shortly/icon-brand-recognition.svg" alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Brand Recognition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          {/* Box 2 */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
            {/* Image Positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container for Background & Center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-very-dark-violet">
                <img src="/images/shortly/icon-detailed-records.svg" alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Detailed Records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* Box 3 */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3">
            {/* Image Positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container for Background & Center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-very-dark-violet">
                <img src="/images/shortly/icon-fully-customizable.svg" alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Fully Customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      <CallToActionSection />
      <Footer />
    </main>
  );
}

export default ShortlySitePage;
