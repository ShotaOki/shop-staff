import{S as N,r as A,I as E,R as F,D as I,t as U,e as L,B as H,u as S}from"./utils-f2d0253a-570d2917.js";import{p as R,P as g,u as X,t as k,N as q,M as j}from"./pointMesh-777e5aad-74f0373a.js";import{c as G,a as W,n as w,b as Y,v as _}from"./clipSpaceConversion-f5882815-33f72eac.js";import{S as K}from"./common-a5fcad18-1e89ba4a.js";var $=function(e){return`
precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float width;
uniform float xPixelDensity;
uniform float yPixelDensity;
attribute vec2 currPoint;
attribute vec2 nextPoint;
attribute vec2 position;
attribute vec3 segmentColor;
varying vec3 vColor;
`+(e?"varying float yPositionPx;":"")+`

// line shader using instanced lines
// https://wwwtyro.net/2019/11/18/instanced-lines.html for information on this approach
void main() {
  // Convert the points to pixel coordinates - otherwise out basis vectors won't be perpendicular when
  // rasterized to the screen.
  vec2 currPointPx = vec2(currPoint.x / xPixelDensity, currPoint.y / yPixelDensity);
  vec2 nextPointPx = vec2(nextPoint.x / xPixelDensity, nextPoint.y / yPixelDensity);

  // create the basis vectors of a coordinate space where the x axis is parallel with
  // the path between currPoint and nextPoint, and the y axis is perpendicular to the
  // path between currPoint and nextPoint
  vec2 xBasis = nextPointPx - currPointPx;
  vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));

  // project the instance segment along the basis vectors
  vec2 positionPx = currPointPx + xBasis * position.x + yBasis * width * position.y;

  // Convert from pixel coordinates back to model space
  vec2 positionModel = vec2(positionPx.x * xPixelDensity, positionPx.y * yPixelDensity);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(positionModel, 0.0, 1.0);
  vColor = segmentColor;
  `+(e?"yPositionPx = positionPx.y;":"")+`
}
`},J=`
precision highp float;
varying vec3 vColor;

// Fills in triangles which make up a line segment, with the corresponding color
void main() {
  gl_FragColor = vec4(vColor, 1.0);
}
`,Q=`
// This file is only being used when we have threshold bands
// that will break the line segments into different color
#define MAX_NUM_TOTAL_THRESHOLD_BAND `+j+`

precision highp float;
struct Band {
  float upper;
  float lower;
  vec3 color;
};

varying vec3 vColor;
varying float yPositionPx;
uniform float yPixelDensity;
uniform Band thresholdBands[MAX_NUM_TOTAL_THRESHOLD_BAND];

// Fills in triangles which make up a line segment, with the corresponding color
void main() {
  for(int i = 0; i < MAX_NUM_TOTAL_THRESHOLD_BAND; i++) {
    bool isRangeBreached = yPositionPx > thresholdBands[i].lower / yPixelDensity
      && yPositionPx < thresholdBands[i].upper / yPixelDensity;
    bool isEqualsThreshold = thresholdBands[i].lower == thresholdBands[i].upper;
    bool isEqualsThresholdBreached = yPositionPx == thresholdBands[i].upper;

    if (isRangeBreached || (isEqualsThreshold && isEqualsThresholdBreached)) {
       gl_FragColor = vec4(thresholdBands[i].color / 255.0, 1.0);
       break;
    } else {
       gl_FragColor = vec4(vColor, 1.0);
    }
  }
}
`,C=function(e){var t=e.viewport,n=t.end,r=t.start,h=t.yMax,o=t.yMin,i=e.toClipSpace,c=e.size,a=c.width,s=c.height,d=Math.abs((i(n.getTime())-i(r.getTime()))/a),l=Math.abs((h-o)/s);return{x:d,y:l}},Z=K,b=1,m=2,P=3,V=function(e){var t=e.reduce(function(n,r){var h=Math.max(r.length,0);return n+h},0);return t},D=function(e,t,n){var r=e.filter(L).map(function(l){return _(l)});t.count=V(r);var h=t.geometry,o=h.attributes,i=o.currPoint,c=o.nextPoint,a=o.segmentColor,s=0,d=0;r.forEach(function(l){l.forEach(function(p,u){var v=u===l.length-1,f=v?p:l[u+1],y=p[0],x=p[1],B=p[2],M=p[3],O=p[4],T=f[0],z=f[1];i.array[s]=n(y),i.array[s+1]=x,c.array[s]=n(T),c.array[s+1]=z,a.array[d]=B,a.array[d+1]=M,a.array[d+2]=O,d+=P,s+=m})}),i.needsUpdate=!0,c.needsUpdate=!0,a.needsUpdate=!0},ee=[[0,-.5],[1,-.5],[1,.5],[0,-.5],[1,.5],[0,.5]],te=function(e,t){e.setAttribute("position",new H(new Float32Array(ee.flat()),m)),e.setAttribute("currPoint",new S(new Float32Array(t*m),m,!1)),e.setAttribute("nextPoint",new S(new Float32Array(t*m),m,!1)),e.setAttribute("segmentColor",new S(new Uint8Array(t*P),P,!0))},ne=function(e){var t=e.viewport,n=e.dataStreams,r=e.chartSize,h=e.minBufferSize,o=e.bufferFactor,i=e.toClipSpace,c=e.thresholdOptions,a=e.thresholds,s=new E,d=Math.max(h,w(n)*o);te(s,d);var l=C({viewport:t,toClipSpace:i,size:r}),p=l.x,u=l.y,v=c.showColor,f=v===void 0?!0:v,y=new F({vertexShader:$(f&&a.length>0),fragmentShader:!f||a.length===0?J:Q,side:I,transparent:!0,uniforms:{width:{value:Z},xPixelDensity:{value:p},yPixelDensity:{value:u},thresholdBands:{value:k(a)}}}),x=new U(s,y,d);return x.frustumCulled=!1,D(n,x,i),x},re=function(e){var t=e.chartSize,n=e.toClipSpace,r=e.lines,h=e.dataStreams,o=e.viewport,i=e.hasDataChanged,c=C({viewport:o,toClipSpace:n,size:t}),a=c.x,s=c.y;r.material.uniforms.xPixelDensity.value=a,r.material.uniforms.yPixelDensity.value=s,i&&D(h,r,n)},ie=function(e){var t=e.dataStreams,n=e.chartSize,r=e.container,h=e.viewport,o=e.minBufferSize,i=e.bufferFactor,c=e.onUpdate,a=e.thresholdOptions,s=e.thresholds,d=new N,l=G(h),p=A(s),u=[];return u[b]=ne({toClipSpace:l,chartSize:n,dataStreams:t,viewport:h,minBufferSize:o,bufferFactor:i,thresholdOptions:a,thresholds:p}),u[g]=R({dataStreams:t,minBufferSize:o,bufferFactor:i,toClipSpace:l,thresholdOptions:a,thresholds:p}),u.forEach(function(v){return d.add(v)}),W({scene:d,viewport:h,container:r,toClipSpace:l,onUpdate:c})},ae=function(e){return e.geometry.attributes.position.array.length/q},ce=function(e){var t=e.scene,n=e.dataStreams,r=e.chartSize,h=e.container,o=e.viewport,i=e.hasDataChanged,c=e.bufferFactor,a=e.minBufferSize,s=e.onUpdate,d=e.thresholdOptions,l=e.hasAnnotationChanged,p=e.thresholds,u=t.scene.children[b],v=t.scene.children[g],f=ae(v)<w(n);return f||Y(o,t.toClipSpace)||l?ie({dataStreams:n,chartSize:r,container:h,viewport:o,minBufferSize:a,bufferFactor:c,onUpdate:s,thresholdOptions:d,thresholds:p}):(re({lines:u,dataStreams:n,chartSize:r,viewport:o,hasDataChanged:i,toClipSpace:t.toClipSpace}),X(n,v,t.toClipSpace,i),t)};export{ie as c,ce as u};
