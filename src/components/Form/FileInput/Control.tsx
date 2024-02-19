"use client";
import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

interface ControlProps extends ComponentProps<"input"> {}
export const Control = ({ multiple = false, ...props }: ControlProps) => {
  const { onFilesSelected } = useFileInput();

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return;

    const files = Array.from(event.target.files);

    onFilesSelected(files, multiple);
  }
  return (
    <input
      onChange={handleFilesSelected}
      {...props}
      type="file"
      name="photo"
      multiple={multiple}
      className="sr-only"
    />
  );
};
