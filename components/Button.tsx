import Link from "next/link";

type Button = {
  href: string;
  children: React.ReactNode
};
const Button = ({ href, children }: Button) => {
  return <Link href={href} className="px-5 flex justify-center items-center text-white rounded-full text-lg font-semibold bg-gray-900 shadow-inner shadow-white/25">{children}</Link>;
};

export default Button;
