// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/playerSupports/_KeyboardNavigationSupport",["dojo/_base/declare","dojo/on","dojo/when","dojo/keys","../PlayerResizeModes"],function(d,e,f,b,g){return d(null,{_windowSlideNavigationKeyboardHandle:null,resize:function(){var a=this;return f(this.inherited(arguments),function(){a._updateSlideNavigationKeyboardListeners()})},_updateSlideNavigationKeyboardListeners:function(){var a=this;this._windowSlideNavigationKeyboardHandle&&this._windowSlideNavigationKeyboardHandle.remove();
this.isSlidesView&&this.allowKeyboardNavigation&&this.resizeMode===g.FIT_WINDOW&&(this._windowSlideNavigationKeyboardHandle=e(window,"keyup",function(c){c.keyCode===b.RIGHT_ARROW?a.getCurrentReportContainer().showNextSlide():c.keyCode===b.LEFT_ARROW&&a.getCurrentReportContainer().showPreviousSlide()}),this.own(this._windowSlideNavigationKeyboardHandle))}})});