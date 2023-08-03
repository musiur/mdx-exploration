import { ModeToggle } from "@/components/ui/mode-toogle";

const Navbar = () => {
  return (
    <nav className="container backdrop-blur py-1 flex items-center justify-between sticky top-0 bg-white/60 dark:bg-black/0">
      <span className="font-bold text-2xl">BusDoor</span>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
