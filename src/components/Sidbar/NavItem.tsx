import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

interface NavItemProps {
  title: string;
  icon: ElementType;
}

export function NavItem({ icon: Icon, title }: NavItemProps) {
  return (
    <a
      href="#"
      className="group flex w-full gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-6 w-6 text-zinc-500 " />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 text-zinc-300 group-hover:text-violet-300" />
    </a>
  );
}
