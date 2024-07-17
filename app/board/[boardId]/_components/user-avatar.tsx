interface UserAvatarProps {
  name?: string;
  fallback?: string;
  src?: string;
  borderColor?: string;
}

import Hint from "@/components/hint";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const UserAvatar = ({ borderColor, fallback, name, src }: UserAvatarProps) => {
  return (
    <Hint label={name || "Anonymous"} side="bottom" sideOffset={18}>
      <Avatar className="h-8 w-8 border-2" style={{ borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback className="text-xs font-semibold">{fallback}</AvatarFallback>
      </Avatar>
    </Hint>
  );
};

export default UserAvatar;
