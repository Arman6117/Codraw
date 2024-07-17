import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";
interface ToolButtonProps {
  label: string;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  icon: IconType;
}

const ToolButton = ({
  label,
  onClick,
  isActive,
  isDisabled,
  icon: Icon,
}: ToolButtonProps) => {
  return (
    <div
      className={cn(
        "rounded-full border-2 ",
        isActive ? "border-pink-600" : "border-pink-200"
      )}
    >
      <Hint label={label} side="bottom" sideOffset={10}>
        <Button
          disabled={isDisabled}
          onClick={onClick}
          size={"icon"}
          className="rounded-full"
        variant={isActive ? "boardActive" : "board"}
        >
          <Icon className="h-5 w-5" />
        </Button>
      </Hint>
    </div>
  );
};

export default ToolButton;
