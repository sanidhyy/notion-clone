"use client";

import { SignUpButton } from "@clerk/react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { links } from "@/config";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, &amp; Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>

      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <div className="flex items-center justify-center">
        {isLoading && <Spinner size="lg" />}

        {isAuthenticated && !isLoading && (
          <Button asChild>
            <Link href="/documents">
              Enter Jotion
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        )}

        {!isAuthenticated && !isLoading && (
          <SignUpButton mode="modal">
            <Button>
              Get Jotion free <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignUpButton>
        )}

        <Button variant="link" asChild>
          <Link
            href={links.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/github-black.svg"
              alt="GitHub"
              width={16}
              height={16}
              className="h-4 w-4 mr-2 dark:hidden"
              draggable={false}
            />
            <Image
              src="/github-white.svg"
              alt="GitHub"
              width={16}
              height={16}
              className="h-4 w-4 mr-2 hidden dark:block"
              draggable={false}
            />
            Source Code
          </Link>
        </Button>
      </div>
    </div>
  );
};
