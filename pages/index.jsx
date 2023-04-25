import Link from 'next/link';
import GalleryItem from '../components/home-page/GalleryItem';

export default function HomePage() {
  return (
    <div className="container flex flex-wrap mx-auto justify-center p-6 space-y-6 md:px-0 md:space-y-0">
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
    </div>
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
