type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button
      className={`
        flex flex-col px-10 py-4 items-start gap-2 text-white text-desktop-preset-5 rounded-[29px]
        ${variant === "primary" ? "bg-cyan-600" : "bg-purple-600"}
        ${variant === "primary" ? "hover:bg-slate-800" : "hover:bg-slate-500"}
      `}
    >
      {children}
    </button>
  );
}
