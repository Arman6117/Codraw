"use client";

import {
  RoomProvider,
  ClientSideSuspense,
  LiveblocksProvider,
} from "@liveblocks/react/suspense";
import React, { ReactNode } from "react";

export const Room = ({
  children,
  roomId,
  fallback,
}: {
  children: ReactNode;
  roomId: string;
  fallback: React.ReactNode;
}) => {
  return (
    <LiveblocksProvider publicApiKey="pk_dev_NMjcwQuHgvqiMymB2an5SycLtA_vkoZ02-bowZDWs9oddGW5gUV5GfkZOGR729rK">
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={fallback}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};
