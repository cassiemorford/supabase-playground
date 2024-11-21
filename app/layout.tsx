import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center h-screen">
            <div className="flex-1 w-full flex flex-col p-10 items-center">
              <div className="relative w-10/12 max-w-5x h-5/6">
                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-600 via-emerald-600 to-sky-600 opacity-75 blur"></div>
                <div className="relative flex-col items-center justify-center rounded-lg bg-slate-900 h-full overflow-y-hidden">
                  <div className="flex flex-col gap-6 justify-between w-full">
                    <nav className="flex gap-20 p-5 justify-between border-b-4 text-slate-200 border-emerald-950 z-10 bg-slate-900">
                      <span className="text-2xl">Cassie Morford</span>
                      <ul className="flex gap-10 align-middle ">
                        <Link href="/">Home</Link>
                        <Link href="/todos">Todos</Link>
                        <Link href="/tailwind">Tailwind</Link>
                      </ul>
                    </nav>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
