// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/SeriesStyle/CustomColor.html":'\x3cdiv\x3e\r\n\r\n   \x3cdiv class\x3d"header"\x3e\r\n      \x3cdiv class\x3d"color-choose"\x3e\r\n         \x3cdiv class\x3d"text-label color-text text-over" title\x3d"${nls.colorSchema}"\x3e${nls.colorSchema}\x3c/div\x3e\r\n         \x3cdiv data-dojo-attach-point\x3d"colorsPickerDiv" class\x3d"colors-picker"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n   \x3c/div\x3e\r\n\r\n   \x3cdiv data-dojo-attach-point\x3d"content" class\x3d"content"\x3e\x3c/div\x3e\r\n\r\n   \x3cdiv class\x3d"bottom"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dispatchAdd" class\x3d"add-dispatch"\x3e\r\n        \x3cdiv class\x3d"disptch-div" data-dojo-attach-event\x3d"click:_onAddCategoryClick" title\x3d"${nls.addCategory}"\x3e\r\n           \x3cdiv class\x3d"disptch-add-icon"\x3e\x3c/div\x3e\r\n           \x3cdiv class\x3d"disptch-add-text"\x3e${nls.addCategory}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"actionAdd" class\x3d"add-action hide"\x3e\r\n        \x3cdiv class\x3d"category-tip textOverFlow" title\x3d"${nls.category}"\x3e${nls.category}\x3c/div\x3e\r\n\r\n        \x3cdiv data-dojo-attach-point\x3d"addActionDiv" class\x3d"add-action-div"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"colorDiv" class\x3d"color-div"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"action-button-container" data-dojo-attach-event\x3d"click:_onDoAddClick" title\x3d"${nls.ok}"\x3e\r\n               \x3cdiv class\x3d"action-btn add-btn"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"action-button-container" data-dojo-attach-event\x3d"click:_onCancelClick" title\x3d"${nls.cancel}"\x3e\r\n               \x3cdiv class\x3d"action-btn cancel-btn"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n       \r\n      \x3c/div\x3e\r\n   \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./CustomColor.html dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../ChartColorSetting jimu/dijit/ColorPickerPopup ./CustomColorList ../../../utils dojo/on dojo/_base/Color dojo/_base/lang dojo/_base/html dojo/store/Memory ./CustomCombox jimu/dijit/LoadingIndicator".split(" "),function(m,n,p,q,r,t,u,v,w,h,k,x,l,g,y,z){return m([q,r,t,p],{baseClass:"infographic-custom-color",templateString:n,_explicitNum:5,constructor:function(){this.inherited(arguments)},
postCreate:function(){this.inherited(arguments);this._ignoreEvent();this._initDom();this._initEvents();this._updateColorArray();this._careEvent()},setConfig:function(a){a&&Array.isArray(a.categories)&&(this._ignoreEvent(),this._spliteOriginData(a.categories),this._renderSelectInput(),this.customColorList.setConfig(a),this._careEvent())},getConfig:function(){return this.customColorList?this.customColorList.getConfig():!1},_onChange:function(){if(!this.ignoreChangeEvents){var a=this.getConfig();a&&
this.emit("change",a)}},_onDoAddClick:function(){var a=this.selectInput.get("value"),b=this._getComboxStoreIdByName(this.selectInput,a);b||0===b?this.numberType&&(b=Number(b)):b=a;if(b||0===b)if(this.selectInput.state="Normal",-1<this._getIds(this._explicitsData).indexOf(b))this.selectInput.focused=!0,this.selectInput.state="Error",this.selectInput.displayMessage(this.nls.categoryExists);else{var c=this.singleColorPicker.getColor();this._transferData(b,!0,c);this._renderSelectInput();this._showAddCategoryDisptch();
this.customColorList.addNewColorItem({id:b,text:a,label:a,color:c},!0)}},_onCancelClick:function(a){a.stopPropagation();this._showAddCategoryDisptch()},_initDom:function(){this.selectInput=new z({placeHolder:this.nls.comboxHint,style:{width:"150px"}});this.selectInput.placeAt(this.addActionDiv,"first");this.selectInput.disableInput();this.selectInput.invalidMessage=this.nls.categoryExists;this.colorsPicker=new u;this.colorsPicker.placeAt(this.colorsPickerDiv);this.colorsPicker.setMode(!1);this.customColorList=
new w({nls:this.nls});this.customColorList.placeAt(this.content);this.singleColorPicker=new v({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}});this.singleColorPicker.placeAt(this.colorDiv);this.singleColorPicker.startup()},_initEvents:function(){this.own(k(this.customColorList,"change",l.hitch(this,function(){this._onChange()})));this.own(k(this.colorsPicker,"change",l.hitch(this,function(){this._updateColorArray(!0)})));this.own(k(this.customColorList,"delete",
l.hitch(this,function(a){this._transferData(a,!1);this._renderSelectInput()})))},_updateSeelectInputState:function(){this.selectInput&&(this.isCodedValueType?(this.selectInput.disableInput(),this.selectInput.set("placeHolder",this.nls.comboxDisableInputHint),this.selectInput.setTitle(this.nls.comboxDisableInputHint)):(this.selectInput.enableInput(),this.selectInput.set("placeHolder",this.nls.comboxHint),this.selectInput.setTitle(this.nls.comboxHint)),this._implicitsData&&this._implicitsData.length||
(this.isCodedValueType?(this.selectInput.set("placeHolder",this.nls.comboxDisableInputEmptySelectHint),this.selectInput.setTitle(this.nls.comboxDisableInputEmptySelectHint)):(this.selectInput.set("placeHolder",this.nls.comboxDisableSelectHint),this.selectInput.setTitle(this.nls.comboxDisableSelectHint))))},setOriginalData:function(a,b,c){this.isCodedValueType=b;this.numberType=c;this.customColorList.setNumberType(c);this._originalData=[];this._explicitsData=[];this._implicitsData=[];this._originalData=
a},renderDefault:function(){this._originalData&&this._originalData.length&&(this._spliteOriginData(),this._renderSelectInput(),this.customColorList.setConfig({categories:this._explicitsData}))},_spliteOriginData:function(a){var b=this._originalData,c=this._explicitNum,e;if(a){this._explicitsData=a;var f=this._getIds(a);b&&b.length&&(this._implicitsData=b.filter(function(d){return 0>f.indexOf(d.value)}).map(function(d){return this._generateImplicitData(d.value,d.label)}.bind(this)))}else b&&b.length&&
(this._explicitsData=b.slice(0,c).map(function(d){e=h.getNextColor(this._colors,e);return this._generateExplicitData(d.value,d.label,e)}.bind(this)),this._implicitsData=b.slice(c,b.length).map(function(d){return this._generateImplicitData(d.value,d.label)}.bind(this)));this._updateSeelectInputState()},_getIds:function(a){return a.map(function(b){return b.id})},_transferData:function(a,b,c){var e=this._getLabel(a);e?b?(b=this._generateExplicitData(a,e,c),this._explicitsData.push(b),this._implicitsData=
this._implicitsData.filter(function(f){return f.id!==a})):(b=this._generateImplicitData(a,e),this._implicitsData.push(b),this._explicitsData=this._explicitsData.filter(function(f){return f.id!==a})):b?(b=this._generateExplicitData(a,a,c),this._explicitsData.push(b)):this._explicitsData=this._explicitsData.filter(function(f){return f.id!==a});this._updateSeelectInputState()},_generateImplicitData:function(a,b){return{id:a,name:b}},_generateExplicitData:function(a,b,c){return{id:a,text:b,label:b,color:c}},
_getLabel:function(a){var b=this._originalData.filter(function(c){return c.value===a})[0];return b&&b.label},_renderSelectInput:function(){var a=new y({data:this._implicitsData});this.selectInput.store=a;this.selectInput.setValue("")},_onAddCategoryClick:function(a){a.stopPropagation();a=this.colorsPicker.getColors();this._lastColor=h.getNextColor(a,this._lastColor);this.singleColorPicker.setColor(new x(this._lastColor));this._showAddCategoryAction()},_showAddCategoryDisptch:function(){g.removeClass(this.dispatchAdd,
"hide");g.addClass(this.actionAdd,"hide");this.selectInput.setValue("")},_showAddCategoryAction:function(){g.addClass(this.dispatchAdd,"hide");g.removeClass(this.actionAdd,"hide")},_ignoreEvent:function(){this.ignoreChangeEvents=!0},_careEvent:function(){setTimeout(function(){this.ignoreChangeEvents=!1}.bind(this),100)},_getComboxStoreIdByName:function(a,b){if(a&&a.store&&a.store.data&&a.store.data.length&&(a=a.store.data.filter(function(e){return e.name===b})[0])&&"undefined"!==typeof a.id)var c=
a.id;return c},_updateColorArray:function(a){var b=this.colorsPicker.getColors();2===b.length&&(b=h.separationGradientColors(b,6));this._colors=b;a&&this.customColorList&&this.customColorList.setColors(b)}})});