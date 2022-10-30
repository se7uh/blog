const resource = [
    /* --- CSS --- */
    '/cyvass.github.io/assets/css/style.css',

    /* --- PWA --- */
    '/cyvass.github.io/app.js',
    '/cyvass.github.io/sw.js',

    /* --- HTML --- */
    '/cyvass.github.io/index.html',
    '/cyvass.github.io/404.html',

    
        '/cyvass.github.io/categories/',
    
        '/cyvass.github.io/tags/',
    
        '/cyvass.github.io/archives/',
    
        '/cyvass.github.io/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/cyvass.github.io/assets/img/favicons/android-chrome-192x192.png',
        '/cyvass.github.io/assets/img/favicons/android-chrome-512x512.png',
        '/cyvass.github.io/assets/img/favicons/apple-touch-icon.png',
        '/cyvass.github.io/assets/img/favicons/favicon-16x16.png',
        '/cyvass.github.io/assets/img/favicons/favicon-32x32.png',
        '/cyvass.github.io/assets/img/favicons/favicon.ico',
        '/cyvass.github.io/assets/img/favicons/mstile-150x150.png',
        '/cyvass.github.io/assets/js/dist/categories.min.js',
        '/cyvass.github.io/assets/js/dist/commons.min.js',
        '/cyvass.github.io/assets/js/dist/home.min.js',
        '/cyvass.github.io/assets/js/dist/misc.min.js',
        '/cyvass.github.io/assets/js/dist/page.min.js',
        '/cyvass.github.io/assets/js/dist/post.min.js',
        '/cyvass.github.io/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

