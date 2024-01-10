import type { PropsWithChildren } from "react";

const PublicLayout = ({ children }: PropsWithChildren) => {
  return <div className="h-full dark:bg-[#1F1F1F]">{children}</div>;
};

export default PublicLayout;
