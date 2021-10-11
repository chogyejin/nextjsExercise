import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import type { AppProps } from 'next/app';
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';

//_app.tsx -> global css, layout 잡음(모든 페이지에 적용되는 것들)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
export default MyApp;
