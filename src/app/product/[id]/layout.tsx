import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Product Information",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto">
      {children}
    </div>
  );
}
