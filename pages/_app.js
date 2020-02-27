import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import routerEvents from "next-router-events";
import NProgress from "nprogress";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
// import { PersistGate } from 'redux-persist/integration/react';
import configureStore from "../redux/store";
import MainLayout from "../components/MainLayuot";

NProgress.configure({
    easing: "ease",
    speed: 300,
    minimum: 0.4,
});

routerEvents.on("routeChangeStart", NProgress.start);
routerEvents.on("routeChangeComplete", NProgress.done);
routerEvents.on("routeChangeError", NProgress.done);

export class WaivioAdmin extends App {
    static async getInitialProps(props) {
        const { Component, ctx } = props;
        // console.log('getInitialProps',  ctx);
        // if (ctx.isServer) {
        //     if (!notValidatedPaths.includes(ctx.pathname)) {
        //         await dispatchRequest(ctx, validateToken)();
        //     }
        //     if (getSignInState(ctx.store.getState())) {
        //         await initialize(ctx);
        //     }
        // }
        let pageProps = {};
        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);
        return { pageProps, router: { pathname: ctx.pathname, query: ctx.query } };
    }

    render() {
        const { Component, pageProps, store, router } = this.props;
        // const locale = getLocaleState(store.getState());
        return (
            <Provider store={store}>
                {/*<PersistGate loading={<div>Loading...</div>} persistor={store.__PERSISTOR}>*/}
                    <MainLayout pathname={router.pathname}>
                        <Component {...pageProps} />
                    </MainLayout>
                {/*</PersistGate>*/}
            </Provider>
        );
    }
}

export default withRedux(configureStore)(withReduxSaga(WaivioAdmin));
