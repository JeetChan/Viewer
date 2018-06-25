// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/maintenance/templates/MaintenanceElements.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n  \r\n    \x3c!-- frequency tab --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section" \r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.maintenance.section.frequency}\'"\x3e\r\n    \r\n      \x3c!-- update frequency --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'maintFreq\',minOccurs:1,label:\'${i18nArcGIS.codelist.MD_MaintenanceFrequenceCode}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'MaintFreqCd\',minOccurs:1,showHeader:false"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n            data-dojo-props\x3d"target:\'value\',minOccurs:1,showHeader:false"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n              data-dojo-props\x3d"codelistType:\'MD_MaintenanceFrequenceCode\'"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- custom frequency --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'usrDefFreq\',minOccurs:0,showHeader:false"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'duration\',minOccurs:0,label:\'${i18nArcGIS.maintenance.usrDefFreq}\'"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- next update date --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'dateNext\',minOccurs:0,label:\'${i18nArcGIS.maintenance.dateNext}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputDate" data-dojo-props\x3d"allowTime:true"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e  \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- scope tab --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section" \r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.maintenance.section.scope}\'"\x3e\r\n    \r\n      \x3c!-- update scope --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'maintScp\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.maintenance.maintScp}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'ScopeCd\',minOccurs:0,showHeader:false"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n            data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n              data-dojo-props\x3d"codelistType:\'MD_ScopeCode\'"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- scope description --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'upScpDesc\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.maintenance.upScpDesc.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/maintenance/ScopeDscElements"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- note tab --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.maintenance.section.note}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'maintNote\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.maintenance.maintNote}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e  \r\n    \r\n    \x3c!-- contact tab --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.contact.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'maintCont\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.maintenance.maintCont}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/ContactElements"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e  \r\n    \r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/maintenance/MaintenanceElements","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/MaintenanceElements.html ./ScopeCd ./ScopeDscElements ../citation/ContactElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.maintenance.MaintenanceElements",a,d);return a});