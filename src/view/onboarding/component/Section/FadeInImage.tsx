"use client"

import type { HTMLAttributes, PropsWithChildren } from "react";
import { useFadeIn } from "../../hook/useFadeIn";

interface ImageProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {}

const FadeInImage = ({ children, ...props }: ImageProps) => {
  const imageRef = useFadeIn();

  return <div ref={imageRef} {...props}>{children}</div>;
};

export default FadeInImage;
