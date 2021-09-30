                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2021/09/10/baidu-paddle-machine-learning-chatbot-competition/","revision":"9957ad4a0d6452c85815d06587dd7a1b"},{"url":"/2021/08/31/ospp-mid-term-qq-puppet/","revision":"7362b4e3e3b1d5d6fca3de4656f8399c"},{"url":"/2021/08/30/ospp-mid-term-wechaty-puppet-lark/","revision":"57ad65f0f0c787699ead18c707f99539"},{"url":"/2021/08/30/ospp-mid-term-matrix-wechaty/","revision":"1ffb8140e3f5d31d3b99e00da0cf9764"},{"url":"/2021/08/30/ospp-mid-term-5g-chatbot-puppet/","revision":"36ea79a478c80e22b53201dd91411ca6"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
