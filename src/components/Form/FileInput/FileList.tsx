"use client";

import { useFileInput } from "./Root";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FileItem } from "./FileItem";

export const FileList = () => {
  const { files } = useFileInput();

  const [parent] = useAutoAnimate();
  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => (
        <FileItem
          key={file.name}
          state="error"
          name={file.name}
          size={file.size}
        />
      ))}
    </div>
  );
};
