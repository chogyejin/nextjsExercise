import Document, { Html, Head, Main, NextScript } from 'next/document';

//_document.js -> 서버에서만 렌더링
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
