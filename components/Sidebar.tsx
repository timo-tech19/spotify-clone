"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface SidebarProps {
	children: React.ReactNode;
	songs: Song[];
}

const Sidebar: React.FC<SidebarProps> = ({ children, songs }) => {
	const pathname = usePathname();
	const player = usePlayer();

	const routes = useMemo(
		() => [
			{
				icon: HiHome,
				label: "Home",
				active: pathname !== "/search",
				href: "/",
			},
			{
				icon: BiSearch,
				label: "Search",
				active: pathname === "/search",
				href: "/search",
			},
		],
		[pathname]
	);

	return (
		<div
			className={twMerge(
				"flex h-full",
				player.activeId && "h-[calc(100%-80px)]"
			)}
		>
			<aside className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
				<Box>
					<div className='flex flex-col gap-y-4 px-5 py-4'>
						{routes.map((route) => (
							<SidebarItem key={route.label} {...route} />
						))}
					</div>
				</Box>
				<Box className='overflow-y-auto h-full'>
					<Library songs={songs} />
				</Box>
			</aside>
			<main className='overflow-y-auto h-full flex-1 py-2'>{children}</main>
		</div>
	);
};

export default Sidebar;
