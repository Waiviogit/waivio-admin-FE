import React from "react";
import { redirect } from "../helpers/redirect";

class Index extends React.Component {
    static async getInitialProps(ctx) {
        redirect('/main', ctx);
        return {};
    }
    
    
    render() {
        return <div>Index.js</div>;
    }
}

export default Index;
