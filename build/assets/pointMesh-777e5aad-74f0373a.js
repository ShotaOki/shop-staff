import{v as X,w as V,P as Y,r as z,x as Q,y as A,e as j,B as x}from"./utils-f2d0253a-570d2917.js";import{n as k,g as E,v as W}from"./clipSpaceConversion-f5882815-33f72eac.js";import{C as F}from"./constants-ebd051c2-d612ae6c.js";var J=function(r){return`
varying vec3 vColor;
`+(r?"varying float positionY;":"")+`
attribute vec3 pointColor;
uniform float pointDiameter;
uniform float devicePixelRatio;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, 0.0, 1.0);
  gl_PointSize = pointDiameter * devicePixelRatio;
  vColor = pointColor;
  `+(r?"positionY = position.y;":"")+`
}
`},K=`
varying vec3 vColor;

void main() {
  // calculate position such that the center is (0, 0) in a region of [-1, 1] x [-1, 1]
  vec2 pos = 2.0 * gl_PointCoord.xy - 1.0;
  // r = distance squared from the origin of the point being rendered
  float r = dot(pos, pos);
  if (r > 1.0) {
    discard;
  }
  float alpha = 1.0 - smoothstep(0.5, 1.0, sqrt(r));
  gl_FragColor = vec4(vColor, alpha);
}
`,L=13,Z=function(r){if(r.length===0)return[];var n=z(r),e=Q(n).reverse(),o=[],l=new Set;e.forEach(function(M,m){var t=M.value;if(e[m].comparisonOperator===F.EQUAL){var O=E(e[m].color),s=O[0],u=O[1],v=O[2];o.push({upper:t,lower:t,color:[s,u,v]});return}if(m===0){var H=(Number.MAX_SAFE_INTEGER+t)/2,I=A(H,e);if(I!=null){var R=E(I.color),s=R[0],u=R[1],v=R[2];o.push({upper:Number.MAX_SAFE_INTEGER,lower:t,color:[s,u,v]})}return}var T=e[m-1],C=T.value,S=(C+t)/2,c=A(S,e);if(c!=null&&!l.has(T.value)){var P=E(c.color),s=P[0],u=P[1],v=P[2];T.comparisonOperator===F.EQUAL&&T.value===e[m].value?o.push({upper:C,lower:t,color:[s,u,v]}):o.push({upper:C,lower:t,color:[s,u,v]}),l.add(T.value)}if(m===e.length-1){if(S=(t+Number.MIN_SAFE_INTEGER)/2,c=A(S,e),c!=null&&!l.has(t)){var y=E(c.color),s=y[0],u=y[1],v=y[2];o.push({lower:Number.MIN_SAFE_INTEGER,upper:t,color:[s,u,v]})}return}var q=e[m+1],D=q.value;if(S=(t+D)/2,c=A(S,e),c!=null&&!l.has(t)){var _=E(c.color),s=_[0],u=_[1],v=_[2];o.push({upper:t,lower:D,color:[s,u,v]}),l.add(M.value)}});for(var d=o[o.length-1];o.length<L;){var h=e[e.length-1],p=h.value,a=Number.MIN_SAFE_INTEGER+p/2,i=A(a,e);if(i==null)o.push(d);else{var f=E(i.color),N=f[0],g=f[1],b=f[2];d={lower:Number.MIN_SAFE_INTEGER,upper:p,color:[N,g,b]},o.push(d)}}return o},$=`
#define MAX_NUM_TOTAL_THRESHOLD_BAND `+L+`

struct Band {
  float upper;
  float lower;
  vec3 color;
};

varying vec3 vColor;
varying float positionY;

uniform Band thresholdBands[MAX_NUM_TOTAL_THRESHOLD_BAND];
uniform float yPixelDensity;

void main() {
  // calculate position such that the center is (0, 0) in a region of [-1, 1] x [-1, 1]
  vec2 pos = 2.0 * gl_PointCoord.xy - 1.0;
  // r = distance squared from the origin of the point being rendered
  float r = dot(pos, pos);
  if (r > 1.0) {
    discard;
  }
  float alpha = 1.0 - smoothstep(0.5, 1.0, sqrt(r));

  for(int i = 0; i < MAX_NUM_TOTAL_THRESHOLD_BAND; i++) {
    bool isRangeBreached = positionY >= thresholdBands[i].lower && positionY <= thresholdBands[i].upper;
    bool isEqualsThreshold = thresholdBands[i].lower == thresholdBands[i].upper;
    bool isEqualsThresholdBreached = positionY == thresholdBands[i].upper;

    if (isRangeBreached || (isEqualsThreshold && isEqualsThresholdBreached)) {
       gl_FragColor = vec4(thresholdBands[i].color /255.0, alpha);
       break;
    } else {
       gl_FragColor = vec4(vColor, alpha);
    }
  }
}
`,ir=0,rr=6.25,er=4,U=function(r){var n=r[0]!=null?r[0].resolution:null;return n===0?er:rr},w=2,B=3,G=function(r,n,e){var o=n.filter(j).map(function(a){return W(a)}),l=o.flat(),d=r.attributes,h=d.position,p=d.pointColor;l.forEach(function(a,i){var f=a[0],N=a[1],g=a[2],b=a[3],M=a[4];h.array[i*w]=e(f),h.array[i*w+1]=N,p.array[i*B]=g,p.array[i*B+1]=b,p.array[i*B+2]=M}),r.setDrawRange(0,l.length),h.needsUpdate=!0,p.needsUpdate=!0},or=function(r,n){r.setAttribute("position",new x(new Float32Array(n*w),w)),r.setAttribute("pointColor",new x(new Uint8Array(n*B),B,!0))},lr=function(r){var n=r.toClipSpace,e=r.dataStreams,o=r.minBufferSize,l=r.bufferFactor,d=r.thresholdOptions,h=r.thresholds,p=Math.max(o,k(e)*l),a=new X;or(a,p),G(a,e,n);var i=d.showColor,f=i===void 0?!0:i,N=new V({vertexShader:J(f&&h.length>0),fragmentShader:!f||h.length===0?K:$,transparent:!0,uniforms:{pointDiameter:{value:U(e)},devicePixelRatio:{value:window.devicePixelRatio},thresholdBands:{value:Z(h)}}}),g=new Y(a,N);return g.frustumCulled=!1,g},sr=function(r,n,e,o){o===void 0&&(o=!0),n.material.uniforms.pointDiameter.value=U(r),n.material.uniforms.devicePixelRatio.value=window.devicePixelRatio,o&&G(n.geometry,r,e)};export{L as M,w as N,ir as P,lr as p,Z as t,sr as u};
