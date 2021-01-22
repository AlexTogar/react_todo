importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);
//set debug to true if want to get additional info in console
workbox.setConfig({ debug: false });
workbox.core.skipWaiting();
workbox.core.clientsClaim();
//we inject file names here with sw-build.js
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "e9c5ebb0c798368198e1bf6af730f498"
  },
  {
    "url": "405-bundle.js",
    "revision": "00d10b7a71f2ed63bf11dcc4ca0547f7"
  },
  {
    "url": "930-bundle.js",
    "revision": "c272e0bfc7ee399a57783d8016c22caa"
  },
  {
    "url": "main-bundle.js",
    "revision": "29612212f0304030cb4d37d6b4ac4001"
  },
  {
    "url": "0cd50bb133d483a8181db7384593e009.svg",
    "revision": "847a705c5084b57088c2abbf3da13de6"
  },
  {
    "url": "1ea279c98d92249d47421a67ab9b2811.svg",
    "revision": "35b8aeeb7700ae7113ab5a6e8ccfed9b"
  },
  {
    "url": "408f492f866fb2ed18fc14ea5837e0c6.svg",
    "revision": "7877cee5e830caf78c093622815424e2"
  },
  {
    "url": "4df817758985f21153e2f8193880b850.svg",
    "revision": "6b6008c8504b84fcd4ec2de5314cb867"
  },
  {
    "url": "6e96cd4fcfb2637eb734a91b575433b9.svg",
    "revision": "04cdfcf478742e30891b7e3630908570"
  },
  {
    "url": "763917efe70a151c2ac5753935e32002.svg",
    "revision": "f9ba52a5af7398ca041e9e477056ede6"
  },
  {
    "url": "9245920397190e532ea29fc72d8a293a.svg",
    "revision": "16035c33252632115a6a89408679be66"
  },
  {
    "url": "94f23189f93a272badc6b2d3e75fc979.svg",
    "revision": "557315b7ecf1063f09bc2591d0dc8a05"
  },
  {
    "url": "d07449cb527353d4a033d608451ceb2e.svg",
    "revision": "cbc0e5415a8fe7c9c035f80da131c13f"
  },
  {
    "url": "da3fc0896e48b46ebd3c746f070195d1.svg",
    "revision": "75c97af363117d4dc885e51a64e139cb"
  },
  {
    "url": "dfa0e9aa27f531cef592b23bf471da6a.svg",
    "revision": "f2ecbf6604cc06da5e858a399ee96219"
  },
  {
    "url": "e100c436b9b6a752e3dbccabfb3735a4.svg",
    "revision": "58635ab9b7b6a6ed76e594519e5aba40"
  },
  {
    "url": "e4b27e82316509fc74f1ca9c17e4b6a0.svg",
    "revision": "f535981801b9689684f64f5c1fd40777"
  }
]);
