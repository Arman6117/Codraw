import { cn } from "@/lib/utils";
import { BiHeart } from "react-icons/bi";
import { LuHeart } from "react-icons/lu";

interface FooterProps {
  isFavorite: boolean;
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({
  authorLabel,
  createdAtLabel,
  disabled,
  isFavorite,
  onClick,
  title,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="max-w-[calc(100% - 20px)] text-[13px] truncate">{title}</p>
      <p className="text-[11px] opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground">
        {authorLabel}, {createdAtLabel}
      </p>
      <button disabled={disabled} onClick={onClick} className={cn("opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3 text-muted-foreground hover:text-pink-600", disabled && "cursor-not-allowed")}>
        <LuHeart className={cn("h-4 w-4", isFavorite && "fill-pink-600 text-pink-600")} />
      </button>
    </div>
  );
};

export default Footer;
