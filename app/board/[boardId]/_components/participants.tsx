"use client";
import { useOthers, useSelf } from "@liveblocks/react/suspense";

import React from "react";
import UserAvatar from "./user-avatar";
import { connectionIdToColor } from "@/lib/utils";

const Participants = () => {
  const MAX_SHOWN_USER = 2;
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USER;
  return (
    <div className="absolute top-2 right-2 md:right-52 shadow-md shadow-slate-400 h-10 px-1.5 rounded-full border-2 border-pink-600  bg-white flex justify-center items-center">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USER).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdToColor(connectionId)}
              key={connectionId}
              name={info?.name}
              fallback={info?.name?.[0] || "Anonymous"}
              src={info?.imageUrl}
            />
          );
        })}
        {currentUser && (
          <UserAvatar
            borderColor={connectionIdToColor(currentUser.connectionId)}
            name={`${currentUser.info.name} (YOU)`}
            src={currentUser.info.imageUrl}
            fallback={currentUser.info.name?.[0] || "A"}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_USER} more`}
            fallback={`+${users.length - MAX_SHOWN_USER}`}
          />
        )}
      </div>
    </div>
  );
};

export default Participants;

export const ParticipantsSKeleton = () => {
  return (
    <div className="absolute top-2 right-44 shadow-md shadow-slate-400 h-10 px-4 rounded-full   bg-white flex justify-center items-center" />
  );
};
