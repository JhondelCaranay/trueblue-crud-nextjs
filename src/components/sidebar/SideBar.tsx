import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { BiSun, BiMoon } from "react-icons/bi";

import Link from "next/link";
import { navLinks } from "@/constant/links/navlinks";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const SideBar = () => {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <div className="flex md:flex-col gap-5 p-5">
      <h1 className="hidden md:inline-flex text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Pages
      </h1>
      <ul className="flex md:flex-col w-full gap-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "w-full h-10 flex items-center rounded-md px-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all",
                isActive && "bg-blue-100 dark:bg-blue-900"
              )}
            >
              <li className="flex items-center gap-2">
                {link.icon} {link.name}
              </li>
            </Link>
          );
        })}
      </ul>

      <hr className="hidden md:inline-flex w-full h-0.5 bg-gray-200 dark:bg-gray-800" />
      <h1 className="hidden md:inline-flex text-2xl font-semibold text-gray-800 dark:text-gray-100">
        themes
      </h1>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <BiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <BiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default SideBar;
