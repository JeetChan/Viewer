// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/utils",["dojo/Deferred","require"],function(c,d){var a={},b;a.init=function(){if(b)return b.promise;b=new c;d("./FieldInfoBuilder ./FieldInfoFormatUtil ./FieldInfoNameUtil ./FieldInfoRenderer ./FieldInfoTooltipUtil ./RichTextJsonUtil ./FieldLibrary".split(" "),function(c,d,e,f,g,h,k){a.builder=c;a.format=d;a.name=e;a.renderer=f;a.tooltip=g;a.richText=h;a.fields=k;b.resolve()});return b.promise};a.init();
return a});