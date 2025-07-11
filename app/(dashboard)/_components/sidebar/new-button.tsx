"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
  return (
    <Dialog>
      <Hint label="Create Organization" side="right" align="start">
      <DialogTrigger asChild>
        
          <Button variant="secondary" size="icon" className="size-8">
            <Plus />
          </Button>
      </DialogTrigger>
      </Hint>
      <DialogContent className="p-0 bg-transparent border-none xs:!max-w-[432px]">
        <DialogTitle className="hidden"/>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
