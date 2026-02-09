import "./globals.css";


export const metadata = {
  title: "Dating Web App",
  description: "Find your perfect match",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
