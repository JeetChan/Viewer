//>>built
define("xstyle/ext/dgrid","dojo/_base/declare dojo/promise/all dojo/Deferred dojo/when ./widget ../core/expression".split(" "),function(p,k,q,l,e,m){var f={selectionMode:"Selection",columns:"Grid",keyboard:"Keyboard"},n={selectionMode:function(b,a){b.selectionMode=a},keyboard:function(b,a){b.cellNavigation="cell"==a},collection:function(b,a,c){a=m.evaluate(c,a);return l(a.valueOf(),function(a){b.collection=a})},columns:function(b,a){var c=b.columns={};a[0].eachProperty(function(a,b){var d=e.parse(b[0]);
d.className=b[0].selector.slice(1);c[a]=d});return c}};return{put:function(b,a,c){c=c.slice(6);a.constructors||(a.constructors=["dgrid/OnDemandList"],a.handlers=[]);var g=b[0],h=[];g.eachProperty(function(b,c){var d=n[b];d&&(d=d(g.values,c,a))&&h.push(d);f[b]&&a.constructors.push("dgrid/"+f[b])});k(h).then(function(){e.parse(b[0],function(b){a.elements(b)},a.constructors)})}}});