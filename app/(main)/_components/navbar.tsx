"use client";

import { useQuery } from "convex/react";
import { MenuIcon } from "lucide-react";
import { useParams } from "next/navigation";

import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

import { Banner } from "./banner";
import { Menu } from "./menu";
import { Publish } from "./publish";
import { Title } from "./title";

type NavbarProps = {
  isCollapsed: boolean;
  onResetWidth: () => void;
};

export const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  const params = useParams();

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined)
    return (
      <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center justify-between">
        <Title.Skeleton />

        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </nav>
    );

  if (document === null) return null;

  return (
    <>
      <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <button onClick={onResetWidth}>
            <MenuIcon className="h-6 w-6 text-muted-foreground" />
          </button>
        )}

        <div className="flex items-center justify-between w-full">
          <Title initialData={document} />

          <div className="flex items-center gap-x-2">
            {!document.isArchived && <Publish initialData={document} />}
            <Menu documentId={document._id} isArchived={document.isArchived} />
          </div>
        </div>
      </nav>

      {document.isArchived && <Banner documentId={document._id} />}
    </>
  );
};
