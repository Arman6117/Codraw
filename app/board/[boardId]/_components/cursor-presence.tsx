"use client";

import { useOthersConnectionIds } from "@liveblocks/react/suspense";
import { memo } from "react";
import { Cursor } from "./cursor";


const Cursors = () => {
    const ids = useOthersConnectionIds();

    return (
        <>
         {ids.map((connectionId) => (
            <Cursor connectionId={connectionId} key={connectionId}/>
         ))}
        </>
    )
}
export const CursorPresence = memo(() => {
  return <Cursors/>
});

CursorPresence.displayName = "CursorPresence";
