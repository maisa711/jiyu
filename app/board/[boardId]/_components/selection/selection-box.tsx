"use client";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { LayerType, Side, XYWH } from "@/types/canvas";
import { useSelf, useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";

interface SelectionBoxProps {
    onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}

const HANDLE_WIDTH = 8;

const HANDLE_CONFIG = [
    {
        side: Side.Top + Side.Left,
        cursor: "nwse-resize",
        getPos: (b: XYWH) => [b.x - HANDLE_WIDTH / 2, b.y - HANDLE_WIDTH / 2],
    },
    {
        side: Side.Top,
        cursor: "ns-resize",
        getPos: (b: XYWH) => [b.x + b.width / 2 - HANDLE_WIDTH / 2, b.y - HANDLE_WIDTH / 2],
    },
    {
        side: Side.Top + Side.Right,
        cursor: "nesw-resize",
        getPos: (b: XYWH) => [b.x + b.width - HANDLE_WIDTH / 2, b.y - HANDLE_WIDTH / 2],
    },
    {
        side: Side.Right,
        cursor: "ew-resize",
        getPos: (b: XYWH) => [b.x + b.width - HANDLE_WIDTH / 2, b.y + b.height / 2 - HANDLE_WIDTH / 2],
    },
    {
        side: Side.Bottom + Side.Right,
        cursor: "nwse-resize",
        getPos: (b: XYWH) => [b.x + b.width - HANDLE_WIDTH / 2, b.y + b.height - HANDLE_WIDTH / 2],
    },
    {
        side: Side.Bottom,
        cursor: "ns-resize",
        getPos: (b: XYWH) => [b.x + b.width / 2 - HANDLE_WIDTH / 2, b.y + b.height - HANDLE_WIDTH / 2],
    },
    {
        side: Side.Bottom + Side.Left,
        cursor: "nesw-resize",
        getPos: (b: XYWH) => [b.x - HANDLE_WIDTH / 2, b.y + b.height - HANDLE_WIDTH / 2],
    },
    {
        side: Side.Left,
        cursor: "ew-resize",
        getPos: (b: XYWH) => [b.x - HANDLE_WIDTH / 2, b.y + b.height / 2 - HANDLE_WIDTH / 2],
    },
];

export const SelectionBox = memo(
    ({ onResizeHandlePointerDown }: SelectionBoxProps) => {
        const soleLayerId = useSelf((me) =>
            me.presence.selection.length === 1 ? me.presence.selection[0] : null
        );

        const isShowingHandles = useStorage(
            (root) =>
                soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path
        );

        const bounds = useSelectionBounds();

        if (!bounds) {
            return null;
        }

        return (
            <>
                <rect
                    className="fill-transparent stroke-blue-500 stroke-1 pointer-events-none"
                    style={{
                        transform: `translate(${bounds.x}px, ${bounds.y}px)`,
                    }}
                    x={0}
                    y={0}
                    width={bounds.width}
                    height={bounds.height}
                />
                {isShowingHandles &&
                    HANDLE_CONFIG.map(({ side, cursor, getPos }) => {
                        const [left, top] = getPos(bounds);
                        return (
                            <rect
                                key={side}
                                className="fill-white stroke-1 stroke-blue-500"
                                x={0}
                                y={0}
                                cursor={cursor}
                                width={HANDLE_WIDTH}
                                height={HANDLE_WIDTH}
                                style={{
                                    transform: `translate(${left}px, ${top}px)`,
                                }}
                                onPointerDown={(e) => {
                                    e.stopPropagation();
                                    onResizeHandlePointerDown(side, bounds);
                                }}
                            />
                        );
                    })}
            </>
        );
    }
);

SelectionBox.displayName = "SelectionBox";
