// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/annotations/shape/ShapeContainer","dojo/_base/declare dojo/_base/lang dojo/sniff dojo/dom-class dojo/dom-construct dojo/dom-style ../../grid/ValueField esri/dijit/geoenrichment/utils/ShapeUtil ../../infographics/infographicUtils/InfographicThemeUtil ../annotationUtils/AnnotationsUtil dojo/i18n!../../../../../../nls/jsapi".split(" "),function(u,h,v,n,f,c,w,q,x,d,z){var y={borderColor:"#AAAAAA",fillColor:"#AAAAAA"};return u(w,{viewModel:null,theme:null,
shapeJson:null,relativeParent:null,alignParams:null,applyThemeStyle:!0,getPreviewValueFunction:null,parentWidget:null,_g:!1,_viewBox:!1,_shapeStyle:null,_shapeThemeStyle:null,_needSaveShapeThemeStyle:!0,_preserveAspectRatio:void 0,_showAsBar:!1,_showBarBackground:!1,_barBackgroundStyle:null,_isPlaceholder:!1,_angle:0,postCreate:function(){this.content=f.create("div",{"class":"floatingElement templateShape"});this.fieldStyle=this.fieldStyle||{};this.fieldStyle.width=this.shapeJson.style.width;this.fieldStyle.height=
this.shapeJson.style.height;this._g=this.shapeJson.g;this._viewBox=this.shapeJson.viewBox;this._shapeStyle=this.shapeJson.style||{};this._preserveAspectRatio=this.shapeJson.preserveAspectRatio;this._isPlaceholder=this.shapeJson.isPlaceholder;this._angle=this.shapeJson.style.angle||0;this._processThemeStyle();this._showAsBar=this.shapeJson.showAsBar;this._showBarBackground=this.shapeJson.showBarBackground;this._barBackgroundStyle=this.shapeJson.barBackgroundStyle||{};this.inherited(arguments);n.add(this.domNode,
"floatingElementContainer");c.set(this.domNode,"position","absolute");c.set(this.domNode,"top",(this.shapeJson.style.top||0)+"px");c.set(this.domNode,"left",(this.shapeJson.style.left||0)+"px");this._updateShapeNode();this._applyRotation();this.alignParams&&d.alignAnnotationContainer(this,this.alignParams);this.onInitialized()},_processThemeStyle:function(){if(this.applyThemeStyle&&(this._shapeThemeStyle=this.shapeJson.themeStyle,!this._shapeThemeStyle)){this._needSaveShapeThemeStyle=!1;var a=this.viewModel.getStaticInfographicDefaultStyles(this.theme);
x.applyThemeSettingsToShapeJson(this.shapeJson,a);this._shapeThemeStyle=this.shapeJson.themeStyle;delete this.shapeJson.themeStyle}},_applyRotation:function(){this._angle=0<this._angle||0>this._angle?this._angle:0;var a=v("webkit")?"webkitTransform":"transform";this.content.style[a]="rotate("+this._angle+"deg)"},resize:function(a,b){a&&(this.setWidth(a.w-3),this.setHeight(a.h-3));this._updateShapeNode();d.alignAnnotationContainer(this,b)},scaleProportionallyWithinParent:function(a){var b=this.getShapeBox();
this.resize({w:b.w*a.xScale,h:b.h*a.yScale});c.set(this.domNode,{left:b.l*a.xScale+"px",top:b.t*a.yScale+"px"})},getShapeBox:function(){return{l:c.get(this.domNode,"left"),t:c.get(this.domNode,"top"),w:this.getWidth(),h:this.getHeight()}},_updateShapeNode:function(){function a(a){function d(a){var d=q.createSVGNode(b._viewBox,{width:g+"px",height:l+"px",overflow:"visible"});b._preserveAspectRatio&&d.setAttribute("preserveAspectRatio",b._preserveAspectRatio);b._g.forEach(function(a){(a=q.createNodeByAttributes(a,
p))&&d.appendChild(a)});var e=f.create("div",{"class":"shapeContainer_svgContainerElement"},m);c.set(e,"left",a*g+"px");f.place(d,e)}var m=f.create("div",{"class":"shapeContainer_svgContainer esriGEAbsoluteStretched"},b.content),p;a?(n.add(m,"shapeContainer_svgContainerBackground"),p=h.mixin({},b._barBackgroundStyle,y)):p=h.mixin({},b._shapeThemeStyle,b._shapeStyle);var e=1;b._showAsBar&&(e=a?1:b.getPreviewValueFunction?b.getPreviewValueFunction().normalizedValue:.5+.5*Math.random(),c.set(m,"width",
e*k+"px"),n.add(m,"shapeContainer_svgContainerShowAsBar"));a=b._showAsBar?Math.floor(k/g):1;a=Math.round(e*a);for(e=0;e<a;e++)d(e)}var b=this,k=this.getWidth(),d=this.getHeight(),r=this._viewBox.width/this._viewBox.height,t=Math.min(k,d*r),g,l;"none"===this._preserveAspectRatio?(g=k,l=d):(g=t,l=t/r);c.set(this.content,"width",(this._showAsBar?k:g)+"px");c.set(this.content,"height",l+"px");f.empty(this.content);this._isPlaceholder?f.create("div",{"class":"shapeContainer_svgPlaceholder"},this.content):
(this._showAsBar&&this._showBarBackground&&a(!0),a())},onInitialized:function(){},_domNodePositionToShapeStyle:function(){this.domNode&&(this._shapeStyle.top=c.get(this.domNode,"top"),this._shapeStyle.left=c.get(this.domNode,"left"))},toJson:function(){this._domNodePositionToShapeStyle();var a={id:"shape",g:this._g,viewBox:this._viewBox,preserveAspectRatio:this._preserveAspectRatio,isPlaceholder:this._isPlaceholder,style:h.mixin({},this._shapeStyle,{angle:this._angle,width:this.getWidth(),height:this.getHeight()}),
themeStyle:this._needSaveShapeThemeStyle?this._shapeThemeStyle:void 0,showAsBar:this._showAsBar,showBarBackground:this._showBarBackground,barBackgroundStyle:h.mixin({},this._barBackgroundStyle)};return h.clone(a)}})});