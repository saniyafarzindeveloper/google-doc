"use client";

import { useStorage } from "@liveblocks/react";
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import Underline from '@tiptap/extension-underline'
import { Color } from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import { useEditorStore } from "@/store/use-editor-store";

//custom extension
import { FontSizeExtension } from "@/extensions/font-sizes";

//custom line height extension
import { LineHeightExtension } from "@/extensions/line-height";
import Ruler from "./ruler";
import { Threads } from "./threads";


export default function Editor() {
  //liveblocks section
  const leftMargin = useStorage((root) => root.leftMargin);
  const rightMargin = useStorage((root) => root.rightMargin);
  const liveblocks = useLiveblocksExtension();
  const {setEditor} = useEditorStore(); 
  const editor = useEditor({
    immediatelyRender: false,
    onCreate({editor}) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null); //when editor unmounts, clear all changes
    },
    onUpdate({editor}) {
      setEditor(editor);
    },
    onSelectionUpdate({editor}) {
      setEditor(editor);
    },
    onTransaction({editor}) {
      setEditor(editor);
    },
    onFocus({editor}) {
      setEditor(editor);
    },
    onBlur({editor}) {
      setEditor(editor);
    },
    onContentError({editor}) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style:` padding-left:${leftMargin ?? 56}px; padding-right:${rightMargin ?? 56}px`,
        class:
          "focus:outline-none print:border:0 bg-white border-[#C7C7C7] border flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false
        
      }),
      FontSizeExtension,
      LineHeightExtension.configure({
        types: ["heading", "paragraph"],
        defaultLineHeight :"normal",
      }),
      Image,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Underline,
      FontFamily,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https"
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: 'Hello World!',
  });
  return (
    <div className="size-full overflow-x-auto bg-[#FBFDF9] px-4 print:p-0 print:bg-white print:overflow-visible">
    <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
        <Threads editor={editor} />
      </div>
    </div>
  );
}


