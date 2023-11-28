import { X, Menu } from "lucide-react";

import { mobileMenuOpen } from "@/stores/mobileMenu";
import { useStore } from "@nanostores/react";
import { Button } from "./ui/button";

export default function ToggleMobileMenu() {
    const $menuOpen = useStore(mobileMenuOpen);

    return(
        <Button onClick={() => {mobileMenuOpen.set(!$menuOpen)}} size={'icon'} variant={'ghost'} className="flex md:hidden z-30">
            {$menuOpen ? (
                <X />
            ) : (
                <Menu/>
            )}
        </Button>
    )
}