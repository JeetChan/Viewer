// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/stdGeographies/StdGeographiesUtil",["../../../core/supportClasses/templateJsonUtils/countryConfig"],function(g){var e={US_STATES_IDS:{"01":"AL","02":"AK","03":"AS","04":"AZ","05":"AR","06":"CA","08":"CO","09":"CT",10:"DE",11:"DC",12:"FL",13:"GA",14:"GU",15:"HI",16:"ID",17:"IL",18:"IN",19:"IA",20:"KS",21:"KY",22:"LA",23:"ME",24:"MD",25:"MA",26:"MI",27:"MN",28:"MS",29:"MO",30:"MT",31:"NE",32:"NV",33:"NH",34:"NJ",35:"NM",36:"NY",
37:"NC",38:"ND",39:"OH",40:"OK",41:"OR",42:"PA",43:"PR",44:"RI",45:"SC",46:"SD",47:"TN",48:"TX",49:"UT",50:"VT",51:"VA",53:"WA",54:"WV",55:"WI",56:"WY"},CA_PROVINCE_IDS:{10:"NL",59:"BC",60:"YT",61:"NT",62:"NU",11:"PE",12:"NS",13:"NB",24:"QC",35:"ON",46:"MB",47:"SK",48:"AB"},BUILDER_DATA:{US_census:{"US.CD":"%name%, %state%","US.CSD":"%name%, %state%","US.Counties":"%name%, %state%","US.Places":"%city%, %state%","US.ZIP5":"%id% (%name%)"},CA_census:{"CAN.FSA":"%id% (%name%)","CAN.CD":"%name%, %province%"}},
getAreaName:function(a){var b=g.getCountryID(),c=g.getHierarchyID();if(!b||!c)return a.StdGeographyName;var b=b+"_"+c,d=e.BUILDER_DATA[b];d||(c=g.getGeographiesModel(),d=e.BUILDER_DATA[b]={},c.getLevels(!0).forEach(function(a){d[a.id.toUpperCase()]="%id% (%name%)"}));return e.buildDescription(a.StdGeographyID,a.StdGeographyName,a.StdGeographyLevel,d)},buildDescription:function(a,b,c,d){d=d&&d[c.toUpperCase()];b=b||a;return"%id% (%name%)"===d&&0<=b.indexOf(a)?b:d?d.replace(/%(\w+)%/g,function(d,f){return e._buildDescriptionPart(d,
f,a,b,c)}):b},_buildDescriptionPart:function(a,b,c,d,h){try{h.substr(0,h.indexOf(".")).toLowerCase();var f=e["_build_"+b];return f&&f(c,d)}catch(k){}return a},_build_id:function(a,b){return a},_build_name:function(a,b){return b},_build_city:function(a,b){return b.replace(/(\s|^)(\w)/g,function(a,b,e){return b+e.toUpperCase()})},_build_state:function(a,b){var c=a&&2<=a.length?e.US_STATES_IDS[a.substr(0,2)]:null;return c?c:"??"},_build_province:function(a,b){var c=a&&2<=a.length?e.CA_PROVINCE_IDS[a.substr(0,
2)]:null;return c?c:"??"}};return e});