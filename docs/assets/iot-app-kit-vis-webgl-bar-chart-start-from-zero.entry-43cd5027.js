import{h as t,r as h}from"./index-58060d13.js";import{D as p}from"./dataConstants-8e079f60-a2a46658.js";import{a as g}from"./time-051aeed0-3f16b7f0.js";import{A as m}from"./dataTypes-aaacf3dd-f0dc34ae.js";var i=new Date(2e3,0,0,0,0),n=new Date(2e3,0,0,0,10),_=function(){function a(o){var e=this;h(this,o),this.testData=[{x:new Date((i.getTime()+n.getTime())/2).getTime(),y:4500}],this.changeDataDirection=function(){e.testData=e.testData.map(function(r){var s=r.x,c=r.y;return{x:s,y:-c}})}}return a.prototype.render=function(){return t("div",{class:"synchro-chart-tests"},t("button",{id:"change-data-direction",onClick:this.changeDataDirection},"Change Data Direction"),t("br",null),t("br",null),t("div",{id:"chart-container",style:{width:"500px",height:"500px"}},t("iot-app-kit-vis-bar-chart",{dataStreams:[{id:"test",color:"purple",name:"test stream",data:this.testData,aggregationType:m.AVERAGE,resolution:g,dataType:p.NUMBER}],widgetId:"test-id",size:{width:500,height:500},viewport:{start:i,end:n},setViewport:function(){}}),t("iot-app-kit-vis-webgl-context",null)))},a}();export{_ as iot_app_kit_vis_webgl_bar_chart_start_from_zero};
