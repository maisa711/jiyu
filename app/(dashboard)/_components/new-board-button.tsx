"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
    disabled?: boolean;
}

export const NewBoardButton = ({ disabled }: NewBoardButtonProps) => {

    const {organization} = useOrganization();
    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {

        if (!organization) return;

        mutate({
            orgId: organization?.id,
            title: "Untitled",

        }).then(() => {//id
            toast.success("Board Created")
        })
            .catch(() => toast.error("Failed to create the board!"))
    }


    return (
        <button
            disabled={pending || disabled}
            onClick={onClick}
            className={
                cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
                    pending || disabled && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
                )
            }
        >
            <div />
            <Plus className="h-12 w-12 text-white stroke-1" />
            <p className="text-sm text-white font-light">New board</p>
        </button>
    )
};
