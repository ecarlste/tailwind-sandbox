import React from 'react';
import { Raleway, Open_Sans } from 'next/font/google';
import Head from 'next/head';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function FyloSitePage() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${raleway.style.fontFamily}, ${openSans.style.fontFamily};
        }

        .bg-logo-dark-mode {
          background-image: url('/images/fylo/logo-dark-mode.svg');
        }

        .bg-logo-light-mode {
          background-image: url('/images/fylo/logo-light-mode.svg');
        }

        .bg-curvy-dark-mode {
          background-image: url('/images/fylo/bg-curvy-dark-mode.svg');
        }

        .bg-curvy-light-mode {
          background-image: url('/images/fylo/bg-curvy-light-mode.svg');
        }
      `}</style>
      <Head>
        <title>Fylo Website</title>
      </Head>
      <h1 className="text-3xl dark:bg-black dark:text-white">Fylo</h1>
    </>
  );
}

export default FyloSitePage;
