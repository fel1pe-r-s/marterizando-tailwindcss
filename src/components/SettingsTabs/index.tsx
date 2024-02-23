"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export function SettingsTabs() {
  return (
    <Tabs.Root>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List
            className="mt-6 flex w-full items-center
        gap-4 border-b  border-zinc-200"
          >
            <TabItem title="My details" value="tab1" />
            <TabItem title="Profile" value="tab2" />
            <TabItem title="Password" value="tab3" />
            <TabItem title="Team" value="tab4" />
            <TabItem title="Plan" value="tab5" />
            <TabItem title="Billing" value="tab6" />
            <TabItem title="Email" value="tab7" />
            <TabItem title="Notifications" value="tab8" />
            <TabItem title="Integrations" value="tab9" />
            <TabItem title="API" value="tab10" />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="bg-zinc-100s flex h-0.5 translate-y-0.5 touch-none select-none flex-col"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  );
}
