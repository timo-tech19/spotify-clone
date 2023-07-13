import "./globals.css";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const revalidate = 0;

export const metadata = {
	title: "Spotify Clone App",
	description: "Listen to unlimited music all in one place",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const userSongs = await getSongsByUserId();

	return (
		<html lang='en'>
			<body className={font.className}>
				<ToasterProvider />
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider />
						<Sidebar songs={userSongs}>{children}</Sidebar>
						<Player />
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
