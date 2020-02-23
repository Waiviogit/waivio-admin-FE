import React from "react";
import { redirect } from "../helpers/redirect";
import withRedirectIfNotAuth from '../components/HOC/helpers/withRedirectIfNotAuth';

class Index extends React.Component {
    static async getInitialProps(ctx) {
        redirect('/main', ctx);
        return {};
    }
    
    render() {
        return <div>Index.js</div>;
    }
}

export default withRedirectIfNotAuth(Index);
