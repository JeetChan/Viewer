// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/reference/templates/AppSchema.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3c!-- Application Schema --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'appSchInfo\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.appSchInfo.caption}\'"\x3e\r\n    \r\n    \x3c!-- citation --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'asName\',minOccurs:1,label:\'${i18nArcGIS.appSchInfo.asName}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/CitationElements"\x3e\x3c/div\x3e    \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- schema language --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'asSchLang\',minOccurs:0,label:\'${i18nArcGIS.appSchInfo.asSchLang}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- constraint language --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'asCstLang\',minOccurs:0,label:\'${i18nArcGIS.appSchInfo.asCstLang}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- ASCII --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'asAscii\',minOccurs:0,label:\'${i18nArcGIS.appSchInfo.asAscii}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- graphics file and source --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'asGraFile\',minOccurs:0,label:\'${i18nArcGIS.appSchInfo.asGraFile}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText"\x3e\x3c/div\x3e\r\n      \x3cdiv style\x3d"margin-top:8px;"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n        data-dojo-props\x3d"target:\'src\',minOccurs:0,noIndent:true,label:\'${i18nArcGIS.appSchInfo.asGraFile_src}\'"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- software file and source --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'asSwDevFile\',minOccurs:0,label:\'${i18nArcGIS.appSchInfo.asSwDevFile}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText"\x3e\x3c/div\x3e\r\n      \x3cdiv style\x3d"margin-top:8px;"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n        data-dojo-props\x3d"target:\'src\',minOccurs:0,noIndent:true,label:\'${i18nArcGIS.appSchInfo.asSwDevFile_src}\'"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- software file format --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'asSwDevFiFt\',minOccurs:0,label:\'${i18nArcGIS.appSchInfo.asSwDevFiFt}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/reference/AppSchema","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/AppSchema.html ../citation/CitationElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.reference.AppSchema",a,d);return a});