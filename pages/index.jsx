import GalleryItem from '../components/home-page/GalleryItem';

import LargeHeader from '../components/clipboard/headers/LargeHeader';
import SectionContainer from '../components/clipboard/section/SectionContainer';
import SectionContent from '../components/clipboard/section/SectionContent';

export default function HomePage() {
  return (
    <>
      <SectionContainer className="pt-16">
        <LargeHeader>Tailwind + NextJS Website Layouts</LargeHeader>
        <SectionContent>
          This is an exploration of the website layouts I've built based
          frontendmentor.io. I originally built the first four projects using
          TailwindCSS, HTML and some JavaScript. I then proceeded to convert
          them over to using NextJS. All projects listed after the initial four
          were started as NextJS.
        </SectionContent>
      </SectionContainer>
      <div className="container flex flex-wrap mx-auto justify-center p-6 space-y-6 md:px-0 md:space-y-0 max-w-6xl">
        <GalleryItem
          linkUrl="website-projects/clipboard"
          image="images/clipboard-website-screenshot-desktop.png"
          imageAlt="Clipboard Website"
        />

        <GalleryItem
          linkUrl="website-projects/loopstudios"
          image="images/loopstudios-website-screenshot-desktop.png"
          imageAlt="Loopstudios Website"
        />

        <GalleryItem
          linkUrl="website-projects/shortly"
          image="images/shortly-website-screenshot-desktop.png"
          imageAlt="Shortly Website"
        />

        <GalleryItem
          linkUrl="website-projects/testimonial-grid"
          image="images/testimonial-grid-website-screenshot-desktop.png"
          imageAlt="Testimonial Grid Website"
        />
      </div>
    </>
  );
}

//       <div class="w-full md:p-6 lg:w-1/3 md:w-1/2">
//         <a href="website-projects/testimonial-grid/index.html">
//           <img
//             src="images/testimonial-grid-website-screenshot-desktop.png"
//             alt="Testimonial Grid Website"
//             class="border-2 shadow"
//           />
//         </a>
//       </div>
