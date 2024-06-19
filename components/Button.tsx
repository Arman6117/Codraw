import clsx from "clsx";
import Link from "next/link";

type Button = {
  href: string;
  children: React.ReactNode;
  className?: string;
};
const Button = ({ href, children, className }: Button) => {
  return (
    <Link
      href={href}
      className={clsx(
        "px-5 flex justify-center items-center text-white rounded-full text-lg font-semibold bg-gray-900 shadow-inner shadow-white/25",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Button;
