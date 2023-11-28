import { useStore } from "@nanostores/react";
import { mobileMenuOpen } from "@/stores/mobileMenu";
import { useState } from "react";

export default function MobileMenu(props: any){
    let $mobileMenuOpen = useStore(mobileMenuOpen);

    return $mobileMenuOpen ? (
        <div className="bg-background border-[1px] shadow rounded p-2 mb-6 flex flex-col gap-1">
            {props.children}
        </div>
    ) : null;
}