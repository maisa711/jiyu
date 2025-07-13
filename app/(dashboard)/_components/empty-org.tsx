import Image from "next/image";

import { CreateOrganization } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.svg" alt="Empty" width={200} height={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Jiyu</h2>
      <p className="text-muted-foreground text-sm  mt-2">
        Create an Organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
      <DialogTrigger asChild>
          <Button size="lg">
            Create Organization
          </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none xs:!max-w-[432px]">
        <DialogTitle className="hidden"/>
        <CreateOrganization routing="hash"/>
      </DialogContent>
    </Dialog>
      </div>
    </div>
  );
};
