export default function BulletedItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex pl-[8px] gap-[16px]">
      <div className="flex items-center w-[16px]">
        <div className="w-[4px] h-[4px] rounded-full bg-rose-800" />
      </div>
      <div className="font-outfit text-stone-600">{children}</div>
    </div>
  );
}
