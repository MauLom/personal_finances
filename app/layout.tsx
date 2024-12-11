// app/layout.tsx
import './globals.css';

export const metadata = {
  title: "FINEbank.IO",
  description: "Manage your finances effectively.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}
