// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/hi/SummarizeCenterAndDispersion",{inputLayerLabel:"\u0935\u0930\u094d\u0923\u0928 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0915\u094b\u0908 \u0932\u0947\u092f\u0930 \u091a\u0941\u0928\u0947\u0902",summaryTypes:"\u0938\u093e\u0930\u093e\u0902\u0936 \u092a\u094d\u0930\u0915\u093e\u0930",centralFeature:"\u0915\u0947\u0902\u0926\u094d\u0930\u0940\u092f \u0935\u093f\u0936\u0947\u0937\u0924\u093e",meanCenter:"\u092e\u093e\u0927\u094d\u092f \u0915\u0947\u0902\u0926\u094d\u0930",
medianCenter:"\u092e\u093e\u0927\u094d\u092f\u093f\u0915\u093e \u0915\u0947\u0902\u0926\u094d\u0930",ellipse:"\u0905\u0902\u0921\u093e\u0915\u093e\u0930",weightBy:"\u0907\u0938\u0915\u0947 \u0926\u094d\u0935\u093e\u0930\u093e \u092d\u093e\u0930\u093f\u0924 (\u0935\u0948\u0915\u0932\u094d\u092a\u093f\u0915)",groupBy:"\u0938\u092e\u0942\u0939 \u0926\u094d\u0935\u093e\u0930\u093e (\u0935\u0948\u0915\u0932\u094d\u092a\u093f\u0915)",resultLayerName:"\u092a\u0930\u093f\u0923\u093e\u092e\u0940 \u0932\u0947\u092f\u0930 \u0915\u093e \u0928\u093e\u092e",
outputLayerName:"${layerName} \u0915\u0947 \u0935\u093f\u0924\u0930\u0923 \u0915\u093e \u0935\u0930\u094d\u0923\u0928 \u0915\u0930\u0947\u0902",none:"\u0915\u094b\u0908 \u0928\u0939\u0940\u0902",itemDescription:"\u0938\u093e\u0930\u093e\u0902\u0936 \u0915\u0947\u0902\u0926\u094d\u0930 \u0915\u094b \u091a\u0932\u093e\u0928\u0947 \u0938\u0947 \u091c\u0947\u0928\u0930\u0947\u091f \u0915\u0940 \u0917\u0908 \u0932\u0947\u092f\u0930 \u0914\u0930 \u092a\u094d\u0930\u0938\u093e\u0930 \u0915\u094b ${layerName} \u092a\u0930 \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u093f\u0924 \u0915\u0930\u0947\u0902\u0964 ",
itemTags:"\u0935\u093f\u0936\u094d\u0932\u0947\u0937\u0923 \u0915\u0947 \u092a\u0930\u093f\u0923\u093e\u092e, \u0938\u093e\u0930\u093e\u0902\u0936 \u0915\u0947\u0902\u0926\u094d\u0930 \u0914\u0930 \u092a\u094d\u0930\u0938\u093e\u0930, ${layerName}",itemSnippet:"\u0938\u093e\u0930\u093e\u0902\u0936 \u0915\u0947\u0902\u0926\u094d\u0930 \u0914\u0930 \u092a\u094d\u0930\u0938\u093e\u0930 \u0938\u0947 \u091c\u0947\u0928\u0930\u0947\u091f \u0915\u0940 \u0917\u0908 \u0932\u0947\u092f\u0930 \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u093f\u0924 \u0915\u0930\u0947\u0902"});