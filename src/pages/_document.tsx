import { getCssText } from '@/styles';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=DM+Serif+Display&family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
            </Head>
            <body>
                < Main />
                <NextScript />
            </body>
        </Html>
    );
}