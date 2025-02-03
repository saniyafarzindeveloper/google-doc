"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Id } from "../../convex/_generated/dataModel";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface RenameDialogProps {
  documentId: Id<"documents">;
  children: React.ReactNode;
}

export default function RenameDialog({
  documentId,
  children,
}: RenameDialogProps) {

   
  return (
  <Dialog>
    <DialogTrigger asChild>
        {children}
    </DialogTrigger>
    <DialogContent>
        <form>
            <DialogHeader>
                <DialogTitle>
                    Rename Document
                </DialogTitle>
                <DialogDescription>
                   Enter a new name
                </DialogDescription>
                
            </DialogHeader>
            <div className="my-4">
                <Input />
            </div>
            <DialogFooter>
            <Button>
                    Cancel
                </Button>
                <Button>
                    Save changes 
                </Button>
            </DialogFooter>
        </form>
    </DialogContent>
  </Dialog>
  );
}
