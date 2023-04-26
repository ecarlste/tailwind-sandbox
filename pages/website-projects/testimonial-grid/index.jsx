import React from 'react';

import { Barlow_Semi_Condensed } from 'next/font/google';

const barlow = Barlow_Semi_Condensed({});

function TestimonialGridSitePage() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${barlow.style.fontFamily};
        }
      `}</style>
      <div> TestimonialGridSitePage</div>
    </>
  );
}

export default TestimonialGridSitePage;
