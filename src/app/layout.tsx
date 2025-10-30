import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FaultyTerminal from "@/components/FaultyTerminal";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mark Lloyd Portfolio",
  description: "Mark Lloyd Pahilga web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden overflow-y-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <div className="fixed inset-0 z-[-1]">
            <FaultyTerminal
              scale={1.5}
              gridMul={[2, 1]}
              digitSize={1.2}
              timeScale={0.3}
              pause={false}
              scanlineIntensity={0.3}
              glitchAmount={1}
              flickerAmount={0.8}
              noiseAmp={1}
              chromaticAberration={0.5}
              dither={0.5}
              curvature={0.2}
              tint="#00b4d8"
              mouseReact={true}
              mouseStrength={0.5}
              pageLoadAnimation={true}
              brightness={0.8}
            />
          </div>
          {children}
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
