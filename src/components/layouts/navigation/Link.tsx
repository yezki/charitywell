import { cx } from "class-variance-authority";

type LinkProps = {
  href: string;
  label: string;
  currentHash: string;
};

export const Link = ({
  href,
  label,
  currentHash,
}: LinkProps) => {
  return (
    <a href={href} className={cx(
      "px-8 lg:px-6 py-2 text-sm lg:text-base text-center text-nowrap hover:text-black transition-colors",
      (!currentHash && href === "#home") || (href === currentHash)
      ? "text-black font-bold" : "text-neutral-600",
    )}>
      {label}
    </a>
  );
};
