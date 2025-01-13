import { twMerge } from "tailwind-merge";
import { type AnchorHTMLAttributes } from "react";

export const SocialMediaLink = ({
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={twMerge(
      "h-10 w-10 flex justify-center items-center bg-white text-teal-800 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-800 hover:ring-white cursor-pointer",
      className,
    )} {...props}>
      {children}
    </a>
  );
};
