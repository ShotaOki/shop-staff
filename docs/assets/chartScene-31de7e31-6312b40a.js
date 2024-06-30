import{S as I,I as P,R,D as T,t as E,e as G,y as j,B as W,u as O}from"./utils-f2d0253a-570d2917.js";import{c as q,a as L,n as y,b as X,v as Y,g as k}from"./clipSpaceConversion-f5882815-33f72eac.js";import{g as B}from"./getDistanceFromDuration-5c7da5d2-e2a32872.js";var H=`
precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float width;
attribute vec2 bar;
attribute vec2 position;
attribute vec3 color;
varying vec3 vColor;

void main() {
  // Negative width here because we want to render the bars' width to the left side starting from its x position.
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * -width + bar.x, position.y * bar.y, 0.0, 1.0);
  vColor = color;
}
`,J=`
precision highp float;
varying vec3 vColor;

void main() {
  gl_FragColor = vec4(vColor, 1.0);
}
`,K=1/6,Q=function(t,e){return B(t,e*K)},V=function(t){var e=t.toClipSpace,r=t.resolution,a=t.numDataStreams;return(B(e,r)-Q(e,r))/a},v=2,C=3,Z=function(t){return t.reduce(function(e,r){return e+r.length},0)},b=function(t,e){if(t.length===0)return 0;var r=t[0].resolution;return V({toClipSpace:e,numDataStreams:t.length,resolution:r})},M=function(t){var e=t.dataStreams,r=t.mesh,a=t.toClipSpace,s=t.thresholds,h=t.thresholdOptions,i=e.filter(G).map(function(p){return Y(p)});r.count=Z(i);var c=r.geometry,l=c.attributes,o=l.color,n=l.bar,u=0,d=0;i.forEach(function(p,m){p.forEach(function(f){var D=f[0],g=f[1],F=f[2],z=f[3],A=f[4];n.array[u]=a(D)-m*b(e,a),n.array[u+1]=g;var w=j(g,s);if(w==null||!h.showColor)o.array[d]=F,o.array[d+1]=z,o.array[d+2]=A;else{var S=k(w.color),U=S[0],N=S[1],x=S[2];o.array[d]=U,o.array[d+1]=N,o.array[d+2]=x}d+=C,u+=v})}),n.needsUpdate=!0,o.needsUpdate=!0},$=[0,0,0,1,1,0,0,1,1,0,1,1],_=function(t,e){t.setAttribute("position",new W(new Float32Array($),v)),t.setAttribute("bar",new O(new Float32Array(e*v),v,!1)),t.setAttribute("color",new O(new Uint8Array(e*C),C,!0))},tt=function(t){var e=t.dataStreams,r=t.toClipSpace,a=t.bufferFactor,s=t.minBufferSize,h=t.thresholdOptions,i=t.thresholds,c=new P,l=Math.max(s,y(e)*a);_(c,l);var o=new R({vertexShader:H,fragmentShader:J,side:T,transparent:!1,uniforms:{width:{value:b(e,r)}}}),n=new E(c,o,l);return M({dataStreams:e,mesh:n,toClipSpace:r,thresholds:i,thresholdOptions:h}),n.frustumCulled=!1,n},et=function(t){var e=t.bars,r=t.dataStreams,a=t.toClipSpace,s=t.hasDataChanged,h=t.thresholdOptions,i=t.thresholds;s&&(e.material.uniforms.width.value=b(r,a),M({dataStreams:r,mesh:e,toClipSpace:a,thresholds:i,thresholdOptions:h}))},rt=function(t){return t.geometry.attributes.bar.array.length/v},at=function(t){var e=t.dataStreams,r=t.container,a=t.viewport,s=t.bufferFactor,h=t.minBufferSize,i=t.onUpdate,c=t.thresholdOptions,l=t.thresholds,o=new I,n=q(a);return o.add(tt({dataStreams:e,toClipSpace:n,bufferFactor:s,minBufferSize:h,thresholdOptions:c,thresholds:l})),L({scene:o,viewport:a,container:r,toClipSpace:n,onUpdate:i})},st=function(t){var e=t.scene,r=t.dataStreams,a=t.hasDataChanged,s=t.minBufferSize,h=t.bufferFactor,i=t.viewport,c=t.container,l=t.onUpdate,o=t.chartSize,n=t.thresholdOptions,u=t.thresholds,d=t.hasAnnotationChanged,p=e.scene.children[0],m=rt(p)<y(r);return m||X(i,e.toClipSpace)||d?at({onUpdate:l,dataStreams:r,container:c,viewport:i,minBufferSize:s,bufferFactor:h,chartSize:o,thresholdOptions:n,thresholds:u}):(et({bars:p,dataStreams:r,toClipSpace:e.toClipSpace,hasDataChanged:a,thresholdOptions:n,thresholds:u}),e)};export{at as c,st as u};
