import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Thread Application",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <Topbar />
          <main>
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
