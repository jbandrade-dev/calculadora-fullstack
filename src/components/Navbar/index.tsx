import { SocialNetworks } from "../SocialNetworks";
import { Expanded } from "./Expanded";
import { Menu } from "./Menu";

export function Navbar() {
  return (
    <nav className="flex gap-1 wrapper justify-between items-center h-20 mob:px-5 pc:px-6">
      <div className="pc:hidden">
        <Expanded />
      </div>
      <Menu />
      <SocialNetworks tailwind="flex gap-2 text-purple-500" size={32} />
    </nav>
  );
}
