import { twMerge } from "tailwind-merge";
import { type AnchorHTMLAttributes } from "react";

export const SocialMediaLink = ({
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={twMerge(
      "h-10 w-10 flex justify-center items-center bg-white text-teal-800 rounded-full border-2 border-teal-800 ring-2 ring-teal-800 hover:ring-white cursor-pointer transition",
      className,
    )} {...props}>
      {children}
    </a>
  );
};
