import Router from 'next/router';

export const redirect = (target, ctx = {}) => {
    if (!process.browser) {
        ctx.res.writeHead(302, { Location: target });
        ctx.res.end();
    } else {
        Router.push(target);
    }
};