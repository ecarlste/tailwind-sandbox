import GalleryItem from "../components/home-page/GalleryItem";

import LargeHeader from "../components/clipboard/headers/LargeHeader";
import SectionContainer from "../components/clipboard/section/SectionContainer";
import SectionContent from "../components/clipboard/section/SectionContent";

import clipboardSiteScreenshotDesktop from "@/public/images/clipboard-website-screenshot-desktop.png";
import loopstudiosSiteScreenshotDesktop from "@/public/images/loopstudios-website-screenshot-desktop.png";
import shortlySiteScreenshotDesktop from "@/public/images/shortly-website-screenshot-desktop.png";
import testimonialGridSiteScreenshotDesktop from "@/public/images/testimonial-grid-website-screenshot-desktop.png";
import qrCodeSiteScreenshotDesktop from "@/public/images/qr-code-website-screenshot-desktop.png";
import blogPreviewCardSiteScreenshotDesktop from "@/public/images/blog-preview-card-website-screenshot-desktop.png";
import socialLinksProfileSiteScreenshotDesktop from "@/public/images/social-links-profile-website-screenshot-desktop.png";

export default function HomePage() {
  return (
    <>
      <SectionContainer className="pt-16">
        <LargeHeader>Tailwind + NextJS Website Layouts</LargeHeader>
        <SectionContent>
          This is an exploration of the website layouts I&apos;ve built based
          frontendmentor.io. I originally built the first four projects using
          TailwindCSS, HTML and some JavaScript. I then proceeded to convert
          them over to using NextJS. All projects listed after the initial four
          were started as NextJS.
        </SectionContent>
      </SectionContainer>
      <div className="container flex flex-wrap mx-auto justify-center p-6 space-y-6 md:px-0 md:space-y-0 max-w-6xl">
        <GalleryItem
          linkUrl="website-projects/clipboard"
          image={clipboardSiteScreenshotDesktop}
          imageAlt="Clipboard Website"
        />

        <GalleryItem
          linkUrl="website-projects/loopstudios"
          image={loopstudiosSiteScreenshotDesktop}
          imageAlt="Loopstudios Website"
        />

        <GalleryItem
          linkUrl="website-projects/shortly"
          image={shortlySiteScreenshotDesktop}
          imageAlt="Shortly Website"
        />

        <GalleryItem
          linkUrl="website-projects/testimonial-grid"
          image={testimonialGridSiteScreenshotDesktop}
          imageAlt="Testimonial Grid Website"
        />

        <GalleryItem
          linkUrl="website-projects/qr-code"
          image={qrCodeSiteScreenshotDesktop}
          imageAlt="QR Code Website"
        />

        <GalleryItem
          linkUrl="website-projects/blog-preview-card"
          image={blogPreviewCardSiteScreenshotDesktop}
          imageAlt="Blog Preview Card Website"
        />

        <GalleryItem
          linkUrl="website-projects/social-links-profile"
          image={socialLinksProfileSiteScreenshotDesktop}
          imageAlt="Social Links Profile Website"
        />
      </div>
    </>
  );
}
