// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("../core/declare dojo/_base/lang ../core/lang ../core/screenUtils ./MarkerSymbol ./SimpleLineSymbol".split(" "),function(l,f,g,m,n,h){var k={style:"circle",color:[255,255,255,.25],outline:new h,size:12,angle:0,xoffset:0,yoffset:0},b=l(n,{declaredClass:"esri.symbols.SimpleMarkerSymbol",properties:{color:{json:{write:function(a,c){a&&"x"!==this.style&&"cross"!==this.style&&(c.color=a.toJSON())}}},type:"simple-marker",size:{value:12},style:{type:String,value:"circle",json:{read:function(a){return g.valueOf(this._styles,
a)},write:function(a,c){c.style=this._styles[a]}}},path:{type:String,value:null,set:function(a){this.style="path";this._set("path",a)},json:{write:!0}},outline:{type:h,json:{write:!0}}},_styles:{circle:"esriSMSCircle",square:"esriSMSSquare",cross:"esriSMSCross",x:"esriSMSX",diamond:"esriSMSDiamond",path:"esriSMSPath"},getDefaults:function(){return f.mixin(this.inherited(arguments),k)},normalizeCtorArgs:function(a,c,b,e){if(a&&"string"!==typeof a)return a;var d={};a&&(d.style=a);null!=c&&(d.size=m.toPt(c));
b&&(d.outline=b);e&&(d.color=e);return d},clone:function(){return new b({angle:this.angle,color:g.clone(this.color),outline:this.outline&&this.outline.clone(),size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})},read:function c(b,e){return this.getInherited(c,arguments).call(this,f.mixin({outline:null},b),e)}});f.mixin(b,{STYLE_CIRCLE:"circle",STYLE_SQUARE:"square",STYLE_CROSS:"cross",STYLE_X:"x",STYLE_DIAMOND:"diamond",STYLE_PATH:"path",STYLE_TARGET:"target"});b.defaultProps=
k;return b});