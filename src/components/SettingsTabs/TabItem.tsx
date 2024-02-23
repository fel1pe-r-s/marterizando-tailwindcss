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
      text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4 ">
        {title}
      </span>
      <div className=" absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 group-data-[state=active]:visible  group-data-[state=inactive]:hidden group-data-[state=active]:animate-wiggle" />
    </Tabs.Trigger>
  );
}
