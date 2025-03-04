type SocialLinksButtonProps = {
  children: string;
};

export default function SocialLinkButton({ children }: SocialLinksButtonProps) {
  return (
    <div
      className={
        "flex p-[12px] bg-grey-700 text-white text-sm font-bold w-full rounded-lg justify-center " +
        "hover:bg-green hover:text-grey-900 hover:cursor-pointer"
      }
    >
      <div>{children}</div>
    </div>
  );
}
