import React from 'react';
import { redirectIfAuthenticated } from '../../../helpers/redirect';

const withRedirectIfAuth = (Page) => {
    return class extends React.Component {
        static async getInitialProps(ctx) {
            let pageProps = {};
            if (redirectIfAuthenticated(ctx)) return {};
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

export default withRedirectIfAuth;
