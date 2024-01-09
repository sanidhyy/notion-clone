"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

import { Spinner } from "../spinner";

export const ToasterProvider = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      position="bottom-center"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      loadingIcon={<Spinner />}
      richColors
    />
  );
};
