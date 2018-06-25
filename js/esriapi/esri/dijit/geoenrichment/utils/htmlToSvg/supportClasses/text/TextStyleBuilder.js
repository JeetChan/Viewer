// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/text/TextStyleBuilder",["dojo/dom-style"],function(e){var g={_MAP:{"white-space":"whiteSpace","word-wrap":"wordWrap","word-break":"wordBreak","overflow-wrap":"overflowWrap"},_MAP_TAG_STYLES:{"font-weight":"fontWeight","font-style":"fontStyle","text-decoration":"textDecoration"},_RESET_ALL:{fontWeight:"",fontStyle:"",textDecoration:"",whiteSpace:"",wordWrap:"",wordBreak:"",overflowWrap:"",fontFamily:"",fontSize:"",textAlign:"",lineHeight:""},
_getTagStyles:function(a,c){return{"font-weight":a.style.fontWeight||(c.isB?"bold":"")||e.get(a,"fontWeight"),"font-style":a.style.fontStyle||(c.isI?"italic":"")||e.get(a,"fontStyle"),"text-decoration":a.style.textDecoration||(c.isU?"underline":"")||e.get(a,"textDecoration")}},buildTextStyleString:function(a,c,h,k,f){var b="",d;for(d in g._MAP){var l=e.get(a,g._MAP[d]);l&&(b+=d+":"+l+";")}c=this._getTagStyles(a,c);for(d in c)b+=d+":"+c[d]+";";(a=e.get(a,"fontFamily").replace(/"/g,"'"))&&(b+="font-family:"+
a+";");h&&(b+="font-size:"+h+"px;");k&&(b+="text-align:"+k+";");f&&"normal"!==f&&(b+="line-height:"+f+"px;");return b},buildTextStyleObject:function(a,c,h,k,f){var b={},d;for(d in g._MAP){var l=g._MAP[d],m=e.get(a,l);m&&(b[l]=m)}c=this._getTagStyles(a,c);for(d in c)b[this._MAP_TAG_STYLES[d]]=c[d];(a=e.get(a,"fontFamily").replace(/"/g,"'"))&&(b.fontFamily=a);h&&(b.fontSize=h+"px");k&&(b.textAlign=k);f&&"normal"!==f&&(b.lineHeight=f+"px");return b},resetTextStyle:function(a){e.set(a,g._RESET_ALL)}};
return g});