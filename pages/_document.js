import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/img/ims.ico" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/ims.ico"
          />
          {/* Schema markup for local business */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "IMS Services",
                "description": "Leading student consultancy service in Bangladesh",
                "url": "https://imsservicesbd.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "House No. 38, Road No. 2, Aram Properties, Bosila",
                  "addressLocality": "Mohammadpur",
                  "addressRegion": "Dhaka",
                  "postalCode": "1209",
                  "addressCountry": "BD"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "23.7461",
                  "longitude": "90.3742"
                },
                "telephone": "+8801781913380",
                "email": "info@imsservicesbd.com"
              })
            }}
          />
        </Head>
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
