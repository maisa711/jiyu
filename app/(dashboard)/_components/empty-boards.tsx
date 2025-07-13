"use client"
import Image from "next/image";


import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";


export const EmptyBoards = () => {

  const {organization} = useOrganization();
  const {mutate, pending} = useApiMutation(api.board.create);

  const onClick = () => {

    if (!organization) return;

    mutate({
      orgId: organization?.id,
      title: "Untitled",
    
    }).then((id) => {
      toast.success("Board Created")
    })
    .catch(() => toast.error("Failed to create the board!"))
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="Empty" width={140} height={140} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground text-sm  mt-2">
        Start by creating a board for your Organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
};
