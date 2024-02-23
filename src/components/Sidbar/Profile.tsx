import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="http://github.com/fel1pe-r-s.png"
        alt=""
        className="mt-1 h-10 w-10 rounded-full"
      />
      <div className="mt-1 flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700  dark:text-zinc-100">
          Felipe
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          felipe@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
}
