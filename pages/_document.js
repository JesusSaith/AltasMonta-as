import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;700&display=swap"
          />
        </Head>
        <body className="font-roboto bg-gray-50 text-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
