import * as React from "react";
import style from "./style";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(" ", {
  variants: {
    variant: {
      Image_Like: style.image,
      Comment_Like: style.comment,
    },
    size: {
      Image_Like: style.size.default,
      Comment_Like: style.size.submit,
    },
  },
  defaultVariants: {
    variant: "Image_Like",
    size: "Comment_Like",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    let variantStyles = variant
      ? style[variant as keyof typeof style] || {}
      : {};

    if (isLoading) {
      variantStyles = {
        ...variantStyles,
        // apply loading styles
      };
    }

    return (
      <button
        style={variantStyles}
        {...props}
        disabled={isLoading}
        aria-busy={isLoading ? "true" : "false"}
        aria-disabled={isLoading ? "true" : "false"}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
