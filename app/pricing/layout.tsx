import Breadcrumb from "@/components/Breadcrumb";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-2 bg-[#FCFCFC]">
      <Breadcrumb path="Prices" />
      {children}
    </div>
  );
}
