import { navigationData } from "@/data/navigation";
import { siteData } from "@/data/site";
import { Menubar, MenubarLabel, MenubarMenu } from "../ui/menubar";
import logo from "@/assets/espumados-boyaca-web-logo.svg";

export function Navbar() {

  return (
    <Menubar className="flex h-15 items-center justify-between">
      <MenubarMenu>
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center overflow-hidden whitespace-nowrap">
            <img
              src={logo}
              alt="AMT"
              className="h-15 w-15 min-w-10 rounded-full object-cover"
            />
            <MenubarLabel>{siteData.name}</MenubarLabel>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navigationData.navigation.map((item) => (
                <a href={item.href} className="text-sm">
                  {item.label}
                </a>
              ))}
            </ul>
          </nav>
        </div>
      </MenubarMenu>
    </Menubar>
  );
}
