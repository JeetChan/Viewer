// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/Properties","require exports dojo/has ../Logger ./extensions ./PropertyOrigin ./Store".split(" "),function(k,l,m,q,r,e,t){function h(b,a){return a.metadatas[b]?!0:(m("dojo-debug-messages")&&n.warn("cannot access unknown property '"+b+"' on instance of "+a.host.declaredClass+"."),!1)}function p(b,a,c,d){return b.nonNullable&&null==c?(m("dojo-debug-messages")&&n.warn("cannot set non-nullable property '"+a+"' to null on "+d.host.declaredClass+"."),
!1):!0}Object.defineProperty(l,"__esModule",{value:!0});var n=q.getLogger("esri.core.accessorSupport.Properties");k=function(){function b(a){this.host=a;this._origin=e.OriginId.USER;this.ctorArgs=this.cursors=null;this.destroyed=!1;this.dirties={};this.lifecycle=0;this.overridden=null;this.store=new t.default;a=this.host.constructor.__accessorMetadata__;this.metadatas=a.properties;this.autoDestroy=a.autoDestroy}b.prototype.initialize=function(){this.lifecycle=1;r.instanceCreated(this.host,this.metadatas)};
b.prototype.constructed=function(){this.lifecycle=2};b.prototype.destroy=function(){this.destroyed=!0;var a=this.cursors;if(this.cursors)for(var c=0,d=Object.getOwnPropertyNames(a);c<d.length;c++){var b=d[c],f=a[b];if(f){for(;0<f.length;)f.pop().propertyDestroyed(this,b);a[b]=null}}if(this.autoDestroy)for(b in this.metadatas)(a=this.internalGet(b))&&a&&"function"===typeof a.destroy&&(a.destroy(),this.metadatas[b].nonNullable||this.internalSet(b,null))};Object.defineProperty(b.prototype,"initialized",
{get:function(){return 0!==this.lifecycle},enumerable:!0,configurable:!0});b.prototype.clearOverride=function(a){this.isOverridden(a)&&(this.overridden[a]=!1,this.propertyInvalidated(a))};b.prototype.get=function(a){h(a,this);var c=this.metadatas[a];if(this.store.has(a)&&!this.dirties[a])return this.store.get(a);var b=c.get;return b?(c=b.call(this.host),this.store.set(a,c,e.OriginId.COMPUTED),this.propertyCommitted(a),c):c.value};b.prototype.originOf=function(a){var c=this.store.originOf(a);return void 0===
c&&(a=this.metadatas[a])&&a.hasOwnProperty("value")?"defaults":e.idToName(c)};b.prototype.has=function(a){return this.metadatas[a]?this.store.has(a):!1};b.prototype.internalGet=function(a){if(h(a,this)){var c=this.store;return c.has(a)?c.get(a):this.metadatas[a].value}};b.prototype.internalSet=function(a,c){h(a,this)&&(this.propertyInvalidated(a),this.initialized?this.store.set(a,c,this._origin):this.store.set(a,c,e.OriginId.DEFAULTS),this.propertyCommitted(a))};b.prototype.isOverridden=function(a){return null!=
this.overridden&&!0===this.overridden[a]};b.prototype.keys=function(){return this.store.keys()};b.prototype.override=function(a,c){if(h(a,this)){this.overridden||(this.overridden={});var b=this.metadatas[a];p(b,a,c,this)&&((b=b.cast)&&(c=b.call(this.host,c)),this.overridden[a]=!0,this.internalSet(a,c))}};b.prototype.set=function(a,b){if(h(a,this)){var c=this.metadatas[a];if(p(c,a,b,this)){var g=c.set;(c=c.cast)&&(b=c.call(this.host,b));g?g.call(this.host,b):this.internalSet(a,b)}}};b.prototype.setDefaultOrigin=
function(a){this._origin=e.nameToId(a)};b.prototype.propertyInvalidated=function(a){var b=this.dirties,d=this.isOverridden(a),g=this.cursors&&this.cursors[a],f=this.metadatas[a].computes;if(g)for(var e=0;e<g.length;e++)g[e].propertyInvalidated(this,a);d||(b[a]=!0);if(f)for(a=0;a<f.length;a++)this.propertyInvalidated(f[a])};b.prototype.propertyCommitted=function(a){var b=this.cursors&&this.cursors[a];this.dirties[a]=!1;if(b)for(var d=0;d<b.length;d++)b[d].propertyCommitted(this,a)};b.prototype.addCursor=
function(a,b){this.cursors||(this.cursors={});var c=this.cursors[a];c||(this.cursors[a]=c=[]);c.push(b)};b.prototype.removeCursor=function(a,b){var c=this.cursors[a];this.cursors[a]&&(c.splice(c.indexOf(b),1),0===c.length&&(this.cursors[a]=null))};return b}();l.default=k});