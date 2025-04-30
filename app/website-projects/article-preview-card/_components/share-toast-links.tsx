import IconFacebook from "./icon-facebook";
import IconPinterest from "./icon-pinterest";
import IconTwitter from "./icon-twitter";

type ShareToastLinksProps = {
  className?: string;
};

function ShareToastLinks({ className }: ShareToastLinksProps) {
  return (
    <div className={className}>
      <span className="text-preset-3 text-grey-400">Share</span>
      <div className="flex gap-4">
        <IconFacebook />
        <IconTwitter />
        <IconPinterest />
      </div>
    </div>
  );
}

export default ShareToastLinks;
