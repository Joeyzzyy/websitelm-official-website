import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.websitelm.com'),
  alternates: {
    canonical: {
      url: 'https://www.websitelm.com'
    },
  }
};

export default function RootLayout({ children, keywords }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
      </head>
      <body suppressHydrationWarning={true} style={{ overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
