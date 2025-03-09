export default function NumberHeading({ num }: { num: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1px] h-20 bg-slate-300" />
      <div
        className={`
          flex flex-col h-14 w-14 justify-center items-center bg-white border-1 border-slate-300 border-solid
          rounded-full text-preset-5
        `}
      >
        {String(num).padStart(2, "0")}
      </div>
    </div>
  );
}
