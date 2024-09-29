import React, { ComponentProps } from "react";

type TypographyProps = ComponentProps<"p"> & {
  as?: React.ElementType;
};

export const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  children,
  ...props
}) => {
  return <Component {...props}>{children}</Component>;
};
