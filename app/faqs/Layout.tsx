export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-col gap-2 bg-[#FCFCFC]">{children}</div>;
}
