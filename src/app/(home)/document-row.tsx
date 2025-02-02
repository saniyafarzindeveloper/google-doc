import { TableCell, TableRow } from "@/components/ui/table"
import { Doc } from "../../../convex/_generated/dataModel"
import {SiGoogledocs} from "react-icons/si"; 
import {  Building2Icon, CircleUserIcon } from "lucide-react";
import {format} from "date-fns";

import DocumentMenu from "./document-menu";

interface DocumentRowProps{
    document: Doc<"documents">;
}

export default function DocumentRow({document} : DocumentRowProps) {
    const onNewTabClick = (id: string) => {
        window.open(`/documents/${id}`, "_blank")
    }
  return (
    <TableRow className="cursor-pointer">
        <TableCell className="w-[50px]">
            <SiGoogledocs className="size-5 fill-blue-600" />
        </TableCell>
        <TableCell className="font-md md:w-[45%]">
            {document.title}
        </TableCell>
        <TableCell className="text-muted-foreground hidden md:flex items-center gap-2">
                {document.organizationId ? <Building2Icon className="size-5" /> : <CircleUserIcon  className="size-5" />}
                {document.organizationId ? "Organizational" : "Personal"}
        </TableCell>
        <TableCell className="text-muted-foreground hidden md:table-cell ">
                {format(new Date(document._creationTime), "MMM dd, yyyy")}
        </TableCell>
        <TableCell className="flex justify-end">
            
            <DocumentMenu
            documentId = {document._id}
            title = {document.title}
            onNewTab = {onNewTabClick}
            />
        </TableCell>
    </TableRow>
  )
}
