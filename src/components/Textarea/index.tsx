import { ComponentProps } from "react";

export interface TextareaProps extends ComponentProps<"textarea"> {}
export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="min-h-28 w-full resize-y rounded-lg border border-x-zinc-300 p-1 py-2 shadow-sm"
      id="bio"
      defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
    />
  );
};
