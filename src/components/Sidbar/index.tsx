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
} from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UseSpaceWidget } from "./UseSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";
export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
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
      </div>
      <Profile />
    </aside>
  );
}
