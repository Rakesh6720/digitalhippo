import Image from "next/image";
import React from "react";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function VerifyEmailPage({ searchParams }: PageProps) {
  const token = searchParams.token;
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-">
      <div className="mx-auto flex flex-col justify-center w-full space-y-6 sm:w-p[350px]">
        {token && typeof token === "string" ? (
          <div className="grd gap-6"></div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relatve mb-4 h-60 w-60 text-muted-foreground">
              <Image
                src="hppo-sent-email.png"
                fill
                alt="hippo email sent image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
