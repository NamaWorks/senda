import "./layout.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Senda - Adventure – experiences",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
    {/* <html lang="en"> */}
      {/* <body className={`test-name`}> */}
        {children}
      {/* </body> */}
    {/* </html> */}
  </>
  );
};
