// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/FeatureTable/dialogUtils","../../lang ../FeatureAttachments ./dataUtils dojo/_base/array dojo/_base/lang dojo/Deferred dojo/dom-construct dojo/dom-style dojo/io-query dojo/number dojo/on dojo/string dijit/Dialog dijit/form/Button dijit/layout/BorderContainer dijit/layout/TabContainer dijit/layout/ContentPane dojo/i18n!../../nls/jsapi".split(" "),function(m,v,r,w,A,B,e,C,D,g,p,x,y,t,E,F,G,z){return{i18nStrings:z.widgets.FeatureTable,generateDialog:function(a){a=new y({title:a.title,
content:a.content,baseClass:a.css.dialog});e.create("div",{className:"break"},a.containerNode);return a},hideDialog:function(a){a&&a.hide()},destroyDialog:function(a){a&&a.destroy()},generateAttachmentsDialog:function(a){var c=this.i18nStrings,f=a.layer,g=a.featureId,d=a.attachments||null,b=a.editable;a=a.css;var h,k,l;h=e.create("div");l=this.generateDialog({title:c.photosAndFiles,content:h,css:a});k=new v({layer:f,featureId:g,attachments:d,editable:b},h);p(l,"hide",function(a){k.destroy()});c=new t({label:c.close,
"class":a.closeButton});p(c,"click",function(){l.hide()});c.placeAt(k._uploadButton.domNode,"after");k.startup();l.show();return{dialog:l,featureAttachments:k}},generateStatisticsDialog:function(a){var c=this.i18nStrings,f=a.css,n=a.fieldInfo,n=n.alias||n.name;a=a.data.features[0].attributes;var d={pattern:"#,###,###,##0.########"},b={},h,k,l,u,q;for(h in a)a.hasOwnProperty(h)&&(b[h.toLowerCase()]=a[h]);h=[{title:c.numberOfValues,value:m.isDefined(b.countfield)?g.format(b.countfield,d):""},{title:c.sumOfValues,
value:m.isDefined(b.sumfield)?g.format(b.sumfield,d):""},{title:c.minimum,value:m.isDefined(b.minfield)?g.format(b.minfield,d):""},{title:c.maximum,value:m.isDefined(b.maxfield)?g.format(b.maxfield,d):""},{title:c.average,value:m.isDefined(b.avgfield)?g.format(g.round(b.avgfield,r.getRoundingPrecision(b.avgfield)),d):""},{title:c.standardDeviation,value:m.isDefined(b.stddevfield)?g.format(g.round(b.stddevfield,r.getRoundingPrecision(b.stddevfield)),d):""}];d=e.create("div",{className:f.statisticsTableContainer});
e.create("div",{className:f.statisticsHeader,innerHTML:x.substitute(c.fieldLabel,{fieldName:n})},d);e.create("div",{className:f.statisticsHorizontalBreak},d);n=e.create("table",{className:f.statisticsAttrTable,style:{cellpadding:0,cellspacing:0}},d);u=e.create("tbody",{},n);w.forEach(h,function(a){q=e.create("tr",{valign:"top"},u);e.create("td",{className:f.statisticsAttrName,innerHTML:a.title},q);e.create("td",{className:f.statisticsAttrValue,innerHTML:a.value},q)});e.create("div",{className:f.statisticsBreak},
d);k=new t({label:c.close,baseClass:f.closeButton});p(k,"click",function(){var a=l;a.hide().then(function(){a.destroyRecursive();k=null})});k.placeAt(d);l=this.generateDialog({title:c.statistics,content:d,css:f});l.show();return{dialog:l,statistics:a}}}});