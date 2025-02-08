"use client";

import { usePaginatedQuery } from "convex/react";
import Navbar from "./navbar";
import TemplateGallery from "./template-gallery";
import { api } from "../../../convex/_generated/api";
import DocumentsTable from "./documents-table";
import { useSearchParam } from "@/hooks/use-search-params";


export default function Home() {
  const [search] = useSearchParam();
  //fetching docs from convex
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
  ); //setting inital doc displaying count to 5

  //if no documents
  // if (documents === undefined) {
  //   return <p>Loading.....</p>;
  // }
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-5">
        <Navbar />
      </div>
      <div className="mt-20">
        <TemplateGallery />
        {/* {documents?.map((document) => (
          <span key={document._id}>{document.title}</span>
        ))} */}
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
}
