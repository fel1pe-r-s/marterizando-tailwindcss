"use client";
import * as Tabs from "@radix-ui/react-tabs";
export interface TabItemProps {
  value: string;
  title: string;
}
export function TabItem({ title, value }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className=" group relative  h-14 px-1 pb-4 text-sm font-medium
      text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>
      <div className="absolute -bottom-px left-0 right-0  h-0.5  bg-violet-700 group-data-[state=active]:visible group-data-[state=inactive]:hidden group-data-[state=active]:animate-[wiggle_1s_ease-in-out]" />
    </Tabs.Trigger>
  );
}
