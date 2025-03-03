import React from "react";

function Button(props: { children: React.ReactNode; className?: string }) {
  const classes =
    `px-10 py-2 my-0 font-bold tracking-[.3em] uppercase border-2 border-black font-alata hover:bg-black hover:text-white ${props.className}`.trimEnd();

  return <button className={classes}>{props.children}</button>;
}

export default Button;
