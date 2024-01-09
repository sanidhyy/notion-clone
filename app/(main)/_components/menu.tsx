"use client";

import type { Id } from "@/convex/_generated/dataModel";

type MenuProps = {
  documentId: Id<"documents">;
};

export const Menu = ({ documentId }: MenuProps) => {
  return <div className="">Menu</div>;
};
