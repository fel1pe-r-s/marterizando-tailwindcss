import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: [
    "rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none",
    "focus-visible:ring-2 focus-visible:ring-offset focus-visible:ring-violet-500",
    "active:opacity-80",
  ],
  variants: {
    variant: {
      primary:
        "dark:bg-violet-500 dark:hover:bg-violet-600 bg-violet-600 text-white hover:bg-violet-700",
      outline:
        "dark:border-zinc-700 dark:text-zinc-400 border border-zinc-300 text-zinc-700 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800",
      ghost:
        "dark:hover:bg-white/5 dark:text-zinc-400  rounded-md px-2 shadow-none hover:bg-zinc-50  text-zinc-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {};
export const Button = ({ className, variant, ...props }: ButtonProps) => {
  return <button {...props} className={button({ variant, className })} />;
};
