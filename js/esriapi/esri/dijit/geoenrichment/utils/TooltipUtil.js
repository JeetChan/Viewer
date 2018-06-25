// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/TooltipUtil","dojo/dom-class dojo/on dojo/mouse dijit/Tooltip ./DomUtil ./MouseUtil dojo/domReady!".split(" "),function(k,e,n,f,p,q){var d={hideTooltipForNode:function(a){a&&(clearTimeout(a.__delayTooltip),clearInterval(a.__setTooltipToNodeInLayoutHandle),clearInterval(a.__setTooltipToNodeMouseOverHandle),f.hide(a))},setTooltipToNode:function(a,b,c){a&&(c=c||{},c.stayOnHover=c.stayOnHover||!1,c.classes=c.classes||null,a.__setTooltipToNodeMouseEnterHandle&&a.__setTooltipToNodeMouseEnterHandle.remove(),
a.__setTooltipToNodeClickHandle&&a.__setTooltipToNodeClickHandle.remove(),clearInterval(a.__setTooltipToNodeInLayoutHandle),clearInterval(a.__setTooltipToNodeMouseOverHandle),f.hide(a),delete a.title,b&&(a.__setTooltipToNodeMouseEnterHandle=e(a,"mouseenter",function(){function l(){clearTimeout(a.__delayTooltip);f.show(m,a);if(c.classes){var b="object"==typeof c.classes?c.classes.join(" "):c.classes,d=dijit.byId("dijit__MasterTooltip_0");c.stayOnHover&&(e(d.domNode,"mouseenter",function(){clearTimeout(h)}),
e(d.domNode,"mouseleave",function(){g()}));d.isShowingNow&&b&&k.add(d.domNode,b)}}k.add(a,"esriMapsAnalystSimpleTextTooltip");a.__setTooltipToNodeClickHandle&&a.__setTooltipToNodeClickHandle.remove();clearInterval(a.__setTooltipToNodeInLayoutHandle);clearInterval(a.__setTooltipToNodeMouseOverHandle);var m="function"==typeof b?b():b;if(m){var h,g=d.hideTooltipForNode.bind(d,a);a.__delayTooltip=setTimeout(l,300);a.__setTooltipToNodeClickHandle=e(a,"click",function(a){a.stopPropagation();c.hideOnClick?
g():l()});a.__setTooltipToNodeInLayoutHandle=setInterval(function(){p.isNodeInLayout(a)||(h=setTimeout(g))},500);a.__setTooltipToNodeMouseOverHandle=setInterval(function(){q.isMouseOver(a)||(h=setTimeout(g))},500);e.once(a,n.leave,function(){h=setTimeout(g)})}})))}},b=null;d.autoTooltip=function(a){e(a,".TrimWithEllipses:mouseover",function(){this!==b&&this.offsetWidth<this.scrollWidth&&(b=this,f.show(b.textContent,b,["above","below"]),e.once(b,"mouseout, mousedown, touchstart",function(){f.hide(b);
b=null}))})};return d});