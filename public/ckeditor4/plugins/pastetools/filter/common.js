!function(){function t(t,e,r){for(var n=t[e+=r],o=/[\s]/;n&&o.test(n);)n=t[e+=r];return n}function e(t){return/%$/.test(t)?t:t+"px"}function r(t){var e,r,n=t.margin?"margin":!!t.MARGIN&&"MARGIN";if(n){for(e in r=CKEDITOR.tools.style.parse.margin(t[n]))t["margin-"+e]=r[e];delete t[n]}}var n,o=CKEDITOR.tools,s={};CKEDITOR.plugins.pastetools.filters.common=s,s.rules=function(t,e,r){var s=function(t){var e;return!(!(t=t.config.font_names)||!t.length)&&!!(e=CKEDITOR.tools.array.map(t.split(";"),(function(t){return-1===t.indexOf("/")?t:t.split("/")[1]}))).length&&e}(e);return{elements:{"^":function(t){if(function(t){var e,r,n="background-color:transparent;background:transparent;background-color:none;background:none;background-position:initial initial;background-repeat:initial initial;caret-color;font-family:-webkit-standard;font-variant-caps;letter-spacing:normal;orphans;widows;text-transform:none;word-spacing:0px;-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px;text-indent:0px;margin-bottom:0in".split(";"),o=CKEDITOR.tools.parseCssText(t.attributes.style);for(e in o)r=e+":"+o[e],CKEDITOR.tools.array.some(n,(function(t){return r.substring(0,t.length).toLowerCase()===t}))&&delete o[e];""!==(o=CKEDITOR.tools.writeCssText(o))?t.attributes.style=o:delete t.attributes.style}(t),t.attributes.bgcolor){var e=CKEDITOR.tools.parseCssText(t.attributes.style);e["background-color"]||(e["background-color"]=t.attributes.bgcolor,t.attributes.style=CKEDITOR.tools.writeCssText(e))}},span:function(t){if(t.hasClass("Apple-converted-space"))return new CKEDITOR.htmlParser.text(" ")},table:function(t){t.filterChildren(r);var e,s,i=t.parent,a=i&&i.parent;if(i.name&&"div"===i.name&&i.attributes.align&&1===o.object.keys(i.attributes).length&&1===i.children.length){for(t.attributes.align=i.attributes.align,e=i.children.splice(0),t.remove(),s=e.length-1;0<=s;s--)a.add(e[s],i.getIndex());i.remove()}n.convertStyleToPx(t)},tr:function(t){t.attributes={}},td:function(t){var s=t.getAscendant("table");(a=(s=o.parseCssText(s.attributes.style,!0)).background)&&n.setStyle(t,"background",a,!0),(s=s["background-color"])&&n.setStyle(t,"background-color",s,!0);var i,a=(s=o.parseCssText(t.attributes.style,!0)).border?CKEDITOR.tools.style.border.fromCssRule(s.border):{},l=(a=o.style.border.splitCssValues(s,a),CKEDITOR.tools.clone(s));for(i in l)0==i.indexOf("border")&&delete l[i];for(var u in t.attributes.style=CKEDITOR.tools.writeCssText(l),s.background&&(i=CKEDITOR.tools.style.parse.background(s.background)).color&&(n.setStyle(t,"background-color",i.color,!0),n.setStyle(t,"background","")),a)"none"===(i=s[u]?CKEDITOR.tools.style.border.fromCssRule(s[u]):a[u]).style?n.setStyle(t,u,"none"):n.setStyle(t,u,i.toString());n.mapCommonStyles(t),n.convertStyleToPx(t),n.createStyleStack(t,r,e,/margin|text\-align|padding|list\-style\-type|width|height|border|white\-space|vertical\-align|background/i)},font:function(t){t.attributes.face&&s&&(t.attributes.face=function(t,e){var r=t.split(",");return CKEDITOR.tools.array.find(e,(function(t){for(var e=0;e<r.length;e++)if(-1===t.indexOf(CKEDITOR.tools.trim(r[e])))return!1;return!0}))||t}(t.attributes.face,s))}}}},s.styles={setStyle:function(t,e,r,n){var s=o.parseCssText(t.attributes.style);n&&s[e]||(""===r?delete s[e]:s[e]=r,t.attributes.style=CKEDITOR.tools.writeCssText(s))},convertStyleToPx:function(t){var e=t.attributes.style;e&&(t.attributes.style=e.replace(/\d+(\.\d+)?pt/g,(function(t){return CKEDITOR.tools.convertToPx(t)+"px"})))},mapStyles:function(t,e){for(var r in e)t.attributes[r]&&("function"==typeof e[r]?e[r](t.attributes[r]):n.setStyle(t,e[r],t.attributes[r]),delete t.attributes[r])},mapCommonStyles:function(t){return n.mapStyles(t,{vAlign:function(e){n.setStyle(t,"vertical-align",e)},width:function(r){n.setStyle(t,"width",e(r))},height:function(r){n.setStyle(t,"height",e(r))}})},normalizedStyles:function(t,e){var n="background-color:transparent border-image:none color:windowtext direction:ltr mso- visibility:visible div:border:none".split(" "),i="font-family font font-size color background-color line-height text-decoration".split(" "),a=function(){for(var t=[],e=0;e<arguments.length;e++)arguments[e]&&t.push(arguments[e]);return-1!==o.indexOf(n,t.join(":"))},l=!0===CKEDITOR.plugins.pastetools.getConfigValue(e,"removeFontStyles"),u=o.parseCssText(t.attributes.style);"cke:li"==t.name&&(u["TEXT-INDENT"]&&u.MARGIN?(t.attributes["cke-indentation"]=s.lists.getElementIndentation(t),u.MARGIN=u.MARGIN.replace(/(([\w\.]+ ){3,3})[\d\.]+(\w+$)/,"$10$3")):delete u["TEXT-INDENT"],delete u["text-indent"]);for(var c=o.object.keys(u),f=0;f<c.length;f++){var d=c[f].toLowerCase(),g=u[c[f]],p=CKEDITOR.tools.indexOf;(l&&-1!==p(i,d.toLowerCase())||a(null,d,g)||a(null,d.replace(/\-.*$/,"-"))||a(null,d)||a(t.name,d,g)||a(t.name,d.replace(/\-.*$/,"-"))||a(t.name,d)||a(g))&&delete u[c[f]]}var b=CKEDITOR.plugins.pastetools.getConfigValue(e,"keepZeroMargins");return r(u),CKEDITOR.tools.array.forEach(["top","right","bottom","left"],(function(t){if((t="margin-"+t)in u){var e=CKEDITOR.tools.convertToPx(u[t]);e||b?u[t]=e?e+"px":0:delete u[t]}})),CKEDITOR.tools.writeCssText(u)},createStyleStack:function(t,e,r,s){var i=[];for(t.filterChildren(e),e=t.children.length-1;0<=e;e--)i.unshift(t.children[e]),t.children[e].remove();n.sortStyles(t),e=o.parseCssText(n.normalizedStyles(t,r)),r=t;var a,l="span"===t.name;for(a in e)if(!a.match(s||/margin((?!-)|-left|-top|-bottom|-right)|text-indent|text-align|width|border|padding/i))if(l)l=!1;else{var u=new CKEDITOR.htmlParser.element("span");u.attributes.style=a+":"+e[a],r.add(u),r=u,delete e[a]}for(CKEDITOR.tools.isEmpty(e)?delete t.attributes.style:t.attributes.style=CKEDITOR.tools.writeCssText(e),e=0;e<i.length;e++)r.add(i[e])},sortStyles:function(t){for(var e=["border","border-bottom","font-size","background"],r=o.parseCssText(t.attributes.style),n=o.object.keys(r),s=[],i=[],a=0;a<n.length;a++)-1!==o.indexOf(e,n[a].toLowerCase())?s.push(n[a]):i.push(n[a]);for(s.sort((function(t,r){return o.indexOf(e,t.toLowerCase())-o.indexOf(e,r.toLowerCase())})),n=[].concat(s,i),s={},a=0;a<n.length;a++)s[n[a]]=r[n[a]];t.attributes.style=CKEDITOR.tools.writeCssText(s)},pushStylesLower:function(t,e,r){if(!t.attributes.style||0===t.children.length)return!1;e=e||{};var s,i={"list-style-type":!0,width:!0,height:!0,border:!0,"border-":!0},a=o.parseCssText(t.attributes.style);for(s in a)if(!(s.toLowerCase()in i||i[s.toLowerCase().replace(/\-.*$/,"-")]||s.toLowerCase()in e)){for(var l=!1,u=0;u<t.children.length;u++){var c=t.children[u];if(c.type===CKEDITOR.NODE_TEXT&&r){var f=new CKEDITOR.htmlParser.element("span");f.setHtml(c.value),c.replaceWith(f),c=f}c.type===CKEDITOR.NODE_ELEMENT&&(l=!0,n.setStyle(c,s,a[s]))}l&&delete a[s]}return t.attributes.style=CKEDITOR.tools.writeCssText(a),!0},inliner:{filtered:"break-before break-after break-inside page-break page-break-before page-break-after page-break-inside".split(" "),parse:function(t){function e(t){var e=t.indexOf("{"),r=t.indexOf("}");return o(t.substring(e+1,r),!0)}var r,o=CKEDITOR.tools.parseCssText,s=n.inliner.filter,i=t.is?t.$.sheet:function(t){var e=new CKEDITOR.dom.element("style"),r=new CKEDITOR.dom.element("iframe");return r.hide(),CKEDITOR.document.getBody().append(r),r.$.contentDocument.documentElement.appendChild(e.$),e.$.textContent=t,r.remove(),e.$.sheet}(t);if(t=[],i)for(i=i.cssRules,r=0;r<i.length;r++)i[r].type===window.CSSRule.STYLE_RULE&&t.push({selector:i[r].selectorText,styles:s(e(i[r].cssText))});return t},filter:function(t){var e,r=n.inliner.filtered,s=o.array.indexOf,i={};for(e in t)-1===s(r,e)&&(i[e]=t[e]);return i},sort:function(t){return t.sort(function(t){var e=CKEDITOR.tools.array.map(t,(function(t){return t.selector}));return function(t,r){var n=-1!==(""+t.selector).indexOf(".")?1:0;return 0!=(n=(-1!==(""+r.selector).indexOf(".")?1:0)-n)?n:e.indexOf(r.selector)-e.indexOf(t.selector)}}(t))},inline:function(t){var e=n.inliner.parse,o=n.inliner.sort,s=function(t){return t=(new DOMParser).parseFromString(t,"text/html"),new CKEDITOR.dom.document(t)}(t);return o=o(function(t){var r,n=[];for(r=0;r<t.count();r++)n=n.concat(e(t.getItem(r)));return n}(t=s.find("style"))),CKEDITOR.tools.array.forEach(o,(function(t){var e,n,o,i=t.styles;for(t=s.find(t.selector),r(i),o=0;o<t.count();o++)e=t.getItem(o),r(n=CKEDITOR.tools.parseCssText(e.getAttribute("style"))),n=CKEDITOR.tools.extend({},n,i),e.setAttribute("style",CKEDITOR.tools.writeCssText(n))})),s}}},n=s.styles,s.lists={getElementIndentation:function(t){if((t=o.parseCssText(t.attributes.style)).margin||t.MARGIN){t.margin=t.margin||t.MARGIN;var e={styles:{margin:t.margin}};CKEDITOR.filter.transformationsTools.splitMarginShorthand(e),t["margin-left"]=e.styles["margin-left"]}return parseInt(o.convertToPx(t["margin-left"]||"0px"),10)}},s.elements={replaceWithChildren:function(t){for(var e=t.children.length-1;0<=e;e--)t.children[e].insertAfter(t)}},s.createAttributeStack=function(t,e){var r,n=[];for(t.filterChildren(e),r=t.children.length-1;0<=r;r--)n.unshift(t.children[r]),t.children[r].remove();r=t.attributes;var o,s=t,i=!0;for(o in r)if(i)i=!1;else{var a=new CKEDITOR.htmlParser.element(t.name);a.attributes[o]=r[o],s.add(a),s=a,delete r[o]}for(r=0;r<n.length;r++)s.add(n[r])},s.parseShorthandMargins=r,s.rtf={getGroups:function(t,e){for(var r,n=[],o=0;r=s.rtf.getGroup(t,e,{start:o});)o=r.end,n.push(r);return n},removeGroups:function(t,e){for(var r;r=s.rtf.getGroup(t,e);){var n=t.substring(0,r.start);r=t.substring(r.end),t=n+r}return t},getGroup:function(e,r,n){var o,s=0;if(r=new RegExp("\\{\\\\"+r,"g"),n=CKEDITOR.tools.object.merge({start:0},n||{}),r.lastIndex=n.start,!(n=r.exec(e)))return null;o=e[r=n.index];do{var i="{"===o&&"\\"!==t(e,r,-1)&&"\\"===t(e,r,1);o="}"===o&&"\\"!==t(e,r,-1)&&0<s,i?s++:o&&s--,o=e[++r]}while(o&&0<s);return{start:n.index,end:r,content:e.substring(n.index,r)}},extractGroupContent:function(t){var e;return e=(e=t.match(/^\{\\(\w+)/))?e[1]:null,t=t.replace(/\}([^{\s]+)/g,"} $1"),t=s.rtf.removeGroups(t,"(?!"+e+")"),(t=CKEDITOR.tools.trim(t.replace(/^\{(\\[\w-]+\s*)+/g,""))).replace(/}$/,"")}}}();