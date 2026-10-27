"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SafeImageProps = ImageProps & {
  fallbackClassName?: string;
};

export function SafeImage({ src, alt, className, fallbackClassName, ...props }: SafeImageProps) {
  const [errored, setErrored] = useState(false);
  const srcStr = typeof src === "string" ? src : "";

  if (errored || !srcStr) {
    return (
      <div
        className={cn("bg-tint", fallbackClassName, className)}
        aria-label={alt}
        role="img"
      />
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
