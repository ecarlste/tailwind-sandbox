export default function IconShare({
  circleClassName = "fill-gray-200 group-hover:fill-gray-500",
  arrowClassName = "fill-gray-500 group-hover:fill-white",
}) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group transition-colors duration-200"
    >
      <circle cx="16" cy="16" r="16" className={circleClassName} />
      <path
        d="M24 15.495L17.7663 9.01389V12.8806H16.4409C12.3314 12.8806 9 16.0393 9 19.9358V21.9849L9.58868 21.3733C11.5901 19.2941 14.4221 18.1094 17.3912 18.1094H17.7663V21.9761L24 15.495Z"
        className={arrowClassName}
      />
    </svg>
  );
}
