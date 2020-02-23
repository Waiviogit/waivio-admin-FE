import React from 'react';
import { redirectInNotAuthenticated } from '../../../helpers/redirect';

const withRedirectIfNotAuth = (Page) => {
    return class extends React.Component {
        static async getInitialProps(ctx) {
            let pageProps = {};
            if (redirectInNotAuthenticated(ctx)) return {};
            if (Page.getInitialProps) {
                pageProps = await Page.getInitialProps(ctx);
            }
            return pageProps;
        }

        render() {
            return <Page {...this.props}/>;
        }
    };
};

export default withRedirectIfNotAuth;
