import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Product list",
  description: "Product list",
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
