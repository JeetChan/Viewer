// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/esri/templates/Esri.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'Esri\',minOccurs:0,showHeader:false"\x3e\r\n  \r\n    \x3c!-- metadata style (i.e. profile) --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'ArcGISstyle\',minOccurs:0,label:\'${i18nArcGIS.metadataStyle.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputProfile"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n      \r\n    \x3c!-- locales --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/esri/Locales"\x3e\x3c/div\x3e\r\n    \r\n    \x3c!-- scale range --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/esri/ScaleRange"\x3e\x3c/div\x3e\r\n    \r\n    \x3c!-- hidden --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,notApplicable:true,label:\'?EsriHidden\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/esri/System"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/esri/DataProperties"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/esri/Esri","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Esri.html ./System ./ScaleRange ./Locales ./DataProperties ../form/InputProfile".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.esri.Esri",a,d);return a});