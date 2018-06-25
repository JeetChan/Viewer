// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/resource/templates/ResourceConstraints.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3c!-- resource constraints --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'resConst\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.resource.resConst}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/ElementChoice" data-dojo-props\x3d"isResConstElementChoice:true"\x3e\r\n      \r\n      \x3c!-- general --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/constraints/GeneralConstraints"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.constraints.general.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- legal --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/constraints/LegalConstraints"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.constraints.legal.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- security --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/constraints/SecurityConstraints"\r\n        data-dojo-props\x3d"label:\'${i18nArcGIS.constraints.security.caption}\'"\x3e\r\n      \x3c/div\x3e\r\n      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/resource/ResourceConstraints","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/ResourceConstraints.html ../constraints/GeneralConstraints ../constraints/LegalConstraints ../constraints/SecurityConstraints".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.resource.ResourceConstraints",a,d);return a});