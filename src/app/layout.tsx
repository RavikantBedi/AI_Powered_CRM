import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Personal CRM',
  description: 'AI-powered personal CRM system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
