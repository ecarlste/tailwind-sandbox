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
    </div>
  );
}

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <script src="https://cdn.tailwindcss.com"></script>
//     <title>Learning Tailwind</title>
//   </head>
//   <body>

// <div class="w-full md:p-6 lg:w-1/3 md:w-1/2">
//         <a href="website-projects/loopstudios/index.html">
//           <img
//             src="images/loopstudios-website-screenshot-desktop.png"
//             alt="Loopstudios Website"
//             class="border-2 shadow"
//           />
//         </a>
//       </div>

//       <div class="w-full md:p-6 lg:w-1/3 md:w-1/2">
//         <a href="website-projects/shortly/index.html">
//           <img
//             src="images/shortly-website-screenshot-desktop.png"
//             alt="Shortly Website"
//             class="border-2 shadow"
//           />
//         </a>
//       </div>

//       <div class="w-full md:p-6 lg:w-1/3 md:w-1/2">
//         <a href="website-projects/testimonial-grid/index.html">
//           <img
//             src="images/testimonial-grid-website-screenshot-desktop.png"
//             alt="Testimonial Grid Website"
//             class="border-2 shadow"
//           />
//         </a>
//       </div>

//   </body>
// </html>
