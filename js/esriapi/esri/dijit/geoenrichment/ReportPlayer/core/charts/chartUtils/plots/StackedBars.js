// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/chartUtils/plots/StackedBars",["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/commonStacked","./ClusteredBars"],function(f,d,e,g){return f(g,{getSeriesStats:function(){var a=e.collectStats(this.series,d.hitch(this,"isNullValue")),b;a.hmin-=.5;a.hmax+=.5;b=a.hmin;a.hmin=a.vmin;a.vmin=b;b=a.hmax;a.hmax=a.vmax;a.vmax=b;return a},rearrangeValues:function(a,b,h){return e.rearrangeValues.call(this,a,b,h)},_drawBarBackground:function(a,
b,h,c,e,f,d,g){this.series.indexOf(d)===this.series.length-1&&this.inherited(arguments)},_getYShift:function(a,b){return 0},_getClusterSize:function(){return 1},_renderInside:function(a,b,d,c,e){x=c.x+c.width-this.opt.labelOffset-a.box.w;y=c.y+a.box.h/a.numRows+(c.height-a.box.h)/2-2;this._labelBoxes.push({x:x,y:y,w:a.box.w,h:a.box.h,group:b,text:a.text})},_getFixLabelsParams:function(){return{allowXShift:!0,xGap:5,yTolerance:.5}}})});