// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/CustomReportsManager",["dojo/_base/declare","dojo/_base/lang","dojo/when","./PortalManager","./ReportTemplateData"],function(e,f,g,h,k){var l=e(null,{allUserReports:null,cache:null,constructor:function(){this.cache={}}});e={_reportsCache:null,resetCache:function(){this._reportsCache=new l},getCustomReports:function(a,c){var b=this;c&&(this._reportsCache.allUserReports=null);return this._reportsCache.allUserReports?this._getCountryReports(this._reportsCache.allUserReports,
a):g(h.getPortalInfo(a),function(d){return d.portal.queryItems({num:1E3,start:1,q:'type:"Report Template" owner:'+d.user.username+' typekeywords:"esriWebReport"',sortField:"modified",sortOrder:"desc"}).then(function(c){b._reportsCache.allUserReports=c.results.map(function(a){return b._prepareCustomReportFromItem(a,d.portal)});return b._getCountryReports(b._reportsCache.allUserReports,a)})})},_getCountryReports:function(a,c){return a&&a.filter(function(a){return!a.countries||a.countries.split(",").some(function(a){return c.countryID===
a.trim()})})},_prepareCustomReportFromItem:function(a,c){var b=f.mixin({},a.properties||a.details);b.isGraphicReport=!!b.isGraphicReport;b.reportID=a.id;var d={title:a.title,templateData:new k(a,c),modified:a.modified.getTime()};f.mixin(d,b);return d},getCustomReportByID:function(a){var c=this,b=this._reportsCache.cache[a.reportID];if(b)return b;b=g(h.getPortalInfo(a),function(b){return b.user.getItem(a.reportID).then(function(a){return c._prepareCustomReportFromItem(a,b.portal)})});return this._reportsCache.cache[a.reportID]=
b}};e.resetCache();return e});