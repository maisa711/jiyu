"use client";

import Image from "next/image";
import { useOrganizationList, useOrganization } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () => {
        if (!setActive) return;
        setActive({ organization: id });
    };

    return (
        <Button
            onClick={onClick}
            variant="ghost"
            size="icon"
            className={cn(
                " rounded-md p-0 transition-colors",
                isActive ? "bg-muted ring-2 ring-ring" : "hover:bg-muted/50"
            )}
            asChild
        >
            <div className="relative w-8 h-8 rounded-md overflow-hidden">
                <Hint label={name} side="right" align="start">
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        sizes="32px"
                        className={cn(
                            "object-cover transition-opacity duration-200",
                            isActive ? "opacity-100" : "opacity-60"
                        )}
                    />
                </Hint>
            </div>
        </Button>
    );
};
