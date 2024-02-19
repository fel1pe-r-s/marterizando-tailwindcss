"use client";
import { ComponentProps, createContext, useContext, useState } from "react";

interface RootProps extends ComponentProps<"div"> {}

type FileInputContext = {
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
};

const FileInputContext = createContext({} as FileInputContext);

export const Root = (props: RootProps) => {
  const [files, setFiles] = useState<File[]>([]);
  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }
  return (
    <FileInputContext.Provider value={{ files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
};

export const useFileInput = () => useContext(FileInputContext);
