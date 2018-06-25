// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/layers/support/WebGLRenderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/dom-style dojox/gfx/matrix ../../kernel ../../lang ../../geometry/scaleUtils ../vectorTiles/core/promiseUtils ../vectorTiles/views/2d/engine/StageGL ../vectorTiles/views/2d/engine/webgl/WGLFeatureView ../vectorTiles/views/2d/engine/webgl/rendererInfoUtils ../vectorTiles/views/2d/layers/features/processors/SymbolProcessor ../vectorTiles/views/2d/support/HighlightOptions ../vectorTiles/geometry/SpatialReference ../vectorTiles/geometry/support/spatialReferenceUtils ../vectorTiles/renderers/SimpleRenderer ../vectorTiles/renderers/ClassBreaksRenderer ../vectorTiles/renderers/UniqueValueRenderer".split(" "),
function(m,v,e,f,h,k,g,l,w,x,y,z,A,p,B,q,C,D,E,F){function r(a){Object.defineProperty(a,"width",{get:function(){return this.size[0]}});Object.defineProperty(a,"height",{get:function(){return this.size[1]}});Object.defineProperty(a,"center",{get:function(){var a=this.viewpoint.targetGeometry;return[a.x,a.y]}})}var G=p.SymbolProcessor,H=f("esri-will-change"),t=function(){var a,b=window.performance||{},c=b.now||b.webkitNow||b.msNow||b.oNow||b.mozNow;if(void 0!==c)return function(){return c.call(b)};
a=window.performance&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:(new Date).getTime();return function(){return(new Date).getTime()-a}}();p=f("ff");var I=f("ie"),J=f("webkit"),K=f("opera"),u=(new Date).getTime(),n=window.requestAnimationFrame;n||(n=window[(J&&"webkit"||p&&"moz"||K&&"o"||I&&"ms")+"RequestAnimationFrame"])||(n=function(a){var b=t(),c=Math.max(0,16-(b-u)),d=window.setTimeout(function(){a(t())},c);u=b+c;return d});m=m(null,
{surfaceType:"webgl",surface:null,map:null,layer:null,updateOnPan:!1,renderOnNav:!1,_canvas:null,_mapSR4:null,_dprWatchDelay:2E3,_dprTimer:null,_rendererEvalTimer:null,_redrawPromises:null,_wglContainer:null,_wglView:null,_parentLayerView:null,_layerListenerHandles:null,_mapListenerHandles:null,_symbolProcessor:null,_rendererInfo:null,_returnCentroid:null,_hasVV:!1,_started:!1,_renderRequested:!1,_updateRequested:!1,_frameRequested:!1,_frameHandle:null,_viewState:null,_renderParameters:null,_updateParameters:null,
_zooming:!1,_panning:!1,_scaleMatrix:null,_defaultTransition:"transform 500ms ease",constructor:function(a){this._frame=this._frame.bind(this);this._evalRendererChange=this._evalRendererChange.bind(this);this._redrawPromises=new Map;l.mixin(this,a);this._setup()},destroy:function(){this._teardown()},getNode:function(){return this._canvas},getEventSource:function(){return this.getNode()},setClip:function(a){},start:function(){this._started=!0;this._renderParameters.pixelRatio=this._updateParameters.pixelRatio=
window.devicePixelRatio;this._watchDPR();this._updateMapView(this.map.extent)},stop:function(){this._started=!1;this._unwatchDPR();this._stopFrame()},redraw:function(){this._handleRendererChange()},hitTest:function(a,b){return this.layer.suspended?x.resolve(null):this._wglView.hitTest(a,b).then(function(a){return 0===a.length?null:this.layer._mode._featureMap[a[0]]}.bind(this))},syncHitTest:function(a,b){var c=this._wglView._hitTest(this._wglContainer.prepareChildrenRenderParameters(this._renderParameters),
a,b);this._scheduleRender();return this.layer._mode._featureMap[c[0]]},_setup:function(){this._mapSR4=new q(this.map.spatialReference.toJson());this._initState();this._createWGLContainer();this._createWGLView();this._applyLayerSettings();this._createMapListeners();this._setViewState();this._initRendering()},_teardown:function(){this._destroyRendering();this._destroyMapListeners();this._destroyLayerListeners();this._destroyWGLView();this._destroyWGLContainer();this.stop();this.surface.getEventSource().removeChild(this.getNode())},
_createWGLContainer:function(){this._wglContainer=new y;this._canvas=this._wglContainer.createElement();H&&h.set(this._canvas,"will-change","transform");this._wglContainer.setElement(this._canvas);this.surface.getEventSource().appendChild(this._canvas);this._wglContainer.parent={requestChildRender:this._scheduleRender.bind(this)};this._wglContainer.attach(this._renderParameters)},_destroyWGLContainer:function(){this._wglContainer.detach(this._renderParameters);this._wglContainer=null},_createWGLView:function(){this._parentLayerView=
{view:{spatialReference:this._mapSR4,highlightOptions:new B,renderContext:"webgl"},tileInfoView:null,layer:{objectIdField:this.layer.objectIdField,geometryType:this._getNormalizedGeometryType(this.layer),renderer:null,spatialReference:new q(this.layer.spatialReference.toJson()),fields:this.layer.fields,typeIdField:this.layer.typeIdField,types:e.map(this.layer.types,function(a){return a.toJson()})},requestUpdate:function(){this._scheduleUpdate()}.bind(this)};this._wglView=new z(this._parentLayerView);
this._wglContainer.addChild(this._wglView);this._wglView._domContainer=this._wglContainer},_getNormalizedGeometryType:function(a){return a.hasXYFootprint()?"esriGeometryPolygon":a.geometryType},_destroyWGLView:function(){this._wglContainer.removeChild(this._wglView)},_applyLayerSettings:function(){this._wglContainer.opacity=this.layer.opacity;this._wglContainer.visible=!this.layer.suspended;this._createLayerListeners()},_createLayerListeners:function(){this._destroyLayerListeners();var a=this.layer;
this._layerListenerHandles=[a.on("opacity-change",function(){this._wglContainer.opacity=this.layer.opacity}.bind(this)),a.on("suspend",function(){this._wglContainer.visible=!1}.bind(this)),a.on("resume",function(){this._wglContainer.visible=!0}.bind(this)),a.on("renderer-change",function(){this._handleRendererChange()}.bind(this))]},_destroyLayerListeners:function(){e.forEach(this._layerListenerHandles,function(a){a.remove()});this._layerListenerHandles=null},_createMapListeners:function(){this._destroyMapListeners();
var a=this.map;this._mapListenerHandles=[a.on("pan-start",function(a){this._panning=!0;this.updateOnPan||this.renderOnNav||this._stopFrame()}.bind(this)),a.on("pan",function(a){this._applyPanEvent(a)}.bind(this)),a.on("pan-end",function(a){this._panning=!1;this._applyPanEvent(a)}.bind(this)),a.on("extent-change",function(a){h.set(this.getNode(),g._css.names.transition,"none");this._updateMapView(a.extent)}.bind(this)),a.on("zoom-start",function(a){this._zooming=!0;this._stopFrame()}.bind(this)),a.on("zoom-end",
function(a){this._zooming=!1}.bind(this)),a.on("scale",function(a){if(!this.renderOnNav){h.set(this.getNode(),g._css.names.transition,a.immediate?"none":this._defaultTransition);var b=this.map.__visibleDelta,b=k.translate(-b.x,-b.y);this._scaleMatrix=a=k.multiply(k.invert(b),a.matrix,b);this._applyTransform(a)}}.bind(this))]},_destroyMapListeners:function(){e.forEach(this._mapListenerHandles,function(a){a.remove()});this._mapListenerHandles=null},_getRenderer4:function(a){if(a=a||this.layer._getRenderer()){a=
this._fixImageUrl(a.toJson());var b;"simple"===a.type?b=D.fromJSON(a):"classBreaks"===a.type?b=E.fromJSON(a):"uniqueValue"===a.type?b=F.fromJSON(a):console.error("WebGLRenderer: unsupported layer.renderer!");return b}},_fixImageUrl:function(a){var b=[];switch(a.type){case "simple":b.push(a.symbol);break;case "uniqueValue":b.push(a.defaultSymbol);b=b.concat(e.map(a.uniqueValueInfos,function(a){return a.symbol}));break;case "classBreaks":b.push(a.defaultSymbol),b=b.concat(e.map(a.classBreakInfos,function(a){return a.symbol}))}var b=
e.filter(b,function(a){return!!a}),c=this.layer._url.path+"/images/",d=this.layer._getToken();e.forEach(b,function(a){var b=a.url;b&&(-1===b.search(/https?\:/)&&-1===b.indexOf("data:")&&(a.url=c+b),d&&-1!==a.url.search(/https?\:/)&&(a.url+="?token\x3d"+d))});return a},_setRenderer:function(a){this._rendererInfo=this._createRendererInfo(a);this._parentLayerView.layer.renderer=a},_createRendererInfo:function(a){if(a){var b=this._parentLayerView.layer;a=A.createRendererInfo(a,this._mapSR4,{fields:e.map(b.fields,
function(a){return a.toJson()}),typeIdField:b.typeIdField,types:b.types});this._returnCentroid=this._getReturnCentroid(a.renderer);this._hasVV=this._getHasVV(a);"heatmap"===a.renderer.type&&this._wglView.updateHeatmapParameters(a.renderer);return a}this._returnCentroid=this._hasVV=!1},_getReturnCentroid:function(a){if("esriGeometryPolygon"!==this._getNormalizedGeometryType(this.layer))return!1;switch(a.type){case "simple":return this._isMarkerSymbol(a.symbol);case "unique-value":return this._isMarkerSymbol(a.defaultSymbol)||
a.uniqueValueInfos.some(function(a){return this._isMarkerSymbol(a.symbol)}.bind(this));case "class-breaks":return this._isMarkerSymbol(a.defaultSymbol)||a.classBreakInfos.some(function(a){return this._isMarkerSymbol(a.symbol)}.bind(this));default:return!1}},_getHasVV:function(a){a=a.vvFields;return null!=a&&(null!=a.size||null!=a.rotation||null!=a.color||null!=a.opacity)},_isMarkerSymbol:function(a){if(!a)return!1;a=a.type;return"simple-marker"===a||"picture-marker"===a||"text"===a},_handleRendererChange:function(){this._rendererEvalTimer||
(this._rendererEvalTimer=setTimeout(this._evalRendererChange,0))},_cancelRendererEval:function(){clearTimeout(this._rendererEvalTimer);this._rendererEvalTimer=null},_evalRendererChange:function(){this._cancelRendererEval();var a=this._returnCentroid;this._setRenderer(this._getRenderer4());this._rendererInfo&&(this._cancelRedraw(),this._wglView.renderSwitchFrom()?(this._symbolProcessor._rendererInfo=this._rendererInfo,a!==this._returnCentroid&&this._returnCentroid?this.layer._mode.refresh():this._redrawView()):
this._scheduleUpdate())},_redrawView:function(){this._wglView.children.slice(0).forEach(function(a,b){var c=a.key.id,d=this.layer._mode._tileRequests.get(c);d&&(d=this._redrawTile(a,d.featureSet),d.isFulfilled()||this._redrawPromises.set(c,d))}.bind(this))},_redrawTile:function(a,b){return this._symbolProcessor.getTileData(a.key,b).then(function(b){var c=a.key.id;this._redrawPromises["delete"](c);this.layer._mode._tileRequests.get(c)&&this._repaintTile(a,b.data)}.bind(this)).otherwise(function(b){this._redrawPromises["delete"](a.key.id)}.bind(this))},
_repaintTile:function(a,b){this._wglView.removeChild(a);a.attached=!1;a.setData(b,this._hasVV,!1);this._wglView.addChild(a)},_cancelRedraw:function(a){a?(a=this._redrawPromises.get(a))&&a.cancel():this._redrawPromises.forEach(function(a,c){a.cancel()})},_initState:function(){var a={};r(a);this._viewState=l.mixin(a,{scale:0,size:[0,0],rotation:0,resolution:1,worldScreenWidth:0,spatialReference:this._mapSR4,viewpoint:{rotation:0,scale:0,targetGeometry:{x:0,y:0},camera:null,clone:function(){var a=l.mixin({},
this);a.targetGeometry&&(a.targetGeometry=l.mixin({},a.targetGeometry));return a}},toScreen:function(a,c){var b=this.center[1]+this.resolution*this.height*.5;a[0]=(c[0]-(this.center[0]-this.resolution*this.width*.5))/this.resolution;a[1]=(b-c[1])/this.resolution;return a},toMap:function(a,c){var b=this.center[1]+this.resolution*this.height*.5;a[0]=this.center[0]-this.resolution*this.width*.5+c[0]*this.resolution;a[1]=b-c[1]*this.resolution;return a},clone:function(){var a=l.mixin({},this);r(a);a.size&&
(a.size=a.size.slice(0));a.viewpoint&&(a.viewpoint=a.viewpoint.clone());return a}});this._renderParameters={state:this._viewState,pixelRatio:window.devicePixelRatio,stationary:!0};this._updateParameters={state:this._viewState,pixelRatio:window.devicePixelRatio,stationary:!0}},_initRendering:function(){this._setRenderer(this._getRenderer4());this._symbolProcessor=new G({objectIdField:this.layer.objectIdField,geometryType:this._getNormalizedGeometryType(this.layer),rendererInfo:this._rendererInfo,devicePixelRatio:this._renderParameters.pixelRatio,
textureManager:this._wglView.textureManager});this._wglView.renderInit()},_destroyRendering:function(){this._symbolProcessor&&this._symbolProcessor.destroy();this._cancelRendererEval();this._cancelRedraw()},_updateMapView:function(a){this._setViewState(a);this._scheduleUpdate();this._scheduleRender()},_setViewState:function(a){var b=this.map;if(b.loaded){a=a?a.getCenter():b.extent.getCenter();var c=this._viewState;c.viewpoint.targetGeometry=a.toJson();c.scale=c.viewpoint.scale=b.getScale();c.size=
[b.width,b.height]}},_updateViewState:function(){var a=this._viewState;a.resolution=a.scale/(39.37*w.getUnitValueForSR(this.map.spatialReference)*96);var b=0;a.spatialReference.isWrappable&&(b=C.getInfo(a.spatialReference),b=b.valid[1]-b.valid[0]);a.worldScreenWidth=Math.round(b/a.resolution)},_stopFrame:function(){this._frameRequested=this._updateRequested=this._renderRequested=!1;cancelAnimationFrame(this._frameHandle);this._frameHandle=null},_canRender:function(){return this.renderOnNav||!this._zooming&&
!this._panning},_canUpdate:function(){return this.updateOnPan||!this._zooming&&!this._panning},_watchDPR:function(){this._unwatchDPR();this._dprTimer=setTimeout(function(){this._renderParameters.pixelRatio!==window.devicePixelRatio&&this._scheduleRender();this._watchDPR()}.bind(this),this._dprWatchDelay)},_unwatchDPR:function(){clearTimeout(this._dprTimer);this._dprTimer=null},_scheduleRender:function(){this._started&&this._canRender()&&(this._renderRequested=!0,this._scheduleFrame())},_scheduleUpdate:function(){this._started&&
this._canUpdate()&&(this._updateRequested=!0,this._scheduleFrame())},_scheduleFrame:function(){this._frameRequested||(this._frameRequested=!0,this._frameHandle=n(this._frame))},_frame:function(){this._frameRequested&&(this._frameRequested=!1,this._renderParameters.pixelRatio!==window.devicePixelRatio&&(this._renderParameters.pixelRatio=this._updateParameters.pixelRatio=this._symbolProcessor._devicePixelRatio=window.devicePixelRatio),this._updateParameters.stationary=this._renderParameters.stationary=
!0,this._updateViewState(),this._renderRequested&&this._canRender()&&(this._renderRequested=!1,h.set(this._canvas,g._css.names.transition,"none"),this._applyTransform(),this._scaleMatrix=null,this._wglContainer.doRender(this._renderParameters)),this._updateRequested&&this._canUpdate()&&(this._updateRequested=!1,this.layer._mode.update(this._updateParameters)))},_applyPanEvent:function(a){if(!this.renderOnNav){var b=k.translate(a.delta.x,a.delta.y),b=this._scaleMatrix?k.multiply(b,this._scaleMatrix):
b;this._applyTransform(b)}(this.updateOnPan||this.renderOnNav)&&this._updateMapView(a.extent)},_applyTransform:function(a){a=a?g._css.matrix(a):"";h.set(this._canvas,g._css.names.transform,a)}});f("extend-esri")&&v.setObject("layers.support.WebGLRenderer",m,g);return m});