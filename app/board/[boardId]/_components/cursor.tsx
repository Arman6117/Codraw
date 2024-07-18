"use client";

import { connectionIdToColor } from "@/lib/utils";
import { useOther } from "@liveblocks/react/suspense";
import { memo } from "react";
import { LuMousePointer2 } from "react-icons/lu";

interface CursorProps {
  connectionId: number;
}
export const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);

  const name = info?.name || "Anonymous";
  if (!cursor) return null;
  const { x, y } = cursor;
  return (
    <foreignObject
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
      height={50}
      width={name?.length * 10 + 24}
      className="relative drop-shadow-md"
    >
      <LuMousePointer2
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
        className="h-5 w-5"
      />
      <div className="absolute px-1.5 py-0.5 rounded-md text=xs text-white font-semibold" style={{backgroundColor:connectionIdToColor(connectionId)}}>
        {name}
      </div>
    </foreignObject>
  );
});

Cursor.displayName = "Cursor";
