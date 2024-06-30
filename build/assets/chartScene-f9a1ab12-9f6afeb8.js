import{S as q,I as k,R as J,D as K,t as Q,y as W,B as Z,u as B}from"./utils-f2d0253a-570d2917.js";import{c as $,a as _,n as F,b as tt,v as at,g as et}from"./clipSpaceConversion-f5882815-33f72eac.js";import{g as C}from"./getDistanceFromDuration-5c7da5d2-e2a32872.js";var rt=`
precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec4 status;
attribute vec2 position;
attribute vec3 color;
varying vec3 vColor;

void main() {
  float width = status.z;
  float height = status.w;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * width + status.x, position.y * height + status.y, 0.0, 1.0);
  vColor = color;
}
`,st=`
precision highp float;
varying vec3 vColor;

void main() {
  gl_FragColor = vec4(vColor, 1.0);
}
`,D=1,nt=.5,ot=34-nt,A=[213,219,219],it=[135,149,150],ht=2,g=4,M=3,lt=function(t){return t.reduce(function(a,r){var e=Math.max(r.length,0);return a+e},0)},ct=function(t){var a=t.nextX,r=t.currX,e=t.toClipSpace,o=t.alarms,h=o?o.expires:void 0;if(h!=null){var i=C(e,h);return a==null?i:Math.min(C(e,a-r),i)}return a!=null?C(e,a-r):C(e,Date.now()-r)},N=function(t){var a=t.dataStreams,r=t.mesh,e=t.toClipSpace,o=t.thresholds,h=t.thresholdOptions,i=t.chartSize,d=t.alarms,u=a.map(function(m){return at(m)});r.count=lt(u);var c=r.geometry,l=c.attributes,s=l.color,n=l.status,p=0,S=0,v=D/a.length,O=ot/i.height,I=v-O;u.forEach(function(m,R){var z,f=A;m.forEach(function(b,E){var P=m[E+1],x=(P||[])[0],X=x===void 0?void 0:x,T=b[0],w=b[1];z!=null&&z!==w&&(f=f===A?it:A);var U=W(w,o);if(U==null||!h.showColor){var G=f[0],H=f[1],L=f[2];s.array[S]=G,s.array[S+1]=H,s.array[S+2]=L}else{var y=et(U.color),V=y[0],j=y[1],Y=y[2];s.array[S]=V,s.array[S+1]=j,s.array[S+2]=Y}S+=M,n.array[p]=e(T),n.array[p+1]=D-v*(R+1),n.array[p+2]=ct({currX:T,nextX:X,toClipSpace:e,alarms:d}),n.array[p+3]=I,p+=g,z=w})}),n.needsUpdate=!0,s.needsUpdate=!0},ut=[0,0,0,1,1,0,0,1,1,0,1,1],dt=function(t,a){t.setAttribute("position",new Z(new Float32Array(ut),ht)),t.setAttribute("status",new B(new Float32Array(a*g),g,!1)),t.setAttribute("color",new B(new Uint8Array(a*M),M,!0))},St=function(t){var a=t.alarms,r=t.dataStreams,e=t.toClipSpace,o=t.bufferFactor,h=t.minBufferSize,i=t.thresholdOptions,d=t.thresholds,u=t.chartSize,c=new k,l=Math.max(h,F(r)*o);dt(c,l);var s=new J({vertexShader:rt,fragmentShader:st,side:K,transparent:!1}),n=new Q(c,s,l);return N({dataStreams:r,mesh:n,toClipSpace:e,thresholds:d,thresholdOptions:i,chartSize:u,alarms:a}),n.frustumCulled=!1,n},pt=function(t){var a=t.alarms,r=t.statuses,e=t.dataStreams,o=t.toClipSpace,h=t.thresholdOptions,i=t.thresholds,d=t.chartSize,u=t.hasDataChanged,c=t.hasAnnotationChanged,l=t.hasSizeChanged;(u||c||l)&&N({dataStreams:e,mesh:r,toClipSpace:o,thresholds:i,thresholdOptions:h,chartSize:d,alarms:a})},vt=function(t){return t.geometry.attributes.status.array.length/g},ft=function(t){var a=t.alarms,r=t.dataStreams,e=t.container,o=t.viewport,h=t.bufferFactor,i=t.minBufferSize,d=t.onUpdate,u=t.thresholdOptions,c=t.thresholds,l=t.chartSize,s=new q,n=$(o);return s.add(St({alarms:a,dataStreams:r,toClipSpace:n,bufferFactor:h,minBufferSize:i,thresholdOptions:u,thresholds:c,chartSize:l})),_({scene:s,viewport:o,container:e,toClipSpace:n,onUpdate:d})},Ot=function(t){var a=t.scene,r=t.alarms,e=t.dataStreams,o=t.minBufferSize,h=t.bufferFactor,i=t.viewport,d=t.container,u=t.onUpdate,c=t.chartSize,l=t.thresholdOptions,s=t.thresholds,n=t.hasDataChanged,p=t.hasAnnotationChanged,S=t.hasSizeChanged,v=a.scene.children[0],O=vt(v)<F(e);return O||tt(i,a.toClipSpace)?ft({onUpdate:u,dataStreams:e,alarms:r,container:d,viewport:i,minBufferSize:o,bufferFactor:h,chartSize:c,thresholdOptions:l,thresholds:s}):(pt({alarms:r,statuses:v,dataStreams:e,toClipSpace:a.toClipSpace,thresholdOptions:l,thresholds:s,chartSize:c,hasDataChanged:n,hasAnnotationChanged:p,hasSizeChanged:S}),a)};export{D as H,ot as S,ft as c,Ot as u};
