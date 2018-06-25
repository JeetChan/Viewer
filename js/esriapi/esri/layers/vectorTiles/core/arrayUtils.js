// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/arrayUtils",[],function(){function h(a,b){return-1===a.indexOf(b)}function k(a,b,c){return!a.some(b.bind(null,c))}var l={findIndex:function(a,b,c){for(var d=a.length,f,e=0;e<d;e++)if(f=a[e],b.call(c,f,e,a))return e;return-1},find:function(a,b,c){for(var d=a.length,f,e=0;e<d;e++)if(f=a[e],b.call(c,f,e,a))return f},equals:function(a,b,c){if(!a&&!b)return!0;if(!a||!b||a.length!=b.length)return!1;if(c)for(var d=0;d<a.length;d++){if(!c(a[d],b[d]))return!1}else for(c=
0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0},difference:function(a,b,c){var d;c?(d=b.filter(k.bind(null,a,c)),a=a.filter(k.bind(null,b,c))):(d=b.filter(h.bind(null,a)),a=a.filter(h.bind(null,b)));return{added:d,removed:a}},intersect:function(a,b,c){return a&&b?c?a.filter(function(a){return-1<l.findIndex(b,function(b){return c(a,b)})}):a.filter(function(a){return-1<b.indexOf(a)}):[]},range:function(a,b){null==b&&(b=a,a=0);for(var c=Array(b-a),d=a;d<b;d++)c[d-a]=d;return c},constant:function(a,
b){for(var c=Array(a),d=0;d<a;d++)c[d]=b;return c},binaryIndexOf:function(a,b,c){for(var d=a.length,f=0,e=d-1;f<e;){var g=f+Math.floor((e-f)/2);b>a[g]?f=g+1:e=g}e=a[f];return c?b>=a[d-1]?-1:e===b?f:f-1:e===b?f:-1}};return l});