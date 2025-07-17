"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";

import { LiveList, LiveObject, LiveMap } from "@liveblocks/client";
import { Layer } from "@/types/canvas"

interface RoomProps {
    children: ReactNode;
    roomId: string;
    fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
    
    return (
        <LiveblocksProvider throttle={16} authEndpoint="/api/liveblocks-auth">
            <RoomProvider id={roomId} initialPresence={{
                cursor: null,
                selection: []
            }} initialStorage={{
                layers: new LiveMap<string, LiveObject<Layer>>(),
                layerIds: new LiveList([]),
            }}>
                <ClientSideSuspense fallback={fallback}>
                    {() => children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
};
