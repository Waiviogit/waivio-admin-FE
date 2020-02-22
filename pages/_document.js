import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap" 
                        rel="stylesheet"
                    />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
                    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
                    <><title>Waivio</title></>
                </Head>
                <body className="disablecopypaste">
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
