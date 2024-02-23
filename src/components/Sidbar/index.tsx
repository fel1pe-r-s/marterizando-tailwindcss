"use client";
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Layers,
  LifeBuoy,
  Users,
  Home,
  Search,
  Menu,
} from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UseSpaceWidget } from "./UseSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../Button";
export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white  p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button type="button" variant="ghost" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>
        <nav className="space-y-0.5">
          <NavItem icon={Home} title="Home" />
          <NavItem icon={BarChart} title="Dashboard" />
          <NavItem icon={Layers} title="Projects" />
          <NavItem icon={CheckSquare} title="Tasks" />
          <NavItem icon={Flag} title="Reporting" />
          <NavItem icon={Users} title="Users" />
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem icon={LifeBuoy} title="Support" />
            <NavItem icon={Cog} title="Setting" />
          </nav>
          <UseSpaceWidget />
          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
