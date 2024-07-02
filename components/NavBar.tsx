"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavBar";
import { cn } from "@/utils/cn";
import { navItems } from "@/data";

export function NavBar() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                {navItems.map((navItem: any, idx: number) => (
                    <HoveredLink href={navItem.link} key={`link=${idx}`}>{navItem.name}</HoveredLink>
                ))}
            </Menu>
        </div>
    );
}
