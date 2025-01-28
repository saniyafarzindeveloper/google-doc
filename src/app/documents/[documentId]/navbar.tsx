'use client'
import Image from "next/image";
import Link from "next/link";
import DocumentInput from "./document-input";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FileIcon, FileJsonIcon, FilePenIcon, FilePlusIcon, FileTextIcon, GlobeIcon, Printer, Trash2Icon } from "lucide-react";
import { BsFilePdf } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between ">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
                <MenubarMenu>
                    <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                        File
                    </MenubarTrigger>
                    <MenubarContent className="print:hidden">
                        <MenubarSub>
                            <MenubarSubTrigger>
                            <FileIcon className="size-4 mr-2" />
                            Save
                            </MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>
                                    <FileJsonIcon className="size-4 mr-3"/> JSON
                                </MenubarItem>

                                <MenubarItem>
                                    <GlobeIcon className="size-4 mr-3"/> HTML
                                </MenubarItem>


                                <MenubarItem>
                                    <BsFilePdf className="size-4 mr-3"/> Pdf
                                </MenubarItem>


                                <MenubarItem>
                                    <FileTextIcon className="size-4 mr-3"/> Text
                                </MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarItem>
                            <FilePlusIcon className="size-4 mr-2"/>
                            New Document
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <FilePenIcon className="size-4 mr-2" />
                            Rename
                        </MenubarItem>
                        <MenubarItem>
                            <Trash2Icon className="size-4 mr-2" />
                            Remove
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => window.print()}>
                            <Printer className="size-4 mr-2" />
                            Print <MenubarShortcut>&#x2318;P</MenubarShortcut>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>

            <MenubarMenu>
            <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                    Edit
                </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
            <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                   Insert
                </MenubarTrigger>
            </MenubarMenu>
                
            <MenubarMenu>
            <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                   Format
                </MenubarTrigger>
            </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
}
