import ShareToastLinks from "./share-toast-links";
import ShareToastTriangle from "./share-toast-triangle";

type ShareToastDesktopTabletProps = {
  className?: string;
};

function ShareToastDesktopTablet({ className }: ShareToastDesktopTabletProps) {
  return (
    <div className={`flex-col items-center ${className}`}>
      <div className="bg-grey-900 rounded-[10px] h-14 w-62 flex items-center justify-center">
        <ShareToastLinks className="flex gap-6" />
      </div>
      <ShareToastTriangle />
    </div>
  );
}

export default ShareToastDesktopTablet;
