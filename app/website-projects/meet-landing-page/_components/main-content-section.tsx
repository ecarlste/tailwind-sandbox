import NumberHeading from "./number-heading";

import imageWomanInVideocall from "@/public/images/meet-landing-page/desktop/image-woman-in-videocall.jpg";
import imageWomenVideochatting from "@/public/images/meet-landing-page/desktop/image-women-videochatting.jpg";
import imageManTexting from "@/public/images/meet-landing-page/desktop/image-man-texting.jpg";
import imageMenInMeeting from "@/public/images/meet-landing-page/desktop/image-men-in-meeting.jpg";
import CollageImage from "./collage-image";

export default function MainContentSection() {
  return (
    <section className="flex flex-col p-8 pb-16 gap-16 xl:px-20 xl:pt-2 xl:pb-18">
      {/* content */}
      <div className="flex flex-col max-w-[1120px] gap-16 items-center mx-auto md:max-w-[680px] xl:max-w-[1120px]">
        <NumberHeading num={1} />

        {/* image-collage */}
        <div className="flex flex-col items-center gap-4 md:flex-row">
          {/* top-image-row */}
          <div className="flex items-center gap-4">
            <CollageImage
              src={imageWomanInVideocall}
              alt="Woman in videocall"
            />
            <CollageImage
              src={imageWomenVideochatting}
              alt="Women videochatting"
            />
          </div>

          {/* bottom-image-row */}
          <div className="flex items-center gap-4">
            <CollageImage src={imageManTexting} alt="Man texting" />
            <CollageImage src={imageMenInMeeting} alt="Men in meeting" />
          </div>
        </div>

        {/* text-content */}
        <div className="flex flex-col max-w-[504px] items-center gap-8 self-stretch mx-auto">
          {/* title */}
          <div className="flex flex-col items-center gap-4 self-stretch md:max-w-[425px] mx-auto">
            <span className="text-cyan-600 text-preset-3 uppercase">
              Built for modern use
            </span>
            <h2 className="text-preset-2 text-center text-slate-900 self-stretch">
              Smarter meetings, all in one place
            </h2>
          </div>
          <p className="self-stretch text-preset-4 text-center text-slate-600">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </div>
    </section>
  );
}
