import{D as qa}from"./dataConstants-8e079f60-a2a46658.js";import{d as iu}from"./time-051aeed0-3f16b7f0.js";import{C as lt,b as au}from"./constants-ebd051c2-d612ae6c.js";var wn=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)i.hasOwnProperty(a)&&(r[a]=i[a])},e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),ou=globalThis&&globalThis.__awaiter||function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function s(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?a(c.value):i(c.value).then(s,l)}u((r=r.apply(e,t||[])).next())})},su=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=u[0]&2?i.return:u[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;switch(i=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(u[0]===6&&n.label<a[1]){n.label=a[1],a=u;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(u);break}a[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},lu=globalThis&&globalThis.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,i++)r[i]=a[o];return r},An,El="125",uu=0,zo=1,cu=2,Tl=1,hu=2,Ur=3,ia=0,Qe=1,aa=2,Al=1,Gr=0,Vr=1,Uo=2,Ho=3,Go=4,fu=5,or=100,du=101,pu=102,Vo=103,ko=104,vu=200,mu=201,gu=202,yu=203,Ll=204,Rl=205,_u=206,xu=207,bu=208,Mu=209,wu=210,Su=0,Eu=1,Tu=2,Xa=3,Au=4,Lu=5,Ru=6,Cu=7,oa=0,Pu=1,Du=2,kr=0,Iu=1,Ou=2,Nu=3,Fu=4,Bu=5,Cl=300,Ao=301,Lo=302,Wo=303,qo=304,Ro=306,Co=307,Ya=1e3,yt=1001,Za=1002,ut=1003,Xo=1004,Yo=1005,rt=1006,zu=1007,sa=1008,Po=1009,Uu=1010,Hu=1011,qi=1012,Gu=1013,ki=1014,mn=1015,Xi=1016,Vu=1017,ku=1018,Wu=1019,Wr=1020,qu=1021,Dn=1022,Ft=1023,Xu=1024,Yu=1025,hr=1026,jr=1027,Zu=1028,ju=1029,Ju=1030,Qu=1031,$u=1032,Ku=1033,Zo=33776,jo=33777,Jo=33778,Qo=33779,$o=35840,Ko=35841,es=35842,ts=35843,ec=36196,ns=37492,rs=37496,tc=37808,nc=37809,rc=37810,ic=37811,ac=37812,oc=37813,sc=37814,lc=37815,uc=37816,cc=37817,hc=37818,fc=37819,dc=37820,pc=37821,vc=36492,mc=37840,gc=37841,yc=37842,_c=37843,xc=37844,bc=37845,Mc=37846,wc=37847,Sc=37848,Ec=37849,Tc=37850,Ac=37851,Lc=37852,Rc=37853,Cc=2200,Pc=2201,Dc=2202,Yi=2300,Wi=2301,ma=2302,sr=2400,lr=2401,Zi=2402,Do=2500,Pl=2501,Ic=0,ui=3e3,Dl=3001,Oc=3007,Nc=3002,Fc=3003,Bc=3004,zc=3005,Uc=3006,Hc=3200,Gc=3201,Sr=0,Vc=1,ga=7680,kc=519,la=35044,Jr=35048,is="300 es";function Sn(){}Object.assign(Sn.prototype,{addEventListener:function(e,t){this._listeners===void 0&&(this._listeners={});var n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)},hasEventListener:function(e,t){if(this._listeners===void 0)return!1;var n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1},removeEventListener:function(e,t){if(this._listeners!==void 0){var n=this._listeners,r=n[e];if(r!==void 0){var i=r.indexOf(t);i!==-1&&r.splice(i,1)}}},dispatchEvent:function(e){if(this._listeners!==void 0){var t=this._listeners,n=t[e.type];if(n!==void 0){e.target=this;for(var r=n.slice(0),i=0,a=r.length;i<a;i++)r[i].call(this,e)}}}});var $e=[];for(var Rr=0;Rr<256;Rr++)$e[Rr]=(Rr<16?"0":"")+Rr.toString(16);var fi=1234567,xe={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=$e[e&255]+$e[e>>8&255]+$e[e>>16&255]+$e[e>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[n&63|128]+$e[n>>8&255]+"-"+$e[n>>16&255]+$e[n>>24&255]+$e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255];return i.toUpperCase()},clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},euclideanModulo:function(e,t){return(e%t+t)%t},mapLinear:function(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)},lerp:function(e,t,n){return(1-n)*e+n*t},damp:function(e,t,n,r){return xe.lerp(e,t,1-Math.exp(-n*r))},pingpong:function(e,t){return t===void 0&&(t=1),t-Math.abs(xe.euclideanModulo(e,t*2)-t)},smoothstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))},smootherstep:function(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){return e!==void 0&&(fi=e%2147483647),fi=fi*16807%2147483647,(fi-1)/2147483646},degToRad:function(e){return e*xe.DEG2RAD},radToDeg:function(e){return e*xe.RAD2DEG},isPowerOfTwo:function(e){return(e&e-1)===0&&e!==0},ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:function(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))},setQuaternionFromProperEuler:function(e,t,n,r,i){var a=Math.cos,o=Math.sin,s=a(n/2),l=o(n/2),u=a((t+r)/2),c=o((t+r)/2),h=a((t-r)/2),d=o((t-r)/2),f=a((r-t)/2),v=o((r-t)/2);switch(i){case"XYX":e.set(s*c,l*h,l*d,s*u);break;case"YZY":e.set(l*d,s*c,l*h,s*u);break;case"ZXZ":e.set(l*h,l*d,s*c,s*u);break;case"XZX":e.set(s*c,l*v,l*f,s*u);break;case"YXY":e.set(l*f,s*c,l*v,s*u);break;case"ZYZ":e.set(l*v,l*f,s*c,s*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}},W=function(){function e(t,n){t===void 0&&(t=0),n===void 0&&(n=0),Object.defineProperty(this,"isVector2",{value:!0}),this.x=t,this.y=n}return Object.defineProperty(e.prototype,"width",{get:function(){return this.x},set:function(t){this.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.y},set:function(t){this.y=t},enumerable:!1,configurable:!0}),e.prototype.set=function(t,n){return this.x=t,this.y=n,this},e.prototype.setScalar=function(t){return this.x=t,this.y=t,this},e.prototype.setX=function(t){return this.x=t,this},e.prototype.setY=function(t){return this.y=t,this},e.prototype.setComponent=function(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this},e.prototype.getComponent=function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}},e.prototype.clone=function(){return new this.constructor(this.x,this.y)},e.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this},e.prototype.add=function(t,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this)},e.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this},e.prototype.addVectors=function(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this},e.prototype.addScaledVector=function(t,n){return this.x+=t.x*n,this.y+=t.y*n,this},e.prototype.sub=function(t,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this)},e.prototype.subScalar=function(t){return this.x-=t,this.y-=t,this},e.prototype.subVectors=function(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this},e.prototype.multiply=function(t){return this.x*=t.x,this.y*=t.y,this},e.prototype.multiplyScalar=function(t){return this.x*=t,this.y*=t,this},e.prototype.divide=function(t){return this.x/=t.x,this.y/=t.y,this},e.prototype.divideScalar=function(t){return this.multiplyScalar(1/t)},e.prototype.applyMatrix3=function(t){var n=this.x,r=this.y,i=t.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this},e.prototype.min=function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},e.prototype.max=function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},e.prototype.clamp=function(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this},e.prototype.clampScalar=function(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this},e.prototype.clampLength=function(t,n){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))},e.prototype.floor=function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},e.prototype.ceil=function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},e.prototype.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},e.prototype.roundToZero=function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},e.prototype.negate=function(){return this.x=-this.x,this.y=-this.y,this},e.prototype.dot=function(t){return this.x*t.x+this.y*t.y},e.prototype.cross=function(t){return this.x*t.y-this.y*t.x},e.prototype.lengthSq=function(){return this.x*this.x+this.y*this.y},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},e.prototype.manhattanLength=function(){return Math.abs(this.x)+Math.abs(this.y)},e.prototype.normalize=function(){return this.divideScalar(this.length()||1)},e.prototype.angle=function(){var t=Math.atan2(-this.y,-this.x)+Math.PI;return t},e.prototype.distanceTo=function(t){return Math.sqrt(this.distanceToSquared(t))},e.prototype.distanceToSquared=function(t){var n=this.x-t.x,r=this.y-t.y;return n*n+r*r},e.prototype.manhattanDistanceTo=function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},e.prototype.setLength=function(t){return this.normalize().multiplyScalar(t)},e.prototype.lerp=function(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this},e.prototype.lerpVectors=function(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this},e.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},e.prototype.fromArray=function(t,n){return n===void 0&&(n=0),this.x=t[n],this.y=t[n+1],this},e.prototype.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this.x,t[n+1]=this.y,t},e.prototype.fromBufferAttribute=function(t,n,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this},e.prototype.rotateAround=function(t,n){var r=Math.cos(n),i=Math.sin(n),a=this.x-t.x,o=this.y-t.y;return this.x=a*r-o*i+t.x,this.y=a*i+o*r+t.y,this},e.prototype.random=function(){return this.x=Math.random(),this.y=Math.random(),this},e}(),wt=function(){function e(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}return e.prototype.set=function(t,n,r,i,a,o,s,l,u){var c=this.elements;return c[0]=t,c[1]=i,c[2]=s,c[3]=n,c[4]=a,c[5]=l,c[6]=r,c[7]=o,c[8]=u,this},e.prototype.identity=function(){return this.set(1,0,0,0,1,0,0,0,1),this},e.prototype.clone=function(){return new this.constructor().fromArray(this.elements)},e.prototype.copy=function(t){var n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this},e.prototype.extractBasis=function(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this},e.prototype.setFromMatrix4=function(t){var n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this},e.prototype.multiply=function(t){return this.multiplyMatrices(this,t)},e.prototype.premultiply=function(t){return this.multiplyMatrices(t,this)},e.prototype.multiplyMatrices=function(t,n){var r=t.elements,i=n.elements,a=this.elements,o=r[0],s=r[3],l=r[6],u=r[1],c=r[4],h=r[7],d=r[2],f=r[5],v=r[8],g=i[0],_=i[3],m=i[6],p=i[1],E=i[4],A=i[7],b=i[2],y=i[5],T=i[8];return a[0]=o*g+s*p+l*b,a[3]=o*_+s*E+l*y,a[6]=o*m+s*A+l*T,a[1]=u*g+c*p+h*b,a[4]=u*_+c*E+h*y,a[7]=u*m+c*A+h*T,a[2]=d*g+f*p+v*b,a[5]=d*_+f*E+v*y,a[8]=d*m+f*A+v*T,this},e.prototype.multiplyScalar=function(t){var n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this},e.prototype.determinant=function(){var t=this.elements,n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8];return n*o*c-n*s*u-r*a*c+r*s*l+i*a*u-i*o*l},e.prototype.invert=function(){var t=this.elements,n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],h=c*o-s*u,d=s*l-c*a,f=u*a-o*l,v=n*h+r*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);var g=1/v;return t[0]=h*g,t[1]=(i*u-c*r)*g,t[2]=(s*r-i*o)*g,t[3]=d*g,t[4]=(c*n-i*l)*g,t[5]=(i*a-s*n)*g,t[6]=f*g,t[7]=(r*l-u*n)*g,t[8]=(o*n-r*a)*g,this},e.prototype.transpose=function(){var t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this},e.prototype.getNormalMatrix=function(t){return this.setFromMatrix4(t).copy(this).invert().transpose()},e.prototype.transposeIntoArray=function(t){var n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this},e.prototype.setUvTransform=function(t,n,r,i,a,o,s){var l=Math.cos(a),u=Math.sin(a);return this.set(r*l,r*u,-r*(l*o+u*s)+o+t,-i*u,i*l,-i*(-u*o+l*s)+s+n,0,0,1),this},e.prototype.scale=function(t,n){var r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=n,r[4]*=n,r[7]*=n,this},e.prototype.rotate=function(t){var n=Math.cos(t),r=Math.sin(t),i=this.elements,a=i[0],o=i[3],s=i[6],l=i[1],u=i[4],c=i[7];return i[0]=n*a+r*l,i[3]=n*o+r*u,i[6]=n*s+r*c,i[1]=-r*a+n*l,i[4]=-r*o+n*u,i[7]=-r*s+n*c,this},e.prototype.translate=function(t,n){var r=this.elements;return r[0]+=t*r[2],r[3]+=t*r[5],r[6]+=t*r[8],r[1]+=n*r[2],r[4]+=n*r[5],r[7]+=n*r[8],this},e.prototype.equals=function(t){for(var n=this.elements,r=t.elements,i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0},e.prototype.fromArray=function(t,n){n===void 0&&(n=0);for(var r=0;r<9;r++)this.elements[r]=t[r+n];return this},e.prototype.toArray=function(t,n){t===void 0&&(t=[]),n===void 0&&(n=0);var r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t},e}(),kn,Er={getDataURL:function(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;var t;if(e instanceof HTMLCanvasElement)t=e;else{kn===void 0&&(kn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),kn.width=e.width,kn.height=e.height;var n=kn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kn}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}},Wc=0;function Fe(e,t,n,r,i,a,o,s,l,u){e===void 0&&(e=Fe.DEFAULT_IMAGE),t===void 0&&(t=Fe.DEFAULT_MAPPING),n===void 0&&(n=yt),r===void 0&&(r=yt),i===void 0&&(i=rt),a===void 0&&(a=sa),o===void 0&&(o=Ft),s===void 0&&(s=Po),l===void 0&&(l=1),u===void 0&&(u=ui),Object.defineProperty(this,"id",{value:Wc++}),this.uuid=xe.generateUUID(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=s,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}Fe.DEFAULT_IMAGE=void 0;Fe.DEFAULT_MAPPING=Cl;Fe.prototype=Object.assign(Object.create(Sn.prototype),{constructor:Fe,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this},toJSON:function(e){var t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];var n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){var r=this.image;if(r.uuid===void 0&&(r.uuid=xe.generateUUID()),!t&&e.images[r.uuid]===void 0){var i=void 0;if(Array.isArray(r)){i=[];for(var a=0,o=r.length;a<o;a++)r[a].isDataTexture?i.push(ya(r[a].image)):i.push(ya(r[a]))}else i=ya(r);e.images[r.uuid]={uuid:r.uuid,url:i}}n.image=r.uuid}return t||(e.textures[this.uuid]=n),n},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ya:e.x=e.x-Math.floor(e.x);break;case yt:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ya:e.y=e.y-Math.floor(e.y);break;case yt:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}});Object.defineProperty(Fe.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function ya(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Er.getDataURL(e):e.data?{data:Array.prototype.slice.call(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ie=function(){function e(t,n,r,i){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),i===void 0&&(i=1),Object.defineProperty(this,"isVector4",{value:!0}),this.x=t,this.y=n,this.z=r,this.w=i}return Object.defineProperty(e.prototype,"width",{get:function(){return this.z},set:function(t){this.z=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.w},set:function(t){this.w=t},enumerable:!1,configurable:!0}),e.prototype.set=function(t,n,r,i){return this.x=t,this.y=n,this.z=r,this.w=i,this},e.prototype.setScalar=function(t){return this.x=t,this.y=t,this.z=t,this.w=t,this},e.prototype.setX=function(t){return this.x=t,this},e.prototype.setY=function(t){return this.y=t,this},e.prototype.setZ=function(t){return this.z=t,this},e.prototype.setW=function(t){return this.w=t,this},e.prototype.setComponent=function(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this},e.prototype.getComponent=function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}},e.prototype.clone=function(){return new this.constructor(this.x,this.y,this.z,this.w)},e.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this},e.prototype.add=function(t,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)},e.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this},e.prototype.addVectors=function(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this},e.prototype.addScaledVector=function(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this},e.prototype.sub=function(t,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)},e.prototype.subScalar=function(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this},e.prototype.subVectors=function(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this},e.prototype.multiply=function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this},e.prototype.multiplyScalar=function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},e.prototype.applyMatrix4=function(t){var n=this.x,r=this.y,i=this.z,a=this.w,o=t.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*a,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*a,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*a,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*a,this},e.prototype.divideScalar=function(t){return this.multiplyScalar(1/t)},e.prototype.setAxisAngleFromQuaternion=function(t){this.w=2*Math.acos(t.w);var n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this},e.prototype.setAxisAngleFromRotationMatrix=function(t){var n,r,i,a,o=.01,s=.1,l=t.elements,u=l[0],c=l[4],h=l[8],d=l[1],f=l[5],v=l[9],g=l[2],_=l[6],m=l[10];if(Math.abs(c-d)<o&&Math.abs(h-g)<o&&Math.abs(v-_)<o){if(Math.abs(c+d)<s&&Math.abs(h+g)<s&&Math.abs(v+_)<s&&Math.abs(u+f+m-3)<s)return this.set(1,0,0,0),this;n=Math.PI;var p=(u+1)/2,E=(f+1)/2,A=(m+1)/2,b=(c+d)/4,y=(h+g)/4,T=(v+_)/4;return p>E&&p>A?p<o?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(p),i=b/r,a=y/r):E>A?E<o?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(E),r=b/i,a=T/i):A<o?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(A),r=y/a,i=T/a),this.set(r,i,a,n),this}var G=Math.sqrt((_-v)*(_-v)+(h-g)*(h-g)+(d-c)*(d-c));return Math.abs(G)<.001&&(G=1),this.x=(_-v)/G,this.y=(h-g)/G,this.z=(d-c)/G,this.w=Math.acos((u+f+m-1)/2),this},e.prototype.min=function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this},e.prototype.max=function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this},e.prototype.clamp=function(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this},e.prototype.clampScalar=function(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this},e.prototype.clampLength=function(t,n){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))},e.prototype.floor=function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},e.prototype.ceil=function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},e.prototype.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},e.prototype.roundToZero=function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},e.prototype.negate=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},e.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},e.prototype.lengthSq=function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.manhattanLength=function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},e.prototype.normalize=function(){return this.divideScalar(this.length()||1)},e.prototype.setLength=function(t){return this.normalize().multiplyScalar(t)},e.prototype.lerp=function(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this},e.prototype.lerpVectors=function(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this},e.prototype.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w},e.prototype.fromArray=function(t,n){return n===void 0&&(n=0),this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this},e.prototype.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t},e.prototype.fromBufferAttribute=function(t,n,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this},e.prototype.random=function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this},e}(),qr=function(e){wn(t,e);function t(n,r,i){var a=e.call(this)||this;return Object.defineProperty(a,"isWebGLRenderTarget",{value:!0}),a.width=n,a.height=r,a.scissor=new Ie(0,0,n,r),a.scissorTest=!1,a.viewport=new Ie(0,0,n,r),i=i||{},a.texture=new Fe(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),a.texture.image={},a.texture.image.width=n,a.texture.image.height=r,a.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,a.texture.minFilter=i.minFilter!==void 0?i.minFilter:rt,a.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,a.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,a.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,a}return t.prototype.setSize=function(n,r){(this.width!==n||this.height!==r)&&(this.width=n,this.height=r,this.texture.image.width=n,this.texture.image.height=r,this.dispose()),this.viewport.set(0,0,n,r),this.scissor.set(0,0,n,r)},t.prototype.clone=function(){return new this.constructor().copy(this)},t.prototype.copy=function(n){return this.width=n.width,this.height=n.height,this.viewport.copy(n.viewport),this.texture=n.texture.clone(),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this},t.prototype.dispose=function(){this.dispatchEvent({type:"dispose"})},t}(Sn),_t=function(){function e(t,n,r,i){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),i===void 0&&(i=1),Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=t,this._y=n,this._z=r,this._w=i}return e.slerp=function(t,n,r,i){return r.copy(t).slerp(n,i)},e.slerpFlat=function(t,n,r,i,a,o,s){var l=r[i+0],u=r[i+1],c=r[i+2],h=r[i+3],d=a[o+0],f=a[o+1],v=a[o+2],g=a[o+3];if(h!==g||l!==d||u!==f||c!==v){var _=1-s,m=l*d+u*f+c*v+h*g,p=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){var A=Math.sqrt(E),b=Math.atan2(A,m*p);_=Math.sin(_*b)/A,s=Math.sin(s*b)/A}var y=s*p;if(l=l*_+d*y,u=u*_+f*y,c=c*_+v*y,h=h*_+g*y,_===1-s){var T=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=T,u*=T,c*=T,h*=T}}t[n]=l,t[n+1]=u,t[n+2]=c,t[n+3]=h},e.multiplyQuaternionsFlat=function(t,n,r,i,a,o){var s=r[i],l=r[i+1],u=r[i+2],c=r[i+3],h=a[o],d=a[o+1],f=a[o+2],v=a[o+3];return t[n]=s*v+c*h+l*f-u*d,t[n+1]=l*v+c*d+u*h-s*f,t[n+2]=u*v+c*f+s*d-l*h,t[n+3]=c*v-s*h-l*d-u*f,t},Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"w",{get:function(){return this._w},set:function(t){this._w=t,this._onChangeCallback()},enumerable:!1,configurable:!0}),e.prototype.set=function(t,n,r,i){return this._x=t,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this},e.prototype.clone=function(){return new this.constructor(this._x,this._y,this._z,this._w)},e.prototype.copy=function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this},e.prototype.setFromEuler=function(t,n){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var r=t._x,i=t._y,a=t._z,o=t._order,s=Math.cos,l=Math.sin,u=s(r/2),c=s(i/2),h=s(a/2),d=l(r/2),f=l(i/2),v=l(a/2);switch(o){case"XYZ":this._x=d*c*h+u*f*v,this._y=u*f*h-d*c*v,this._z=u*c*v+d*f*h,this._w=u*c*h-d*f*v;break;case"YXZ":this._x=d*c*h+u*f*v,this._y=u*f*h-d*c*v,this._z=u*c*v-d*f*h,this._w=u*c*h+d*f*v;break;case"ZXY":this._x=d*c*h-u*f*v,this._y=u*f*h+d*c*v,this._z=u*c*v+d*f*h,this._w=u*c*h-d*f*v;break;case"ZYX":this._x=d*c*h-u*f*v,this._y=u*f*h+d*c*v,this._z=u*c*v-d*f*h,this._w=u*c*h+d*f*v;break;case"YZX":this._x=d*c*h+u*f*v,this._y=u*f*h+d*c*v,this._z=u*c*v-d*f*h,this._w=u*c*h-d*f*v;break;case"XZY":this._x=d*c*h-u*f*v,this._y=u*f*h-d*c*v,this._z=u*c*v+d*f*h,this._w=u*c*h+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this},e.prototype.setFromAxisAngle=function(t,n){var r=n/2,i=Math.sin(r);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(r),this._onChangeCallback(),this},e.prototype.setFromRotationMatrix=function(t){var n=t.elements,r=n[0],i=n[4],a=n[8],o=n[1],s=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=r+s+h;if(d>0){var f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(a-u)*f,this._z=(o-i)*f}else if(r>s&&r>h){var f=2*Math.sqrt(1+r-s-h);this._w=(c-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(a+u)/f}else if(s>h){var f=2*Math.sqrt(1+s-r-h);this._w=(a-u)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+c)/f}else{var f=2*Math.sqrt(1+h-r-s);this._w=(o-i)/f,this._x=(a+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this},e.prototype.setFromUnitVectors=function(t,n){var r=1e-6,i=t.dot(n)+1;return i<r?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()},e.prototype.angleTo=function(t){return 2*Math.acos(Math.abs(xe.clamp(this.dot(t),-1,1)))},e.prototype.rotateTowards=function(t,n){var r=this.angleTo(t);if(r===0)return this;var i=Math.min(1,n/r);return this.slerp(t,i),this},e.prototype.identity=function(){return this.set(0,0,0,1)},e.prototype.invert=function(){return this.conjugate()},e.prototype.conjugate=function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},e.prototype.dot=function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w},e.prototype.lengthSq=function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},e.prototype.length=function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},e.prototype.normalize=function(){var t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this},e.prototype.multiply=function(t,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,n)):this.multiplyQuaternions(this,t)},e.prototype.premultiply=function(t){return this.multiplyQuaternions(t,this)},e.prototype.multiplyQuaternions=function(t,n){var r=t._x,i=t._y,a=t._z,o=t._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=r*c+o*s+i*u-a*l,this._y=i*c+o*l+a*s-r*u,this._z=a*c+o*u+r*l-i*s,this._w=o*c-r*s-i*l-a*u,this._onChangeCallback(),this},e.prototype.slerp=function(t,n){if(n===0)return this;if(n===1)return this.copy(t);var r=this._x,i=this._y,a=this._z,o=this._w,s=o*t._w+r*t._x+i*t._y+a*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=o,this._x=r,this._y=i,this._z=a,this;var l=1-s*s;if(l<=Number.EPSILON){var u=1-n;return this._w=u*o+n*this._w,this._x=u*r+n*this._x,this._y=u*i+n*this._y,this._z=u*a+n*this._z,this.normalize(),this._onChangeCallback(),this}var c=Math.sqrt(l),h=Math.atan2(c,s),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=o*d+this._w*f,this._x=r*d+this._x*f,this._y=i*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this},e.prototype.equals=function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w},e.prototype.fromArray=function(t,n){return n===void 0&&(n=0),this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this},e.prototype.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t},e.prototype.fromBufferAttribute=function(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this},e.prototype._onChange=function(t){return this._onChangeCallback=t,this},e.prototype._onChangeCallback=function(){},e}(),S=function(){function e(t,n,r){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),Object.defineProperty(this,"isVector3",{value:!0}),this.x=t,this.y=n,this.z=r}return e.prototype.set=function(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this},e.prototype.setScalar=function(t){return this.x=t,this.y=t,this.z=t,this},e.prototype.setX=function(t){return this.x=t,this},e.prototype.setY=function(t){return this.y=t,this},e.prototype.setZ=function(t){return this.z=t,this},e.prototype.setComponent=function(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this},e.prototype.getComponent=function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}},e.prototype.clone=function(){return new this.constructor(this.x,this.y,this.z)},e.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},e.prototype.add=function(t,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},e.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this.z+=t,this},e.prototype.addVectors=function(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this},e.prototype.addScaledVector=function(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this},e.prototype.sub=function(t,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},e.prototype.subScalar=function(t){return this.x-=t,this.y-=t,this.z-=t,this},e.prototype.subVectors=function(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this},e.prototype.multiply=function(t,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,n)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},e.prototype.multiplyScalar=function(t){return this.x*=t,this.y*=t,this.z*=t,this},e.prototype.multiplyVectors=function(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this},e.prototype.applyEuler=function(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(as.setFromEuler(t))},e.prototype.applyAxisAngle=function(t,n){return this.applyQuaternion(as.setFromAxisAngle(t,n))},e.prototype.applyMatrix3=function(t){var n=this.x,r=this.y,i=this.z,a=t.elements;return this.x=a[0]*n+a[3]*r+a[6]*i,this.y=a[1]*n+a[4]*r+a[7]*i,this.z=a[2]*n+a[5]*r+a[8]*i,this},e.prototype.applyNormalMatrix=function(t){return this.applyMatrix3(t).normalize()},e.prototype.applyMatrix4=function(t){var n=this.x,r=this.y,i=this.z,a=t.elements,o=1/(a[3]*n+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*i+a[12])*o,this.y=(a[1]*n+a[5]*r+a[9]*i+a[13])*o,this.z=(a[2]*n+a[6]*r+a[10]*i+a[14])*o,this},e.prototype.applyQuaternion=function(t){var n=this.x,r=this.y,i=this.z,a=t.x,o=t.y,s=t.z,l=t.w,u=l*n+o*i-s*r,c=l*r+s*n-a*i,h=l*i+a*r-o*n,d=-a*n-o*r-s*i;return this.x=u*l+d*-a+c*-s-h*-o,this.y=c*l+d*-o+h*-a-u*-s,this.z=h*l+d*-s+u*-o-c*-a,this},e.prototype.project=function(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)},e.prototype.unproject=function(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)},e.prototype.transformDirection=function(t){var n=this.x,r=this.y,i=this.z,a=t.elements;return this.x=a[0]*n+a[4]*r+a[8]*i,this.y=a[1]*n+a[5]*r+a[9]*i,this.z=a[2]*n+a[6]*r+a[10]*i,this.normalize()},e.prototype.divide=function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},e.prototype.divideScalar=function(t){return this.multiplyScalar(1/t)},e.prototype.min=function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},e.prototype.max=function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},e.prototype.clamp=function(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this},e.prototype.clampScalar=function(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this},e.prototype.clampLength=function(t,n){var r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))},e.prototype.floor=function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},e.prototype.ceil=function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},e.prototype.round=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},e.prototype.roundToZero=function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},e.prototype.negate=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},e.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},e.prototype.lengthSq=function(){return this.x*this.x+this.y*this.y+this.z*this.z},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},e.prototype.manhattanLength=function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},e.prototype.normalize=function(){return this.divideScalar(this.length()||1)},e.prototype.setLength=function(t){return this.normalize().multiplyScalar(t)},e.prototype.lerp=function(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this},e.prototype.lerpVectors=function(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this},e.prototype.cross=function(t,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,n)):this.crossVectors(this,t)},e.prototype.crossVectors=function(t,n){var r=t.x,i=t.y,a=t.z,o=n.x,s=n.y,l=n.z;return this.x=i*l-a*s,this.y=a*o-r*l,this.z=r*s-i*o,this},e.prototype.projectOnVector=function(t){var n=t.lengthSq();if(n===0)return this.set(0,0,0);var r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)},e.prototype.projectOnPlane=function(t){return _a.copy(this).projectOnVector(t),this.sub(_a)},e.prototype.reflect=function(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))},e.prototype.angleTo=function(t){var n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;var r=this.dot(t)/n;return Math.acos(xe.clamp(r,-1,1))},e.prototype.distanceTo=function(t){return Math.sqrt(this.distanceToSquared(t))},e.prototype.distanceToSquared=function(t){var n=this.x-t.x,r=this.y-t.y,i=this.z-t.z;return n*n+r*r+i*i},e.prototype.manhattanDistanceTo=function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)},e.prototype.setFromSpherical=function(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)},e.prototype.setFromSphericalCoords=function(t,n,r){var i=Math.sin(n)*t;return this.x=i*Math.sin(r),this.y=Math.cos(n)*t,this.z=i*Math.cos(r),this},e.prototype.setFromCylindrical=function(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)},e.prototype.setFromCylindricalCoords=function(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this},e.prototype.setFromMatrixPosition=function(t){var n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this},e.prototype.setFromMatrixScale=function(t){var n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=i,this},e.prototype.setFromMatrixColumn=function(t,n){return this.fromArray(t.elements,n*4)},e.prototype.setFromMatrix3Column=function(t,n){return this.fromArray(t.elements,n*3)},e.prototype.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},e.prototype.fromArray=function(t,n){return n===void 0&&(n=0),this.x=t[n],this.y=t[n+1],this.z=t[n+2],this},e.prototype.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t},e.prototype.fromBufferAttribute=function(t,n,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this},e.prototype.random=function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this},e}(),_a=new S,as=new _t,Hn=function(){function e(t,n){Object.defineProperty(this,"isBox3",{value:!0}),this.min=t!==void 0?t:new S(1/0,1/0,1/0),this.max=n!==void 0?n:new S(-1/0,-1/0,-1/0)}return e.prototype.set=function(t,n){return this.min.copy(t),this.max.copy(n),this},e.prototype.setFromArray=function(t){for(var n=1/0,r=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0,l=0,u=t.length;l<u;l+=3){var c=t[l],h=t[l+1],d=t[l+2];c<n&&(n=c),h<r&&(r=h),d<i&&(i=d),c>a&&(a=c),h>o&&(o=h),d>s&&(s=d)}return this.min.set(n,r,i),this.max.set(a,o,s),this},e.prototype.setFromBufferAttribute=function(t){for(var n=1/0,r=1/0,i=1/0,a=-1/0,o=-1/0,s=-1/0,l=0,u=t.count;l<u;l++){var c=t.getX(l),h=t.getY(l),d=t.getZ(l);c<n&&(n=c),h<r&&(r=h),d<i&&(i=d),c>a&&(a=c),h>o&&(o=h),d>s&&(s=d)}return this.min.set(n,r,i),this.max.set(a,o,s),this},e.prototype.setFromPoints=function(t){this.makeEmpty();for(var n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this},e.prototype.setFromCenterAndSize=function(t,n){var r=Cr.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this},e.prototype.setFromObject=function(t){return this.makeEmpty(),this.expandByObject(t)},e.prototype.clone=function(){return new this.constructor().copy(this)},e.prototype.copy=function(t){return this.min.copy(t.min),this.max.copy(t.max),this},e.prototype.makeEmpty=function(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this},e.prototype.isEmpty=function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},e.prototype.getCenter=function(t){return t===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),t=new S),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},e.prototype.getSize=function(t){return t===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),t=new S),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)},e.prototype.expandByPoint=function(t){return this.min.min(t),this.max.max(t),this},e.prototype.expandByVector=function(t){return this.min.sub(t),this.max.add(t),this},e.prototype.expandByScalar=function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},e.prototype.expandByObject=function(t){t.updateWorldMatrix(!1,!1);var n=t.geometry;n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox),ba.applyMatrix4(t.matrixWorld),this.union(ba));for(var r=t.children,i=0,a=r.length;i<a;i++)this.expandByObject(r[i]);return this},e.prototype.containsPoint=function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)},e.prototype.containsBox=function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z},e.prototype.getParameter=function(t,n){return n===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),n=new S),n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))},e.prototype.intersectsBox=function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)},e.prototype.intersectsSphere=function(t){return this.clampPoint(t.center,Cr),Cr.distanceToSquared(t.center)<=t.radius*t.radius},e.prototype.intersectsPlane=function(t){var n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant},e.prototype.intersectsTriangle=function(t){if(this.isEmpty())return!1;this.getCenter(Pr),di.subVectors(this.max,Pr),Wn.subVectors(t.a,Pr),qn.subVectors(t.b,Pr),Xn.subVectors(t.c,Pr),un.subVectors(qn,Wn),cn.subVectors(Xn,qn),Ln.subVectors(Wn,Xn);var n=[0,-un.z,un.y,0,-cn.z,cn.y,0,-Ln.z,Ln.y,un.z,0,-un.x,cn.z,0,-cn.x,Ln.z,0,-Ln.x,-un.y,un.x,0,-cn.y,cn.x,0,-Ln.y,Ln.x,0];return!xa(n,Wn,qn,Xn,di)||(n=[1,0,0,0,1,0,0,0,1],!xa(n,Wn,qn,Xn,di))?!1:(pi.crossVectors(un,cn),n=[pi.x,pi.y,pi.z],xa(n,Wn,qn,Xn,di))},e.prototype.clampPoint=function(t,n){return n===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),n=new S),n.copy(t).clamp(this.min,this.max)},e.prototype.distanceToPoint=function(t){var n=Cr.copy(t).clamp(this.min,this.max);return n.sub(t).length()},e.prototype.getBoundingSphere=function(t){return t===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(t.center),t.radius=this.getSize(Cr).length()*.5,t},e.prototype.intersect=function(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this},e.prototype.union=function(t){return this.min.min(t.min),this.max.max(t.max),this},e.prototype.applyMatrix4=function(t){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jt),this)},e.prototype.translate=function(t){return this.min.add(t),this.max.add(t),this},e.prototype.equals=function(t){return t.min.equals(this.min)&&t.max.equals(this.max)},e}();function xa(e,t,n,r,i){for(var a=0,o=e.length-3;a<=o;a+=3){Rn.fromArray(e,a);var s=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),l=t.dot(Rn),u=n.dot(Rn),c=r.dot(Rn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}var jt=[new S,new S,new S,new S,new S,new S,new S,new S],Cr=new S,ba=new Hn,Wn=new S,qn=new S,Xn=new S,un=new S,cn=new S,Ln=new S,Pr=new S,di=new S,pi=new S,Rn=new S,qc=new Hn,Gn=function(){function e(t,n){this.center=t!==void 0?t:new S,this.radius=n!==void 0?n:-1}return e.prototype.set=function(t,n){return this.center.copy(t),this.radius=n,this},e.prototype.setFromPoints=function(t,n){var r=this.center;n!==void 0?r.copy(n):qc.setFromPoints(t).getCenter(r);for(var i=0,a=0,o=t.length;a<o;a++)i=Math.max(i,r.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this},e.prototype.clone=function(){return new this.constructor().copy(this)},e.prototype.copy=function(t){return this.center.copy(t.center),this.radius=t.radius,this},e.prototype.isEmpty=function(){return this.radius<0},e.prototype.makeEmpty=function(){return this.center.set(0,0,0),this.radius=-1,this},e.prototype.containsPoint=function(t){return t.distanceToSquared(this.center)<=this.radius*this.radius},e.prototype.distanceToPoint=function(t){return t.distanceTo(this.center)-this.radius},e.prototype.intersectsSphere=function(t){var n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n},e.prototype.intersectsBox=function(t){return t.intersectsSphere(this)},e.prototype.intersectsPlane=function(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius},e.prototype.clampPoint=function(t,n){var r=this.center.distanceToSquared(t);return n===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),n=new S),n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n},e.prototype.getBoundingBox=function(t){return t===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),t=new Hn),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)},e.prototype.applyMatrix4=function(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this},e.prototype.translate=function(t){return this.center.add(t),this},e.prototype.equals=function(t){return t.center.equals(this.center)&&t.radius===this.radius},e}(),Jt=new S,Ma=new S,vi=new S,hn=new S,wa=new S,mi=new S,Sa=new S,ci=function(){function e(t,n){this.origin=t!==void 0?t:new S,this.direction=n!==void 0?n:new S(0,0,-1)}return e.prototype.set=function(t,n){return this.origin.copy(t),this.direction.copy(n),this},e.prototype.clone=function(){return new this.constructor().copy(this)},e.prototype.copy=function(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this},e.prototype.at=function(t,n){return n===void 0&&(console.warn("THREE.Ray: .at() target is now required"),n=new S),n.copy(this.direction).multiplyScalar(t).add(this.origin)},e.prototype.lookAt=function(t){return this.direction.copy(t).sub(this.origin).normalize(),this},e.prototype.recast=function(t){return this.origin.copy(this.at(t,Jt)),this},e.prototype.closestPointToPoint=function(t,n){n===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),n=new S),n.subVectors(t,this.origin);var r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(r).add(this.origin)},e.prototype.distanceToPoint=function(t){return Math.sqrt(this.distanceSqToPoint(t))},e.prototype.distanceSqToPoint=function(t){var n=Jt.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Jt.copy(this.direction).multiplyScalar(n).add(this.origin),Jt.distanceToSquared(t))},e.prototype.distanceSqToSegment=function(t,n,r,i){Ma.copy(t).add(n).multiplyScalar(.5),vi.copy(n).sub(t).normalize(),hn.copy(this.origin).sub(Ma);var a=t.distanceTo(n)*.5,o=-this.direction.dot(vi),s=hn.dot(this.direction),l=-hn.dot(vi),u=hn.lengthSq(),c=Math.abs(1-o*o),h,d,f,v;if(c>0)if(h=o*l-s,d=o*s-l,v=a*c,h>=0)if(d>=-v)if(d<=v){var g=1/c;h*=g,d*=g,f=h*(h+o*d+2*s)+d*(o*h+d+2*l)+u}else d=a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+u;else d=-a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-o*a+s)),d=h>0?-a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+u):(h=Math.max(0,-(o*a+s)),d=h>0?a:Math.min(Math.max(-a,-l),a),f=-h*h+d*(d+2*l)+u);else d=o>0?-a:a,h=Math.max(0,-(o*d+s)),f=-h*h+d*(d+2*l)+u;return r&&r.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(vi).multiplyScalar(d).add(Ma),f},e.prototype.intersectSphere=function(t,n){Jt.subVectors(t.center,this.origin);var r=Jt.dot(this.direction),i=Jt.dot(Jt)-r*r,a=t.radius*t.radius;if(i>a)return null;var o=Math.sqrt(a-i),s=r-o,l=r+o;return s<0&&l<0?null:s<0?this.at(l,n):this.at(s,n)},e.prototype.intersectsSphere=function(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius},e.prototype.distanceToPlane=function(t){var n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;var r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null},e.prototype.intersectPlane=function(t,n){var r=this.distanceToPlane(t);return r===null?null:this.at(r,n)},e.prototype.intersectsPlane=function(t){var n=t.distanceToPoint(this.origin);if(n===0)return!0;var r=t.normal.dot(this.direction);return r*n<0},e.prototype.intersectBox=function(t,n){var r,i,a,o,s,l,u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(r=(t.min.x-d.x)*u,i=(t.max.x-d.x)*u):(r=(t.max.x-d.x)*u,i=(t.min.x-d.x)*u),c>=0?(a=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(a=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),r>o||a>i||((a>r||r!==r)&&(r=a),(o<i||i!==i)&&(i=o),h>=0?(s=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(s=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),r>l||s>i)||((s>r||r!==r)&&(r=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)},e.prototype.intersectsBox=function(t){return this.intersectBox(t,Jt)!==null},e.prototype.intersectTriangle=function(t,n,r,i,a){wa.subVectors(n,t),mi.subVectors(r,t),Sa.crossVectors(wa,mi);var o=this.direction.dot(Sa),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;hn.subVectors(this.origin,t);var l=s*this.direction.dot(mi.crossVectors(hn,mi));if(l<0)return null;var u=s*this.direction.dot(wa.cross(hn));if(u<0||l+u>o)return null;var c=-s*hn.dot(Sa);return c<0?null:this.at(c/o,a)},e.prototype.applyMatrix4=function(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this},e.prototype.equals=function(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)},e}(),Le=function(){function e(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}return e.prototype.set=function(t,n,r,i,a,o,s,l,u,c,h,d,f,v,g,_){var m=this.elements;return m[0]=t,m[4]=n,m[8]=r,m[12]=i,m[1]=a,m[5]=o,m[9]=s,m[13]=l,m[2]=u,m[6]=c,m[10]=h,m[14]=d,m[3]=f,m[7]=v,m[11]=g,m[15]=_,this},e.prototype.identity=function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},e.prototype.clone=function(){return new e().fromArray(this.elements)},e.prototype.copy=function(t){var n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this},e.prototype.copyPosition=function(t){var n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this},e.prototype.setFromMatrix3=function(t){var n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this},e.prototype.extractBasis=function(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this},e.prototype.makeBasis=function(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this},e.prototype.extractRotation=function(t){var n=this.elements,r=t.elements,i=1/Yn.setFromMatrixColumn(t,0).length(),a=1/Yn.setFromMatrixColumn(t,1).length(),o=1/Yn.setFromMatrixColumn(t,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this},e.prototype.makeRotationFromEuler=function(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var n=this.elements,r=t.x,i=t.y,a=t.z,o=Math.cos(r),s=Math.sin(r),l=Math.cos(i),u=Math.sin(i),c=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){var d=o*c,f=o*h,v=s*c,g=s*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=f+v*u,n[5]=d-g*u,n[9]=-s*l,n[2]=g-d*u,n[6]=v+f*u,n[10]=o*l}else if(t.order==="YXZ"){var _=l*c,m=l*h,p=u*c,E=u*h;n[0]=_+E*s,n[4]=p*s-m,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-s,n[2]=m*s-p,n[6]=E+_*s,n[10]=o*l}else if(t.order==="ZXY"){var _=l*c,m=l*h,p=u*c,E=u*h;n[0]=_-E*s,n[4]=-o*h,n[8]=p+m*s,n[1]=m+p*s,n[5]=o*c,n[9]=E-_*s,n[2]=-o*u,n[6]=s,n[10]=o*l}else if(t.order==="ZYX"){var d=o*c,f=o*h,v=s*c,g=s*h;n[0]=l*c,n[4]=v*u-f,n[8]=d*u+g,n[1]=l*h,n[5]=g*u+d,n[9]=f*u-v,n[2]=-u,n[6]=s*l,n[10]=o*l}else if(t.order==="YZX"){var A=o*l,b=o*u,y=s*l,T=s*u;n[0]=l*c,n[4]=T-A*h,n[8]=y*h+b,n[1]=h,n[5]=o*c,n[9]=-s*c,n[2]=-u*c,n[6]=b*h+y,n[10]=A-T*h}else if(t.order==="XZY"){var A=o*l,b=o*u,y=s*l,T=s*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=A*h+T,n[5]=o*c,n[9]=b*h-y,n[2]=y*h-b,n[6]=s*c,n[10]=T*h+A}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this},e.prototype.makeRotationFromQuaternion=function(t){return this.compose(Xc,t,Yc)},e.prototype.lookAt=function(t,n,r){var i=this.elements;return mt.subVectors(t,n),mt.lengthSq()===0&&(mt.z=1),mt.normalize(),fn.crossVectors(r,mt),fn.lengthSq()===0&&(Math.abs(r.z)===1?mt.x+=1e-4:mt.z+=1e-4,mt.normalize(),fn.crossVectors(r,mt)),fn.normalize(),gi.crossVectors(mt,fn),i[0]=fn.x,i[4]=gi.x,i[8]=mt.x,i[1]=fn.y,i[5]=gi.y,i[9]=mt.y,i[2]=fn.z,i[6]=gi.z,i[10]=mt.z,this},e.prototype.multiply=function(t,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,n)):this.multiplyMatrices(this,t)},e.prototype.premultiply=function(t){return this.multiplyMatrices(t,this)},e.prototype.multiplyMatrices=function(t,n){var r=t.elements,i=n.elements,a=this.elements,o=r[0],s=r[4],l=r[8],u=r[12],c=r[1],h=r[5],d=r[9],f=r[13],v=r[2],g=r[6],_=r[10],m=r[14],p=r[3],E=r[7],A=r[11],b=r[15],y=i[0],T=i[4],G=i[8],P=i[12],C=i[1],N=i[5],V=i[9],O=i[13],B=i[2],L=i[6],D=i[10],F=i[14],U=i[3],Q=i[7],Y=i[11],Z=i[15];return a[0]=o*y+s*C+l*B+u*U,a[4]=o*T+s*N+l*L+u*Q,a[8]=o*G+s*V+l*D+u*Y,a[12]=o*P+s*O+l*F+u*Z,a[1]=c*y+h*C+d*B+f*U,a[5]=c*T+h*N+d*L+f*Q,a[9]=c*G+h*V+d*D+f*Y,a[13]=c*P+h*O+d*F+f*Z,a[2]=v*y+g*C+_*B+m*U,a[6]=v*T+g*N+_*L+m*Q,a[10]=v*G+g*V+_*D+m*Y,a[14]=v*P+g*O+_*F+m*Z,a[3]=p*y+E*C+A*B+b*U,a[7]=p*T+E*N+A*L+b*Q,a[11]=p*G+E*V+A*D+b*Y,a[15]=p*P+E*O+A*F+b*Z,this},e.prototype.multiplyScalar=function(t){var n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this},e.prototype.determinant=function(){var t=this.elements,n=t[0],r=t[4],i=t[8],a=t[12],o=t[1],s=t[5],l=t[9],u=t[13],c=t[2],h=t[6],d=t[10],f=t[14],v=t[3],g=t[7],_=t[11],m=t[15];return v*(+a*l*h-i*u*h-a*s*d+r*u*d+i*s*f-r*l*f)+g*(+n*l*f-n*u*d+a*o*d-i*o*f+i*u*c-a*l*c)+_*(+n*u*h-n*s*f-a*o*h+r*o*f+a*s*c-r*u*c)+m*(-i*s*c-n*l*h+n*s*d+i*o*h-r*o*d+r*l*c)},e.prototype.transpose=function(){var t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this},e.prototype.setPosition=function(t,n,r){var i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=n,i[14]=r),this},e.prototype.invert=function(){var t=this.elements,n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],h=t[9],d=t[10],f=t[11],v=t[12],g=t[13],_=t[14],m=t[15],p=h*_*u-g*d*u+g*l*f-s*_*f-h*l*m+s*d*m,E=v*d*u-c*_*u-v*l*f+o*_*f+c*l*m-o*d*m,A=c*g*u-v*h*u+v*s*f-o*g*f-c*s*m+o*h*m,b=v*h*l-c*g*l-v*s*d+o*g*d+c*s*_-o*h*_,y=n*p+r*E+i*A+a*b;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);var T=1/y;return t[0]=p*T,t[1]=(g*d*a-h*_*a-g*i*f+r*_*f+h*i*m-r*d*m)*T,t[2]=(s*_*a-g*l*a+g*i*u-r*_*u-s*i*m+r*l*m)*T,t[3]=(h*l*a-s*d*a-h*i*u+r*d*u+s*i*f-r*l*f)*T,t[4]=E*T,t[5]=(c*_*a-v*d*a+v*i*f-n*_*f-c*i*m+n*d*m)*T,t[6]=(v*l*a-o*_*a-v*i*u+n*_*u+o*i*m-n*l*m)*T,t[7]=(o*d*a-c*l*a+c*i*u-n*d*u-o*i*f+n*l*f)*T,t[8]=A*T,t[9]=(v*h*a-c*g*a-v*r*f+n*g*f+c*r*m-n*h*m)*T,t[10]=(o*g*a-v*s*a+v*r*u-n*g*u-o*r*m+n*s*m)*T,t[11]=(c*s*a-o*h*a-c*r*u+n*h*u+o*r*f-n*s*f)*T,t[12]=b*T,t[13]=(c*g*i-v*h*i+v*r*d-n*g*d-c*r*_+n*h*_)*T,t[14]=(v*s*i-o*g*i-v*r*l+n*g*l+o*r*_-n*s*_)*T,t[15]=(o*h*i-c*s*i+c*r*l-n*h*l-o*r*d+n*s*d)*T,this},e.prototype.scale=function(t){var n=this.elements,r=t.x,i=t.y,a=t.z;return n[0]*=r,n[4]*=i,n[8]*=a,n[1]*=r,n[5]*=i,n[9]*=a,n[2]*=r,n[6]*=i,n[10]*=a,n[3]*=r,n[7]*=i,n[11]*=a,this},e.prototype.getMaxScaleOnAxis=function(){var t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,i))},e.prototype.makeTranslation=function(t,n,r){return this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this},e.prototype.makeRotationX=function(t){var n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this},e.prototype.makeRotationY=function(t){var n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this},e.prototype.makeRotationZ=function(t){var n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this},e.prototype.makeRotationAxis=function(t,n){var r=Math.cos(n),i=Math.sin(n),a=1-r,o=t.x,s=t.y,l=t.z,u=a*o,c=a*s;return this.set(u*o+r,u*s-i*l,u*l+i*s,0,u*s+i*l,c*s+r,c*l-i*o,0,u*l-i*s,c*l+i*o,a*l*l+r,0,0,0,0,1),this},e.prototype.makeScale=function(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this},e.prototype.makeShear=function(t,n,r){return this.set(1,n,r,0,t,1,r,0,t,n,1,0,0,0,0,1),this},e.prototype.compose=function(t,n,r){var i=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,u=a+a,c=o+o,h=s+s,d=a*u,f=a*c,v=a*h,g=o*c,_=o*h,m=s*h,p=l*u,E=l*c,A=l*h,b=r.x,y=r.y,T=r.z;return i[0]=(1-(g+m))*b,i[1]=(f+A)*b,i[2]=(v-E)*b,i[3]=0,i[4]=(f-A)*y,i[5]=(1-(d+m))*y,i[6]=(_+p)*y,i[7]=0,i[8]=(v+E)*T,i[9]=(_-p)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this},e.prototype.decompose=function(t,n,r){var i=this.elements,a=Yn.set(i[0],i[1],i[2]).length(),o=Yn.set(i[4],i[5],i[6]).length(),s=Yn.set(i[8],i[9],i[10]).length(),l=this.determinant();l<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],Pt.copy(this);var u=1/a,c=1/o,h=1/s;return Pt.elements[0]*=u,Pt.elements[1]*=u,Pt.elements[2]*=u,Pt.elements[4]*=c,Pt.elements[5]*=c,Pt.elements[6]*=c,Pt.elements[8]*=h,Pt.elements[9]*=h,Pt.elements[10]*=h,n.setFromRotationMatrix(Pt),r.x=a,r.y=o,r.z=s,this},e.prototype.makePerspective=function(t,n,r,i,a,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var s=this.elements,l=2*a/(n-t),u=2*a/(r-i),c=(n+t)/(n-t),h=(r+i)/(r-i),d=-(o+a)/(o-a),f=-2*o*a/(o-a);return s[0]=l,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=u,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this},e.prototype.makeOrthographic=function(t,n,r,i,a,o){var s=this.elements,l=1/(n-t),u=1/(r-i),c=1/(o-a),h=(n+t)*l,d=(r+i)*u,f=(o+a)*c;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this},e.prototype.equals=function(t){for(var n=this.elements,r=t.elements,i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0},e.prototype.fromArray=function(t,n){n===void 0&&(n=0);for(var r=0;r<16;r++)this.elements[r]=t[r+n];return this},e.prototype.toArray=function(t,n){t===void 0&&(t=[]),n===void 0&&(n=0);var r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t},e}(),Yn=new S,Pt=new Le,Xc=new S(0,0,0),Yc=new S(1,1,1),fn=new S,gi=new S,mt=new S,Io=function(){function e(t,n,r,i){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=0),i===void 0&&(i=e.DefaultOrder),Object.defineProperty(this,"isEuler",{value:!0}),this._x=t,this._y=n,this._z=r,this._order=i}return Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._onChangeCallback()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._onChangeCallback()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this._z},set:function(t){this._z=t,this._onChangeCallback()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"order",{get:function(){return this._order},set:function(t){this._order=t,this._onChangeCallback()},enumerable:!1,configurable:!0}),e.prototype.set=function(t,n,r,i){return this._x=t,this._y=n,this._z=r,this._order=i||this._order,this._onChangeCallback(),this},e.prototype.clone=function(){return new this.constructor(this._x,this._y,this._z,this._order)},e.prototype.copy=function(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this},e.prototype.setFromRotationMatrix=function(t,n,r){var i=xe.clamp,a=t.elements,o=a[0],s=a[4],l=a[8],u=a[1],c=a[5],h=a[9],d=a[2],f=a[6],v=a[10];switch(n=n||this._order,n){case"XYZ":this._y=Math.asin(i(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,v),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-i(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(i(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-i(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(i(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-i(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r!==!1&&this._onChangeCallback(),this},e.prototype.setFromQuaternion=function(t,n,r){return os.makeRotationFromQuaternion(t),this.setFromRotationMatrix(os,n,r)},e.prototype.setFromVector3=function(t,n){return this.set(t.x,t.y,t.z,n||this._order)},e.prototype.reorder=function(t){return ss.setFromEuler(this),this.setFromQuaternion(ss,t)},e.prototype.equals=function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order},e.prototype.fromArray=function(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this},e.prototype.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t},e.prototype.toVector3=function(t){return t?t.set(this._x,this._y,this._z):new S(this._x,this._y,this._z)},e.prototype._onChange=function(t){return this._onChangeCallback=t,this},e.prototype._onChangeCallback=function(){},e}();Io.DefaultOrder="XYZ";Io.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var os=new Le,ss=new _t,Il=function(){function e(){this.mask=1}return e.prototype.set=function(t){this.mask=1<<t|0},e.prototype.enable=function(t){this.mask|=1<<t|0},e.prototype.enableAll=function(){this.mask=-1},e.prototype.toggle=function(t){this.mask^=1<<t|0},e.prototype.disable=function(t){this.mask&=~(1<<t|0)},e.prototype.disableAll=function(){this.mask=0},e.prototype.test=function(t){return(this.mask&t.mask)!==0},e}(),Zc=0,ls=new S,Zn=new _t,Qt=new Le,yi=new S,Dr=new S,jc=new S,Jc=new _t,us=new S(1,0,0),cs=new S(0,1,0),hs=new S(0,0,1),Qc={type:"added"},fs={type:"removed"};function he(){Object.defineProperty(this,"id",{value:Zc++}),this.uuid=xe.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DefaultUp.clone();var e=new S,t=new Io,n=new _t,r=new S(1,1,1);function i(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new wt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=he.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}he.DefaultUp=new S(0,1,0);he.DefaultMatrixAutoUpdate=!0;he.prototype=Object.assign(Object.create(Sn.prototype),{constructor:he,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(e){return this.quaternion.premultiply(e),this},setRotationFromAxisAngle:function(e,t){this.quaternion.setFromAxisAngle(e,t)},setRotationFromEuler:function(e){this.quaternion.setFromEuler(e,!0)},setRotationFromMatrix:function(e){this.quaternion.setFromRotationMatrix(e)},setRotationFromQuaternion:function(e){this.quaternion.copy(e)},rotateOnAxis:function(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this},rotateOnWorldAxis:function(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this},rotateX:function(e){return this.rotateOnAxis(us,e)},rotateY:function(e){return this.rotateOnAxis(cs,e)},rotateZ:function(e){return this.rotateOnAxis(hs,e)},translateOnAxis:function(e,t){return ls.copy(e).applyQuaternion(this.quaternion),this.position.add(ls.multiplyScalar(t)),this},translateX:function(e){return this.translateOnAxis(us,e)},translateY:function(e){return this.translateOnAxis(cs,e)},translateZ:function(e){return this.translateOnAxis(hs,e)},localToWorld:function(e){return e.applyMatrix4(this.matrixWorld)},worldToLocal:function(e){return e.applyMatrix4(Qt.copy(this.matrixWorld).invert())},lookAt:function(e,t,n){e.isVector3?yi.copy(e):yi.set(e,t,n);var r=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(Dr,yi,this.up):Qt.lookAt(yi,Dr,this.up),this.quaternion.setFromRotationMatrix(Qt),r&&(Qt.extractRotation(r.matrixWorld),Zn.setFromRotationMatrix(Qt),this.quaternion.premultiply(Zn.invert()))},add:function(e){if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)},remove:function(e){if(arguments.length>1){for(var t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}var n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fs)),this},clear:function(){for(var e=0;e<this.children.length;e++){var t=this.children[e];t.parent=null,t.dispatchEvent(fs)}return this.children.length=0,this},attach:function(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.updateWorldMatrix(!1,!1),this.add(e),this},getObjectById:function(e){return this.getObjectByProperty("id",e)},getObjectByName:function(e){return this.getObjectByProperty("name",e)},getObjectByProperty:function(e,t){if(this[e]===t)return this;for(var n=0,r=this.children.length;n<r;n++){var i=this.children[n],a=i.getObjectByProperty(e,t);if(a!==void 0)return a}},getWorldPosition:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new S),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new _t),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,jc),e},getWorldScale:function(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new S),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Jc,e),e},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new S),this.updateWorldMatrix(!0,!1);var t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()},raycast:function(){},traverse:function(e){e(this);for(var t=this.children,n=0,r=t.length;n<r;n++)t[n].traverse(e)},traverseVisible:function(e){if(this.visible!==!1){e(this);for(var t=this.children,n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}},traverseAncestors:function(e){var t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);for(var t=this.children,n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)},updateWorldMatrix:function(e,t){var n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0)for(var r=this.children,i=0,a=r.length;i<a;i++)r[i].updateWorldMatrix(!1,!0)},toJSON:function(e){var t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON());function i(E,A){return E[A.uuid]===void 0&&(E[A.uuid]=A.toJSON(e)),A.uuid}if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);var a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){var o=a.shapes;if(Array.isArray(o))for(var s=0,l=o.length;s<l;s++){var u=o[s];i(e.shapes,u)}else i(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){for(var c=[],s=0,l=this.material.length;s<l;s++)c.push(i(e.materials,this.material[s]));r.material=c}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(var s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(var s=0;s<this.animations.length;s++){var h=this.animations[s];r.animations.push(i(e.animations,h))}}if(t){var d=p(e.geometries),f=p(e.materials),v=p(e.textures),g=p(e.images),o=p(e.shapes),_=p(e.skeletons),m=p(e.animations);d.length>0&&(n.geometries=d),f.length>0&&(n.materials=f),v.length>0&&(n.textures=v),g.length>0&&(n.images=g),o.length>0&&(n.shapes=o),_.length>0&&(n.skeletons=_),m.length>0&&(n.animations=m)}return n.object=r,n;function p(E){var A=[];for(var b in E){var y=E[b];delete y.metadata,A.push(y)}return A}},clone:function(e){return new this.constructor().copy(this,e)},copy:function(e,t){if(t===void 0&&(t=!0),this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(var n=0;n<e.children.length;n++){var r=e.children[n];this.add(r.clone())}return this}});var Ea=new S,$c=new S,Kc=new wt,en=function(){function e(t,n){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=t!==void 0?t:new S(1,0,0),this.constant=n!==void 0?n:0}return e.prototype.set=function(t,n){return this.normal.copy(t),this.constant=n,this},e.prototype.setComponents=function(t,n,r,i){return this.normal.set(t,n,r),this.constant=i,this},e.prototype.setFromNormalAndCoplanarPoint=function(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this},e.prototype.setFromCoplanarPoints=function(t,n,r){var i=Ea.subVectors(r,n).cross($c.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this},e.prototype.clone=function(){return new this.constructor().copy(this)},e.prototype.copy=function(t){return this.normal.copy(t.normal),this.constant=t.constant,this},e.prototype.normalize=function(){var t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this},e.prototype.negate=function(){return this.constant*=-1,this.normal.negate(),this},e.prototype.distanceToPoint=function(t){return this.normal.dot(t)+this.constant},e.prototype.distanceToSphere=function(t){return this.distanceToPoint(t.center)-t.radius},e.prototype.projectPoint=function(t,n){return n===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),n=new S),n.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)},e.prototype.intersectLine=function(t,n){n===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),n=new S);var r=t.delta(Ea),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):void 0;var a=-(t.start.dot(this.normal)+this.constant)/i;if(!(a<0||a>1))return n.copy(r).multiplyScalar(a).add(t.start)},e.prototype.intersectsLine=function(t){var n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0},e.prototype.intersectsBox=function(t){return t.intersectsPlane(this)},e.prototype.intersectsSphere=function(t){return t.intersectsPlane(this)},e.prototype.coplanarPoint=function(t){return t===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),t=new S),t.copy(this.normal).multiplyScalar(-this.constant)},e.prototype.applyMatrix4=function(t,n){var r=n||Kc.getNormalMatrix(t),i=this.coplanarPoint(Ea).applyMatrix4(t),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this},e.prototype.translate=function(t){return this.constant-=t.dot(this.normal),this},e.prototype.equals=function(t){return t.normal.equals(this.normal)&&t.constant===this.constant},e}(),Dt=new S,$t=new S,Ta=new S,Kt=new S,jn=new S,Jn=new S,ds=new S,Aa=new S,La=new S,Ra=new S,tn=function(){function e(t,n,r){this.a=t!==void 0?t:new S,this.b=n!==void 0?n:new S,this.c=r!==void 0?r:new S}return e.getNormal=function(t,n,r,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new S),i.subVectors(r,n),Dt.subVectors(t,n),i.cross(Dt);var a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)},e.getBarycoord=function(t,n,r,i,a){Dt.subVectors(i,n),$t.subVectors(r,n),Ta.subVectors(t,n);var o=Dt.dot(Dt),s=Dt.dot($t),l=Dt.dot(Ta),u=$t.dot($t),c=$t.dot(Ta),h=o*u-s*s;if(a===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),a=new S),h===0)return a.set(-2,-1,-1);var d=1/h,f=(u*l-s*c)*d,v=(o*c-s*l)*d;return a.set(1-f-v,v,f)},e.containsPoint=function(t,n,r,i){return this.getBarycoord(t,n,r,i,Kt),Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1},e.getUV=function(t,n,r,i,a,o,s,l){return this.getBarycoord(t,n,r,i,Kt),l.set(0,0),l.addScaledVector(a,Kt.x),l.addScaledVector(o,Kt.y),l.addScaledVector(s,Kt.z),l},e.isFrontFacing=function(t,n,r,i){return Dt.subVectors(r,n),$t.subVectors(t,n),Dt.cross($t).dot(i)<0},e.prototype.set=function(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this},e.prototype.setFromPointsAndIndices=function(t,n,r,i){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[i]),this},e.prototype.clone=function(){return new this.constructor().copy(this)},e.prototype.copy=function(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this},e.prototype.getArea=function(){return Dt.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Dt.cross($t).length()*.5},e.prototype.getMidpoint=function(t){return t===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),t=new S),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},e.prototype.getNormal=function(t){return e.getNormal(this.a,this.b,this.c,t)},e.prototype.getPlane=function(t){return t===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),t=new en),t.setFromCoplanarPoints(this.a,this.b,this.c)},e.prototype.getBarycoord=function(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)},e.prototype.getUV=function(t,n,r,i,a){return e.getUV(t,this.a,this.b,this.c,n,r,i,a)},e.prototype.containsPoint=function(t){return e.containsPoint(t,this.a,this.b,this.c)},e.prototype.isFrontFacing=function(t){return e.isFrontFacing(this.a,this.b,this.c,t)},e.prototype.intersectsBox=function(t){return t.intersectsTriangle(this)},e.prototype.closestPointToPoint=function(t,n){n===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),n=new S);var r=this.a,i=this.b,a=this.c,o,s;jn.subVectors(i,r),Jn.subVectors(a,r),Aa.subVectors(t,r);var l=jn.dot(Aa),u=Jn.dot(Aa);if(l<=0&&u<=0)return n.copy(r);La.subVectors(t,i);var c=jn.dot(La),h=Jn.dot(La);if(c>=0&&h<=c)return n.copy(i);var d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(r).addScaledVector(jn,o);Ra.subVectors(t,a);var f=jn.dot(Ra),v=Jn.dot(Ra);if(v>=0&&f<=v)return n.copy(a);var g=f*u-l*v;if(g<=0&&u>=0&&v<=0)return s=u/(u-v),n.copy(r).addScaledVector(Jn,s);var _=c*v-f*h;if(_<=0&&h-c>=0&&f-v>=0)return ds.subVectors(a,i),s=(h-c)/(h-c+(f-v)),n.copy(i).addScaledVector(ds,s);var m=1/(_+g+d);return o=g*m,s=d*m,n.copy(r).addScaledVector(jn,o).addScaledVector(Jn,s)},e.prototype.equals=function(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)},e}(),Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},It={h:0,s:0,l:0},_i={h:0,s:0,l:0};function Ca(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Pa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Da(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var de=function(){function e(t,n,r){return Object.defineProperty(this,"isColor",{value:!0}),n===void 0&&r===void 0?this.set(t):this.setRGB(t,n,r)}return e.prototype.set=function(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this},e.prototype.setScalar=function(t){return this.r=t,this.g=t,this.b=t,this},e.prototype.setHex=function(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this},e.prototype.setRGB=function(t,n,r){return this.r=t,this.g=n,this.b=r,this},e.prototype.setHSL=function(t,n,r){if(t=xe.euclideanModulo(t,1),n=xe.clamp(n,0,1),r=xe.clamp(r,0,1),n===0)this.r=this.g=this.b=r;else{var i=r<=.5?r*(1+n):r+n-r*n,a=2*r-i;this.r=Ca(a,i,t+1/3),this.g=Ca(a,i,t),this.b=Ca(a,i,t-1/3)}return this},e.prototype.setStyle=function(t){function n(d){d!==void 0&&parseFloat(d)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}var r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){var i=void 0,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,n(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,n(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){var s=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,u=parseInt(i[3],10)/100;return n(i[4]),this.setHSL(s,l,u)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){var c=r[1],h=c.length;if(h===3)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(h===6)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this},e.prototype.setColorName=function(t){var n=Ol[t];return n!==void 0?this.setHex(n):console.warn("THREE.Color: Unknown color "+t),this},e.prototype.clone=function(){return new this.constructor(this.r,this.g,this.b)},e.prototype.copy=function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},e.prototype.copyGammaToLinear=function(t,n){return n===void 0&&(n=2),this.r=Math.pow(t.r,n),this.g=Math.pow(t.g,n),this.b=Math.pow(t.b,n),this},e.prototype.copyLinearToGamma=function(t,n){n===void 0&&(n=2);var r=n>0?1/n:1;return this.r=Math.pow(t.r,r),this.g=Math.pow(t.g,r),this.b=Math.pow(t.b,r),this},e.prototype.convertGammaToLinear=function(t){return this.copyGammaToLinear(this,t),this},e.prototype.convertLinearToGamma=function(t){return this.copyLinearToGamma(this,t),this},e.prototype.copySRGBToLinear=function(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this},e.prototype.copyLinearToSRGB=function(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this},e.prototype.convertSRGBToLinear=function(){return this.copySRGBToLinear(this),this},e.prototype.convertLinearToSRGB=function(){return this.copyLinearToSRGB(this),this},e.prototype.getHex=function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},e.prototype.getHexString=function(){return("000000"+this.getHex().toString(16)).slice(-6)},e.prototype.getHSL=function(t){t===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),t={h:0,s:0,l:0});var n=this.r,r=this.g,i=this.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,l,u=(o+a)/2;if(o===a)s=0,l=0;else{var c=a-o;switch(l=u<=.5?c/(a+o):c/(2-a-o),a){case n:s=(r-i)/c+(r<i?6:0);break;case r:s=(i-n)/c+2;break;case i:s=(n-r)/c+4;break}s/=6}return t.h=s,t.s=l,t.l=u,t},e.prototype.getStyle=function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},e.prototype.offsetHSL=function(t,n,r){return this.getHSL(It),It.h+=t,It.s+=n,It.l+=r,this.setHSL(It.h,It.s,It.l),this},e.prototype.add=function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this},e.prototype.addColors=function(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this},e.prototype.addScalar=function(t){return this.r+=t,this.g+=t,this.b+=t,this},e.prototype.sub=function(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this},e.prototype.multiply=function(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this},e.prototype.multiplyScalar=function(t){return this.r*=t,this.g*=t,this.b*=t,this},e.prototype.lerp=function(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this},e.prototype.lerpColors=function(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this},e.prototype.lerpHSL=function(t,n){this.getHSL(It),t.getHSL(_i);var r=xe.lerp(It.h,_i.h,n),i=xe.lerp(It.s,_i.s,n),a=xe.lerp(It.l,_i.l,n);return this.setHSL(r,i,a),this},e.prototype.equals=function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b},e.prototype.fromArray=function(t,n){return n===void 0&&(n=0),this.r=t[n],this.g=t[n+1],this.b=t[n+2],this},e.prototype.toArray=function(t,n){return t===void 0&&(t=[]),n===void 0&&(n=0),t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t},e.prototype.fromBufferAttribute=function(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this},e.prototype.toJSON=function(){return this.getHex()},e}();de.NAMES=Ol;de.prototype.r=1;de.prototype.g=1;de.prototype.b=1;var eh=function(){function e(t,n,r,i,a,o){o===void 0&&(o=0),this.a=t,this.b=n,this.c=r,this.normal=i&&i.isVector3?i:new S,this.vertexNormals=Array.isArray(i)?i:[],this.color=a&&a.isColor?a:new de,this.vertexColors=Array.isArray(a)?a:[],this.materialIndex=o}return e.prototype.clone=function(){return new this.constructor().copy(this)},e.prototype.copy=function(t){this.a=t.a,this.b=t.b,this.c=t.c,this.normal.copy(t.normal),this.color.copy(t.color),this.materialIndex=t.materialIndex;for(var n=0,r=t.vertexNormals.length;n<r;n++)this.vertexNormals[n]=t.vertexNormals[n].clone();for(var n=0,r=t.vertexColors.length;n<r;n++)this.vertexColors[n]=t.vertexColors[n].clone();return this},e}(),th=0;function pe(){Object.defineProperty(this,"id",{value:th++}),this.uuid=xe.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=Vr,this.side=ia,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ll,this.blendDst=Rl,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}pe.prototype=Object.assign(Object.create(Sn.prototype),{constructor:pe,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(e){if(e!==void 0)for(var t in e){var n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Al;continue}var r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}},toJSON:function(e){var t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});var n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(n.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,n.reflectivity=this.reflectivity,n.refractionRatio=this.refractionRatio,this.combine!==void 0&&(n.combine=this.combine),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(n.blending=this.blending),this.flatShading===!0&&(n.flatShading=this.flatShading),this.side!==ia&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(n.morphTargets=!0),this.morphNormals===!0&&(n.morphNormals=!0),this.skinning===!0&&(n.skinning=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(o){var s=[];for(var l in o){var u=o[l];delete u.metadata,s.push(u)}return s}if(t){var i=r(e.textures),a=r(e.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n},clone:function(){return new this.constructor().copy(this)},copy:function(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.flatShading=e.flatShading,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;var t=e.clippingPlanes,n=null;if(t!==null){var r=t.length;n=new Array(r);for(var i=0;i!==r;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(pe.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});function _n(e){pe.call(this),this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}_n.prototype=Object.create(pe.prototype);_n.prototype.constructor=_n;_n.prototype.isMeshBasicMaterial=!0;_n.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this};var Ne=new S,xi=new W;function we(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=la,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(we.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(we.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.itemSize,n*=t.itemSize;for(var r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this},copyArray:function(e){return this.array.set(e),this},copyColorsArray:function(e){for(var t=this.array,n=0,r=0,i=e.length;r<i;r++){var a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new de),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this},copyVector2sArray:function(e){for(var t=this.array,n=0,r=0,i=e.length;r<i;r++){var a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new W),t[n++]=a.x,t[n++]=a.y}return this},copyVector3sArray:function(e){for(var t=this.array,n=0,r=0,i=e.length;r<i;r++){var a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new S),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this},copyVector4sArray:function(e){for(var t=this.array,n=0,r=0,i=e.length;r<i;r++){var a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new Ie),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this},applyMatrix3:function(e){if(this.itemSize===2)for(var t=0,n=this.count;t<n;t++)xi.fromBufferAttribute(this,t),xi.applyMatrix3(e),this.setXY(t,xi.x,xi.y);else if(this.itemSize===3)for(var t=0,n=this.count;t<n;t++)Ne.fromBufferAttribute(this,t),Ne.applyMatrix3(e),this.setXYZ(t,Ne.x,Ne.y,Ne.z);return this},applyMatrix4:function(e){for(var t=0,n=this.count;t<n;t++)Ne.x=this.getX(t),Ne.y=this.getY(t),Ne.z=this.getZ(t),Ne.applyMatrix4(e),this.setXYZ(t,Ne.x,Ne.y,Ne.z);return this},applyNormalMatrix:function(e){for(var t=0,n=this.count;t<n;t++)Ne.x=this.getX(t),Ne.y=this.getY(t),Ne.z=this.getZ(t),Ne.applyNormalMatrix(e),this.setXYZ(t,Ne.x,Ne.y,Ne.z);return this},transformDirection:function(e){for(var t=0,n=this.count;t<n;t++)Ne.x=this.getX(t),Ne.y=this.getY(t),Ne.z=this.getZ(t),Ne.transformDirection(e),this.setXYZ(t,Ne.x,Ne.y,Ne.z);return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},getX:function(e){return this.array[e*this.itemSize]},setX:function(e,t){return this.array[e*this.itemSize]=t,this},getY:function(e){return this.array[e*this.itemSize+1]},setY:function(e,t){return this.array[e*this.itemSize+1]=t,this},getZ:function(e){return this.array[e*this.itemSize+2]},setZ:function(e,t){return this.array[e*this.itemSize+2]=t,this},getW:function(e){return this.array[e*this.itemSize+3]},setW:function(e,t){return this.array[e*this.itemSize+3]=t,this},setXY:function(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this},setXYZ:function(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this},setXYZW:function(e,t,n,r,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this},onUpload:function(e){return this.onUploadCallback=e,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function ja(e,t,n){we.call(this,new Int8Array(e),t,n)}ja.prototype=Object.create(we.prototype);ja.prototype.constructor=ja;function Ja(e,t,n){we.call(this,new Uint8Array(e),t,n)}Ja.prototype=Object.create(we.prototype);Ja.prototype.constructor=Ja;function Qa(e,t,n){we.call(this,new Uint8ClampedArray(e),t,n)}Qa.prototype=Object.create(we.prototype);Qa.prototype.constructor=Qa;function $a(e,t,n){we.call(this,new Int16Array(e),t,n)}$a.prototype=Object.create(we.prototype);$a.prototype.constructor=$a;function Qr(e,t,n){we.call(this,new Uint16Array(e),t,n)}Qr.prototype=Object.create(we.prototype);Qr.prototype.constructor=Qr;function Ka(e,t,n){we.call(this,new Int32Array(e),t,n)}Ka.prototype=Object.create(we.prototype);Ka.prototype.constructor=Ka;function $r(e,t,n){we.call(this,new Uint32Array(e),t,n)}$r.prototype=Object.create(we.prototype);$r.prototype.constructor=$r;function ji(e,t,n){we.call(this,new Uint16Array(e),t,n)}ji.prototype=Object.create(we.prototype);ji.prototype.constructor=ji;ji.prototype.isFloat16BufferAttribute=!0;function Ye(e,t,n){we.call(this,new Float32Array(e),t,n)}Ye.prototype=Object.create(we.prototype);Ye.prototype.constructor=Ye;function eo(e,t,n){we.call(this,new Float64Array(e),t,n)}eo.prototype=Object.create(we.prototype);eo.prototype.constructor=eo;function Nl(e){if(e.length===0)return-1/0;for(var t=e[0],n=1,r=e.length;n<r;++n)e[n]>t&&(t=e[n]);return t}var nh={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray<"u"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function bi(e,t){return new nh[e](t)}var rh=0,zt=new Le,Ia=new he,Qn=new S,gt=new Hn,Ir=new Hn,Je=new S;function Ge(){Object.defineProperty(this,"id",{value:rh++}),this.uuid=xe.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}Ge.prototype=Object.assign(Object.create(Sn.prototype),{constructor:Ge,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(e){return Array.isArray(e)?this.index=new(Nl(e)>65535?$r:Qr)(e,1):this.index=e,this},getAttribute:function(e){return this.attributes[e]},setAttribute:function(e,t){return this.attributes[e]=t,this},deleteAttribute:function(e){return delete this.attributes[e],this},hasAttribute:function(e){return this.attributes[e]!==void 0},addGroup:function(e,t,n){n===void 0&&(n=0),this.groups.push({start:e,count:t,materialIndex:n})},clearGroups:function(){this.groups=[]},setDrawRange:function(e,t){this.drawRange.start=e,this.drawRange.count=t},applyMatrix4:function(e){var t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);var n=this.attributes.normal;if(n!==void 0){var r=new wt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}var i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this},rotateY:function(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this},rotateZ:function(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this},translate:function(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this},scale:function(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this},lookAt:function(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this},setFromPoints:function(e){for(var t=[],n=0,r=e.length;n<r;n++){var i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Ye(t,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Hn);var e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(var n=0,r=t.length;n<r;n++){var i=t[n];gt.setFromBufferAttribute(i),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,gt.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,gt.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(gt.min),this.boundingBox.expandByPoint(gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new Gn);var e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){var n=this.boundingSphere.center;if(gt.setFromBufferAttribute(e),t)for(var r=0,i=t.length;r<i;r++){var a=t[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(gt.min,Ir.min),gt.expandByPoint(Je),Je.addVectors(gt.max,Ir.max),gt.expandByPoint(Je)):(gt.expandByPoint(Ir.min),gt.expandByPoint(Ir.max))}gt.getCenter(n);for(var o=0,r=0,i=e.count;r<i;r++)Je.fromBufferAttribute(e,r),o=Math.max(o,n.distanceToSquared(Je));if(t)for(var r=0,i=t.length;r<i;r++)for(var a=t[r],s=this.morphTargetsRelative,l=0,u=a.count;l<u;l++)Je.fromBufferAttribute(a,l),s&&(Qn.fromBufferAttribute(e,l),Je.add(Qn)),o=Math.max(o,n.distanceToSquared(Je));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){var e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}var n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new we(new Float32Array(4*o),4));for(var s=t.tangent.array,l=[],u=[],c=0;c<o;c++)l[c]=new S,u[c]=new S;var h=new S,d=new S,f=new S,v=new W,g=new W,_=new W,m=new S,p=new S;function E(D,F,U){h.fromArray(r,D*3),d.fromArray(r,F*3),f.fromArray(r,U*3),v.fromArray(a,D*2),g.fromArray(a,F*2),_.fromArray(a,U*2),d.sub(h),f.sub(h),g.sub(v),_.sub(v);var Q=1/(g.x*_.y-_.x*g.y);isFinite(Q)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(Q),p.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(Q),l[D].add(m),l[F].add(m),l[U].add(m),u[D].add(p),u[F].add(p),u[U].add(p))}var A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(var c=0,b=A.length;c<b;++c)for(var y=A[c],T=y.start,G=y.count,P=T,C=T+G;P<C;P+=3)E(n[P+0],n[P+1],n[P+2]);var N=new S,V=new S,O=new S,B=new S;function L(D){O.fromArray(i,D*3),B.copy(O);var F=l[D];N.copy(F),N.sub(O.multiplyScalar(O.dot(F))).normalize(),V.crossVectors(B,F);var U=V.dot(u[D]),Q=U<0?-1:1;s[D*4]=N.x,s[D*4+1]=N.y,s[D*4+2]=N.z,s[D*4+3]=Q}for(var c=0,b=A.length;c<b;++c)for(var y=A[c],T=y.start,G=y.count,P=T,C=T+G;P<C;P+=3)L(n[P+0]),L(n[P+1]),L(n[P+2])},computeVertexNormals:function(){var e=this.index,t=this.getAttribute("position");if(t!==void 0){var n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(var r=0,i=n.count;r<i;r++)n.setXYZ(r,0,0,0);var a=new S,o=new S,s=new S,l=new S,u=new S,c=new S,h=new S,d=new S;if(e)for(var r=0,i=e.count;r<i;r+=3){var f=e.getX(r+0),v=e.getX(r+1),g=e.getX(r+2);a.fromBufferAttribute(t,f),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),h.subVectors(s,o),d.subVectors(a,o),h.cross(d),l.fromBufferAttribute(n,f),u.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),l.add(h),u.add(h),c.add(h),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(v,u.x,u.y,u.z),n.setXYZ(g,c.x,c.y,c.z)}else for(var r=0,i=t.count;r<i;r+=3)a.fromBufferAttribute(t,r+0),o.fromBufferAttribute(t,r+1),s.fromBufferAttribute(t,r+2),h.subVectors(s,o),d.subVectors(a,o),h.cross(d),n.setXYZ(r+0,h.x,h.y,h.z),n.setXYZ(r+1,h.x,h.y,h.z),n.setXYZ(r+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}},merge:function(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var n=this.attributes;for(var r in n)if(e.attributes[r]!==void 0)for(var i=n[r],a=i.array,o=e.attributes[r],s=o.array,l=o.itemSize*t,u=Math.min(s.length,a.length-l),c=0,h=l;c<u;c++,h++)a[h]=s[c];return this},normalizeNormals:function(){for(var e=this.attributes.normal,t=0,n=e.count;t<n;t++)Je.fromBufferAttribute(e,t),Je.normalize(),e.setXYZ(t,Je.x,Je.y,Je.z)},toNonIndexed:function(){function e(g,_){for(var m=g.array,p=g.itemSize,E=g.normalized,A=new m.constructor(_.length*p),b=0,y=0,T=0,G=_.length;T<G;T++){b=_[T]*p;for(var P=0;P<p;P++)A[y++]=m[b++]}return new we(A,p,E)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;var t=new Ge,n=this.index.array,r=this.attributes;for(var i in r){var a=r[i],o=e(a,n);t.setAttribute(i,o)}var s=this.morphAttributes;for(var i in s){for(var l=[],u=s[i],c=0,h=u.length;c<h;c++){var a=u[c],o=e(a,n);l.push(o)}t.morphAttributes[i]=l}t.morphTargetsRelative=this.morphTargetsRelative;for(var d=this.groups,c=0,f=d.length;c<f;c++){var v=d[c];t.addGroup(v.start,v.count,v.materialIndex)}return t},toJSON:function(){var e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){var t=this.parameters;for(var n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};var r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});var i=this.attributes;for(var n in i){var a=i[n],o=a.toJSON(e.data);a.name!==""&&(o.name=a.name),e.data.attributes[n]=o}var s={},l=!1;for(var n in this.morphAttributes){for(var u=this.morphAttributes[n],c=[],h=0,d=u.length;h<d;h++){var a=u[h],o=a.toJSON(e.data);a.name!==""&&(o.name=a.name),c.push(o)}c.length>0&&(s[n]=c,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);var f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));var v=this.boundingSphere;return v!==null&&(e.data.boundingSphere={center:v.center.toArray(),radius:v.radius}),e},clone:function(){return new Ge().copy(this)},copy:function(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;var t={};this.name=e.name;var n=e.index;n!==null&&this.setIndex(n.clone(t));var r=e.attributes;for(var i in r){var a=r[i];this.setAttribute(i,a.clone(t))}var o=e.morphAttributes;for(var i in o){for(var s=[],l=o[i],u=0,c=l.length;u<c;u++)s.push(l[u].clone(t));this.morphAttributes[i]=s}this.morphTargetsRelative=e.morphTargetsRelative;for(var h=e.groups,u=0,c=h.length;u<c;u++){var d=h[u];this.addGroup(d.start,d.count,d.materialIndex)}var f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());var v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var ps=new Le,$n=new ci,Oa=new Gn,dn=new S,pn=new S,vn=new S,Na=new S,Fa=new S,Ba=new S,Mi=new S,wi=new S,Si=new S,Ei=new W,Ti=new W,Ai=new W,za=new S,Li=new S;function et(e,t){e===void 0&&(e=new Ge),t===void 0&&(t=new _n),he.call(this),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}et.prototype=Object.assign(Object.create(he.prototype),{constructor:et,isMesh:!0,copy:function(e){return he.prototype.copy.call(this,e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this},updateMorphTargets:function(){var e=this.geometry;if(e.isBufferGeometry){var t=e.morphAttributes,n=Object.keys(t);if(n.length>0){var r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var i=0,a=r.length;i<a;i++){var o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}else{var s=e.morphTargets;s!==void 0&&s.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(e,t){var n=this.geometry,r=this.material,i=this.matrixWorld;if(r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),e.ray.intersectsSphere(Oa)!==!1&&(ps.copy(i).invert(),$n.copy(e.ray).applyMatrix4(ps),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)))){var a;if(n.isBufferGeometry){var o=n.index,s=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(r))for(var v=0,g=d.length;v<g;v++)for(var _=d[v],m=r[_.materialIndex],p=Math.max(_.start,f.start),E=Math.min(_.start+_.count,f.start+f.count),A=p,b=E;A<b;A+=3){var y=o.getX(A),T=o.getX(A+1),G=o.getX(A+2);a=Ri(this,m,e,$n,s,l,u,c,h,y,T,G),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=_.materialIndex,t.push(a))}else for(var p=Math.max(0,f.start),E=Math.min(o.count,f.start+f.count),v=p,g=E;v<g;v+=3){var y=o.getX(v),T=o.getX(v+1),G=o.getX(v+2);a=Ri(this,r,e,$n,s,l,u,c,h,y,T,G),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}else if(s!==void 0)if(Array.isArray(r))for(var v=0,g=d.length;v<g;v++)for(var _=d[v],m=r[_.materialIndex],p=Math.max(_.start,f.start),E=Math.min(_.start+_.count,f.start+f.count),A=p,b=E;A<b;A+=3){var y=A,T=A+1,G=A+2;a=Ri(this,m,e,$n,s,l,u,c,h,y,T,G),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=_.materialIndex,t.push(a))}else for(var p=Math.max(0,f.start),E=Math.min(s.count,f.start+f.count),v=p,g=E;v<g;v+=3){var y=v,T=v+1,G=v+2;a=Ri(this,r,e,$n,s,l,u,c,h,y,T,G),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function ih(e,t,n,r,i,a,o,s){var l;if(t.side===Qe?l=r.intersectTriangle(o,a,i,!0,s):l=r.intersectTriangle(i,a,o,t.side!==aa,s),l===null)return null;Li.copy(s),Li.applyMatrix4(e.matrixWorld);var u=n.ray.origin.distanceTo(Li);return u<n.near||u>n.far?null:{distance:u,point:Li.clone(),object:e}}function Ri(e,t,n,r,i,a,o,s,l,u,c,h){dn.fromBufferAttribute(i,u),pn.fromBufferAttribute(i,c),vn.fromBufferAttribute(i,h);var d=e.morphTargetInfluences;if(t.morphTargets&&a&&d){Mi.set(0,0,0),wi.set(0,0,0),Si.set(0,0,0);for(var f=0,v=a.length;f<v;f++){var g=d[f],_=a[f];g!==0&&(Na.fromBufferAttribute(_,u),Fa.fromBufferAttribute(_,c),Ba.fromBufferAttribute(_,h),o?(Mi.addScaledVector(Na,g),wi.addScaledVector(Fa,g),Si.addScaledVector(Ba,g)):(Mi.addScaledVector(Na.sub(dn),g),wi.addScaledVector(Fa.sub(pn),g),Si.addScaledVector(Ba.sub(vn),g)))}dn.add(Mi),pn.add(wi),vn.add(Si)}e.isSkinnedMesh&&(e.boneTransform(u,dn),e.boneTransform(c,pn),e.boneTransform(h,vn));var m=ih(e,t,n,r,dn,pn,vn,za);if(m){s&&(Ei.fromBufferAttribute(s,u),Ti.fromBufferAttribute(s,c),Ai.fromBufferAttribute(s,h),m.uv=tn.getUV(za,dn,pn,vn,Ei,Ti,Ai,new W)),l&&(Ei.fromBufferAttribute(l,u),Ti.fromBufferAttribute(l,c),Ai.fromBufferAttribute(l,h),m.uv2=tn.getUV(za,dn,pn,vn,Ei,Ti,Ai,new W));var p=new eh(u,c,h);tn.getNormal(dn,pn,vn,p.normal),m.face=p}return m}var Oo=function(e){wn(t,e);function t(n,r,i,a,o,s){n===void 0&&(n=1),r===void 0&&(r=1),i===void 0&&(i=1),a===void 0&&(a=1),o===void 0&&(o=1),s===void 0&&(s=1);var l=e.call(this)||this;l.type="BoxGeometry",l.parameters={width:n,height:r,depth:i,widthSegments:a,heightSegments:o,depthSegments:s};var u=l;a=Math.floor(a),o=Math.floor(o),s=Math.floor(s);var c=[],h=[],d=[],f=[],v=0,g=0;_("z","y","x",-1,-1,i,r,n,s,o,0),_("z","y","x",1,-1,i,r,-n,s,o,1),_("x","z","y",1,1,n,i,r,a,s,2),_("x","z","y",1,-1,n,i,-r,a,s,3),_("x","y","z",1,-1,n,r,i,a,o,4),_("x","y","z",-1,-1,n,r,-i,a,o,5),l.setIndex(c),l.setAttribute("position",new Ye(h,3)),l.setAttribute("normal",new Ye(d,3)),l.setAttribute("uv",new Ye(f,2));function _(m,p,E,A,b,y,T,G,P,C,N){for(var V=y/P,O=T/C,B=y/2,L=T/2,D=G/2,F=P+1,U=C+1,Q=0,Y=0,Z=new S,ne=0;ne<U;ne++)for(var Re=ne*O-L,ge=0;ge<F;ge++){var k=ge*V-B;Z[m]=k*A,Z[p]=Re*b,Z[E]=D,h.push(Z.x,Z.y,Z.z),Z[m]=0,Z[p]=0,Z[E]=G>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(ge/P),f.push(1-ne/C),Q+=1}for(var ne=0;ne<C;ne++)for(var ge=0;ge<P;ge++){var Be=v+ge+F*ne,Ce=v+ge+F*(ne+1),ae=v+(ge+1)+F*(ne+1),le=v+(ge+1)+F*ne;c.push(Be,Ce,le),c.push(Ce,ae,le),Y+=6}u.addGroup(g,Y,N),g+=Y,v+=Q}return l}return t}(Ge);function dr(e){var t={};for(var n in e){t[n]={};for(var r in e[n]){var i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture)?t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function nt(e){for(var t={},n=0;n<e.length;n++){var r=dr(e[n]);for(var i in r)t[i]=r[i]}return t}var ah={clone:dr,merge:nt},oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function pt(e){pe.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=oh,this.fragmentShader=sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}pt.prototype=Object.create(pe.prototype);pt.prototype.constructor=pt;pt.prototype.isShaderMaterial=!0;pt.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this};pt.prototype.toJSON=function(e){var t=pe.prototype.toJSON.call(this,e);t.glslVersion=this.glslVersion,t.uniforms={};for(var n in this.uniforms){var r=this.uniforms[n],i=r.value;i&&i.isTexture?t.uniforms[n]={type:"t",value:i.toJSON(e).uuid}:i&&i.isColor?t.uniforms[n]={type:"c",value:i.getHex()}:i&&i.isVector2?t.uniforms[n]={type:"v2",value:i.toArray()}:i&&i.isVector3?t.uniforms[n]={type:"v3",value:i.toArray()}:i&&i.isVector4?t.uniforms[n]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?t.uniforms[n]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?t.uniforms[n]={type:"m4",value:i.toArray()}:t.uniforms[n]={value:i}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;var a={};for(var o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(t.extensions=a),t};function xn(){he.call(this),this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le}xn.prototype=Object.assign(Object.create(he.prototype),{constructor:xn,isCamera:!0,copy:function(e,t){return he.prototype.copy.call(this,e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this},getWorldDirection:function(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new S),this.updateWorldMatrix(!0,!1);var t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()},updateMatrixWorld:function(e){he.prototype.updateMatrixWorld.call(this,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(e,t){he.prototype.updateWorldMatrix.call(this,e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Ke(e,t,n,r){e===void 0&&(e=50),t===void 0&&(t=1),n===void 0&&(n=.1),r===void 0&&(r=2e3),xn.call(this),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Ke.prototype=Object.assign(Object.create(xn.prototype),{constructor:Ke,isPerspectiveCamera:!0,copy:function(e,t){return xn.prototype.copy.call(this,e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this},setFocalLength:function(e){var t=.5*this.getFilmHeight()/e;this.fov=xe.RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()},getFocalLength:function(){var e=Math.tan(xe.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e},getEffectiveFOV:function(){return xe.RAD2DEG*2*Math.atan(Math.tan(xe.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=this.near,t=e*Math.tan(xe.DEG2RAD*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){var o=a.fullWidth,s=a.fullHeight;i+=a.offsetX*r/o,t-=a.offsetY*n/s,r*=a.width/o,n*=a.height/s}var l=this.filmOffset;l!==0&&(i+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(e){var t=he.prototype.toJSON.call(this,e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}});var Kn=90,er=1;function pr(e,t,n){if(he.call(this),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;var r=new Ke(Kn,er,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new S(1,0,0)),this.add(r);var i=new Ke(Kn,er,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(-1,0,0)),this.add(i);var a=new Ke(Kn,er,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new S(0,1,0)),this.add(a);var o=new Ke(Kn,er,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new S(0,-1,0)),this.add(o);var s=new Ke(Kn,er,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new S(0,0,1)),this.add(s);var l=new Ke(Kn,er,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,-1)),this.add(l),this.update=function(u,c){this.parent===null&&this.updateMatrixWorld();var h=u.xr.enabled,d=u.getRenderTarget();u.xr.enabled=!1;var f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,u.setRenderTarget(n,0),u.render(c,r),u.setRenderTarget(n,1),u.render(c,i),u.setRenderTarget(n,2),u.render(c,a),u.setRenderTarget(n,3),u.render(c,o),u.setRenderTarget(n,4),u.render(c,s),n.texture.generateMipmaps=f,u.setRenderTarget(n,5),u.render(c,l),u.setRenderTarget(d),u.xr.enabled=h}}pr.prototype=Object.create(he.prototype);pr.prototype.constructor=pr;function bn(e,t,n,r,i,a,o,s,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ao,o=o!==void 0?o:Dn,Fe.call(this,e,t,n,r,i,a,o,s,l,u),this.flipY=!1,this._needsFlipEnvMap=!0}bn.prototype=Object.create(Fe.prototype);bn.prototype.constructor=bn;bn.prototype.isCubeTexture=!0;Object.defineProperty(bn.prototype,"images",{get:function(){return this.image},set:function(e){this.image=e}});var lh=function(e){wn(t,e);function t(n,r,i){var a=this;return Number.isInteger(r)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),r=i),a=e.call(this,n,n,r)||this,Object.defineProperty(a,"isWebGLCubeRenderTarget",{value:!0}),r=r||{},a.texture=new bn(void 0,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),a.texture._needsFlipEnvMap=!1,a}return t.prototype.fromEquirectangularTexture=function(n,r){this.texture.type=r.type,this.texture.format=Ft,this.texture.encoding=r.encoding,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;var i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Oo(5,5,5),o=new pt({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:Gr});o.uniforms.tEquirect.value=r;var s=new et(a,o),l=r.minFilter;r.minFilter===sa&&(r.minFilter=rt);var u=new pr(1,10,this);return u.update(n,s),r.minFilter=l,s.geometry.dispose(),s.material.dispose(),this},t.prototype.clear=function(n,r,i,a){for(var o=n.getRenderTarget(),s=0;s<6;s++)n.setRenderTarget(this,s),n.clear(r,i,a);n.setRenderTarget(o)},t}(qr);function vr(e,t,n,r,i,a,o,s,l,u,c,h){Fe.call(this,null,a,o,s,l,u,r,i,c,h),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=l!==void 0?l:ut,this.minFilter=u!==void 0?u:ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}vr.prototype=Object.create(Fe.prototype);vr.prototype.constructor=vr;vr.prototype.isDataTexture=!0;var tr=new Gn,Ci=new S,ua=function(){function e(t,n,r,i,a,o){this.planes=[t!==void 0?t:new en,n!==void 0?n:new en,r!==void 0?r:new en,i!==void 0?i:new en,a!==void 0?a:new en,o!==void 0?o:new en]}return e.prototype.set=function(t,n,r,i,a,o){var s=this.planes;return s[0].copy(t),s[1].copy(n),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(o),this},e.prototype.clone=function(){return new this.constructor().copy(this)},e.prototype.copy=function(t){for(var n=this.planes,r=0;r<6;r++)n[r].copy(t.planes[r]);return this},e.prototype.setFromProjectionMatrix=function(t){var n=this.planes,r=t.elements,i=r[0],a=r[1],o=r[2],s=r[3],l=r[4],u=r[5],c=r[6],h=r[7],d=r[8],f=r[9],v=r[10],g=r[11],_=r[12],m=r[13],p=r[14],E=r[15];return n[0].setComponents(s-i,h-l,g-d,E-_).normalize(),n[1].setComponents(s+i,h+l,g+d,E+_).normalize(),n[2].setComponents(s+a,h+u,g+f,E+m).normalize(),n[3].setComponents(s-a,h-u,g-f,E-m).normalize(),n[4].setComponents(s-o,h-c,g-v,E-p).normalize(),n[5].setComponents(s+o,h+c,g+v,E+p).normalize(),this},e.prototype.intersectsObject=function(t){var n=t.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)},e.prototype.intersectsSprite=function(t){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)},e.prototype.intersectsSphere=function(t){for(var n=this.planes,r=t.center,i=-t.radius,a=0;a<6;a++){var o=n[a].distanceToPoint(r);if(o<i)return!1}return!0},e.prototype.intersectsBox=function(t){for(var n=this.planes,r=0;r<6;r++){var i=n[r];if(Ci.x=i.normal.x>0?t.max.x:t.min.x,Ci.y=i.normal.y>0?t.max.y:t.min.y,Ci.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ci)<0)return!1}return!0},e.prototype.containsPoint=function(t){for(var n=this.planes,r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0},e}();function Fl(){var e=null,t=!1,n=null,r=null;function i(a,o){n(a,o),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function uh(e,t){var n=t.isWebGL2,r=new WeakMap;function i(u,c){var h=u.array,d=u.usage,f=e.createBuffer();e.bindBuffer(c,f),e.bufferData(c,h,d),u.onUploadCallback();var v=5126;return h instanceof Float32Array?v=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?u.isFloat16BufferAttribute?n?v=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):v=5123:h instanceof Int16Array?v=5122:h instanceof Uint32Array?v=5125:h instanceof Int32Array?v=5124:h instanceof Int8Array?v=5120:h instanceof Uint8Array&&(v=5121),{buffer:f,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function a(u,c,h){var d=c.array,f=c.updateRange;e.bindBuffer(h,u),f.count===-1?e.bufferSubData(h,0,d):(n?e.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):e.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),r.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);var c=r.get(u);c&&(e.deleteBuffer(c.buffer),r.delete(u))}function l(u,c){if(u.isGLBufferAttribute){var h=r.get(u);(!h||h.version<u.version)&&r.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);var d=r.get(u);d===void 0?r.set(u,i(u,c)):d.version<u.version&&(a(d.buffer,u,c),d.version=u.version)}return{get:o,remove:s,update:l}}var ch=function(e){wn(t,e);function t(n,r,i,a){n===void 0&&(n=1),r===void 0&&(r=1),i===void 0&&(i=1),a===void 0&&(a=1);var o=e.call(this)||this;o.type="PlaneGeometry",o.parameters={width:n,height:r,widthSegments:i,heightSegments:a};for(var s=n/2,l=r/2,u=Math.floor(i),c=Math.floor(a),h=u+1,d=c+1,f=n/u,v=r/c,g=[],_=[],m=[],p=[],E=0;E<d;E++)for(var A=E*v-l,b=0;b<h;b++){var y=b*f-s;_.push(y,-A,0),m.push(0,0,1),p.push(b/u),p.push(1-E/c)}for(var E=0;E<c;E++)for(var b=0;b<u;b++){var T=b+h*E,G=b+h*(E+1),P=b+1+h*(E+1),C=b+1+h*E;g.push(T,G,C),g.push(G,P,C)}return o.setIndex(g),o.setAttribute("position",new Ye(_,3)),o.setAttribute("normal",new Ye(m,3)),o.setAttribute("uv",new Ye(p,2)),o}return t}(Ge),hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mh="vec3 transformed = vec3( position );",gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yh=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,_h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Eh=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Rh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ch=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fh=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vh=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,kh=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Wh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Yh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jh=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Jh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Qh=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,$h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kh=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,af=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ff=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,_f=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,bf=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Mf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,wf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,Sf=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Of=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Nf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ff=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Yf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Zf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Jf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Qf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$f=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Kf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,td=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rd=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,od=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ld=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_d=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wd=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ed=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Td=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ld=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Cd=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Te={alphamap_fragment:hh,alphamap_pars_fragment:fh,alphatest_fragment:dh,aomap_fragment:ph,aomap_pars_fragment:vh,begin_vertex:mh,beginnormal_vertex:gh,bsdfs:yh,bumpmap_pars_fragment:_h,clipping_planes_fragment:xh,clipping_planes_pars_fragment:bh,clipping_planes_pars_vertex:Mh,clipping_planes_vertex:wh,color_fragment:Sh,color_pars_fragment:Eh,color_pars_vertex:Th,color_vertex:Ah,common:Lh,cube_uv_reflection_fragment:Rh,defaultnormal_vertex:Ch,displacementmap_pars_vertex:Ph,displacementmap_vertex:Dh,emissivemap_fragment:Ih,emissivemap_pars_fragment:Oh,encodings_fragment:Nh,encodings_pars_fragment:Fh,envmap_fragment:Bh,envmap_common_pars_fragment:zh,envmap_pars_fragment:Uh,envmap_pars_vertex:Hh,envmap_physical_pars_fragment:Qh,envmap_vertex:Gh,fog_vertex:Vh,fog_pars_vertex:kh,fog_fragment:Wh,fog_pars_fragment:qh,gradientmap_pars_fragment:Xh,lightmap_fragment:Yh,lightmap_pars_fragment:Zh,lights_lambert_vertex:jh,lights_pars_begin:Jh,lights_toon_fragment:$h,lights_toon_pars_fragment:Kh,lights_phong_fragment:ef,lights_phong_pars_fragment:tf,lights_physical_fragment:nf,lights_physical_pars_fragment:rf,lights_fragment_begin:af,lights_fragment_maps:of,lights_fragment_end:sf,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:uf,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:hf,map_fragment:ff,map_pars_fragment:df,map_particle_fragment:pf,map_particle_pars_fragment:vf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphnormal_vertex:yf,morphtarget_pars_vertex:_f,morphtarget_vertex:xf,normal_fragment_begin:bf,normal_fragment_maps:Mf,normalmap_pars_fragment:wf,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:Tf,packing:Af,premultiplied_alpha_fragment:Lf,project_vertex:Rf,dithering_fragment:Cf,dithering_pars_fragment:Pf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:Nf,shadowmap_vertex:Ff,shadowmask_pars_fragment:Bf,skinbase_vertex:zf,skinning_pars_vertex:Uf,skinning_vertex:Hf,skinnormal_vertex:Gf,specularmap_fragment:Vf,specularmap_pars_fragment:kf,tonemapping_fragment:Wf,tonemapping_pars_fragment:qf,transmissionmap_fragment:Xf,transmissionmap_pars_fragment:Yf,uv_pars_fragment:Zf,uv_pars_vertex:jf,uv_vertex:Jf,uv2_pars_fragment:Qf,uv2_pars_vertex:$f,uv2_vertex:Kf,worldpos_vertex:ed,background_frag:td,background_vert:nd,cube_frag:rd,cube_vert:id,depth_frag:ad,depth_vert:od,distanceRGBA_frag:sd,distanceRGBA_vert:ld,equirect_frag:ud,equirect_vert:cd,linedashed_frag:hd,linedashed_vert:fd,meshbasic_frag:dd,meshbasic_vert:pd,meshlambert_frag:vd,meshlambert_vert:md,meshmatcap_frag:gd,meshmatcap_vert:yd,meshtoon_frag:_d,meshtoon_vert:xd,meshphong_frag:bd,meshphong_vert:Md,meshphysical_frag:wd,meshphysical_vert:Sd,normal_frag:Ed,normal_vert:Td,points_frag:Ad,points_vert:Ld,shadow_frag:Rd,shadow_vert:Cd,sprite_frag:Pd,sprite_vert:Dd},$={common:{diffuse:{value:new de(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new wt},uv2Transform:{value:new wt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new wt}},sprite:{diffuse:{value:new de(15658734)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new wt}}},Ht={basic:{uniforms:nt([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:nt([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.fog,$.lights,{emissive:{value:new de(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:nt([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:nt([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:nt([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new de(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:nt([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:nt([$.points,$.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:nt([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:nt([$.common,$.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:nt([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Te.normal_vert,fragmentShader:Te.normal_frag},sprite:{uniforms:nt([$.sprite,$.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:nt([$.envmap,{opacity:{value:1}}]),vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:nt([$.common,$.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:nt([$.lights,$.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Ht.physical={uniforms:nt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new W(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new de(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function Id(e,t,n,r,i){var a=new de(0),o=0,s,l,u=null,c=0,h=null;function d(v,g,_,m){var p=g.isScene===!0?g.background:null;p&&p.isTexture&&(p=t.get(p));var E=e.xr,A=E.getSession&&E.getSession();A&&A.environmentBlendMode==="additive"&&(p=null),p===null?f(a,o):p&&p.isColor&&(f(p,1),m=!0),(e.autoClear||m)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),p&&(p.isCubeTexture||p.isWebGLCubeRenderTarget||p.mapping===Ro)?(l===void 0&&(l=new et(new Oo(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:dr(Ht.cube.uniforms),vertexShader:Ht.cube.vertexShader,fragmentShader:Ht.cube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),p.isWebGLCubeRenderTarget&&(p=p.texture),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(u!==p||c!==p.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=p,c=p.version,h=e.toneMapping),v.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(s===void 0&&(s=new et(new ch(2,2),new pt({name:"BackgroundMaterial",uniforms:dr(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:ia,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(s)),s.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),s.material.uniforms.uvTransform.value.copy(p.matrix),(u!==p||c!==p.version||h!==e.toneMapping)&&(s.material.needsUpdate=!0,u=p,c=p.version,h=e.toneMapping),v.unshift(s,s.geometry,s.material,0,0,null))}function f(v,g){n.buffers.color.setClear(v.r,v.g,v.b,g,i)}return{getClearColor:function(){return a},setClearColor:function(v,g){g===void 0&&(g=1),a.set(v),o=g,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,f(a,o)},render:d}}function Od(e,t,n,r){var i=e.getParameter(34921),a=r.isWebGL2?null:t.get("OES_vertex_array_object"),o=r.isWebGL2||a!==null,s={},l=g(null),u=l;function c(O,B,L,D,F){var U=!1;if(o){var Q=v(D,L,B);u!==Q&&(u=Q,d(u.object)),U=_(D,F),U&&m(D,F)}else{var Y=B.wireframe===!0;(u.geometry!==D.id||u.program!==L.id||u.wireframe!==Y)&&(u.geometry=D.id,u.program=L.id,u.wireframe=Y,U=!0)}O.isInstancedMesh===!0&&(U=!0),F!==null&&n.update(F,34963),U&&(T(O,B,L,D),F!==null&&e.bindBuffer(34963,n.get(F).buffer))}function h(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function d(O){return r.isWebGL2?e.bindVertexArray(O):a.bindVertexArrayOES(O)}function f(O){return r.isWebGL2?e.deleteVertexArray(O):a.deleteVertexArrayOES(O)}function v(O,B,L){var D=L.wireframe===!0,F=s[O.id];F===void 0&&(F={},s[O.id]=F);var U=F[B.id];U===void 0&&(U={},F[B.id]=U);var Q=U[D];return Q===void 0&&(Q=g(h()),U[D]=Q),Q}function g(O){for(var B=[],L=[],D=[],F=0;F<i;F++)B[F]=0,L[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:L,attributeDivisors:D,object:O,attributes:{},index:null}}function _(O,B){var L=u.attributes,D=O.attributes,F=0;for(var U in D){var Q=L[U],Y=D[U];if(Q===void 0||Q.attribute!==Y||Q.data!==Y.data)return!0;F++}return u.attributesNum!==F||u.index!==B}function m(O,B){var L={},D=O.attributes,F=0;for(var U in D){var Q=D[U],Y={};Y.attribute=Q,Q.data&&(Y.data=Q.data),L[U]=Y,F++}u.attributes=L,u.attributesNum=F,u.index=B}function p(){for(var O=u.newAttributes,B=0,L=O.length;B<L;B++)O[B]=0}function E(O){A(O,0)}function A(O,B){var L=u.newAttributes,D=u.enabledAttributes,F=u.attributeDivisors;if(L[O]=1,D[O]===0&&(e.enableVertexAttribArray(O),D[O]=1),F[O]!==B){var U=r.isWebGL2?e:t.get("ANGLE_instanced_arrays");U[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,B),F[O]=B}}function b(){for(var O=u.newAttributes,B=u.enabledAttributes,L=0,D=B.length;L<D;L++)B[L]!==O[L]&&(e.disableVertexAttribArray(L),B[L]=0)}function y(O,B,L,D,F,U){r.isWebGL2===!0&&(L===5124||L===5125)?e.vertexAttribIPointer(O,B,L,F,U):e.vertexAttribPointer(O,B,L,D,F,U)}function T(O,B,L,D){if(!(r.isWebGL2===!1&&(O.isInstancedMesh||D.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)){p();var F=D.attributes,U=L.getAttributes(),Q=B.defaultAttributeValues;for(var Y in U){var Z=U[Y];if(Z>=0){var ne=F[Y];if(ne!==void 0){var Re=ne.normalized,ge=ne.itemSize,k=n.get(ne);if(k===void 0)continue;var Be=k.buffer,Ce=k.type,ae=k.bytesPerElement;if(ne.isInterleavedBufferAttribute){var le=ne.data,Se=le.stride,ve=ne.offset;le&&le.isInstancedInterleavedBuffer?(A(Z,le.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=le.meshPerAttribute*le.count)):E(Z),e.bindBuffer(34962,Be),y(Z,ge,Ce,Re,Se*ae,ve*ae)}else ne.isInstancedBufferAttribute?(A(Z,ne.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)):E(Z),e.bindBuffer(34962,Be),y(Z,ge,Ce,Re,0,0)}else if(Y==="instanceMatrix"){var k=n.get(O.instanceMatrix);if(k===void 0)continue;var Be=k.buffer,Ce=k.type;A(Z+0,1),A(Z+1,1),A(Z+2,1),A(Z+3,1),e.bindBuffer(34962,Be),e.vertexAttribPointer(Z+0,4,Ce,!1,64,0),e.vertexAttribPointer(Z+1,4,Ce,!1,64,16),e.vertexAttribPointer(Z+2,4,Ce,!1,64,32),e.vertexAttribPointer(Z+3,4,Ce,!1,64,48)}else if(Y==="instanceColor"){var k=n.get(O.instanceColor);if(k===void 0)continue;var Be=k.buffer,Ce=k.type;A(Z,1),e.bindBuffer(34962,Be),e.vertexAttribPointer(Z,3,Ce,!1,12,0)}else if(Q!==void 0){var ze=Q[Y];if(ze!==void 0)switch(ze.length){case 2:e.vertexAttrib2fv(Z,ze);break;case 3:e.vertexAttrib3fv(Z,ze);break;case 4:e.vertexAttrib4fv(Z,ze);break;default:e.vertexAttrib1fv(Z,ze)}}}}b()}}function G(){N();for(var O in s){var B=s[O];for(var L in B){var D=B[L];for(var F in D)f(D[F].object),delete D[F];delete B[L]}delete s[O]}}function P(O){if(s[O.id]!==void 0){var B=s[O.id];for(var L in B){var D=B[L];for(var F in D)f(D[F].object),delete D[F];delete B[L]}delete s[O.id]}}function C(O){for(var B in s){var L=s[B];if(L[O.id]!==void 0){var D=L[O.id];for(var F in D)f(D[F].object),delete D[F];delete L[O.id]}}}function N(){V(),u!==l&&(u=l,d(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:N,resetDefaultState:V,dispose:G,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:p,enableAttribute:E,disableUnusedAttributes:b}}function Nd(e,t,n,r){var i=r.isWebGL2,a;function o(u){a=u}function s(u,c){e.drawArrays(a,u,c),n.update(c,a,1)}function l(u,c,h){if(h!==0){var d,f;if(i)d=e,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](a,u,c,h),n.update(c,a,h)}}this.setMode=o,this.render=s,this.renderInstances=l}function Fd(e,t,n){var r;function i(){if(r!==void 0)return r;var y=t.get("EXT_texture_filter_anisotropic");return y!==null?r=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT):r=0,r}function a(y){if(y==="highp"){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}var o=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&e instanceof WebGL2ComputeRenderingContext,s=n.precision!==void 0?n.precision:"highp",l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);var u=n.logarithmicDepthBuffer===!0,c=e.getParameter(34930),h=e.getParameter(35660),d=e.getParameter(3379),f=e.getParameter(34076),v=e.getParameter(34921),g=e.getParameter(36347),_=e.getParameter(36348),m=e.getParameter(36349),p=h>0,E=o||!!t.get("OES_texture_float"),A=p&&E,b=o?e.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:v,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:p,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:b}}function Bd(e){var t=this,n=null,r=0,i=!1,a=!1,o=new en,s=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){var v=h.length!==0||d||r!==0||i;return i=d,n=c(h,f,0),r=h.length,v},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1,u()},this.setState=function(h,d,f){var v=h.clippingPlanes,g=h.clipIntersection,_=h.clipShadows,m=e.get(h);if(!i||v===null||v.length===0||a&&!_)a?c(null):u();else{var p=a?0:r,E=p*4,A=m.clippingState||null;l.value=A,A=c(v,d,E,f);for(var b=0;b!==E;++b)A[b]=n[b];m.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=p}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function c(h,d,f,v){var g=h!==null?h.length:0,_=null;if(g!==0){if(_=l.value,v!==!0||_===null){var m=f+g*4,p=d.matrixWorldInverse;s.getNormalMatrix(p),(_===null||_.length<m)&&(_=new Float32Array(m));for(var E=0,A=f;E!==g;++E,A+=4)o.copy(h[E]).applyMatrix4(p,s),o.normal.toArray(_,A),_[A+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function zd(e){var t=new WeakMap;function n(o,s){return s===Wo?o.mapping=Ao:s===qo&&(o.mapping=Lo),o}function r(o){if(o&&o.isTexture){var s=o.mapping;if(s===Wo||s===qo)if(t.has(o)){var l=t.get(o).texture;return n(l,o.mapping)}else{var u=o.image;if(u&&u.height>0){var c=e.getRenderList(),h=e.getRenderTarget(),d=new lh(u.height/2);return d.fromEquirectangularTexture(e,o),t.set(o,d),e.setRenderTarget(h),e.setRenderList(c),o.addEventListener("dispose",i),n(d.texture,o.mapping)}else return null}}return o}function i(o){var s=o.target;s.removeEventListener("dispose",i);var l=t.get(s);l!==void 0&&(t.delete(s),l.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}function Ud(e){var t={};function n(r){if(t[r]!==void 0)return t[r];var i;switch(r){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(r)}return t[r]=i,i}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float")},get:function(r){var i=n(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function Hd(e,t,n,r){var i={},a=new WeakMap;function o(h){var d=h.target;d.index!==null&&t.remove(d.index);for(var f in d.attributes)t.remove(d.attributes[f]);d.removeEventListener("dispose",o),delete i[d.id];var v=a.get(d);v&&(t.remove(v),a.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function s(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,n.memory.geometries++),d}function l(h){var d=h.attributes;for(var f in d)t.update(d[f],34962);var v=h.morphAttributes;for(var f in v)for(var g=v[f],_=0,m=g.length;_<m;_++)t.update(g[_],34962)}function u(h){var d=[],f=h.index,v=h.attributes.position,g=0;if(f!==null){var _=f.array;g=f.version;for(var m=0,p=_.length;m<p;m+=3){var E=_[m+0],A=_[m+1],b=_[m+2];d.push(E,A,A,b,b,E)}}else{var _=v.array;g=v.version;for(var m=0,p=_.length/3-1;m<p;m+=3){var E=m+0,A=m+1,b=m+2;d.push(E,A,A,b,b,E)}}var y=new(Nl(d)>65535?$r:Qr)(d,1);y.version=g;var T=a.get(h);T&&t.remove(T),a.set(h,y)}function c(h){var d=a.get(h);if(d){var f=h.index;f!==null&&d.version<f.version&&u(h)}else u(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:c}}function Gd(e,t,n,r){var i=r.isWebGL2,a;function o(d){a=d}var s,l;function u(d){s=d.type,l=d.bytesPerElement}function c(d,f){e.drawElements(a,f,s,d*l),n.update(f,a,1)}function h(d,f,v){if(v!==0){var g,_;if(i)g=e,_="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](a,f,s,d*l,v),n.update(f,a,v)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h}function Vd(e){var t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(n.calls++,o){case 4:n.triangles+=s*(a/3);break;case 1:n.lines+=s*(a/2);break;case 3:n.lines+=s*(a-1);break;case 2:n.lines+=s*a;break;case 0:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function kd(e,t){return e[0]-t[0]}function Wd(e,t){return Math.abs(t[1])-Math.abs(e[1])}function qd(e){for(var t={},n=new Float32Array(8),r=[],i=0;i<8;i++)r[i]=[i,0];function a(o,s,l,u){var c=o.morphTargetInfluences,h=c===void 0?0:c.length,d=t[s.id];if(d===void 0){d=[];for(var f=0;f<h;f++)d[f]=[f,0];t[s.id]=d}for(var f=0;f<h;f++){var v=d[f];v[0]=f,v[1]=c[f]}d.sort(Wd);for(var f=0;f<8;f++)f<h&&d[f][1]?(r[f][0]=d[f][0],r[f][1]=d[f][1]):(r[f][0]=Number.MAX_SAFE_INTEGER,r[f][1]=0);r.sort(kd);for(var g=l.morphTargets&&s.morphAttributes.position,_=l.morphNormals&&s.morphAttributes.normal,m=0,f=0;f<8;f++){var v=r[f],p=v[0],E=v[1];p!==Number.MAX_SAFE_INTEGER&&E?(g&&s.getAttribute("morphTarget"+f)!==g[p]&&s.setAttribute("morphTarget"+f,g[p]),_&&s.getAttribute("morphNormal"+f)!==_[p]&&s.setAttribute("morphNormal"+f,_[p]),n[f]=E,m+=E):(g&&s.hasAttribute("morphTarget"+f)===!0&&s.deleteAttribute("morphTarget"+f),_&&s.hasAttribute("morphNormal"+f)===!0&&s.deleteAttribute("morphNormal"+f),n[f]=0)}var A=s.morphTargetsRelative?1:1-m;u.getUniforms().setValue(e,"morphTargetBaseInfluence",A),u.getUniforms().setValue(e,"morphTargetInfluences",n)}return{update:a}}function Xd(e,t,n,r){var i=new WeakMap;function a(l){var u=r.render.frame,c=l.geometry,h=t.get(l,c);return i.get(h)!==u&&(t.update(h),i.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function s(l){var u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}function Kr(e,t,n,r){e===void 0&&(e=null),t===void 0&&(t=1),n===void 0&&(n=1),r===void 0&&(r=1),Fe.call(this,null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}Kr.prototype=Object.create(Fe.prototype);Kr.prototype.constructor=Kr;Kr.prototype.isDataTexture2DArray=!0;function ei(e,t,n,r){e===void 0&&(e=null),t===void 0&&(t=1),n===void 0&&(n=1),r===void 0&&(r=1),Fe.call(this,null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}ei.prototype=Object.create(Fe.prototype);ei.prototype.constructor=ei;ei.prototype.isDataTexture3D=!0;var Bl=new Fe,Yd=new Kr,Zd=new ei,zl=new bn,vs=[],ms=[],gs=new Float32Array(16),ys=new Float32Array(9),_s=new Float32Array(4);function Tr(e,t,n){var r=e[0];if(r<=0||r>0)return e;var i=t*n,a=vs[i];if(a===void 0&&(a=new Float32Array(i),vs[i]=a),t!==0){r.toArray(a,0);for(var o=1,s=0;o!==t;++o)s+=n,e[o].toArray(a,s)}return a}function Tt(e,t){if(e.length!==t.length)return!1;for(var n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xt(e,t){for(var n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ul(e,t){var n=ms[t];n===void 0&&(n=new Int32Array(t),ms[t]=n);for(var r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function jd(e,t){var n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Jd(e,t){var n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tt(n,t))return;e.uniform2fv(this.addr,t),xt(n,t)}}function Qd(e,t){var n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Tt(n,t))return;e.uniform3fv(this.addr,t),xt(n,t)}}function $d(e,t){var n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tt(n,t))return;e.uniform4fv(this.addr,t),xt(n,t)}}function Kd(e,t){var n=this.cache,r=t.elements;if(r===void 0){if(Tt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xt(n,t)}else{if(Tt(n,r))return;_s.set(r),e.uniformMatrix2fv(this.addr,!1,_s),xt(n,r)}}function ep(e,t){var n=this.cache,r=t.elements;if(r===void 0){if(Tt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xt(n,t)}else{if(Tt(n,r))return;ys.set(r),e.uniformMatrix3fv(this.addr,!1,ys),xt(n,r)}}function tp(e,t){var n=this.cache,r=t.elements;if(r===void 0){if(Tt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xt(n,t)}else{if(Tt(n,r))return;gs.set(r),e.uniformMatrix4fv(this.addr,!1,gs),xt(n,r)}}function np(e,t,n){var r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.safeSetTexture2D(t||Bl,i)}function rp(e,t,n){var r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Yd,i)}function ip(e,t,n){var r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Zd,i)}function ap(e,t,n){var r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.safeSetTextureCube(t||zl,i)}function op(e,t){var n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function sp(e,t){var n=this.cache;Tt(n,t)||(e.uniform2iv(this.addr,t),xt(n,t))}function lp(e,t){var n=this.cache;Tt(n,t)||(e.uniform3iv(this.addr,t),xt(n,t))}function up(e,t){var n=this.cache;Tt(n,t)||(e.uniform4iv(this.addr,t),xt(n,t))}function cp(e,t){var n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function hp(e){switch(e){case 5126:return jd;case 35664:return Jd;case 35665:return Qd;case 35666:return $d;case 35674:return Kd;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return op;case 35667:case 35671:return sp;case 35668:case 35672:return lp;case 35669:case 35673:return up;case 5125:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return rp}}function fp(e,t){e.uniform1fv(this.addr,t)}function dp(e,t){e.uniform1iv(this.addr,t)}function pp(e,t){e.uniform2iv(this.addr,t)}function vp(e,t){e.uniform3iv(this.addr,t)}function mp(e,t){e.uniform4iv(this.addr,t)}function gp(e,t){var n=Tr(t,this.size,2);e.uniform2fv(this.addr,n)}function yp(e,t){var n=Tr(t,this.size,3);e.uniform3fv(this.addr,n)}function _p(e,t){var n=Tr(t,this.size,4);e.uniform4fv(this.addr,n)}function xp(e,t){var n=Tr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function bp(e,t){var n=Tr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Mp(e,t){var n=Tr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function wp(e,t,n){var r=t.length,i=Ul(n,r);e.uniform1iv(this.addr,i);for(var a=0;a!==r;++a)n.safeSetTexture2D(t[a]||Bl,i[a])}function Sp(e,t,n){var r=t.length,i=Ul(n,r);e.uniform1iv(this.addr,i);for(var a=0;a!==r;++a)n.safeSetTextureCube(t[a]||zl,i[a])}function Ep(e){switch(e){case 5126:return fp;case 35664:return gp;case 35665:return yp;case 35666:return _p;case 35674:return xp;case 35675:return bp;case 35676:return Mp;case 5124:case 35670:return dp;case 35667:case 35671:return pp;case 35668:case 35672:return vp;case 35669:case 35673:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35680:case 36300:case 36308:case 36293:return Sp}}function Tp(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=hp(t.type)}function Hl(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ep(t.type)}Hl.prototype.updateCache=function(e){var t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),xt(t,e)};function Gl(e){this.id=e,this.seq=[],this.map={}}Gl.prototype.setValue=function(e,t,n){for(var r=this.seq,i=0,a=r.length;i!==a;++i){var o=r[i];o.setValue(e,t[o.id],n)}};var Ua=/(\w+)(\])?(\[|\.)?/g;function xs(e,t){e.seq.push(t),e.map[t.id]=t}function Ap(e,t,n){var r=e.name,i=r.length;for(Ua.lastIndex=0;;){var a=Ua.exec(r),o=Ua.lastIndex,s=a[1],l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===i){xs(n,u===void 0?new Tp(s,e,t):new Hl(s,e,t));break}else{var c=n.map,h=c[s];h===void 0&&(h=new Gl(s),xs(n,h)),n=h}}}function gn(e,t){this.seq=[],this.map={};for(var n=e.getProgramParameter(t,35718),r=0;r<n;++r){var i=e.getActiveUniform(t,r),a=e.getUniformLocation(t,i.name);Ap(i,a,this)}}gn.prototype.setValue=function(e,t,n,r){var i=this.map[t];i!==void 0&&i.setValue(e,n,r)};gn.prototype.setOptional=function(e,t,n){var r=t[n];r!==void 0&&this.setValue(e,n,r)};gn.upload=function(e,t,n,r){for(var i=0,a=t.length;i!==a;++i){var o=t[i],s=n[o.id];s.needsUpdate!==!1&&o.setValue(e,s.value,r)}};gn.seqWithValue=function(e,t){for(var n=[],r=0,i=e.length;r!==i;++r){var a=e[r];a.id in t&&n.push(a)}return n};function bs(e,t,n){var r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Lp=0;function Rp(e){for(var t=e.split(`
`),n=0;n<t.length;n++)t[n]=n+1+": "+t[n];return t.join(`
`)}function Vl(e){switch(e){case ui:return["Linear","( value )"];case Dl:return["sRGB","( value )"];case Nc:return["RGBE","( value )"];case Bc:return["RGBM","( value, 7.0 )"];case zc:return["RGBM","( value, 16.0 )"];case Uc:return["RGBD","( value, 256.0 )"];case Oc:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Fc:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",e),["Linear","( value )"]}}function Ms(e,t,n){var r=e.getShaderParameter(t,35713),i=e.getShaderInfoLog(t).trim();if(r&&i==="")return"";var a=e.getShaderSource(t);return"THREE.WebGLShader: gl.getShaderInfoLog() "+n+`
`+i+Rp(a)}function Or(e,t){var n=Vl(t);return"vec4 "+e+"( vec4 value ) { return "+n[0]+"ToLinear"+n[1]+"; }"}function Cp(e,t){var n=Vl(t);return"vec4 "+e+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function Pp(e,t){var n;switch(t){case Iu:n="Linear";break;case Ou:n="Reinhard";break;case Nu:n="OptimizedCineon";break;case Fu:n="ACESFilmic";break;case Bu:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Dp(e){var t=[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""];return t.filter(Hr).join(`
`)}function Ip(e){var t=[];for(var n in e){var r=e[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function Op(e,t){for(var n={},r=e.getProgramParameter(t,35721),i=0;i<r;i++){var a=e.getActiveAttrib(t,i),o=a.name;n[o]=e.getAttribLocation(t,o)}return n}function Hr(e){return e!==""}function ws(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ss(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(e){return e.replace(Np,Fp)}function Fp(e,t){var n=Te[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return to(n)}var Bp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Es(e){return e.replace(zp,kl).replace(Bp,Up)}function Up(e,t,n,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),kl(e,t,n,r)}function kl(e,t,n,r){for(var i="",a=parseInt(t);a<parseInt(n);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Ts(e){var t="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hp(e){var t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Tl?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ur&&(t="SHADOWMAP_TYPE_VSM"),t}function Gp(e){var t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ao:case Lo:t="ENVMAP_TYPE_CUBE";break;case Ro:case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vp(e){var t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Lo:case Co:t="ENVMAP_MODE_REFRACTION";break}return t}function kp(e){var t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case oa:t="ENVMAP_BLENDING_MULTIPLY";break;case Pu:t="ENVMAP_BLENDING_MIX";break;case Du:t="ENVMAP_BLENDING_ADD";break}return t}function Wp(e,t,n,r){var i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,l=Hp(n),u=Gp(n),c=Vp(n),h=kp(n),d=e.gammaFactor>0?e.gammaFactor:1,f=n.isWebGL2?"":Dp(n),v=Ip(a),g=i.createProgram(),_,m,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=[v].filter(Hr).join(`
`),_.length>0&&(_+=`
`),m=[f,v].filter(Hr).join(`
`),m.length>0&&(m+=`
`)):(_=[Ts(n),"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+n.maxBones,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.useVertexTexture?"#define BONE_TEXTURE":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),m=[f,Ts(n),"#define SHADER_NAME "+n.shaderName,v,n.alphaTest?"#define ALPHATEST "+n.alphaTest+(n.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.sheen?"#define USE_SHEEN":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==kr?"#define TONE_MAPPING":"",n.toneMapping!==kr?Te.tonemapping_pars_fragment:"",n.toneMapping!==kr?Pp("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",Te.encodings_pars_fragment,n.map?Or("mapTexelToLinear",n.mapEncoding):"",n.matcap?Or("matcapTexelToLinear",n.matcapEncoding):"",n.envMap?Or("envMapTexelToLinear",n.envMapEncoding):"",n.emissiveMap?Or("emissiveMapTexelToLinear",n.emissiveMapEncoding):"",n.lightMap?Or("lightMapTexelToLinear",n.lightMapEncoding):"",Cp("linearToOutputTexel",n.outputEncoding),n.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hr).join(`
`)),o=to(o),o=ws(o,n),o=Ss(o,n),s=to(s),s=ws(s,n),s=Ss(s,n),o=Es(o),s=Es(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",n.glslVersion===is?"":"out highp vec4 pc_fragColor;",n.glslVersion===is?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);var E=p+_+o,A=p+m+s,b=bs(i,35633,E),y=bs(i,35632,A);if(i.attachShader(g,b),i.attachShader(g,y),n.index0AttributeName!==void 0?i.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),e.debug.checkShaderErrors){var T=i.getProgramInfoLog(g).trim(),G=i.getShaderInfoLog(b).trim(),P=i.getShaderInfoLog(y).trim(),C=!0,N=!0;if(i.getProgramParameter(g,35714)===!1){C=!1;var V=Ms(i,b,"vertex"),O=Ms(i,y,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(g,35715),"gl.getProgramInfoLog",T,V,O)}else T!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",T):(G===""||P==="")&&(N=!1);N&&(this.diagnostics={runnable:C,programLog:T,vertexShader:{log:G,prefix:_},fragmentShader:{log:P,prefix:m}})}i.deleteShader(b),i.deleteShader(y);var B;this.getUniforms=function(){return B===void 0&&(B=new gn(i,g)),B};var L;return this.getAttributes=function(){return L===void 0&&(L=Op(i,g)),L},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=n.shaderName,this.id=Lp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=y,this}function qp(e,t,n,r,i,a){var o=[],s=r.isWebGL2,l=r.logarithmicDepthBuffer,u=r.floatVertexTextures,c=r.maxVertexUniforms,h=r.vertexTextures,d=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function g(y){var T=y.skeleton,G=T.bones;if(u)return 1024;var P=c,C=Math.floor((P-20)/4),N=Math.min(C,G.length);return N<G.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+G.length+" bones. This GPU supports "+N+"."),0):N}function _(y){var T;return y&&y.isTexture?T=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),T=y.texture.encoding):T=ui,T}function m(y,T,G,P,C){var N=P.fog,V=y.isMeshStandardMaterial?P.environment:null,O=t.get(y.envMap||V),B=f[y.type],L=C.isSkinnedMesh?g(C):0;y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));var D,F;if(B){var U=Ht[B];D=U.vertexShader,F=U.fragmentShader}else D=y.vertexShader,F=y.fragmentShader;var Q=e.getRenderTarget(),Y={isWebGL2:s,shaderID:B,shaderName:y.type,vertexShader:D,fragmentShader:F,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:C.isInstancedMesh===!0,instancingColor:C.isInstancedMesh===!0&&C.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Q!==null?_(Q.texture):e.outputEncoding,map:!!y.map,mapEncoding:_(y.map),matcap:!!y.matcap,matcapEncoding:_(y.matcap),envMap:!!O,envMapMode:O&&O.mapping,envMapEncoding:_(O),envMapCubeUV:!!O&&(O.mapping===Ro||O.mapping===Co),lightMap:!!y.lightMap,lightMapEncoding:_(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:_(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Vc,tangentSpaceNormalMap:y.normalMapType===Sr,clearcoatMap:!!y.clearcoatMap,clearcoatRoughnessMap:!!y.clearcoatRoughnessMap,clearcoatNormalMap:!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,alphaMap:!!y.alphaMap,gradientMap:!!y.gradientMap,sheen:!!y.sheen,transmissionMap:!!y.transmissionMap,combine:y.combine,vertexTangents:y.normalMap&&y.vertexTangents,vertexColors:y.vertexColors,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmissionMap)&&!!y.displacementMap,fog:!!N,useFog:y.fog,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:l,skinning:y.skinning&&L>0,maxBones:L,useVertexTexture:u,morphTargets:y.morphTargets,morphNormals:y.morphNormals,maxMorphTargets:e.maxMorphTargets,maxMorphNormals:e.maxMorphNormals,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&G.length>0,shadowMapType:e.shadowMap.type,toneMapping:y.toneMapped?e.toneMapping:kr,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,alphaTest:y.alphaTest,doubleSided:y.side===aa,flipSided:y.side===Qe,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:s||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:s||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:s||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()};return Y}function p(y){var T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.fragmentShader),T.push(y.vertexShader)),y.defines!==void 0)for(var G in y.defines)T.push(G),T.push(y.defines[G]);if(y.isRawShaderMaterial===!1){for(var P=0;P<v.length;P++)T.push(y[v[P]]);T.push(e.outputEncoding),T.push(e.gammaFactor)}return T.push(y.customProgramCacheKey),T.join()}function E(y){var T=f[y.type],G;if(T){var P=Ht[T];G=ah.clone(P.uniforms)}else G=y.uniforms;return G}function A(y,T){for(var G,P=0,C=o.length;P<C;P++){var N=o[P];if(N.cacheKey===T){G=N,++G.usedTimes;break}}return G===void 0&&(G=new Wp(e,T,y,i),o.push(G)),G}function b(y){if(--y.usedTimes===0){var T=o.indexOf(y);o[T]=o[o.length-1],o.pop(),y.destroy()}}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:A,releaseProgram:b,programs:o}}function Xp(){var e=new WeakMap;function t(a){var o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function n(a){e.delete(a)}function r(a,o,s){e.get(a)[o]=s}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function Yp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.program!==t.program?e.program.id-t.program.id:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Zp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function As(e){var t=[],n=0,r=[],i=[],a={id:-1};function o(){n=0,r.length=0,i.length=0}function s(d,f,v,g,_,m){var p=t[n],E=e.get(v);return p===void 0?(p={id:d.id,object:d,geometry:f,material:v,program:E.program||a,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},t[n]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=v,p.program=E.program||a,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),n++,p}function l(d,f,v,g,_,m){var p=s(d,f,v,g,_,m);(v.transparent===!0?i:r).push(p)}function u(d,f,v,g,_,m){var p=s(d,f,v,g,_,m);(v.transparent===!0?i:r).unshift(p)}function c(d,f){r.length>1&&r.sort(d||Yp),i.length>1&&i.sort(f||Zp)}function h(){for(var d=n,f=t.length;d<f;d++){var v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:r,transparent:i,init:o,push:l,unshift:u,finish:h,sort:c}}function jp(e){var t=new WeakMap;function n(i,a){var o=t.get(i),s;return o===void 0?(s=new As(e),t.set(i,new WeakMap),t.get(i).set(a,s)):(s=o.get(a),s===void 0&&(s=new As(e),o.set(a,s))),s}function r(){t=new WeakMap}return{get:n,dispose:r}}function Jp(){var e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];var n;switch(t.type){case"DirectionalLight":n={direction:new S,color:new de};break;case"SpotLight":n={position:new S,direction:new S,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new S,color:new de,distance:0,decay:0};break;case"HemisphereLight":n={direction:new S,skyColor:new de,groundColor:new de};break;case"RectAreaLight":n={color:new de,position:new S,halfWidth:new S,halfHeight:new S};break}return e[t.id]=n,n}}}function Qp(){var e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];var n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var $p=0;function Kp(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function ev(e,t){for(var n=new Jp,r=Qp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},a=0;a<9;a++)i.probe.push(new S);var o=new S,s=new Le,l=new Le;function u(h){for(var d=0,f=0,v=0,g=0;g<9;g++)i.probe[g].set(0,0,0);var _=0,m=0,p=0,E=0,A=0,b=0,y=0,T=0;h.sort(Kp);for(var g=0,G=h.length;g<G;g++){var P=h[g],C=P.color,N=P.intensity,V=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=C.r*N,f+=C.g*N,v+=C.b*N;else if(P.isLightProbe)for(var B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],N);else if(P.isDirectionalLight){var L=n.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){var D=P.shadow,F=r.get(P);F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.directionalShadow[_]=F,i.directionalShadowMap[_]=O,i.directionalShadowMatrix[_]=P.shadow.matrix,b++}i.directional[_]=L,_++}else if(P.isSpotLight){var L=n.get(P);if(L.position.setFromMatrixPosition(P.matrixWorld),L.color.copy(C).multiplyScalar(N),L.distance=V,L.coneCos=Math.cos(P.angle),L.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),L.decay=P.decay,P.castShadow){var D=P.shadow,F=r.get(P);F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.spotShadow[p]=F,i.spotShadowMap[p]=O,i.spotShadowMatrix[p]=P.shadow.matrix,T++}i.spot[p]=L,p++}else if(P.isRectAreaLight){var L=n.get(P);L.color.copy(C).multiplyScalar(N),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),i.rectArea[E]=L,E++}else if(P.isPointLight){var L=n.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),L.distance=P.distance,L.decay=P.decay,P.castShadow){var D=P.shadow,F=r.get(P);F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,F.shadowCameraNear=D.camera.near,F.shadowCameraFar=D.camera.far,i.pointShadow[m]=F,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=P.shadow.matrix,y++}i.point[m]=L,m++}else if(P.isHemisphereLight){var L=n.get(P);L.skyColor.copy(P.color).multiplyScalar(N),L.groundColor.copy(P.groundColor).multiplyScalar(N),i.hemi[A]=L,A++}}E>0&&(t.isWebGL2||e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$.LTC_FLOAT_1,i.rectAreaLTC2=$.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=$.LTC_HALF_1,i.rectAreaLTC2=$.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=v;var U=i.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==E||U.hemiLength!==A||U.numDirectionalShadows!==b||U.numPointShadows!==y||U.numSpotShadows!==T)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=E,i.point.length=m,i.hemi.length=A,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotShadowMatrix.length=T,U.directionalLength=_,U.pointLength=m,U.spotLength=p,U.rectAreaLength=E,U.hemiLength=A,U.numDirectionalShadows=b,U.numPointShadows=y,U.numSpotShadows=T,i.version=$p++)}function c(h,d){for(var f=0,v=0,g=0,_=0,m=0,p=d.matrixWorldInverse,E=0,A=h.length;E<A;E++){var b=h[E];if(b.isDirectionalLight){var y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(p),f++}else if(b.isSpotLight){var y=i.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(o),y.direction.transformDirection(p),g++}else if(b.isRectAreaLight){var y=i.rectArea[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),l.identity(),s.copy(b.matrixWorld),s.premultiply(p),l.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(l),y.halfHeight.applyMatrix4(l),_++}else if(b.isPointLight){var y=i.point[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),v++}else if(b.isHemisphereLight){var y=i.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),y.direction.normalize(),m++}}}return{setup:u,setupView:c,state:i}}function Ls(e,t){var n=new ev(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(h){r.push(h)}function s(h){i.push(h)}function l(){n.setup(r)}function u(h){n.setupView(r,h)}var c={lightsArray:r,shadowsArray:i,lights:n};return{init:a,state:c,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function tv(e,t){var n=new WeakMap;function r(a,o){o===void 0&&(o=0);var s;return n.has(a)===!1?(s=new Ls(e,t),n.set(a,[]),n.get(a).push(s)):o>=n.get(a).length?(s=new Ls(e,t),n.get(a).push(s)):s=n.get(a)[o],s}function i(){n=new WeakMap}return{get:r,dispose:i}}function In(e){pe.call(this),this.type="MeshDepthMaterial",this.depthPacking=Hc,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}In.prototype=Object.create(pe.prototype);In.prototype.constructor=In;In.prototype.isMeshDepthMaterial=!0;In.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this};function On(e){pe.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}On.prototype=Object.create(pe.prototype);On.prototype.constructor=On;On.prototype.isMeshDistanceMaterial=!0;On.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this};var nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Wl(e,t,n){var r=new ua,i=new W,a=new W,o=new Ie,s=[],l=[],u={},c={0:Qe,1:ia,2:aa},h=new pt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:rv,fragmentShader:nv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;var f=new Ge;f.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var v=new et(f,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl,this.render=function(b,y,T){if(g.enabled!==!1&&!(g.autoUpdate===!1&&g.needsUpdate===!1)&&b.length!==0){var G=e.getRenderTarget(),P=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),N=e.state;N.setBlending(Gr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(var V=0,O=b.length;V<O;V++){var B=b[V],L=B.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(!(L.autoUpdate===!1&&L.needsUpdate===!1)){i.copy(L.mapSize);var D=L.getFrameExtents();if(i.multiply(D),a.copy(L.mapSize),(i.x>n||i.y>n)&&(i.x>n&&(a.x=Math.floor(n/D.x),i.x=a.x*D.x,L.mapSize.x=a.x),i.y>n&&(a.y=Math.floor(n/D.y),i.y=a.y*D.y,L.mapSize.y=a.y)),L.map===null&&!L.isPointLightShadow&&this.type===Ur){var F={minFilter:rt,magFilter:rt,format:Ft};L.map=new qr(i.x,i.y,F),L.map.texture.name=B.name+".shadowMap",L.mapPass=new qr(i.x,i.y,F),L.camera.updateProjectionMatrix()}if(L.map===null){var F={minFilter:ut,magFilter:ut,format:Ft};L.map=new qr(i.x,i.y,F),L.map.texture.name=B.name+".shadowMap",L.camera.updateProjectionMatrix()}e.setRenderTarget(L.map),e.clear();for(var U=L.getViewportCount(),Q=0;Q<U;Q++){var Y=L.getViewport(Q);o.set(a.x*Y.x,a.y*Y.y,a.x*Y.z,a.y*Y.w),N.viewport(o),L.updateMatrices(B,Q),r=L.getFrustum(),A(y,T,L.camera,B,this.type)}!L.isPointLightShadow&&this.type===Ur&&_(L,T),L.needsUpdate=!1}}g.needsUpdate=!1,e.setRenderTarget(G,P,C)}};function _(b,y){var T=t.update(v);h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(y,null,T,h,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(y,null,T,d,v,null)}function m(b,y,T){var G=b<<0|y<<1|T<<2,P=s[G];return P===void 0&&(P=new In({depthPacking:Gc,morphTargets:b,skinning:y}),s[G]=P),P}function p(b,y,T){var G=b<<0|y<<1|T<<2,P=l[G];return P===void 0&&(P=new On({morphTargets:b,skinning:y}),l[G]=P),P}function E(b,y,T,G,P,C,N){var V=null,O=m,B=b.customDepthMaterial;if(G.isPointLight===!0&&(O=p,B=b.customDistanceMaterial),B===void 0){var L=!1;T.morphTargets===!0&&(L=y.morphAttributes&&y.morphAttributes.position&&y.morphAttributes.position.length>0);var D=!1;b.isSkinnedMesh===!0&&(T.skinning===!0?D=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b));var F=b.isInstancedMesh===!0;V=O(L,D,F)}else V=B;if(e.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0){var U=V.uuid,Q=T.uuid,Y=u[U];Y===void 0&&(Y={},u[U]=Y);var Z=Y[Q];Z===void 0&&(Z=V.clone(),Y[Q]=Z),V=Z}return V.visible=T.visible,V.wireframe=T.wireframe,N===Ur?V.side=T.shadowSide!==null?T.shadowSide:T.side:V.side=T.shadowSide!==null?T.shadowSide:c[T.side],V.clipShadows=T.clipShadows,V.clippingPlanes=T.clippingPlanes,V.clipIntersection=T.clipIntersection,V.wireframeLinewidth=T.wireframeLinewidth,V.linewidth=T.linewidth,G.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(V.referencePosition.setFromMatrixPosition(G.matrixWorld),V.nearDistance=P,V.farDistance=C),V}function A(b,y,T,G,P){if(b.visible!==!1){var C=b.layers.test(y.layers);if(C&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Ur)&&(!b.frustumCulled||r.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);var N=t.update(b),V=b.material;if(Array.isArray(V))for(var O=N.groups,B=0,L=O.length;B<L;B++){var D=O[B],F=V[D.materialIndex];if(F&&F.visible){var U=E(b,N,F,G,T.near,T.far,P);e.renderBufferDirect(T,null,N,U,b,D)}}else if(V.visible){var U=E(b,N,V,G,T.near,T.far,P);e.renderBufferDirect(T,null,N,U,b,null)}}for(var Q=b.children,Y=0,Z=Q.length;Y<Z;Y++)A(Q[Y],y,T,G,P)}}}function iv(e,t,n){var r,i,a=n.isWebGL2;function o(){var R=!1,q=new Ie,te=null,ue=new Ie(0,0,0,0);return{setMask:function(X){te!==X&&!R&&(e.colorMask(X,X,X,X),te=X)},setLocked:function(X){R=X},setClear:function(X,re,me,J,oe){oe===!0&&(X*=J,re*=J,me*=J),q.set(X,re,me,J),ue.equals(q)===!1&&(e.clearColor(X,re,me,J),ue.copy(q))},reset:function(){R=!1,te=null,ue.set(-1,0,0,0)}}}function s(){var R=!1,q=null,te=null,ue=null;return{setTest:function(X){X?ne(2929):Re(2929)},setMask:function(X){q!==X&&!R&&(e.depthMask(X),q=X)},setFunc:function(X){if(te!==X){if(X)switch(X){case Su:e.depthFunc(512);break;case Eu:e.depthFunc(519);break;case Tu:e.depthFunc(513);break;case Xa:e.depthFunc(515);break;case Au:e.depthFunc(514);break;case Lu:e.depthFunc(518);break;case Ru:e.depthFunc(516);break;case Cu:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);te=X}},setLocked:function(X){R=X},setClear:function(X){ue!==X&&(e.clearDepth(X),ue=X)},reset:function(){R=!1,q=null,te=null,ue=null}}}function l(){var R=!1,q=null,te=null,ue=null,X=null,re=null,me=null,J=null,oe=null;return{setTest:function(ie){R||(ie?ne(2960):Re(2960))},setMask:function(ie){q!==ie&&!R&&(e.stencilMask(ie),q=ie)},setFunc:function(ie,fe,ce){(te!==ie||ue!==fe||X!==ce)&&(e.stencilFunc(ie,fe,ce),te=ie,ue=fe,X=ce)},setOp:function(ie,fe,ce){(re!==ie||me!==fe||J!==ce)&&(e.stencilOp(ie,fe,ce),re=ie,me=fe,J=ce)},setLocked:function(ie){R=ie},setClear:function(ie){oe!==ie&&(e.clearStencil(ie),oe=ie)},reset:function(){R=!1,q=null,te=null,ue=null,X=null,re=null,me=null,J=null,oe=null}}}var u=new o,c=new s,h=new l,d={},f=null,v=null,g=null,_=null,m=null,p=null,E=null,A=null,b=null,y=!1,T=null,G=null,P=null,C=null,N=null,V=e.getParameter(35661),O=!1,B=0,L=e.getParameter(7938);L.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(L)[1]),O=B>=1):L.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),O=B>=2);var D=null,F={},U=new Ie,Q=new Ie;function Y(R,q,te){var ue=new Uint8Array(4),X=e.createTexture();e.bindTexture(R,X),e.texParameteri(R,10241,9728),e.texParameteri(R,10240,9728);for(var re=0;re<te;re++)e.texImage2D(q+re,0,6408,1,1,0,6408,5121,ue);return X}var Z={};Z[3553]=Y(3553,3553,1),Z[34067]=Y(34067,34069,6),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),ne(2929),c.setFunc(Xa),Se(!1),ve(zo),ne(2884),ae(Gr);function ne(R){d[R]!==!0&&(e.enable(R),d[R]=!0)}function Re(R){d[R]!==!1&&(e.disable(R),d[R]=!1)}function ge(R){return f!==R?(e.useProgram(R),f=R,!0):!1}var k=(r={},r[or]=32774,r[du]=32778,r[pu]=32779,r);if(a)k[Vo]=32775,k[ko]=32776;else{var Be=t.get("EXT_blend_minmax");Be!==null&&(k[Vo]=Be.MIN_EXT,k[ko]=Be.MAX_EXT)}var Ce=(i={},i[vu]=0,i[mu]=1,i[gu]=768,i[Ll]=770,i[wu]=776,i[bu]=774,i[_u]=772,i[yu]=769,i[Rl]=771,i[Mu]=775,i[xu]=773,i);function ae(R,q,te,ue,X,re,me,J){if(R===Gr){v&&(Re(3042),v=!1);return}if(v||(ne(3042),v=!0),R!==fu){if(R!==g||J!==y){if((_!==or||E!==or)&&(e.blendEquation(32774),_=or,E=or),J)switch(R){case Vr:e.blendFuncSeparate(1,771,1,771);break;case Uo:e.blendFunc(1,1);break;case Ho:e.blendFuncSeparate(0,0,769,771);break;case Go:e.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Vr:e.blendFuncSeparate(770,771,1,771);break;case Uo:e.blendFunc(770,1);break;case Ho:e.blendFunc(0,769);break;case Go:e.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}m=null,p=null,A=null,b=null,g=R,y=J}return}X=X||q,re=re||te,me=me||ue,(q!==_||X!==E)&&(e.blendEquationSeparate(k[q],k[X]),_=q,E=X),(te!==m||ue!==p||re!==A||me!==b)&&(e.blendFuncSeparate(Ce[te],Ce[ue],Ce[re],Ce[me]),m=te,p=ue,A=re,b=me),g=R,y=null}function le(R,q){R.side===aa?Re(2884):ne(2884);var te=R.side===Qe;q&&(te=!te),Se(te),R.blending===Vr&&R.transparent===!1?ae(Gr):ae(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),u.setMask(R.colorWrite);var ue=R.stencilWrite;h.setTest(ue),ue&&(h.setMask(R.stencilWriteMask),h.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),h.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ae(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits)}function Se(R){T!==R&&(R?e.frontFace(2304):e.frontFace(2305),T=R)}function ve(R){R!==uu?(ne(2884),R!==G&&(R===zo?e.cullFace(1029):R===cu?e.cullFace(1028):e.cullFace(1032))):Re(2884),G=R}function ze(R){R!==P&&(O&&e.lineWidth(R),P=R)}function Ae(R,q,te){R?(ne(32823),(C!==q||N!==te)&&(e.polygonOffset(q,te),C=q,N=te)):Re(32823)}function We(R){R?ne(3089):Re(3089)}function qe(R){R===void 0&&(R=33984+V-1),D!==R&&(e.activeTexture(R),D=R)}function tt(R,q){D===null&&qe();var te=F[D];te===void 0&&(te={type:void 0,texture:void 0},F[D]=te),(te.type!==R||te.texture!==q)&&(e.bindTexture(R,q||Z[R]),te.type=R,te.texture=q)}function ht(){var R=F[D];R!==void 0&&R.type!==void 0&&(e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function vt(){try{e.compressedTexImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function M(){try{e.texImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function w(){try{e.texImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(R){U.equals(R)===!1&&(e.scissor(R.x,R.y,R.z,R.w),U.copy(R))}function j(R){Q.equals(R)===!1&&(e.viewport(R.x,R.y,R.z,R.w),Q.copy(R))}function ye(){d={},D=null,F={},f=null,v=null,g=null,_=null,m=null,p=null,E=null,A=null,b=null,y=!1,T=null,G=null,P=null,C=null,N=null,u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:ne,disable:Re,useProgram:ge,setBlending:ae,setMaterial:le,setFlipSided:Se,setCullFace:ve,setLineWidth:ze,setPolygonOffset:Ae,setScissorTest:We,activeTexture:qe,bindTexture:tt,unbindTexture:ht,compressedTexImage2D:vt,texImage2D:M,texImage3D:w,scissor:ee,viewport:j,reset:ye}}function av(e,t,n,r,i,a,o){var s,l,u=i.isWebGL2,c=i.maxTextures,h=i.maxCubemapSize,d=i.maxTextureSize,f=i.maxSamples,v=new WeakMap,g,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,w){return _?new OffscreenCanvas(M,w):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function p(M,w,ee,j){var ye=1;if((M.width>j||M.height>j)&&(ye=j/Math.max(M.width,M.height)),ye<1||w===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){var R=w?xe.floorPowerOfTwo:Math.floor,q=R(ye*M.width),te=R(ye*M.height);g===void 0&&(g=m(q,te));var ue=ee?m(q,te):g;ue.width=q,ue.height=te;var X=ue.getContext("2d");return X.drawImage(M,0,0,q,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+q+"x"+te+")."),ue}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function E(M){return xe.isPowerOfTwo(M.width)&&xe.isPowerOfTwo(M.height)}function A(M){return u?!1:M.wrapS!==yt||M.wrapT!==yt||M.minFilter!==ut&&M.minFilter!==rt}function b(M,w){return M.generateMipmaps&&w&&M.minFilter!==ut&&M.minFilter!==rt}function y(M,w,ee,j){e.generateMipmap(M);var ye=r.get(w);ye.__maxMipLevel=Math.log(Math.max(ee,j))*Math.LOG2E}function T(M,w,ee){if(u===!1)return w;if(M!==null){if(e[M]!==void 0)return e[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}var j=w;return w===6403&&(ee===5126&&(j=33326),ee===5131&&(j=33325),ee===5121&&(j=33321)),w===6407&&(ee===5126&&(j=34837),ee===5131&&(j=34843),ee===5121&&(j=32849)),w===6408&&(ee===5126&&(j=34836),ee===5131&&(j=34842),ee===5121&&(j=32856)),(j===33325||j===33326||j===34842||j===34836)&&t.get("EXT_color_buffer_float"),j}function G(M){return M===ut||M===Xo||M===Yo?9728:9729}function P(M){var w=M.target;w.removeEventListener("dispose",P),N(w),w.isVideoTexture&&v.delete(w),o.memory.textures--}function C(M){var w=M.target;w.removeEventListener("dispose",C),V(w),o.memory.textures--}function N(M){var w=r.get(M);w.__webglInit!==void 0&&(e.deleteTexture(w.__webglTexture),r.remove(M))}function V(M){var w=r.get(M),ee=r.get(M.texture);if(M){if(ee.__webglTexture!==void 0&&e.deleteTexture(ee.__webglTexture),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(var j=0;j<6;j++)e.deleteFramebuffer(w.__webglFramebuffer[j]),w.__webglDepthbuffer&&e.deleteRenderbuffer(w.__webglDepthbuffer[j]);else e.deleteFramebuffer(w.__webglFramebuffer),w.__webglDepthbuffer&&e.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&e.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer&&e.deleteRenderbuffer(w.__webglColorRenderbuffer),w.__webglDepthRenderbuffer&&e.deleteRenderbuffer(w.__webglDepthRenderbuffer);r.remove(M.texture),r.remove(M)}}var O=0;function B(){O=0}function L(){var M=O;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),O+=1,M}function D(M,w){var ee=r.get(M);if(M.isVideoTexture&&We(M),M.version>0&&ee.__version!==M.version){var j=M.image;if(j===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(ee,M,w);return}}n.activeTexture(33984+w),n.bindTexture(3553,ee.__webglTexture)}function F(M,w){var ee=r.get(M);if(M.version>0&&ee.__version!==M.version){ge(ee,M,w);return}n.activeTexture(33984+w),n.bindTexture(35866,ee.__webglTexture)}function U(M,w){var ee=r.get(M);if(M.version>0&&ee.__version!==M.version){ge(ee,M,w);return}n.activeTexture(33984+w),n.bindTexture(32879,ee.__webglTexture)}function Q(M,w){var ee=r.get(M);if(M.version>0&&ee.__version!==M.version){k(ee,M,w);return}n.activeTexture(33984+w),n.bindTexture(34067,ee.__webglTexture)}var Y=(s={},s[Ya]=10497,s[yt]=33071,s[Za]=33648,s),Z=(l={},l[ut]=9728,l[Xo]=9984,l[Yo]=9986,l[rt]=9729,l[zu]=9985,l[sa]=9987,l);function ne(M,w,ee){ee?(e.texParameteri(M,10242,Y[w.wrapS]),e.texParameteri(M,10243,Y[w.wrapT]),(M===32879||M===35866)&&e.texParameteri(M,32882,Y[w.wrapR]),e.texParameteri(M,10240,Z[w.magFilter]),e.texParameteri(M,10241,Z[w.minFilter])):(e.texParameteri(M,10242,33071),e.texParameteri(M,10243,33071),(M===32879||M===35866)&&e.texParameteri(M,32882,33071),(w.wrapS!==yt||w.wrapT!==yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(M,10240,G(w.magFilter)),e.texParameteri(M,10241,G(w.minFilter)),w.minFilter!==ut&&w.minFilter!==rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));var j=t.get("EXT_texture_filter_anisotropic");if(j){if(w.type===mn&&t.get("OES_texture_float_linear")===null||w.type===Xi&&(u||t.get("OES_texture_half_float_linear"))===null)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(e.texParameterf(M,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function Re(M,w){M.__webglInit===void 0&&(M.__webglInit=!0,w.addEventListener("dispose",P),M.__webglTexture=e.createTexture(),o.memory.textures++)}function ge(M,w,ee){var j=3553;w.isDataTexture2DArray&&(j=35866),w.isDataTexture3D&&(j=32879),Re(M,w),n.activeTexture(33984+ee),n.bindTexture(j,M.__webglTexture),e.pixelStorei(37440,w.flipY),e.pixelStorei(37441,w.premultiplyAlpha),e.pixelStorei(3317,w.unpackAlignment);var ye=A(w)&&E(w.image)===!1,R=p(w.image,ye,!1,d),q=E(R)||u,te=a.convert(w.format),ue=a.convert(w.type),X=T(w.internalFormat,te,ue);ne(j,w,q);var re,me=w.mipmaps;if(w.isDepthTexture)X=6402,u?w.type===mn?X=36012:w.type===ki?X=33190:w.type===Wr?X=35056:X=33189:w.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===hr&&X===6402&&w.type!==qi&&w.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=qi,ue=a.convert(w.type)),w.format===jr&&X===6402&&(X=34041,w.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Wr,ue=a.convert(w.type))),n.texImage2D(3553,0,X,R.width,R.height,0,te,ue,null);else if(w.isDataTexture)if(me.length>0&&q){for(var J=0,oe=me.length;J<oe;J++)re=me[J],n.texImage2D(3553,J,X,re.width,re.height,0,te,ue,re.data);w.generateMipmaps=!1,M.__maxMipLevel=me.length-1}else n.texImage2D(3553,0,X,R.width,R.height,0,te,ue,R.data),M.__maxMipLevel=0;else if(w.isCompressedTexture){for(var J=0,oe=me.length;J<oe;J++)re=me[J],w.format!==Ft&&w.format!==Dn?te!==null?n.compressedTexImage2D(3553,J,X,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):n.texImage2D(3553,J,X,re.width,re.height,0,te,ue,re.data);M.__maxMipLevel=me.length-1}else if(w.isDataTexture2DArray)n.texImage3D(35866,0,X,R.width,R.height,R.depth,0,te,ue,R.data),M.__maxMipLevel=0;else if(w.isDataTexture3D)n.texImage3D(32879,0,X,R.width,R.height,R.depth,0,te,ue,R.data),M.__maxMipLevel=0;else if(me.length>0&&q){for(var J=0,oe=me.length;J<oe;J++)re=me[J],n.texImage2D(3553,J,X,te,ue,re);w.generateMipmaps=!1,M.__maxMipLevel=me.length-1}else n.texImage2D(3553,0,X,te,ue,R),M.__maxMipLevel=0;b(w,q)&&y(j,w,R.width,R.height),M.__version=w.version,w.onUpdate&&w.onUpdate(w)}function k(M,w,ee){if(w.image.length===6){Re(M,w),n.activeTexture(33984+ee),n.bindTexture(34067,M.__webglTexture),e.pixelStorei(37440,w.flipY),e.pixelStorei(37441,w.premultiplyAlpha),e.pixelStorei(3317,w.unpackAlignment);for(var j=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),ye=w.image[0]&&w.image[0].isDataTexture,R=[],q=0;q<6;q++)!j&&!ye?R[q]=p(w.image[q],!1,!0,h):R[q]=ye?w.image[q].image:w.image[q];var te=R[0],ue=E(te)||u,X=a.convert(w.format),re=a.convert(w.type),me=T(w.internalFormat,X,re);ne(34067,w,ue);var J;if(j){for(var q=0;q<6;q++){J=R[q].mipmaps;for(var oe=0;oe<J.length;oe++){var ie=J[oe];w.format!==Ft&&w.format!==Dn?X!==null?n.compressedTexImage2D(34069+q,oe,me,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):n.texImage2D(34069+q,oe,me,ie.width,ie.height,0,X,re,ie.data)}}M.__maxMipLevel=J.length-1}else{J=w.mipmaps;for(var q=0;q<6;q++)if(ye){n.texImage2D(34069+q,0,me,R[q].width,R[q].height,0,X,re,R[q].data);for(var oe=0;oe<J.length;oe++){var ie=J[oe],fe=ie.image[q].image;n.texImage2D(34069+q,oe+1,me,fe.width,fe.height,0,X,re,fe.data)}}else{n.texImage2D(34069+q,0,me,X,re,R[q]);for(var oe=0;oe<J.length;oe++){var ie=J[oe];n.texImage2D(34069+q,oe+1,me,X,re,ie.image[q])}}M.__maxMipLevel=J.length}b(w,ue)&&y(34067,w,te.width,te.height),M.__version=w.version,w.onUpdate&&w.onUpdate(w)}}function Be(M,w,ee,j){var ye=a.convert(w.texture.format),R=a.convert(w.texture.type),q=T(w.texture.internalFormat,ye,R);n.texImage2D(j,0,q,w.width,w.height,0,ye,R,null),e.bindFramebuffer(36160,M),e.framebufferTexture2D(36160,ee,j,r.get(w.texture).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ce(M,w,ee){if(e.bindRenderbuffer(36161,M),w.depthBuffer&&!w.stencilBuffer){var j=33189;if(ee){var ye=w.depthTexture;ye&&ye.isDepthTexture&&(ye.type===mn?j=36012:ye.type===ki&&(j=33190));var R=Ae(w);e.renderbufferStorageMultisample(36161,R,j,w.width,w.height)}else e.renderbufferStorage(36161,j,w.width,w.height);e.framebufferRenderbuffer(36160,36096,36161,M)}else if(w.depthBuffer&&w.stencilBuffer){if(ee){var R=Ae(w);e.renderbufferStorageMultisample(36161,R,35056,w.width,w.height)}else e.renderbufferStorage(36161,34041,w.width,w.height);e.framebufferRenderbuffer(36160,33306,36161,M)}else{var q=a.convert(w.texture.format),te=a.convert(w.texture.type),j=T(w.texture.internalFormat,q,te);if(ee){var R=Ae(w);e.renderbufferStorageMultisample(36161,R,j,w.width,w.height)}else e.renderbufferStorage(36161,j,w.width,w.height)}e.bindRenderbuffer(36161,null)}function ae(M,w){var ee=w&&w.isWebGLCubeRenderTarget;if(ee)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,M),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);var j=r.get(w.depthTexture).__webglTexture;if(w.depthTexture.format===hr)e.framebufferTexture2D(36160,36096,3553,j,0);else if(w.depthTexture.format===jr)e.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function le(M){var w=r.get(M),ee=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");ae(w.__webglFramebuffer,M)}else if(ee){w.__webglDepthbuffer=[];for(var j=0;j<6;j++)e.bindFramebuffer(36160,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]=e.createRenderbuffer(),Ce(w.__webglDepthbuffer[j],M,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=e.createRenderbuffer(),Ce(w.__webglDepthbuffer,M,!1);e.bindFramebuffer(36160,null)}function Se(M){var w=r.get(M),ee=r.get(M.texture);M.addEventListener("dispose",C),ee.__webglTexture=e.createTexture(),o.memory.textures++;var j=M.isWebGLCubeRenderTarget===!0,ye=M.isWebGLMultisampleRenderTarget===!0,R=E(M)||u;if(u&&M.texture.format===Dn&&(M.texture.type===mn||M.texture.type===Xi)&&(M.texture.format=Ft,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),j){w.__webglFramebuffer=[];for(var q=0;q<6;q++)w.__webglFramebuffer[q]=e.createFramebuffer()}else if(w.__webglFramebuffer=e.createFramebuffer(),ye)if(u){w.__webglMultisampledFramebuffer=e.createFramebuffer(),w.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,w.__webglColorRenderbuffer);var te=a.convert(M.texture.format),ue=a.convert(M.texture.type),X=T(M.texture.internalFormat,te,ue),re=Ae(M);e.renderbufferStorageMultisample(36161,re,X,M.width,M.height),e.bindFramebuffer(36160,w.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,w.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),M.depthBuffer&&(w.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(w.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(j){n.bindTexture(34067,ee.__webglTexture),ne(34067,M.texture,R);for(var q=0;q<6;q++)Be(w.__webglFramebuffer[q],M,36064,34069+q);b(M.texture,R)&&y(34067,M.texture,M.width,M.height),n.bindTexture(34067,null)}else n.bindTexture(3553,ee.__webglTexture),ne(3553,M.texture,R),Be(w.__webglFramebuffer,M,36064,3553),b(M.texture,R)&&y(3553,M.texture,M.width,M.height),n.bindTexture(3553,null);M.depthBuffer&&le(M)}function ve(M){var w=M.texture,ee=E(M)||u;if(b(w,ee)){var j=M.isWebGLCubeRenderTarget?34067:3553,ye=r.get(w).__webglTexture;n.bindTexture(j,ye),y(j,w,M.width,M.height),n.bindTexture(j,null)}}function ze(M){if(M.isWebGLMultisampleRenderTarget)if(u){var w=r.get(M);e.bindFramebuffer(36008,w.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,w.__webglFramebuffer);var ee=M.width,j=M.height,ye=16384;M.depthBuffer&&(ye|=256),M.stencilBuffer&&(ye|=1024),e.blitFramebuffer(0,0,ee,j,0,0,ee,j,ye,9728),e.bindFramebuffer(36160,w.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ae(M){return u&&M.isWebGLMultisampleRenderTarget?Math.min(f,M.samples):0}function We(M){var w=o.render.frame;v.get(M)!==w&&(v.set(M,w),M.update())}var qe=!1,tt=!1;function ht(M,w){M&&M.isWebGLRenderTarget&&(qe===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),qe=!0),M=M.texture),D(M,w)}function vt(M,w){M&&M.isWebGLCubeRenderTarget&&(tt===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),tt=!0),M=M.texture),Q(M,w)}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=Q,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ze,this.safeSetTexture2D=ht,this.safeSetTextureCube=vt}function ov(e,t,n){var r=n.isWebGL2;function i(a){var o;if(a===Po)return 5121;if(a===Vu)return 32819;if(a===ku)return 32820;if(a===Wu)return 33635;if(a===Uu)return 5120;if(a===Hu)return 5122;if(a===qi)return 5123;if(a===Gu)return 5124;if(a===ki)return 5125;if(a===mn)return 5126;if(a===Xi)return r?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===qu)return 6406;if(a===Dn)return 6407;if(a===Ft)return 6408;if(a===Xu)return 6409;if(a===Yu)return 6410;if(a===hr)return 6402;if(a===jr)return 34041;if(a===Zu)return 6403;if(a===ju)return 36244;if(a===Ju)return 33319;if(a===Qu)return 33320;if(a===$u)return 36248;if(a===Ku)return 36249;if(a===Zo||a===jo||a===Jo||a===Qo)if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===$o||a===Ko||a===es||a===ts)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===$o)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===es)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ts)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ec)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((a===ns||a===rs)&&(o=t.get("WEBGL_compressed_texture_etc"),o!==null)){if(a===ns)return o.COMPRESSED_RGB8_ETC2;if(a===rs)return o.COMPRESSED_RGBA8_ETC2_EAC}if(a===tc||a===nc||a===rc||a===ic||a===ac||a===oc||a===sc||a===lc||a===uc||a===cc||a===hc||a===fc||a===dc||a===pc||a===mc||a===gc||a===yc||a===_c||a===xc||a===bc||a===Mc||a===wc||a===Sc||a===Ec||a===Tc||a===Ac||a===Lc||a===Rc)return o=t.get("WEBGL_compressed_texture_astc"),o!==null?a:null;if(a===vc)return o=t.get("EXT_texture_compression_bptc"),o!==null?a:null;if(a===Wr)return r?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}function no(e){e===void 0&&(e=[]),Ke.call(this),this.cameras=e}no.prototype=Object.assign(Object.create(Ke.prototype),{constructor:no,isArrayCamera:!0});function ur(){he.call(this),this.type="Group"}ur.prototype=Object.assign(Object.create(he.prototype),{constructor:ur,isGroup:!0});function Xr(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Xr.prototype,{constructor:Xr,getHandSpace:function(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this},disconnect:function(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(e,t,n){var r=null,i=null,a=null,o=this._targetRay,s=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(l&&e.hand){a=!0;for(var u=0,c=e.hand.values();u<c.length;u++){var h=c[u],d=t.getJointPose(h,n);if(l.joints[h.jointName]===void 0){var f=new ur;f.matrixAutoUpdate=!1,f.visible=!1,l.joints[h.jointName]=f,l.add(f)}var v=l.joints[h.jointName];d!==null&&(v.matrix.fromArray(d.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=d.radius),v.visible=d!==null}var g=l.joints["index-finger-tip"],_=l.joints["thumb-tip"],m=g.position.distanceTo(_.position),p=.02,E=.005;l.inputState.pinching&&m>p+E?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=p-E&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale)));return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),l!==null&&(l.visible=a!==null),this}});function ql(e,t){var n=this,r=null,i=1,a=null,o="local-floor",s=null,l=[],u=new Map,c=new Ke;c.layers.enable(1),c.viewport=new Ie;var h=new Ke;h.layers.enable(2),h.viewport=new Ie;var d=[c,h],f=new no;f.layers.enable(1),f.layers.enable(2);var v=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(C){var N=l[C];return N===void 0&&(N=new Xr,l[C]=N),N.getTargetRaySpace()},this.getControllerGrip=function(C){var N=l[C];return N===void 0&&(N=new Xr,l[C]=N),N.getGripSpace()},this.getHand=function(C){var N=l[C];return N===void 0&&(N=new Xr,l[C]=N),N.getHandSpace()};function _(C){var N=u.get(C.inputSource);N&&N.dispatchEvent({type:C.type,data:C.inputSource})}function m(){u.forEach(function(C,N){C.disconnect(N)}),u.clear(),v=null,g=null,e.setFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),P.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){i=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){o=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return r},this.setSession=function(C){return ou(this,void 0,void 0,function(){var N,V,O;return su(this,function(B){switch(B.label){case 0:return r=C,r===null?[3,4]:(r.addEventListener("select",_),r.addEventListener("selectstart",_),r.addEventListener("selectend",_),r.addEventListener("squeeze",_),r.addEventListener("squeezestart",_),r.addEventListener("squeezeend",_),r.addEventListener("end",m),r.addEventListener("inputsourceschange",p),N=t.getContextAttributes(),N.xrCompatible===!0?[3,2]:[4,t.makeXRCompatible()]);case 1:B.sent(),B.label=2;case 2:return V={antialias:N.antialias,alpha:N.alpha,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:i},O=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:O}),[4,r.requestReferenceSpace(o)];case 3:a=B.sent(),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"}),B.label=4;case 4:return[2]}})})};function p(C){for(var N=r.inputSources,V=0;V<l.length;V++)u.set(N[V],l[V]);for(var V=0;V<C.removed.length;V++){var O=C.removed[V],B=u.get(O);B&&(B.dispatchEvent({type:"disconnected",data:O}),u.delete(O))}for(var V=0;V<C.added.length;V++){var O=C.added[V],B=u.get(O);B&&B.dispatchEvent({type:"connected",data:O})}}var E=new S,A=new S;function b(C,N,V){E.setFromMatrixPosition(N.matrixWorld),A.setFromMatrixPosition(V.matrixWorld);var O=E.distanceTo(A),B=N.projectionMatrix.elements,L=V.projectionMatrix.elements,D=B[14]/(B[10]-1),F=B[14]/(B[10]+1),U=(B[9]+1)/B[5],Q=(B[9]-1)/B[5],Y=(B[8]-1)/B[0],Z=(L[8]+1)/L[0],ne=D*Y,Re=D*Z,ge=O/(-Y+Z),k=ge*-Y;N.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(k),C.translateZ(ge),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();var Be=D+ge,Ce=F+ge,ae=ne-k,le=Re+(O-k),Se=U*F/Ce*Be,ve=Q*F/Ce*Be;C.projectionMatrix.makePerspective(ae,le,Se,ve,Be,Ce)}function y(C,N){N===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(N.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.getCamera=function(C){f.near=h.near=c.near=C.near,f.far=h.far=c.far=C.far,(v!==f.near||g!==f.far)&&(r.updateRenderState({depthNear:f.near,depthFar:f.far}),v=f.near,g=f.far);var N=C.parent,V=f.cameras;y(f,N);for(var O=0;O<V.length;O++)y(V[O],N);C.matrixWorld.copy(f.matrixWorld),C.matrix.copy(f.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);for(var B=C.children,O=0,L=B.length;O<L;O++)B[O].updateMatrixWorld(!0);return V.length===2?b(f,c,h):f.projectionMatrix.copy(c.projectionMatrix),f};var T=null;function G(C,N){if(s=N.getViewerPose(a),s!==null){var V=s.views,O=r.renderState.baseLayer;e.setFramebuffer(O.framebuffer);var B=!1;V.length!==f.cameras.length&&(f.cameras.length=0,B=!0);for(var L=0;L<V.length;L++){var D=V[L],F=O.getViewport(D),U=d[L];U.matrix.fromArray(D.transform.matrix),U.projectionMatrix.fromArray(D.projectionMatrix),U.viewport.set(F.x,F.y,F.width,F.height),L===0&&f.matrix.copy(U.matrix),B===!0&&f.cameras.push(U)}}for(var Q=r.inputSources,L=0;L<l.length;L++){var Y=l[L],Z=Q[L];Y.update(Z,N,a)}T&&T(C,N)}var P=new Fl;P.setAnimationLoop(G),this.setAnimationLoop=function(C){T=C},this.dispose=function(){}}Object.assign(ql.prototype,Sn.prototype);function sv(e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,E,A){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),l(m,p)):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),p.isMeshPhysicalMaterial?d(m,p):h(m,p)):p.isMeshMatcapMaterial?(r(m,p),f(m,p)):p.isMeshDepthMaterial?(r(m,p),v(m,p)):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?(r(m,p),_(m,p)):p.isLineBasicMaterial?(i(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,E,A):p.isSpriteMaterial?s(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap);var E=e.get(p).envMap;if(E){m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E._needsFlipEnvMap?-1:1,m.reflectivity.value=p.reflectivity,m.refractionRatio.value=p.refractionRatio;var A=e.get(E).__maxMipLevel;A!==void 0&&(m.maxMipLevel.value=A)}p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);var b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(b=p.clearcoatRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix));var y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function i(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap);var b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap);var E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix))}function l(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias);var E=e.get(p).envMap;E&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p){h(m,p),m.reflectivity.value=p.reflectivity,m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&m.sheen.value.copy(p.sheen),p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Qe&&m.clearcoatNormalScale.value.negate()),m.transmission.value=p.transmission,p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function v(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function _(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function lv(){var e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return e.style.display="block",e}function ca(e){e=e||{};var t=e.canvas!==void 0?e.canvas:lv(),n=e.context!==void 0?e.context:null,r=e.alpha!==void 0?e.alpha:!1,i=e.depth!==void 0?e.depth:!0,a=e.stencil!==void 0?e.stencil:!0,o=e.antialias!==void 0?e.antialias:!1,s=e.premultipliedAlpha!==void 0?e.premultipliedAlpha:!0,l=e.preserveDrawingBuffer!==void 0?e.preserveDrawingBuffer:!1,u=e.powerPreference!==void 0?e.powerPreference:"default",c=e.failIfMajorPerformanceCaveat!==void 0?e.failIfMajorPerformanceCaveat:!1,h=null,d=null,f=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ui,this.physicallyCorrectLights=!1,this.toneMapping=kr,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var v=this,g=!1,_=null,m=0,p=0,E=null,A=null,b=-1,y=null,T=new Ie,G=new Ie,P=null,C=t.width,N=t.height,V=1,O=null,B=null,L=new Ie(0,0,C,N),D=new Ie(0,0,C,N),F=!1,U=new ua,Q=!1,Y=!1,Z=new Le,ne=new S,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return E===null?V:1}var k=n;function Be(x,z){for(var I=0;I<x.length;I++){var H=x[I],K=t.getContext(H,z);if(K!==null)return K}return null}try{var Ce={alpha:r,depth:i,stencil:a,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if(t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",fe,!1),k===null){var ae=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&ae.shift(),k=Be(ae,Ce),k===null)throw Be(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}var le,Se,ve,ze,Ae,We,qe,tt,ht,vt,M,w,ee,j,ye,R,q,te,ue,X,re;function me(){le=new Ud(k),Se=new Fd(k,le,e),le.init(Se),X=new ov(k,le,Se),ve=new iv(k,le,Se),ve.scissor(G.copy(D).multiplyScalar(V).floor()),ve.viewport(T.copy(L).multiplyScalar(V).floor()),ze=new Vd,Ae=new Xp,We=new av(k,le,ve,Ae,Se,X,ze),qe=new zd(v),tt=new uh(k,Se),re=new Od(k,le,tt,Se),ht=new Hd(k,tt,ze,re),vt=new Xd(k,ht,tt,ze),q=new qd(k),ye=new Bd(Ae),M=new qp(v,qe,le,Se,re,ye),w=new sv(Ae),ee=new jp(Ae),j=new tv(le,Se),R=new Id(v,qe,ve,vt,s),te=new Nd(k,le,ze,Se),ue=new Gd(k,le,ze,Se),ze.programs=M.programs,v.capabilities=Se,v.extensions=le,v.properties=Ae,v.renderLists=ee,v.state=ve,v.info=ze}me();var J=new ql(v,k);this.xr=J;var oe=new Wl(v,vt,Se.maxTextureSize);this.shadowMap=oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){var x=le.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){var x=le.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(C,N,!1))},this.getSize=function(x){return x===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),x=new W),x.set(C,N)},this.setSize=function(x,z,I){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=x,N=z,t.width=Math.floor(x*V),t.height=Math.floor(z*V),I!==!1&&(t.style.width=x+"px",t.style.height=z+"px"),this.setViewport(0,0,x,z)},this.getDrawingBufferSize=function(x){return x===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),x=new W),x.set(C*V,N*V).floor()},this.setDrawingBufferSize=function(x,z,I){C=x,N=z,V=I,t.width=Math.floor(x*I),t.height=Math.floor(z*I),this.setViewport(0,0,x,z)},this.getCurrentViewport=function(x){return x===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),x=new Ie),x.copy(T)},this.getViewport=function(x){return x.copy(L)},this.setViewport=function(x,z,I,H){x.isVector4?L.set(x.x,x.y,x.z,x.w):L.set(x,z,I,H),ve.viewport(T.copy(L).multiplyScalar(V).floor())},this.getScissor=function(x){return x.copy(D)},this.setScissor=function(x,z,I,H){x.isVector4?D.set(x.x,x.y,x.z,x.w):D.set(x,z,I,H),ve.scissor(G.copy(D).multiplyScalar(V).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(x){ve.setScissorTest(F=x)},this.setOpaqueSort=function(x){O=x},this.setTransparentSort=function(x){B=x},this.getClearColor=function(x){return x===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),x=new de),x.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor.apply(R,arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha.apply(R,arguments)},this.clear=function(x,z,I){var H=0;(x===void 0||x)&&(H|=16384),(z===void 0||z)&&(H|=256),(I===void 0||I)&&(H|=1024),k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",fe,!1),ee.dispose(),j.dispose(),Ae.dispose(),qe.dispose(),vt.dispose(),re.dispose(),J.dispose(),Rt.stop()};function ie(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1,me()}function ce(x){var z=x.target;z.removeEventListener("dispose",ce),Ze(z)}function Ze(x){at(x),Ae.remove(x)}function at(x){var z=Ae.get(x).program;z!==void 0&&M.releaseProgram(z)}function ft(x,z){x.render(function(I){v.renderBufferImmediate(I,z)})}this.renderBufferImmediate=function(x,z){re.initAttributes();var I=Ae.get(x);x.hasPositions&&!I.position&&(I.position=k.createBuffer()),x.hasNormals&&!I.normal&&(I.normal=k.createBuffer()),x.hasUvs&&!I.uv&&(I.uv=k.createBuffer()),x.hasColors&&!I.color&&(I.color=k.createBuffer());var H=z.getAttributes();x.hasPositions&&(k.bindBuffer(34962,I.position),k.bufferData(34962,x.positionArray,35048),re.enableAttribute(H.position),k.vertexAttribPointer(H.position,3,5126,!1,0,0)),x.hasNormals&&(k.bindBuffer(34962,I.normal),k.bufferData(34962,x.normalArray,35048),re.enableAttribute(H.normal),k.vertexAttribPointer(H.normal,3,5126,!1,0,0)),x.hasUvs&&(k.bindBuffer(34962,I.uv),k.bufferData(34962,x.uvArray,35048),re.enableAttribute(H.uv),k.vertexAttribPointer(H.uv,2,5126,!1,0,0)),x.hasColors&&(k.bindBuffer(34962,I.color),k.bufferData(34962,x.colorArray,35048),re.enableAttribute(H.color),k.vertexAttribPointer(H.color,3,5126,!1,0,0)),re.disableUnusedAttributes(),k.drawArrays(4,0,x.count),x.count=0},this.renderBufferDirect=function(x,z,I,H,K,Ee){z===null&&(z=Re);var be=K.isMesh&&K.matrixWorld.determinant()<0,De=Lr(x,z,H,K);ve.setMaterial(H,be);var _e=I.index,Xe=I.attributes.position;if(_e===null){if(Xe===void 0||Xe.count===0)return}else if(_e.count===0)return;var ke=1;H.wireframe===!0&&(_e=ht.getWireframeAttribute(I),ke=2),(H.morphTargets||H.morphNormals)&&q.update(K,I,H,De),re.setup(K,H,De,I,_e);var Me,Pe=te;_e!==null&&(Me=tt.get(_e),Pe=ue,Pe.setIndex(Me));var Zt=_e!==null?_e.count:Xe.count,Ct=I.drawRange.start*ke,je=I.drawRange.count*ke,ln=Ee!==null?Ee.start*ke:0,hi=Ee!==null?Ee.count*ke:1/0,st=Math.max(Ct,ln),pa=Math.min(Zt,Ct+je,ln+hi)-1,dt=Math.max(0,pa-st+1);if(dt!==0){if(K.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*ge()),Pe.setMode(1)):Pe.setMode(4);else if(K.isLine){var Tn=H.linewidth;Tn===void 0&&(Tn=1),ve.setLineWidth(Tn*ge()),K.isLineSegments?Pe.setMode(1):K.isLineLoop?Pe.setMode(2):Pe.setMode(3)}else K.isPoints?Pe.setMode(0):K.isSprite&&Pe.setMode(4);if(K.isInstancedMesh)Pe.renderInstances(st,dt,K.count);else if(I.isInstancedBufferGeometry){var va=Math.min(I.instanceCount,I._maxInstanceCount);Pe.renderInstances(st,dt,va)}else Pe.render(st,dt)}},this.compile=function(x,z){d=j.get(x),d.init(),x.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();var I=new WeakMap;x.traverse(function(H){var K=H.material;if(K)if(Array.isArray(K))for(var Ee=0;Ee<K.length;Ee++){var be=K[Ee];I.has(be)===!1&&(Mt(be,x,H),I.set(be))}else I.has(K)===!1&&(Mt(K,x,H),I.set(K))})};var ot=null;function Lt(x){J.isPresenting||ot&&ot(x)}var Rt=new Fl;Rt.setAnimationLoop(Lt),typeof window<"u"&&Rt.setContext(window),this.setAnimationLoop=function(x){ot=x,J.setAnimationLoop(x),x===null?Rt.stop():Rt.start()},this.render=function(x,z){var I,H;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),I=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),H=arguments[3]),z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g!==!0){re.resetDefaultState(),b=-1,y=null,x.autoUpdate===!0&&x.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(z=J.getCamera(z)),x.isScene===!0&&x.onBeforeRender(v,x,z,I||E),d=j.get(x,f.length),d.init(),f.push(d),Z.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),U.setFromProjectionMatrix(Z),Y=this.localClippingEnabled,Q=ye.init(this.clippingPlanes,Y,z),h=ee.get(x,z),h.init(),Vn(x,z,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(O,B),Q===!0&&ye.beginShadows();var K=d.state.shadowsArray;oe.render(K,x,z),d.setupLights(),d.setupLightsView(z),Q===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),I!==void 0&&this.setRenderTarget(I),R.render(h,x,z,H);var Ee=h.opaque,be=h.transparent;Ee.length>0&&En(Ee,x,z),be.length>0&&En(be,x,z),x.isScene===!0&&x.onAfterRender(v,x,z),E!==null&&(We.updateRenderTargetMipmap(E),We.updateMultisampleRenderTarget(E)),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1),f.pop(),f.length>0?d=f[f.length-1]:d=null,h=null}};function Vn(x,z,I,H){if(x.visible!==!1){var K=x.layers.test(z.layers);if(K){if(x.isGroup)I=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(z);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||U.intersectsSprite(x)){H&&ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Z);var Ee=vt.update(x),be=x.material;be.visible&&h.push(x,Ee,be,I,ne.z,null)}}else if(x.isImmediateRenderObject)H&&ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Z),h.push(x,null,x.material,I,ne.z,null);else if((x.isMesh||x.isLine||x.isPoints)&&(x.isSkinnedMesh&&x.skeleton.frame!==ze.render.frame&&(x.skeleton.update(),x.skeleton.frame=ze.render.frame),!x.frustumCulled||U.intersectsObject(x))){H&&ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Z);var Ee=vt.update(x),be=x.material;if(Array.isArray(be))for(var De=Ee.groups,_e=0,Xe=De.length;_e<Xe;_e++){var ke=De[_e],Me=be[ke.materialIndex];Me&&Me.visible&&h.push(x,Ee,Me,I,ne.z,ke)}else be.visible&&h.push(x,Ee,be,I,ne.z,null)}}for(var Pe=x.children,_e=0,Xe=Pe.length;_e<Xe;_e++)Vn(Pe[_e],z,I,H)}}function En(x,z,I){for(var H=z.isScene===!0?z.overrideMaterial:null,K=0,Ee=x.length;K<Ee;K++){var be=x[K],De=be.object,_e=be.geometry,Xe=H===null?be.material:H,ke=be.group;if(I.isArrayCamera)for(var Me=I.cameras,Pe=0,Zt=Me.length;Pe<Zt;Pe++){var Ct=Me[Pe];De.layers.test(Ct.layers)&&(ve.viewport(T.copy(Ct.viewport)),d.setupLightsView(Ct),Ar(De,z,Ct,_e,Xe,ke))}else Ar(De,z,I,_e,Xe,ke)}}function Ar(x,z,I,H,K,Ee){if(x.onBeforeRender(v,z,I,H,K,Ee),x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),x.isImmediateRenderObject){var be=Lr(I,z,K,x);ve.setMaterial(K),re.reset(),ft(x,be)}else v.renderBufferDirect(I,z,H,K,x,Ee);x.onAfterRender(v,z,I,H,K,Ee)}function Mt(x,z,I){z.isScene!==!0&&(z=Re);var H=Ae.get(x),K=d.state.lights,Ee=d.state.shadowsArray,be=K.state.version,De=M.getParameters(x,K.state,Ee,z,I),_e=M.getProgramCacheKey(De),Xe=H.program,ke=!0;if(H.environment=x.isMeshStandardMaterial?z.environment:null,H.fog=z.fog,H.envMap=qe.get(x.envMap||H.environment),Xe===void 0)x.addEventListener("dispose",ce);else if(Xe.cacheKey!==_e)at(x);else if(H.lightsStateVersion!==be)ke=!1;else{if(De.shaderID!==void 0)return;ke=!1}ke&&(De.uniforms=M.getUniforms(x),x.onBeforeCompile(De,v),Xe=M.acquireProgram(De,_e),H.program=Xe,H.uniforms=De.uniforms,H.outputEncoding=De.outputEncoding);var Me=H.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(H.numClippingPlanes=ye.numPlanes,H.numIntersection=ye.numIntersection,Me.clippingPlanes=ye.uniform),H.needsLights=da(x),H.lightsStateVersion=be,H.needsLights&&(Me.ambientLightColor.value=K.state.ambient,Me.lightProbe.value=K.state.probe,Me.directionalLights.value=K.state.directional,Me.directionalLightShadows.value=K.state.directionalShadow,Me.spotLights.value=K.state.spot,Me.spotLightShadows.value=K.state.spotShadow,Me.rectAreaLights.value=K.state.rectArea,Me.ltc_1.value=K.state.rectAreaLTC1,Me.ltc_2.value=K.state.rectAreaLTC2,Me.pointLights.value=K.state.point,Me.pointLightShadows.value=K.state.pointShadow,Me.hemisphereLights.value=K.state.hemi,Me.directionalShadowMap.value=K.state.directionalShadowMap,Me.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Me.spotShadowMap.value=K.state.spotShadowMap,Me.spotShadowMatrix.value=K.state.spotShadowMatrix,Me.pointShadowMap.value=K.state.pointShadowMap,Me.pointShadowMatrix.value=K.state.pointShadowMatrix);var Pe=H.program.getUniforms(),Zt=gn.seqWithValue(Pe.seq,Me);H.uniformsList=Zt}function Lr(x,z,I,H){z.isScene!==!0&&(z=Re),We.resetTextureUnits();var K=z.fog,Ee=I.isMeshStandardMaterial?z.environment:null,be=E===null?v.outputEncoding:E.texture.encoding,De=qe.get(I.envMap||Ee),_e=Ae.get(I),Xe=d.state.lights;if(Q===!0&&(Y===!0||x!==y)){var ke=x===y&&I.id===b;ye.setState(I,x,ke)}I.version===_e.__version?(I.fog&&_e.fog!==K||_e.environment!==Ee||_e.needsLights&&_e.lightsStateVersion!==Xe.state.version||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ye.numPlanes||_e.numIntersection!==ye.numIntersection)||_e.outputEncoding!==be||_e.envMap!==De)&&Mt(I,z,H):(Mt(I,z,H),_e.__version=I.version);var Me=!1,Pe=!1,Zt=!1,Ct=_e.program,je=Ct.getUniforms(),ln=_e.uniforms;if(ve.useProgram(Ct.program)&&(Me=!0,Pe=!0,Zt=!0),I.id!==b&&(b=I.id,Pe=!0),Me||y!==x){if(je.setValue(k,"projectionMatrix",x.projectionMatrix),Se.logarithmicDepthBuffer&&je.setValue(k,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),y!==x&&(y=x,Pe=!0,Zt=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){var hi=je.map.cameraPosition;hi!==void 0&&hi.setValue(k,ne.setFromMatrixPosition(x.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&je.setValue(k,"isOrthographic",x.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||I.skinning)&&je.setValue(k,"viewMatrix",x.matrixWorldInverse)}if(I.skinning){je.setOptional(k,H,"bindMatrix"),je.setOptional(k,H,"bindMatrixInverse");var st=H.skeleton;if(st){var pa=st.bones;if(Se.floatVertexTextures){if(st.boneTexture===null){var dt=Math.sqrt(pa.length*4);dt=xe.ceilPowerOfTwo(dt),dt=Math.max(dt,4);var Tn=new Float32Array(dt*dt*4);Tn.set(st.boneMatrices);var va=new vr(Tn,dt,dt,Ft,mn);st.boneMatrices=Tn,st.boneTexture=va,st.boneTextureSize=dt}je.setValue(k,"boneTexture",st.boneTexture,We),je.setValue(k,"boneTextureSize",st.boneTextureSize)}else je.setOptional(k,st,"boneMatrices")}}return(Pe||_e.receiveShadow!==H.receiveShadow)&&(_e.receiveShadow=H.receiveShadow,je.setValue(k,"receiveShadow",H.receiveShadow)),Pe&&(je.setValue(k,"toneMappingExposure",v.toneMappingExposure),_e.needsLights&&fa(ln,Zt),K&&I.fog&&w.refreshFogUniforms(ln,K),w.refreshMaterialUniforms(ln,I,V,N),gn.upload(k,_e.uniformsList,ln,We)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(gn.upload(k,_e.uniformsList,ln,We),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&je.setValue(k,"center",H.center),je.setValue(k,"modelViewMatrix",H.modelViewMatrix),je.setValue(k,"normalMatrix",H.normalMatrix),je.setValue(k,"modelMatrix",H.matrixWorld),Ct}function fa(x,z){x.ambientLightColor.needsUpdate=z,x.lightProbe.needsUpdate=z,x.directionalLights.needsUpdate=z,x.directionalLightShadows.needsUpdate=z,x.pointLights.needsUpdate=z,x.pointLightShadows.needsUpdate=z,x.spotLights.needsUpdate=z,x.spotLightShadows.needsUpdate=z,x.rectAreaLights.needsUpdate=z,x.hemisphereLights.needsUpdate=z}function da(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.setFramebuffer=function(x){_!==x&&E===null&&k.bindFramebuffer(36160,x),_=x},this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderList=function(){return h},this.setRenderList=function(x){h=x},this.getRenderTarget=function(){return E},this.setRenderTarget=function(x,z,I){z===void 0&&(z=0),I===void 0&&(I=0),E=x,m=z,p=I,x&&Ae.get(x).__webglFramebuffer===void 0&&We.setupRenderTarget(x);var H=_,K=!1;if(x){var Ee=Ae.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(H=Ee[z],K=!0):x.isWebGLMultisampleRenderTarget?H=Ae.get(x).__webglMultisampledFramebuffer:H=Ee,T.copy(x.viewport),G.copy(x.scissor),P=x.scissorTest}else T.copy(L).multiplyScalar(V).floor(),G.copy(D).multiplyScalar(V).floor(),P=F;if(A!==H&&(k.bindFramebuffer(36160,H),A=H),ve.viewport(T),ve.scissor(G),ve.setScissorTest(P),K){var be=Ae.get(x.texture);k.framebufferTexture2D(36160,36064,34069+z,be.__webglTexture,I)}},this.readRenderTargetPixels=function(x,z,I,H,K,Ee,be){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}var De=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(De=De[be]),De){var _e=!1;De!==A&&(k.bindFramebuffer(36160,De),_e=!0);try{var Xe=x.texture,ke=Xe.format,Me=Xe.type;if(ke!==Ft&&X.convert(ke)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}var Pe=Me===Xi&&(le.has("EXT_color_buffer_half_float")||Se.isWebGL2&&le.has("EXT_color_buffer_float"));if(Me!==Po&&X.convert(Me)!==k.getParameter(35738)&&!(Me===mn&&(Se.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k.checkFramebufferStatus(36160)===36053?z>=0&&z<=x.width-H&&I>=0&&I<=x.height-K&&k.readPixels(z,I,H,K,X.convert(ke),X.convert(Me),Ee):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{_e&&k.bindFramebuffer(36160,A)}}},this.copyFramebufferToTexture=function(x,z,I){I===void 0&&(I=0);var H=Math.pow(2,-I),K=Math.floor(z.image.width*H),Ee=Math.floor(z.image.height*H),be=X.convert(z.format);We.setTexture2D(z,0),k.copyTexImage2D(3553,I,be,x.x,x.y,K,Ee,0),ve.unbindTexture()},this.copyTextureToTexture=function(x,z,I,H){H===void 0&&(H=0);var K=z.image.width,Ee=z.image.height,be=X.convert(I.format),De=X.convert(I.type);We.setTexture2D(I,0),k.pixelStorei(37440,I.flipY),k.pixelStorei(37441,I.premultiplyAlpha),k.pixelStorei(3317,I.unpackAlignment),z.isDataTexture?k.texSubImage2D(3553,H,x.x,x.y,K,Ee,be,De,z.image.data):z.isCompressedTexture?k.compressedTexSubImage2D(3553,H,x.x,x.y,z.mipmaps[0].width,z.mipmaps[0].height,be,z.mipmaps[0].data):k.texSubImage2D(3553,H,x.x,x.y,be,De,z.image),H===0&&I.generateMipmaps&&k.generateMipmap(3553),ve.unbindTexture()},this.initTexture=function(x){We.setTexture2D(x,0),ve.unbindTexture()},this.resetState=function(){ve.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Rs(e){ca.call(this,e)}Rs.prototype=Object.assign(Object.create(ca.prototype),{constructor:Rs,isWebGL1Renderer:!0});var uv=function(e){wn(t,e);function t(){var n=e.call(this)||this;return Object.defineProperty(n,"isScene",{value:!0}),n.type="Scene",n.background=null,n.environment=null,n.fog=null,n.overrideMaterial=null,n.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:n})),n}return t.prototype.copy=function(n,r){return e.prototype.copy.call(this,n,r),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.autoUpdate=n.autoUpdate,this.matrixAutoUpdate=n.matrixAutoUpdate,this},t.prototype.toJSON=function(n){var r=e.prototype.toJSON.call(this,n);return this.background!==null&&(r.object.background=this.background.toJSON(n)),this.environment!==null&&(r.object.environment=this.environment.toJSON(n)),this.fog!==null&&(r.object.fog=this.fog.toJSON()),r},t}(he);function St(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=la,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xe.generateUUID()}Object.defineProperty(St.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(St.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(e){return this.usage=e,this},copy:function(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this},copyAt:function(e,t,n){e*=this.stride,n*=t.stride;for(var r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this},set:function(e,t){return t===void 0&&(t=0),this.array.set(e,t),this},clone:function(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xe.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);var t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new St(t,this.stride);return n.setUsage(this.usage),n},onUpload:function(e){return this.onUploadCallback=e,this},toJSON:function(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xe.generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var Cn=new S;function Nn(e,t,n,r){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}Object.defineProperties(Nn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(e){this.data.needsUpdate=e}}});Object.assign(Nn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(e){for(var t=0,n=this.data.count;t<n;t++)Cn.x=this.getX(t),Cn.y=this.getY(t),Cn.z=this.getZ(t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this},setX:function(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this},setY:function(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this},setZ:function(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this},setW:function(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this},getX:function(e){return this.data.array[e*this.data.stride+this.offset]},getY:function(e){return this.data.array[e*this.data.stride+this.offset+1]},getZ:function(e){return this.data.array[e*this.data.stride+this.offset+2]},getW:function(e){return this.data.array[e*this.data.stride+this.offset+3]},setXY:function(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this},setXYZ:function(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this},setXYZW:function(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this},clone:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");for(var t=[],n=0;n<this.count;n++)for(var r=n*this.data.stride+this.offset,i=0;i<this.itemSize;i++)t.push(this.data.array[r+i]);return new we(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");for(var t=[],n=0;n<this.count;n++)for(var r=n*this.data.stride+this.offset,i=0;i<this.itemSize;i++)t.push(this.data.array[r+i]);return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Fn(e){pe.call(this),this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}Fn.prototype=Object.create(pe.prototype);Fn.prototype.constructor=Fn;Fn.prototype.isSpriteMaterial=!0;Fn.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};var nr,Nr=new S,rr=new S,ir=new S,ar=new W,Fr=new W,Xl=new Le,Pi=new S,Br=new S,Di=new S,Cs=new W,Ha=new W,Ps=new W;function Ds(e){if(he.call(this),this.type="Sprite",nr===void 0){nr=new Ge;var t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new St(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Nn(n,3,0,!1)),nr.setAttribute("uv",new Nn(n,2,3,!1))}this.geometry=nr,this.material=e!==void 0?e:new Fn,this.center=new W(.5,.5)}Ds.prototype=Object.assign(Object.create(he.prototype),{constructor:Ds,isSprite:!0,raycast:function(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),Xl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-ir.z);var n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));var a=this.center;Ii(Pi.set(-.5,-.5,0),ir,a,rr,r,i),Ii(Br.set(.5,-.5,0),ir,a,rr,r,i),Ii(Di.set(.5,.5,0),ir,a,rr,r,i),Cs.set(0,0),Ha.set(1,0),Ps.set(1,1);var o=e.ray.intersectTriangle(Pi,Br,Di,!1,Nr);if(!(o===null&&(Ii(Br.set(-.5,.5,0),ir,a,rr,r,i),Ha.set(0,1),o=e.ray.intersectTriangle(Pi,Di,Br,!1,Nr),o===null))){var s=e.ray.origin.distanceTo(Nr);s<e.near||s>e.far||t.push({distance:s,point:Nr.clone(),uv:tn.getUV(Nr,Pi,Br,Di,Cs,Ha,Ps,new W),face:null,object:this})}},copy:function(e){return he.prototype.copy.call(this,e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}});function Ii(e,t,n,r,i,a){ar.subVectors(e,n).addScalar(.5).multiply(r),i!==void 0?(Fr.x=a*ar.x-i*ar.y,Fr.y=i*ar.x+a*ar.y):Fr.copy(ar),e.copy(t),e.x+=Fr.x,e.y+=Fr.y,e.applyMatrix4(Xl)}var Oi=new S,Is=new S;function ro(){he.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}ro.prototype=Object.assign(Object.create(he.prototype),{constructor:ro,isLOD:!0,copy:function(e){he.prototype.copy.call(this,e,!1);for(var t=e.levels,n=0,r=t.length;n<r;n++){var i=t[n];this.addLevel(i.object.clone(),i.distance)}return this.autoUpdate=e.autoUpdate,this},addLevel:function(e,t){t===void 0&&(t=0),t=Math.abs(t);var n=this.levels,r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,object:e}),this.add(e),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(e){var t=this.levels;if(t.length>0){var n=void 0,r=void 0;for(n=1,r=t.length;n<r&&!(e<t[n].distance);n++);return t[n-1].object}return null},raycast:function(e,t){var n=this.levels;if(n.length>0){Oi.setFromMatrixPosition(this.matrixWorld);var r=e.ray.origin.distanceTo(Oi);this.getObjectForDistance(r).raycast(e,t)}},update:function(e){var t=this.levels;if(t.length>1){Oi.setFromMatrixPosition(e.matrixWorld),Is.setFromMatrixPosition(this.matrixWorld);var n=Oi.distanceTo(Is)/e.zoom;t[0].object.visible=!0;var r=void 0,i=void 0;for(r=1,i=t.length;r<i&&n>=t[r].distance;r++)t[r-1].object.visible=!1,t[r].object.visible=!0;for(this._currentLevel=r-1;r<i;r++)t[r].object.visible=!1}},toJSON:function(e){var t=he.prototype.toJSON.call(this,e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];for(var n=this.levels,r=0,i=n.length;r<i;r++){var a=n[r];t.object.levels.push({object:a.object.uuid,distance:a.distance})}return t}});var Os=new S,Ns=new Ie,Fs=new Ie,cv=new S,Bs=new Le;function io(e,t){e&&e.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),et.call(this,e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Le,this.bindMatrixInverse=new Le}io.prototype=Object.assign(Object.create(et.prototype),{constructor:io,isSkinnedMesh:!0,copy:function(e){return et.prototype.copy.call(this,e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this},bind:function(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){for(var e=new Ie,t=this.geometry.attributes.skinWeight,n=0,r=t.count;n<r;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);var i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}},updateMatrixWorld:function(e){et.prototype.updateMatrixWorld.call(this,e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(e,t){var n=this.skeleton,r=this.geometry;Ns.fromBufferAttribute(r.attributes.skinIndex,e),Fs.fromBufferAttribute(r.attributes.skinWeight,e),Os.fromBufferAttribute(r.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(var i=0;i<4;i++){var a=Fs.getComponent(i);if(a!==0){var o=Ns.getComponent(i);Bs.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cv.copy(Os).applyMatrix4(Bs),a)}}return t.applyMatrix4(this.bindMatrixInverse)}});function ao(){he.call(this),this.type="Bone"}ao.prototype=Object.assign(Object.create(he.prototype),{constructor:ao,isBone:!0});var zs=new Le,hv=new Le;function oo(e,t){e===void 0&&(e=[]),t===void 0&&(t=[]),this.uuid=xe.generateUUID(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}Object.assign(oo.prototype,{init:function(){var e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(var n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Le)}},calculateInverses:function(){this.boneInverses.length=0;for(var e=0,t=this.bones.length;e<t;e++){var n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}},pose:function(){for(var e=0,t=this.bones.length;e<t;e++){var n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(var e=0,t=this.bones.length;e<t;e++){var n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}},update:function(){for(var e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture,i=0,a=e.length;i<a;i++){var o=e[i]?e[i].matrixWorld:hv;zs.multiplyMatrices(o,t[i]),zs.toArray(n,i*16)}r!==null&&(r.needsUpdate=!0)},clone:function(){return new oo(this.bones,this.boneInverses)},getBoneByName:function(e){for(var t=0,n=this.bones.length;t<n;t++){var r=this.bones[t];if(r.name===e)return r}},dispose:function(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)},fromJSON:function(e,t){this.uuid=e.uuid;for(var n=0,r=e.bones.length;n<r;n++){var i=e.bones[n],a=t[i];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),a=new ao),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this},toJSON:function(){var e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;for(var t=this.bones,n=this.boneInverses,r=0,i=t.length;r<i;r++){var a=t[r];e.bones.push(a.uuid);var o=n[r];e.boneInverses.push(o.toArray())}return e}});var Us=new Le,Hs=new Le,Ni=[],zr=new et;function Gs(e,t,n){et.call(this,e,t),this.instanceMatrix=new we(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}Gs.prototype=Object.assign(Object.create(et.prototype),{constructor:Gs,isInstancedMesh:!0,copy:function(e){return et.prototype.copy.call(this,e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this},getColorAt:function(e,t){t.fromArray(this.instanceColor.array,e*3)},getMatrixAt:function(e,t){t.fromArray(this.instanceMatrix.array,e*16)},raycast:function(e,t){var n=this.matrixWorld,r=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0)for(var i=0;i<r;i++){this.getMatrixAt(i,Us),Hs.multiplyMatrices(n,Us),zr.matrixWorld=Hs,zr.raycast(e,Ni);for(var a=0,o=Ni.length;a<o;a++){var s=Ni[a];s.instanceId=i,s.object=this,t.push(s)}Ni.length=0}},setColorAt:function(e,t){this.instanceColor===null&&(this.instanceColor=new we(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)},setMatrixAt:function(e,t){t.toArray(this.instanceMatrix.array,e*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});function kt(e){pe.call(this),this.type="LineBasicMaterial",this.color=new de(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}kt.prototype=Object.create(pe.prototype);kt.prototype.constructor=kt;kt.prototype.isLineBasicMaterial=!0;kt.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this};var Vs=new S,ks=new S,Ws=new Le,Ga=new ci,Fi=new Gn;function mr(e,t){e===void 0&&(e=new Ge),t===void 0&&(t=new kt),he.call(this),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}mr.prototype=Object.assign(Object.create(he.prototype),{constructor:mr,isLine:!0,copy:function(e){return he.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},computeLineDistances:function(){var e=this.geometry;if(e.isBufferGeometry)if(e.index===null){for(var t=e.attributes.position,n=[0],r=1,i=t.count;r<i;r++)Vs.fromBufferAttribute(t,r-1),ks.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Vs.distanceTo(ks);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(e,t){var n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(r),Fi.radius+=i,e.ray.intersectsSphere(Fi)!==!1){Ws.copy(r).invert(),Ga.copy(e.ray).applyMatrix4(Ws);var a=i/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,s=new S,l=new S,u=new S,c=new S,h=this.isLineSegments?2:1;if(n.isBufferGeometry){var d=n.index,f=n.attributes,v=f.position;if(d!==null)for(var g=d.array,_=0,m=g.length-1;_<m;_+=h){var p=g[_],E=g[_+1];s.fromBufferAttribute(v,p),l.fromBufferAttribute(v,E);var A=Ga.distanceSqToSegment(s,l,c,u);if(!(A>o)){c.applyMatrix4(this.matrixWorld);var b=e.ray.origin.distanceTo(c);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else for(var _=0,m=v.count-1;_<m;_+=h){s.fromBufferAttribute(v,_),l.fromBufferAttribute(v,_+1);var A=Ga.distanceSqToSegment(s,l,c,u);if(!(A>o)){c.applyMatrix4(this.matrixWorld);var b=e.ray.origin.distanceTo(c);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},updateMorphTargets:function(){var e=this.geometry;if(e.isBufferGeometry){var t=e.morphAttributes,n=Object.keys(t);if(n.length>0){var r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var i=0,a=r.length;i<a;i++){var o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}else{var s=e.morphTargets;s!==void 0&&s.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var qs=new S,Xs=new S;function Ys(e,t){mr.call(this,e,t),this.type="LineSegments"}Ys.prototype=Object.assign(Object.create(mr.prototype),{constructor:Ys,isLineSegments:!0,computeLineDistances:function(){var e=this.geometry;if(e.isBufferGeometry)if(e.index===null){for(var t=e.attributes.position,n=[],r=0,i=t.count;r<i;r+=2)qs.fromBufferAttribute(t,r),Xs.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qs.distanceTo(Xs);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});function Zs(e,t){mr.call(this,e,t),this.type="LineLoop"}Zs.prototype=Object.assign(Object.create(mr.prototype),{constructor:Zs,isLineLoop:!0});function Bn(e){pe.call(this),this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}Bn.prototype=Object.create(pe.prototype);Bn.prototype.constructor=Bn;Bn.prototype.isPointsMaterial=!0;Bn.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this};var js=new Le,so=new ci,Bi=new Gn,zi=new S;function Js(e,t){e===void 0&&(e=new Ge),t===void 0&&(t=new Bn),he.call(this),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}Js.prototype=Object.assign(Object.create(he.prototype),{constructor:Js,isPoints:!0,copy:function(e){return he.prototype.copy.call(this,e),this.material=e.material,this.geometry=e.geometry,this},raycast:function(e,t){var n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bi.copy(n.boundingSphere),Bi.applyMatrix4(r),Bi.radius+=i,e.ray.intersectsSphere(Bi)!==!1){js.copy(r).invert(),so.copy(e.ray).applyMatrix4(js);var a=i/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a;if(n.isBufferGeometry){var s=n.index,l=n.attributes,u=l.position;if(s!==null)for(var c=s.array,h=0,d=c.length;h<d;h++){var f=c[h];zi.fromBufferAttribute(u,f),Qs(zi,f,o,r,e,t,this)}else for(var h=0,v=u.count;h<v;h++)zi.fromBufferAttribute(u,h),Qs(zi,h,o,r,e,t,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},updateMorphTargets:function(){var e=this.geometry;if(e.isBufferGeometry){var t=e.morphAttributes,n=Object.keys(t);if(n.length>0){var r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var i=0,a=r.length;i<a;i++){var o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}else{var s=e.morphTargets;s!==void 0&&s.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Qs(e,t,n,r,i,a,o){var s=so.distanceSqToPoint(e);if(s<n){var l=new S;so.closestPointToPoint(e,l),l.applyMatrix4(r);var u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;a.push({distance:u,distanceToRay:Math.sqrt(s),point:l,index:t,face:null,object:o})}}function $s(e,t,n,r,i,a,o,s,l){Fe.call(this,e,t,n,r,i,a,o,s,l),this.format=o!==void 0?o:Dn,this.minFilter=a!==void 0?a:rt,this.magFilter=i!==void 0?i:rt,this.generateMipmaps=!1;var u=this;function c(){u.needsUpdate=!0,e.requestVideoFrameCallback(c)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(c)}$s.prototype=Object.assign(Object.create(Fe.prototype),{constructor:$s,clone:function(){return new this.constructor(this.image).copy(this)},isVideoTexture:!0,update:function(){var e=this.image,t="requestVideoFrameCallback"in e;t===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function ti(e,t,n,r,i,a,o,s,l,u,c,h){Fe.call(this,null,a,o,s,l,u,r,i,c,h),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}ti.prototype=Object.create(Fe.prototype);ti.prototype.constructor=ti;ti.prototype.isCompressedTexture=!0;function Ji(e,t,n,r,i,a,o,s,l){Fe.call(this,e,t,n,r,i,a,o,s,l),this.needsUpdate=!0}Ji.prototype=Object.create(Fe.prototype);Ji.prototype.constructor=Ji;Ji.prototype.isCanvasTexture=!0;function Qi(e,t,n,r,i,a,o,s,l,u){if(u=u!==void 0?u:hr,u!==hr&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hr&&(n=qi),n===void 0&&u===jr&&(n=Wr),Fe.call(this,null,r,i,a,o,s,u,n,l),this.image={width:e,height:t},this.magFilter=o!==void 0?o:ut,this.minFilter=s!==void 0?s:ut,this.flipY=!1,this.generateMipmaps=!1}Qi.prototype=Object.create(Fe.prototype);Qi.prototype.constructor=Qi;Qi.prototype.isDepthTexture=!0;new S;new S;new S;new tn;var fv={triangulate:function(e,t,n){n=n||2;var r=t&&t.length,i=r?t[0]*n:e.length,a=Yl(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;var s,l,u,c,h,d,f;if(r&&(a=gv(e,t,a,n)),e.length>80*n){s=u=e[0],l=c=e[1];for(var v=n;v<i;v+=n)h=e[v],d=e[v+1],h<s&&(s=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);f=Math.max(u-s,c-l),f=f!==0?1/f:0}return ni(a,o,n,s,l,f),o}};function Yl(e,t,n,r,i){var a,o;if(i===Lv(e,t,n,r)>0)for(a=t;a<n;a+=r)o=Ks(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=Ks(a,e[a],e[a+1],o);return o&&ha(o,o.next)&&(ii(o),o=o.next),o}function Mn(e,t){if(!e)return e;t||(t=e);var n=e,r;do if(r=!1,!n.steiner&&(ha(n,n.next)||Ve(n.prev,n,n.next)===0)){if(ii(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ni(e,t,n,r,i,a,o){if(e){!o&&a&&Mv(e,r,i,a);for(var s=e,l,u;e.prev!==e.next;){if(l=e.prev,u=e.next,a?pv(e,r,i,a):dv(e)){t.push(l.i/n),t.push(e.i/n),t.push(u.i/n),ii(e),e=u.next,s=u.next;continue}if(e=u,e===s){o?o===1?(e=vv(Mn(e),t,n),ni(e,t,n,r,i,a,2)):o===2&&mv(e,t,n,r,i,a):ni(Mn(e),t,n,r,i,a,1);break}}}}function dv(e){var t=e.prev,n=e,r=e.next;if(Ve(t,n,r)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(cr(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&Ve(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function pv(e,t,n,r){var i=e.prev,a=e,o=e.next;if(Ve(i,a,o)>=0)return!1;for(var s=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,l=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,u=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,c=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,h=lo(s,l,t,n,r),d=lo(u,c,t,n,r),f=e.prevZ,v=e.nextZ;f&&f.z>=h&&v&&v.z<=d;){if(f!==e.prev&&f!==e.next&&cr(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Ve(f.prev,f,f.next)>=0||(f=f.prevZ,v!==e.prev&&v!==e.next&&cr(i.x,i.y,a.x,a.y,o.x,o.y,v.x,v.y)&&Ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;f&&f.z>=h;){if(f!==e.prev&&f!==e.next&&cr(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Ve(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;v&&v.z<=d;){if(v!==e.prev&&v!==e.next&&cr(i.x,i.y,a.x,a.y,o.x,o.y,v.x,v.y)&&Ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vv(e,t,n){var r=e;do{var i=r.prev,a=r.next.next;!ha(i,a)&&Zl(i,r,r.next,a)&&ri(i,a)&&ri(a,i)&&(t.push(i.i/n),t.push(r.i/n),t.push(a.i/n),ii(r),ii(r.next),r=e=a),r=r.next}while(r!==e);return Mn(r)}function mv(e,t,n,r,i,a){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&Ev(o,s)){var l=jl(o,s);o=Mn(o,o.next),l=Mn(l,l.next),ni(o,t,n,r,i,a),ni(l,t,n,r,i,a);return}s=s.next}o=o.next}while(o!==e)}function gv(e,t,n,r){var i=[],a,o,s,l,u;for(a=0,o=t.length;a<o;a++)s=t[a]*r,l=a<o-1?t[a+1]*r:e.length,u=Yl(e,s,l,r,!1),u===u.next&&(u.steiner=!0),i.push(Sv(u));for(i.sort(yv),a=0;a<i.length;a++)_v(i[a],n),n=Mn(n,n.next);return n}function yv(e,t){return e.x-t.x}function _v(e,t){if(t=xv(e,t),t){var n=jl(t,e);Mn(t,t.next),Mn(n,n.next)}}function xv(e,t){var n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var s=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=r&&s>a){if(a=s,s===r){if(i===n.y)return n;if(i===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!o)return null;if(r===a)return o;var l=o,u=o.x,c=o.y,h=1/0,d;n=o;do r>=n.x&&n.x>=u&&r!==n.x&&cr(i<c?r:a,i,u,c,i<c?a:r,i,n.x,n.y)&&(d=Math.abs(i-n.y)/(r-n.x),ri(n,e)&&(d<h||d===h&&(n.x>o.x||n.x===o.x&&bv(o,n)))&&(o=n,h=d)),n=n.next;while(n!==l);return o}function bv(e,t){return Ve(e.prev,e,t.prev)<0&&Ve(t.next,e,e.next)<0}function Mv(e,t,n,r){var i=e;do i.z===null&&(i.z=lo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,wv(i)}function wv(e){var t,n,r,i,a,o,s,l,u=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<u&&(s++,r=r.nextZ,!!r);t++);for(l=u;s>0||l>0&&r;)s!==0&&(l===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,l--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,u*=2}while(o>1);return e}function lo(e,t,n,r,i){return e=32767*(e-n)*i,t=32767*(t-r)*i,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Sv(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function cr(e,t,n,r,i,a,o,s){return(i-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(r-s)-(n-o)*(t-s)>=0&&(n-o)*(a-s)-(i-o)*(r-s)>=0}function Ev(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Tv(e,t)&&(ri(e,t)&&ri(t,e)&&Av(e,t)&&(Ve(e.prev,e,t.prev)||Ve(e,t.prev,t))||ha(e,t)&&Ve(e.prev,e,e.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ha(e,t){return e.x===t.x&&e.y===t.y}function Zl(e,t,n,r){var i=Hi(Ve(e,t,n)),a=Hi(Ve(e,t,r)),o=Hi(Ve(n,r,e)),s=Hi(Ve(n,r,t));return!!(i!==a&&o!==s||i===0&&Ui(e,n,t)||a===0&&Ui(e,r,t)||o===0&&Ui(n,e,r)||s===0&&Ui(n,t,r))}function Ui(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Hi(e){return e>0?1:e<0?-1:0}function Tv(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Zl(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ri(e,t){return Ve(e.prev,e,e.next)<0?Ve(e,t,e.next)>=0&&Ve(e,e.prev,t)>=0:Ve(e,t,e.prev)<0||Ve(e,e.next,t)<0}function Av(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function jl(e,t){var n=new uo(e.i,e.x,e.y),r=new uo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ks(e,t,n,r){var i=new uo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ii(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function uo(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lv(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var yn={area:function(e){for(var t=e.length,n=0,r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5},isClockWise:function(e){return yn.area(e)<0},triangulateShape:function(e,t){var n=[],r=[],i=[];el(e),tl(n,e);var a=e.length;t.forEach(el);for(var o=0;o<t.length;o++)r.push(a),a+=t[o].length,tl(n,t[o]);for(var s=fv.triangulate(n,r),o=0;o<s.length;o+=3)i.push(s.slice(o,o+3));return i}};function el(e){var t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function tl(e,t){for(var n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Jl=function(e){wn(t,e);function t(n,r){var i=e.call(this)||this;i.type="ExtrudeGeometry",i.parameters={shapes:n,options:r},n=Array.isArray(n)?n:[n];for(var a=i,o=[],s=[],l=0,u=n.length;l<u;l++){var c=n[l];h(c)}i.setAttribute("position",new Ye(o,3)),i.setAttribute("uv",new Ye(s,2)),i.computeVertexNormals();function h(d){var f=[],v=r.curveSegments!==void 0?r.curveSegments:12,g=r.steps!==void 0?r.steps:1,_=r.depth!==void 0?r.depth:100,m=r.bevelEnabled!==void 0?r.bevelEnabled:!0,p=r.bevelThickness!==void 0?r.bevelThickness:6,E=r.bevelSize!==void 0?r.bevelSize:p-2,A=r.bevelOffset!==void 0?r.bevelOffset:0,b=r.bevelSegments!==void 0?r.bevelSegments:3,y=r.extrudePath,T=r.UVGenerator!==void 0?r.UVGenerator:Rv;r.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),_=r.amount);var G,P=!1,C,N,V,O;y&&(G=y.getSpacedPoints(g),P=!0,m=!1,C=y.computeFrenetFrames(g,!1),N=new S,V=new S,O=new S),m||(b=0,p=0,E=0,A=0);var B=d.extractPoints(v),L=B.shape,D=B.holes,F=!yn.isClockWise(L);if(F){L=L.reverse();for(var U=0,Q=D.length;U<Q;U++){var Y=D[U];yn.isClockWise(Y)&&(D[U]=Y.reverse())}}for(var Z=yn.triangulateShape(L,D),ne=L,U=0,Q=D.length;U<Q;U++){var Y=D[U];L=L.concat(Y)}function Re(J,oe,ie){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().multiplyScalar(ie).add(J)}var ge=L.length,k=Z.length;function Be(J,oe,ie){var fe,ce,Ze,at=J.x-oe.x,ft=J.y-oe.y,ot=ie.x-J.x,Lt=ie.y-J.y,Rt=at*at+ft*ft,Vn=at*Lt-ft*ot;if(Math.abs(Vn)>Number.EPSILON){var En=Math.sqrt(Rt),Ar=Math.sqrt(ot*ot+Lt*Lt),Mt=oe.x-ft/En,Lr=oe.y+at/En,fa=ie.x-Lt/Ar,da=ie.y+ot/Ar,x=((fa-Mt)*Lt-(da-Lr)*ot)/(at*Lt-ft*ot);fe=Mt+at*x-J.x,ce=Lr+ft*x-J.y;var z=fe*fe+ce*ce;if(z<=2)return new W(fe,ce);Ze=Math.sqrt(z/2)}else{var I=!1;at>Number.EPSILON?ot>Number.EPSILON&&(I=!0):at<-Number.EPSILON?ot<-Number.EPSILON&&(I=!0):Math.sign(ft)===Math.sign(Lt)&&(I=!0),I?(fe=-ft,ce=at,Ze=Math.sqrt(Rt)):(fe=at,ce=ft,Ze=Math.sqrt(Rt/2))}return new W(fe/Ze,ce/Ze)}for(var Ce=[],ae=0,le=ne.length,Se=le-1,ve=ae+1;ae<le;ae++,Se++,ve++)Se===le&&(Se=0),ve===le&&(ve=0),Ce[ae]=Be(ne[ae],ne[Se],ne[ve]);for(var ze=[],Ae,We=Ce.concat(),U=0,Q=D.length;U<Q;U++){var Y=D[U];Ae=[];for(var ae=0,le=Y.length,Se=le-1,ve=ae+1;ae<le;ae++,Se++,ve++)Se===le&&(Se=0),ve===le&&(ve=0),Ae[ae]=Be(Y[ae],Y[Se],Y[ve]);ze.push(Ae),We=We.concat(Ae)}for(var qe=0;qe<b;qe++){for(var tt=qe/b,ht=p*Math.cos(tt*Math.PI/2),vt=E*Math.sin(tt*Math.PI/2)+A,ae=0,le=ne.length;ae<le;ae++){var M=Re(ne[ae],Ce[ae],vt);te(M.x,M.y,-ht)}for(var U=0,Q=D.length;U<Q;U++){var Y=D[U];Ae=ze[U];for(var ae=0,le=Y.length;ae<le;ae++){var M=Re(Y[ae],Ae[ae],vt);te(M.x,M.y,-ht)}}}for(var w=E+A,ae=0;ae<ge;ae++){var M=m?Re(L[ae],We[ae],w):L[ae];P?(V.copy(C.normals[0]).multiplyScalar(M.x),N.copy(C.binormals[0]).multiplyScalar(M.y),O.copy(G[0]).add(V).add(N),te(O.x,O.y,O.z)):te(M.x,M.y,0)}for(var ee=1;ee<=g;ee++)for(var ae=0;ae<ge;ae++){var M=m?Re(L[ae],We[ae],w):L[ae];P?(V.copy(C.normals[ee]).multiplyScalar(M.x),N.copy(C.binormals[ee]).multiplyScalar(M.y),O.copy(G[ee]).add(V).add(N),te(O.x,O.y,O.z)):te(M.x,M.y,_/g*ee)}for(var qe=b-1;qe>=0;qe--){for(var tt=qe/b,ht=p*Math.cos(tt*Math.PI/2),j=E*Math.sin(tt*Math.PI/2)+A,ae=0,le=ne.length;ae<le;ae++){var M=Re(ne[ae],Ce[ae],j);te(M.x,M.y,_+ht)}for(var U=0,Q=D.length;U<Q;U++){var Y=D[U];Ae=ze[U];for(var ae=0,le=Y.length;ae<le;ae++){var M=Re(Y[ae],Ae[ae],j);P?te(M.x,M.y+G[g-1].y,G[g-1].x+ht):te(M.x,M.y,_+ht)}}}ye(),R();function ye(){var J=o.length/3;if(m){for(var oe=0,ie=ge*oe,fe=0;fe<k;fe++){var ce=Z[fe];ue(ce[2]+ie,ce[1]+ie,ce[0]+ie)}oe=g+b*2,ie=ge*oe;for(var fe=0;fe<k;fe++){var ce=Z[fe];ue(ce[0]+ie,ce[1]+ie,ce[2]+ie)}}else{for(var fe=0;fe<k;fe++){var ce=Z[fe];ue(ce[2],ce[1],ce[0])}for(var fe=0;fe<k;fe++){var ce=Z[fe];ue(ce[0]+ge*g,ce[1]+ge*g,ce[2]+ge*g)}}a.addGroup(J,o.length/3-J,0)}function R(){var J=o.length/3,oe=0;q(ne,oe),oe+=ne.length;for(var ie=0,fe=D.length;ie<fe;ie++){var ce=D[ie];q(ce,oe),oe+=ce.length}a.addGroup(J,o.length/3-J,1)}function q(J,oe){for(var ie=J.length;--ie>=0;){var fe=ie,ce=ie-1;ce<0&&(ce=J.length-1);for(var Ze=0,at=g+b*2;Ze<at;Ze++){var ft=ge*Ze,ot=ge*(Ze+1),Lt=oe+fe+ft,Rt=oe+ce+ft,Vn=oe+ce+ot,En=oe+fe+ot;X(Lt,Rt,Vn,En)}}}function te(J,oe,ie){f.push(J),f.push(oe),f.push(ie)}function ue(J,oe,ie){re(J),re(oe),re(ie);var fe=o.length/3,ce=T.generateTopUV(a,o,fe-3,fe-2,fe-1);me(ce[0]),me(ce[1]),me(ce[2])}function X(J,oe,ie,fe){re(J),re(oe),re(fe),re(oe),re(ie),re(fe);var ce=o.length/3,Ze=T.generateSideWallUV(a,o,ce-6,ce-3,ce-2,ce-1);me(Ze[0]),me(Ze[1]),me(Ze[3]),me(Ze[1]),me(Ze[2]),me(Ze[3])}function re(J){o.push(f[J*3+0]),o.push(f[J*3+1]),o.push(f[J*3+2])}function me(J){s.push(J.x),s.push(J.y)}}return i}return t.prototype.toJSON=function(){var n=Ge.prototype.toJSON.call(this),r=this.parameters.shapes,i=this.parameters.options;return Cv(r,i,n)},t}(Ge),Rv={generateTopUV:function(e,t,n,r,i){var a=t[n*3],o=t[n*3+1],s=t[r*3],l=t[r*3+1],u=t[i*3],c=t[i*3+1];return[new W(a,o),new W(s,l),new W(u,c)]},generateSideWallUV:function(e,t,n,r,i,a){var o=t[n*3],s=t[n*3+1],l=t[n*3+2],u=t[r*3],c=t[r*3+1],h=t[r*3+2],d=t[i*3],f=t[i*3+1],v=t[i*3+2],g=t[a*3],_=t[a*3+1],m=t[a*3+2];return Math.abs(s-c)<.01?[new W(o,1-l),new W(u,1-h),new W(d,1-v),new W(g,1-m)]:[new W(s,1-l),new W(c,1-h),new W(f,1-v),new W(_,1-m)]}};function Cv(e,t,n){if(n.shapes=[],Array.isArray(e))for(var r=0,i=e.length;r<i;r++){var a=e[r];n.shapes.push(a.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function co(e,t,n){Ge.call(this),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};var r=[],i=[],a=[],o=[],s=1e-5,l=new S,u=new S,c=new S,h=new S,d=new S;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");for(var f=t+1,v=0;v<=n;v++)for(var g=v/n,_=0;_<=t;_++){var m=_/t;e(m,g,u),i.push(u.x,u.y,u.z),m-s>=0?(e(m-s,g,c),h.subVectors(u,c)):(e(m+s,g,c),h.subVectors(c,u)),g-s>=0?(e(m,g-s,c),d.subVectors(u,c)):(e(m,g+s,c),d.subVectors(c,u)),l.crossVectors(h,d).normalize(),a.push(l.x,l.y,l.z),o.push(m,g)}for(var v=0;v<n;v++)for(var _=0;_<t;_++){var p=v*f+_,E=v*f+_+1,A=(v+1)*f+_+1,b=(v+1)*f+_;r.push(p,E,b),r.push(E,A,b)}this.setIndex(r),this.setAttribute("position",new Ye(i,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(o,2))}co.prototype=Object.create(Ge.prototype);co.prototype.constructor=co;var Pv=function(e){wn(t,e);function t(n,r){r===void 0&&(r=12);var i=e.call(this)||this;i.type="ShapeGeometry",i.parameters={shapes:n,curveSegments:r};var a=[],o=[],s=[],l=[],u=0,c=0;if(Array.isArray(n)===!1)d(n);else for(var h=0;h<n.length;h++)d(n[h]),i.addGroup(u,c,h),u+=c,c=0;i.setIndex(a),i.setAttribute("position",new Ye(o,3)),i.setAttribute("normal",new Ye(s,3)),i.setAttribute("uv",new Ye(l,2));function d(f){var v=o.length/3,g=f.extractPoints(r),_=g.shape,m=g.holes;yn.isClockWise(_)===!1&&(_=_.reverse());for(var p=0,E=m.length;p<E;p++){var A=m[p];yn.isClockWise(A)===!0&&(m[p]=A.reverse())}for(var b=yn.triangulateShape(_,m),p=0,E=m.length;p<E;p++){var A=m[p];_=_.concat(A)}for(var p=0,E=_.length;p<E;p++){var y=_[p];o.push(y.x,y.y,0),s.push(0,0,1),l.push(y.x,y.y)}for(var p=0,E=b.length;p<E;p++){var T=b[p],G=T[0]+v,P=T[1]+v,C=T[2]+v;a.push(G,P,C),c+=3}}return i}return t.prototype.toJSON=function(){var n=Ge.prototype.toJSON.call(this),r=this.parameters.shapes;return Dv(r,n)},t}(Ge);function Dv(e,t){if(t.shapes=[],Array.isArray(e))for(var n=0,r=e.length;n<r;n++){var i=e[n];t.shapes.push(i.uuid)}else t.shapes.push(e.uuid);return t}function gr(e){pe.call(this),this.type="ShadowMaterial",this.color=new de(0),this.transparent=!0,this.setValues(e)}gr.prototype=Object.create(pe.prototype);gr.prototype.constructor=gr;gr.prototype.isShadowMaterial=!0;gr.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.color.copy(e.color),this};function ai(e){pt.call(this,e),this.type="RawShaderMaterial"}ai.prototype=Object.create(pt.prototype);ai.prototype.constructor=ai;ai.prototype.isRawShaderMaterial=!0;function nn(e){pe.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(e)}nn.prototype=Object.create(pe.prototype);nn.prototype.constructor=nn;nn.prototype.isMeshStandardMaterial=!0;nn.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.vertexTangents=e.vertexTangents,this};function zn(e){nn.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new W(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=xe.clamp(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}zn.prototype=Object.create(nn.prototype);zn.prototype.constructor=zn;zn.prototype.isMeshPhysicalMaterial=!0;zn.prototype.copy=function(e){return nn.prototype.copy.call(this,e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new de).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this};function Un(e){pe.call(this),this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}Un.prototype=Object.create(pe.prototype);Un.prototype.constructor=Un;Un.prototype.isMeshPhongMaterial=!0;Un.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function yr(e){pe.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}yr.prototype=Object.create(pe.prototype);yr.prototype.constructor=yr;yr.prototype.isMeshToonMaterial=!0;yr.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function _r(e){pe.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}_r.prototype=Object.create(pe.prototype);_r.prototype.constructor=_r;_r.prototype.isMeshNormalMaterial=!0;_r.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function xr(e){pe.call(this),this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}xr.prototype=Object.create(pe.prototype);xr.prototype.constructor=xr;xr.prototype.isMeshLambertMaterial=!0;xr.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function br(e){pe.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new de(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}br.prototype=Object.create(pe.prototype);br.prototype.constructor=br;br.prototype.isMeshMatcapMaterial=!0;br.prototype.copy=function(e){return pe.prototype.copy.call(this,e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this};function Mr(e){kt.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}Mr.prototype=Object.create(kt.prototype);Mr.prototype.constructor=Mr;Mr.prototype.isLineDashedMaterial=!0;Mr.prototype.copy=function(e){return kt.prototype.copy.call(this,e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this};var Iv=Object.freeze({__proto__:null,ShadowMaterial:gr,SpriteMaterial:Fn,RawShaderMaterial:ai,ShaderMaterial:pt,PointsMaterial:Bn,MeshPhysicalMaterial:zn,MeshStandardMaterial:nn,MeshPhongMaterial:Un,MeshToonMaterial:yr,MeshNormalMaterial:_r,MeshLambertMaterial:xr,MeshDepthMaterial:In,MeshDistanceMaterial:On,MeshBasicMaterial:_n,MeshMatcapMaterial:br,LineDashedMaterial:Mr,LineBasicMaterial:kt,Material:pe}),He={arraySlice:function(e,t,n){return He.isTypedArray(e)?new e.constructor(e.subarray(t,n!==void 0?n:e.length)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(a,o){return e[a]-e[o]}for(var n=e.length,r=new Array(n),i=0;i!==n;++i)r[i]=i;return r.sort(t),r},sortedArray:function(e,t,n){for(var r=e.length,i=new e.constructor(r),a=0,o=0;o!==r;++a)for(var s=n[a]*t,l=0;l!==t;++l)i[o++]=e[s+l];return i},flattenJSON:function(e,t,n,r){for(var i=1,a=e[0];a!==void 0&&a[r]===void 0;)a=e[i++];if(a!==void 0){var o=a[r];if(o!==void 0)if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push.apply(n,o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}},subclip:function(e,t,n,r,i){i===void 0&&(i=30);var a=e.clone();a.name=t;for(var o=[],s=0;s<a.tracks.length;++s){for(var l=a.tracks[s],u=l.getValueSize(),c=[],h=[],d=0;d<l.times.length;++d){var f=l.times[d]*i;if(!(f<n||f>=r)){c.push(l.times[d]);for(var v=0;v<u;++v)h.push(l.values[d*u+v])}}c.length!==0&&(l.times=He.convertArray(c,l.times.constructor),l.values=He.convertArray(h,l.values.constructor),o.push(l))}a.tracks=o;for(var g=1/0,s=0;s<a.tracks.length;++s)g>a.tracks[s].times[0]&&(g=a.tracks[s].times[0]);for(var s=0;s<a.tracks.length;++s)a.tracks[s].shift(-1*g);return a.resetDuration(),a},makeClipAdditive:function(e,t,n,r){t===void 0&&(t=0),n===void 0&&(n=e),r===void 0&&(r=30),r<=0&&(r=30);for(var i=n.tracks.length,a=t/r,o=function(l){var u=n.tracks[l],c=u.ValueTypeName;if(c==="bool"||c==="string")return"continue";var h=e.tracks.find(function(N){return N.name===u.name&&N.ValueTypeName===c});if(h===void 0)return"continue";var d=0,f=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);var v=0,g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(v=g/3);var _=u.times.length-1,m=void 0;if(a<=u.times[0]){var p=d,E=f-d;m=He.arraySlice(u.values,p,E)}else if(a>=u.times[_]){var p=_*f+d,E=p+f-d;m=He.arraySlice(u.values,p,E)}else{var A=u.createInterpolant(),p=d,E=f-d;A.evaluate(a),m=He.arraySlice(A.resultBuffer,p,E)}if(c==="quaternion"){var b=new _t().fromArray(m).normalize().conjugate();b.toArray(m)}for(var y=h.times.length,T=0;T<y;++T){var G=T*g+v;if(c==="quaternion")_t.multiplyQuaternionsFlat(h.values,G,m,0,h.values,G);else for(var P=g-v*2,C=0;C<P;++C)h.values[G+C]-=m[C]}},s=0;s<i;++s)o(s);return e.blendMode=Pl,e}};function Et(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n}Object.assign(Et.prototype,{evaluate:function(e){var t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];e:{t:{var a=void 0;n:{r:if(!(e<r)){for(var o=n+2;;){if(r===void 0){if(e<i)break r;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,i)}if(n===o)break;if(i=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=i)){var s=t[1];e<s&&(n=2,i=s);for(var o=n-2;;){if(i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===o)break;if(r=i,i=t[--n-1],e>=i)break t}a=n,n=0;break n}break e}for(;n<a;){var l=n+a>>>1;e<t[l]?a=l:n=l+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,i,e)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){for(var t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r,a=0;a!==r;++a)t[a]=n[i+a];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Et.prototype,{beforeStart_:Et.prototype.copySampleValue_,afterEnd_:Et.prototype.copySampleValue_});function ho(e,t,n,r){Et.call(this,e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}ho.prototype=Object.assign(Object.create(Et.prototype),{constructor:ho,DefaultSettings_:{endingStart:sr,endingEnd:sr},intervalChanged_:function(e,t,n){var r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case lr:i=e,o=2*t-n;break;case Zi:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case lr:a=e,s=2*n-t;break;case Zi:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}var l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(s-n),this._offsetPrev=i*u,this._offsetNext=a*u},interpolate_:function(e,t,n,r){for(var i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,l=s-o,u=this._offsetPrev,c=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(n-t)/(r-t),v=f*f,g=v*f,_=-h*g+2*h*v-h*f,m=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*f+1,p=(-1-d)*g+(1.5+d)*v+.5*f,E=d*g-d*v,A=0;A!==o;++A)i[A]=_*a[u+A]+m*a[l+A]+p*a[s+A]+E*a[c+A];return i}});function $i(e,t,n,r){Et.call(this,e,t,n,r)}$i.prototype=Object.assign(Object.create(Et.prototype),{constructor:$i,interpolate_:function(e,t,n,r){for(var i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,l=s-o,u=(n-t)/(r-t),c=1-u,h=0;h!==o;++h)i[h]=a[l+h]*c+a[s+h]*u;return i}});function fo(e,t,n,r){Et.call(this,e,t,n,r)}fo.prototype=Object.assign(Object.create(Et.prototype),{constructor:fo,interpolate_:function(e){return this.copySampleValue_(e-1)}});function it(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=He.convertArray(t,this.TimeBufferType),this.values=He.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}Object.assign(it,{toJSON:function(e){var t=e.constructor,n;if(t.toJSON!==void 0)n=t.toJSON(e);else{n={name:e.name,times:He.convertArray(e.times,Array),values:He.convertArray(e.values,Array)};var r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}});Object.assign(it.prototype,{constructor:it,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:Wi,InterpolantFactoryMethodDiscrete:function(e){return new fo(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodLinear:function(e){return new $i(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:function(e){return new ho(this.times,this.values,this.getValueSize(),e)},setInterpolation:function(e){var t;switch(e){case Yi:t=this.InterpolantFactoryMethodDiscrete;break;case Wi:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){var n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yi;case this.InterpolantFactoryMethodLinear:return Wi;case this.InterpolantFactoryMethodSmooth:return ma}},getValueSize:function(){return this.values.length/this.times.length},shift:function(e){if(e!==0)for(var t=this.times,n=0,r=t.length;n!==r;++n)t[n]+=e;return this},scale:function(e){if(e!==1)for(var t=this.times,n=0,r=t.length;n!==r;++n)t[n]*=e;return this},trim:function(e,t){for(var n=this.times,r=n.length,i=0,a=r-1;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);var o=this.getValueSize();this.times=He.arraySlice(n,i,a),this.values=He.arraySlice(this.values,i*o,a*o)}return this},validate:function(){var e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);var n=this.times,r=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);for(var a=null,o=0;o!==i;o++){var s=n[o];if(typeof s=="number"&&isNaN(s)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,s),e=!1;break}if(a!==null&&a>s){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,s,a),e=!1;break}a=s}if(r!==void 0&&He.isTypedArray(r))for(var o=0,l=r.length;o!==l;++o){var u=r[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e},optimize:function(){for(var e=He.arraySlice(this.times),t=He.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===ma,i=e.length-1,a=1,o=1;o<i;++o){var s=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)s=!0;else for(var c=o*n,h=c-n,d=c+n,f=0;f!==n;++f){var v=t[c+f];if(v!==t[h+f]||v!==t[d+f]){s=!0;break}}if(s){if(o!==a){e[a]=e[o];for(var g=o*n,_=a*n,f=0;f!==n;++f)t[_+f]=t[g+f]}++a}}if(i>0){e[a]=e[i];for(var g=i*n,_=a*n,f=0;f!==n;++f)t[_+f]=t[g+f];++a}return a!==e.length?(this.times=He.arraySlice(e,0,a),this.values=He.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this},clone:function(){var e=He.arraySlice(this.times,0),t=He.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}});function po(e,t,n){it.call(this,e,t,n)}po.prototype=Object.assign(Object.create(it.prototype),{constructor:po,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:Yi,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function vo(e,t,n,r){it.call(this,e,t,n,r)}vo.prototype=Object.assign(Object.create(it.prototype),{constructor:vo,ValueTypeName:"color"});function oi(e,t,n,r){it.call(this,e,t,n,r)}oi.prototype=Object.assign(Object.create(it.prototype),{constructor:oi,ValueTypeName:"number"});function mo(e,t,n,r){Et.call(this,e,t,n,r)}mo.prototype=Object.assign(Object.create(Et.prototype),{constructor:mo,interpolate_:function(e,t,n,r){for(var i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),l=e*o,u=l+o;l!==u;l+=4)_t.slerpFlat(i,0,a,l-o,a,l,s);return i}});function Ki(e,t,n,r){it.call(this,e,t,n,r)}Ki.prototype=Object.assign(Object.create(it.prototype),{constructor:Ki,ValueTypeName:"quaternion",DefaultInterpolation:Wi,InterpolantFactoryMethodLinear:function(e){return new mo(this.times,this.values,this.getValueSize(),e)},InterpolantFactoryMethodSmooth:void 0});function go(e,t,n,r){it.call(this,e,t,n,r)}go.prototype=Object.assign(Object.create(it.prototype),{constructor:go,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:Yi,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function si(e,t,n,r){it.call(this,e,t,n,r)}si.prototype=Object.assign(Object.create(it.prototype),{constructor:si,ValueTypeName:"vector"});function Nt(e,t,n,r){t===void 0&&(t=-1),r===void 0&&(r=Do),this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=xe.generateUUID(),this.duration<0&&this.resetDuration()}function Ov(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oi;case"vector":case"vector2":case"vector3":case"vector4":return si;case"color":return vo;case"quaternion":return Ki;case"bool":case"boolean":return po;case"string":return go}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Nv(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");var t=Ov(e.type);if(e.times===void 0){var n=[],r=[];He.flattenJSON(e.keys,n,r,"value"),e.times=n,e.values=r}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Object.assign(Nt,{parse:function(e){for(var t=[],n=e.tracks,r=1/(e.fps||1),i=0,a=n.length;i!==a;++i)t.push(Nv(n[i]).scale(r));var o=new Nt(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o},toJSON:function(e){for(var t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode},i=0,a=n.length;i!==a;++i)t.push(it.toJSON(n[i]));return r},CreateFromMorphTargetSequence:function(e,t,n,r){for(var i=t.length,a=[],o=0;o<i;o++){var s=[],l=[];s.push((o+i-1)%i,o,(o+1)%i),l.push(0,1,0);var u=He.getKeyframeOrder(s);s=He.sortedArray(s,1,u),l=He.sortedArray(l,1,u),!r&&s[0]===0&&(s.push(i),l.push(l[0])),a.push(new oi(".morphTargetInfluences["+t[o].name+"]",s,l).scale(1/n))}return new Nt(e,-1,a)},findByName:function(e,t){var n=e;if(!Array.isArray(e)){var r=e;n=r.geometry&&r.geometry.animations||r.animations}for(var i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null},CreateClipsFromMorphTargetSequences:function(e,t,n){for(var r={},i=/^([\w-]*?)([\d]+)$/,a=0,o=e.length;a<o;a++){var s=e[a],l=s.name.match(i);if(l&&l.length>1){var u=l[1],c=r[u];c||(r[u]=c=[]),c.push(s)}}var h=[];for(var u in r)h.push(Nt.CreateFromMorphTargetSequence(u,r[u],t,n));return h},parseAnimation:function(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;for(var n=function(A,b,y,T,G){if(y.length!==0){var P=[],C=[];He.flattenJSON(y,P,C,T),P.length!==0&&G.push(new A(b,P,C))}},r=[],i=e.name||"default",a=e.fps||30,o=e.blendMode,s=e.length||-1,l=e.hierarchy||[],u=0;u<l.length;u++){var c=l[u].keys;if(!(!c||c.length===0))if(c[0].morphTargets){var h={},d=void 0;for(d=0;d<c.length;d++)if(c[d].morphTargets)for(var f=0;f<c[d].morphTargets.length;f++)h[c[d].morphTargets[f]]=-1;for(var v in h){for(var g=[],_=[],f=0;f!==c[d].morphTargets.length;++f){var m=c[d];g.push(m.time),_.push(m.morphTarget===v?1:0)}r.push(new oi(".morphTargetInfluence["+v+"]",g,_))}s=h.length*(a||1)}else{var p=".bones["+t[u].name+"]";n(si,p+".position",c,"pos",r),n(Ki,p+".quaternion",c,"rot",r),n(si,p+".scale",c,"scl",r)}}if(r.length===0)return null;var E=new Nt(i,s,r,o);return E}});Object.assign(Nt.prototype,{resetDuration:function(){for(var e=this.tracks,t=0,n=0,r=e.length;n!==r;++n){var i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this},trim:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this},validate:function(){for(var e=!0,t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e},optimize:function(){for(var e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this},clone:function(){for(var e=[],t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new Nt(this.name,this.duration,e,this.blendMode)},toJSON:function(){return Nt.toJSON(this)}});var wr={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Fv(e,t,n){var r=this,i=!1,a=0,o=0,s=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,i===!1&&r.onStart!==void 0&&r.onStart(u,a,o),i=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return s?s(u):u},this.setURLModifier=function(u){return s=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){var c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(var c=0,h=l.length;c<h;c+=2){var d=l[c],f=l[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return f}return null}}var Bv=new Fv;function Oe(e){this.manager=e!==void 0?e:Bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Oe.prototype,{load:function(){},loadAsync:function(e,t){var n=this;return new Promise(function(r,i){n.load(e,r,t,i)})},parse:function(){},setCrossOrigin:function(e){return this.crossOrigin=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setPath:function(e){return this.path=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}});var Ot={};function rn(e){Oe.call(this,e)}rn.prototype=Object.assign(Object.create(Oe.prototype),{constructor:rn,load:function(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);var i=this,a=wr.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;if(Ot[e]!==void 0){Ot[e].push({onLoad:t,onProgress:n,onError:r});return}var o=/^data:(.*?)(;base64)?,(.*)$/,s=e.match(o),l;if(s){var u=s[1],c=!!s[2],h=s[3];h=decodeURIComponent(h),c&&(h=atob(h));try{var d,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":for(var v=new Uint8Array(h.length),g=0;g<h.length;g++)v[g]=h.charCodeAt(g);f==="blob"?d=new Blob([v.buffer],{type:u}):d=v.buffer;break;case"document":var _=new DOMParser;d=_.parseFromString(h,u);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){t&&t(d),i.manager.itemEnd(e)},0)}catch(p){setTimeout(function(){r&&r(p),i.manager.itemError(e),i.manager.itemEnd(e)},0)}}else{Ot[e]=[],Ot[e].push({onLoad:t,onProgress:n,onError:r}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(p){var E=this.response,A=Ot[e];if(delete Ot[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),wr.add(e,E);for(var b=0,y=A.length;b<y;b++){var T=A[b];T.onLoad&&T.onLoad(E)}i.manager.itemEnd(e)}else{for(var b=0,y=A.length;b<y;b++){var T=A[b];T.onError&&T.onError(p)}i.manager.itemError(e),i.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(p){for(var E=Ot[e],A=0,b=E.length;A<b;A++){var y=E[A];y.onProgress&&y.onProgress(p)}},!1),l.addEventListener("error",function(p){var E=Ot[e];delete Ot[e];for(var A=0,b=E.length;A<b;A++){var y=E[A];y.onError&&y.onError(p)}i.manager.itemError(e),i.manager.itemEnd(e)},!1),l.addEventListener("abort",function(p){var E=Ot[e];delete Ot[e];for(var A=0,b=E.length;A<b;A++){var y=E[A];y.onError&&y.onError(p)}i.manager.itemError(e),i.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(var m in this.requestHeader)l.setRequestHeader(m,this.requestHeader[m]);l.send(null)}return i.manager.itemStart(e),l},setResponseType:function(e){return this.responseType=e,this},setMimeType:function(e){return this.mimeType=e,this}});function nl(e){Oe.call(this,e)}nl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:nl,load:function(e,t,n,r){var i=this,a=new rn(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(o){try{t(i.parse(JSON.parse(o)))}catch(s){r?r(s):console.error(s),i.manager.itemError(e)}},n,r)},parse:function(e){for(var t=[],n=0;n<e.length;n++){var r=Nt.parse(e[n]);t.push(r)}return t}});function rl(e){Oe.call(this,e)}rl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:rl,load:function(e,t,n,r){var i=this,a=[],o=new ti,s=new rn(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(i.withCredentials);var l=0;function u(d){s.load(e[d],function(f){var v=i.parse(f,!0);a[d]={width:v.width,height:v.height,format:v.format,mipmaps:v.mipmaps},l+=1,l===6&&(v.mipmapCount===1&&(o.minFilter=rt),o.image=a,o.format=v.format,o.needsUpdate=!0,t&&t(o))},n,r)}if(Array.isArray(e))for(var c=0,h=e.length;c<h;++c)u(c);else s.load(e,function(d){var f=i.parse(d,!0);if(f.isCubemap){for(var v=f.mipmaps.length/f.mipmapCount,g=0;g<v;g++){a[g]={mipmaps:[]};for(var _=0;_<f.mipmapCount;_++)a[g].mipmaps.push(f.mipmaps[g*f.mipmapCount+_]),a[g].format=f.format,a[g].width=f.width,a[g].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=rt),o.format=f.format,o.needsUpdate=!0,t&&t(o)},n,r);return o}});function ea(e){Oe.call(this,e)}ea.prototype=Object.assign(Object.create(Oe.prototype),{constructor:ea,load:function(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);var i=this,a=wr.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;var o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function s(){o.removeEventListener("load",s,!1),o.removeEventListener("error",l,!1),wr.add(e,this),t&&t(this),i.manager.itemEnd(e)}function l(u){o.removeEventListener("load",s,!1),o.removeEventListener("error",l,!1),r&&r(u),i.manager.itemError(e),i.manager.itemEnd(e)}return o.addEventListener("load",s,!1),o.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}});function yo(e){Oe.call(this,e)}yo.prototype=Object.assign(Object.create(Oe.prototype),{constructor:yo,load:function(e,t,n,r){var i=new bn,a=new ea(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);var o=0;function s(u){a.load(e[u],function(c){i.images[u]=c,o++,o===6&&(i.needsUpdate=!0,t&&t(i))},void 0,r)}for(var l=0;l<e.length;++l)s(l);return i}});function il(e){Oe.call(this,e)}il.prototype=Object.assign(Object.create(Oe.prototype),{constructor:il,load:function(e,t,n,r){var i=this,a=new vr,o=new rn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(i.withCredentials),o.load(e,function(s){var l=i.parse(s);l&&(l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:yt,a.wrapT=l.wrapT!==void 0?l.wrapT:yt,a.magFilter=l.magFilter!==void 0?l.magFilter:rt,a.minFilter=l.minFilter!==void 0?l.minFilter:rt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(a.encoding=l.encoding),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=sa),l.mipmapCount===1&&(a.minFilter=rt),a.needsUpdate=!0,t&&t(a,l))},n,r),a}});function _o(e){Oe.call(this,e)}_o.prototype=Object.assign(Object.create(Oe.prototype),{constructor:_o,load:function(e,t,n,r){var i=new Fe,a=new ea(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){i.image=o;var s=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;i.format=s?Dn:Ft,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}});function se(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(se.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(e,t){var n=this.getUtoTmapping(e);return this.getPoint(n,t)},getPoints:function(e){e===void 0&&(e=5);for(var t=[],n=0;n<=e;n++)t.push(this.getPoint(n/e));return t},getSpacedPoints:function(e){e===void 0&&(e=5);for(var t=[],n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t},getLength:function(){var e=this.getLengths();return e[e.length-1]},getLengths:function(e){if(e===void 0&&(e=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var t=[],n,r=this.getPoint(0),i=0;t.push(0);for(var a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(e,t){var n=this.getLengths(),r=0,i=n.length,a;t?a=t:a=e*n[i-1];for(var o=0,s=i-1,l;o<=s;)if(r=Math.floor(o+(s-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);var u=n[r],c=n[r+1],h=c-u,d=(a-u)/h,f=(r+d)/(i-1);return f},getTangent:function(e,t){var n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);var a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new W:new S);return s.copy(o).sub(a).normalize(),s},getTangentAt:function(e,t){var n=this.getUtoTmapping(e);return this.getTangent(n,t)},computeFrenetFrames:function(e,t){for(var n=new S,r=[],i=[],a=[],o=new S,s=new Le,l=0;l<=e;l++){var u=l/e;r[l]=this.getTangentAt(u,new S),r[l].normalize()}i[0]=new S,a[0]=new S;var c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(var l=1;l<=e;l++){if(i[l]=i[l-1].clone(),a[l]=a[l-1].clone(),o.crossVectors(r[l-1],r[l]),o.length()>Number.EPSILON){o.normalize();var v=Math.acos(xe.clamp(r[l-1].dot(r[l]),-1,1));i[l].applyMatrix4(s.makeRotationAxis(o,v))}a[l].crossVectors(r[l],i[l])}if(t===!0){var v=Math.acos(xe.clamp(i[0].dot(i[e]),-1,1));v/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(v=-v);for(var l=1;l<=e;l++)i[l].applyMatrix4(s.makeRotationAxis(r[l],v*l)),a[l].crossVectors(r[l],i[l])}return{tangents:r,normals:i,binormals:a}},clone:function(){return new this.constructor().copy(this)},copy:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this},toJSON:function(){var e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e},fromJSON:function(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}});function At(e,t,n,r,i,a,o,s){se.call(this),this.type="EllipseCurve",this.aX=e||0,this.aY=t||0,this.xRadius=n||1,this.yRadius=r||1,this.aStartAngle=i||0,this.aEndAngle=a||2*Math.PI,this.aClockwise=o||!1,this.aRotation=s||0}At.prototype=Object.create(se.prototype);At.prototype.constructor=At;At.prototype.isEllipseCurve=!0;At.prototype.getPoint=function(e,t){for(var n=t||new W,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<Number.EPSILON;i<0;)i+=r;for(;i>r;)i-=r;i<Number.EPSILON&&(a?i=0:i=r),this.aClockwise===!0&&!a&&(i===r?i=-r:i=i-r);var o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){var u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),h=s-this.aX,d=l-this.aY;s=h*u-d*c+this.aX,l=h*c+d*u+this.aY}return n.set(s,l)};At.prototype.copy=function(e){return se.prototype.copy.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};At.prototype.toJSON=function(){var e=se.prototype.toJSON.call(this);return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e};At.prototype.fromJSON=function(e){return se.prototype.fromJSON.call(this,e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this};function li(e,t,n,r,i,a){At.call(this,e,t,n,n,r,i,a),this.type="ArcCurve"}li.prototype=Object.create(At.prototype);li.prototype.constructor=li;li.prototype.isArcCurve=!0;function No(){var e=0,t=0,n=0,r=0;function i(a,o,s,l){e=a,t=s,n=-3*a+3*o-2*s-l,r=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,u){i(o,s,u*(s-a),u*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,u,c,h){var d=(o-a)/u-(s-a)/(u+c)+(s-o)/c,f=(s-o)/c-(l-o)/(c+h)+(l-s)/h;d*=c,f*=c,i(o,s,d,f)},calc:function(a){var o=a*a,s=o*a;return e+t*a+n*o+r*s}}}var Gi=new S,Va=new No,ka=new No,Wa=new No;function Bt(e,t,n,r){e===void 0&&(e=[]),t===void 0&&(t=!1),n===void 0&&(n="centripetal"),r===void 0&&(r=.5),se.call(this),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}Bt.prototype=Object.create(se.prototype);Bt.prototype.constructor=Bt;Bt.prototype.isCatmullRomCurve3=!0;Bt.prototype.getPoint=function(e,t){t===void 0&&(t=new S);var n=t,r=this.points,i=r.length,a=(i-(this.closed?0:1))*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);var l,u;this.closed||o>0?l=r[(o-1)%i]:(Gi.subVectors(r[0],r[1]).add(r[0]),l=Gi);var c=r[o%i],h=r[(o+1)%i];if(this.closed||o+2<i?u=r[(o+2)%i]:(Gi.subVectors(r[i-1],r[i-2]).add(r[i-1]),u=Gi),this.curveType==="centripetal"||this.curveType==="chordal"){var d=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),d),v=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),f<1e-4&&(f=v),g<1e-4&&(g=v),Va.initNonuniformCatmullRom(l.x,c.x,h.x,u.x,f,v,g),ka.initNonuniformCatmullRom(l.y,c.y,h.y,u.y,f,v,g),Wa.initNonuniformCatmullRom(l.z,c.z,h.z,u.z,f,v,g)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,c.x,h.x,u.x,this.tension),ka.initCatmullRom(l.y,c.y,h.y,u.y,this.tension),Wa.initCatmullRom(l.z,c.z,h.z,u.z,this.tension));return n.set(Va.calc(s),ka.calc(s),Wa.calc(s)),n};Bt.prototype.copy=function(e){se.prototype.copy.call(this,e),this.points=[];for(var t=0,n=e.points.length;t<n;t++){var r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};Bt.prototype.toJSON=function(){var e=se.prototype.toJSON.call(this);e.points=[];for(var t=0,n=this.points.length;t<n;t++){var r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e};Bt.prototype.fromJSON=function(e){se.prototype.fromJSON.call(this,e),this.points=[];for(var t=0,n=e.points.length;t<n;t++){var r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this};function al(e,t,n,r,i){var a=(r-t)*.5,o=(i-n)*.5,s=e*e,l=e*s;return(2*n-2*r+a+o)*l+(-3*n+3*r-2*a-o)*s+a*e+n}function zv(e,t){var n=1-e;return n*n*t}function Uv(e,t){return 2*(1-e)*e*t}function Hv(e,t){return e*e*t}function Yr(e,t,n,r){return zv(e,t)+Uv(e,n)+Hv(e,r)}function Gv(e,t){var n=1-e;return n*n*n*t}function Vv(e,t){var n=1-e;return 3*n*n*e*t}function kv(e,t){return 3*(1-e)*e*e*t}function Wv(e,t){return e*e*e*t}function Zr(e,t,n,r,i){return Gv(e,t)+Vv(e,n)+kv(e,r)+Wv(e,i)}function Wt(e,t,n,r){e===void 0&&(e=new W),t===void 0&&(t=new W),n===void 0&&(n=new W),r===void 0&&(r=new W),se.call(this),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}Wt.prototype=Object.create(se.prototype);Wt.prototype.constructor=Wt;Wt.prototype.isCubicBezierCurve=!0;Wt.prototype.getPoint=function(e,t){t===void 0&&(t=new W);var n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Zr(e,r.x,i.x,a.x,o.x),Zr(e,r.y,i.y,a.y,o.y)),n};Wt.prototype.copy=function(e){return se.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};Wt.prototype.toJSON=function(){var e=se.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};Wt.prototype.fromJSON=function(e){return se.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function an(e,t,n,r){e===void 0&&(e=new S),t===void 0&&(t=new S),n===void 0&&(n=new S),r===void 0&&(r=new S),se.call(this),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}an.prototype=Object.create(se.prototype);an.prototype.constructor=an;an.prototype.isCubicBezierCurve3=!0;an.prototype.getPoint=function(e,t){t===void 0&&(t=new S);var n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Zr(e,r.x,i.x,a.x,o.x),Zr(e,r.y,i.y,a.y,o.y),Zr(e,r.z,i.z,a.z,o.z)),n};an.prototype.copy=function(e){return se.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this};an.prototype.toJSON=function(){var e=se.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e};an.prototype.fromJSON=function(e){return se.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this};function bt(e,t){e===void 0&&(e=new W),t===void 0&&(t=new W),se.call(this),this.type="LineCurve",this.v1=e,this.v2=t}bt.prototype=Object.create(se.prototype);bt.prototype.constructor=bt;bt.prototype.isLineCurve=!0;bt.prototype.getPoint=function(e,t){t===void 0&&(t=new W);var n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};bt.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};bt.prototype.getTangent=function(e,t){var n=t||new W;return n.copy(this.v2).sub(this.v1).normalize(),n};bt.prototype.copy=function(e){return se.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};bt.prototype.toJSON=function(){var e=se.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};bt.prototype.fromJSON=function(e){return se.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function qt(e,t){e===void 0&&(e=new S),t===void 0&&(t=new S),se.call(this),this.type="LineCurve3",this.v1=e,this.v2=t}qt.prototype=Object.create(se.prototype);qt.prototype.constructor=qt;qt.prototype.isLineCurve3=!0;qt.prototype.getPoint=function(e,t){t===void 0&&(t=new S);var n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n};qt.prototype.getPointAt=function(e,t){return this.getPoint(e,t)};qt.prototype.copy=function(e){return se.prototype.copy.call(this,e),this.v1.copy(e.v1),this.v2.copy(e.v2),this};qt.prototype.toJSON=function(){var e=se.prototype.toJSON.call(this);return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};qt.prototype.fromJSON=function(e){return se.prototype.fromJSON.call(this,e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Xt(e,t,n){e===void 0&&(e=new W),t===void 0&&(t=new W),n===void 0&&(n=new W),se.call(this),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}Xt.prototype=Object.create(se.prototype);Xt.prototype.constructor=Xt;Xt.prototype.isQuadraticBezierCurve=!0;Xt.prototype.getPoint=function(e,t){t===void 0&&(t=new W);var n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Yr(e,r.x,i.x,a.x),Yr(e,r.y,i.y,a.y)),n};Xt.prototype.copy=function(e){return se.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};Xt.prototype.toJSON=function(){var e=se.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};Xt.prototype.fromJSON=function(e){return se.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function on(e,t,n){e===void 0&&(e=new S),t===void 0&&(t=new S),n===void 0&&(n=new S),se.call(this),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}on.prototype=Object.create(se.prototype);on.prototype.constructor=on;on.prototype.isQuadraticBezierCurve3=!0;on.prototype.getPoint=function(e,t){t===void 0&&(t=new S);var n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Yr(e,r.x,i.x,a.x),Yr(e,r.y,i.y,a.y),Yr(e,r.z,i.z,a.z)),n};on.prototype.copy=function(e){return se.prototype.copy.call(this,e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this};on.prototype.toJSON=function(){var e=se.prototype.toJSON.call(this);return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e};on.prototype.fromJSON=function(e){return se.prototype.fromJSON.call(this,e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this};function Yt(e){e===void 0&&(e=[]),se.call(this),this.type="SplineCurve",this.points=e}Yt.prototype=Object.create(se.prototype);Yt.prototype.constructor=Yt;Yt.prototype.isSplineCurve=!0;Yt.prototype.getPoint=function(e,t){t===void 0&&(t=new W);var n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],c=r[a>r.length-3?r.length-1:a+2];return n.set(al(o,s.x,l.x,u.x,c.x),al(o,s.y,l.y,u.y,c.y)),n};Yt.prototype.copy=function(e){se.prototype.copy.call(this,e),this.points=[];for(var t=0,n=e.points.length;t<n;t++){var r=e.points[t];this.points.push(r.clone())}return this};Yt.prototype.toJSON=function(){var e=se.prototype.toJSON.call(this);e.points=[];for(var t=0,n=this.points.length;t<n;t++){var r=this.points[t];e.points.push(r.toArray())}return e};Yt.prototype.fromJSON=function(e){se.prototype.fromJSON.call(this,e),this.points=[];for(var t=0,n=e.points.length;t<n;t++){var r=e.points[t];this.points.push(new W().fromArray(r))}return this};var qv=Object.freeze({__proto__:null,ArcCurve:li,CatmullRomCurve3:Bt,CubicBezierCurve:Wt,CubicBezierCurve3:an,EllipseCurve:At,LineCurve:bt,LineCurve3:qt,QuadraticBezierCurve:Xt,QuadraticBezierCurve3:on,SplineCurve:Yt});function Pn(){se.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Pn.prototype=Object.assign(Object.create(se.prototype),{constructor:Pn,add:function(e){this.curves.push(e)},closePath:function(){var e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new bt(t,e))},getPoint:function(e){for(var t=e*this.getLength(),n=this.getCurveLengths(),r=0;r<n.length;){if(n[r]>=t){var i=n[r]-t,a=this.curves[r],o=a.getLength(),s=o===0?0:1-i/o;return a.getPointAt(s)}r++}return null},getLength:function(){var e=this.getCurveLengths();return e[e.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var e=[],t=0,n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e},getSpacedPoints:function(e){e===void 0&&(e=40);for(var t=[],n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t},getPoints:function(e){e===void 0&&(e=12);for(var t=[],n,r=0,i=this.curves;r<i.length;r++)for(var a=i[r],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o),l=0;l<s.length;l++){var u=s[l];n&&n.equals(u)||(t.push(u),n=u)}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t},copy:function(e){se.prototype.copy.call(this,e),this.curves=[];for(var t=0,n=e.curves.length;t<n;t++){var r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this},toJSON:function(){var e=se.prototype.toJSON.call(this);e.autoClose=this.autoClose,e.curves=[];for(var t=0,n=this.curves.length;t<n;t++){var r=this.curves[t];e.curves.push(r.toJSON())}return e},fromJSON:function(e){se.prototype.fromJSON.call(this,e),this.autoClose=e.autoClose,this.curves=[];for(var t=0,n=e.curves.length;t<n;t++){var r=e.curves[t];this.curves.push(new qv[r.type]().fromJSON(r))}return this}});function Gt(e){Pn.call(this),this.type="Path",this.currentPoint=new W,e&&this.setFromPoints(e)}Gt.prototype=Object.assign(Object.create(Pn.prototype),{constructor:Gt,setFromPoints:function(e){this.moveTo(e[0].x,e[0].y);for(var t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this},moveTo:function(e,t){return this.currentPoint.set(e,t),this},lineTo:function(e,t){var n=new bt(this.currentPoint.clone(),new W(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this},quadraticCurveTo:function(e,t,n,r){var i=new Xt(this.currentPoint.clone(),new W(e,t),new W(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this},bezierCurveTo:function(e,t,n,r,i,a){var o=new Wt(this.currentPoint.clone(),new W(e,t),new W(n,r),new W(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this},splineThru:function(e){var t=[this.currentPoint.clone()].concat(e),n=new Yt(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this},arc:function(e,t,n,r,i,a){var o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this},absarc:function(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this},ellipse:function(e,t,n,r,i,a,o,s){var l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,i,a,o,s),this},absellipse:function(e,t,n,r,i,a,o,s){var l=new At(e,t,n,r,i,a,o,s);if(this.curves.length>0){var u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);var c=l.getPoint(1);return this.currentPoint.copy(c),this},copy:function(e){return Pn.prototype.copy.call(this,e),this.currentPoint.copy(e.currentPoint),this},toJSON:function(){var e=Pn.prototype.toJSON.call(this);return e.currentPoint=this.currentPoint.toArray(),e},fromJSON:function(e){return Pn.prototype.fromJSON.call(this,e),this.currentPoint.fromArray(e.currentPoint),this}});function fr(e){Gt.call(this,e),this.uuid=xe.generateUUID(),this.type="Shape",this.holes=[]}fr.prototype=Object.assign(Object.create(Gt.prototype),{constructor:fr,getPointsHoles:function(e){for(var t=[],n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t},extractPoints:function(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}},copy:function(e){Gt.prototype.copy.call(this,e),this.holes=[];for(var t=0,n=e.holes.length;t<n;t++){var r=e.holes[t];this.holes.push(r.clone())}return this},toJSON:function(){var e=Gt.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(var t=0,n=this.holes.length;t<n;t++){var r=this.holes[t];e.holes.push(r.toJSON())}return e},fromJSON:function(e){Gt.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(var t=0,n=e.holes.length;t<n;t++){var r=e.holes[t];this.holes.push(new Gt().fromJSON(r))}return this}});function Ue(e,t){t===void 0&&(t=1),he.call(this),this.type="Light",this.color=new de(e),this.intensity=t}Ue.prototype=Object.assign(Object.create(he.prototype),{constructor:Ue,isLight:!0,copy:function(e){return he.prototype.copy.call(this,e),this.color.copy(e.color),this.intensity=e.intensity,this},toJSON:function(e){var t=he.prototype.toJSON.call(this,e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}});function ol(e,t,n){Ue.call(this,e,n),this.type="HemisphereLight",this.position.copy(he.DefaultUp),this.updateMatrix(),this.groundColor=new de(t)}ol.prototype=Object.assign(Object.create(Ue.prototype),{constructor:ol,isHemisphereLight:!0,copy:function(e){return Ue.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}});function sn(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new W(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}Object.assign(sn.prototype,{_projScreenMatrix:new Le,_lightPositionWorld:new S,_lookTarget:new S,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(e){var t=this.camera,n=this.matrix,r=this._projScreenMatrix,i=this._lookTarget,a=this._lightPositionWorld;a.setFromMatrixPosition(e.matrixWorld),t.position.copy(a),i.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(i),t.updateMatrixWorld(),r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)},getViewport:function(e){return this._viewports[e]},getFrameExtents:function(){return this._frameExtents},copy:function(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){var e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}});function xo(){sn.call(this,new Ke(50,1,.5,500)),this.focus=1}xo.prototype=Object.assign(Object.create(sn.prototype),{constructor:xo,isSpotLightShadow:!0,updateMatrices:function(e){var t=this.camera,n=xe.RAD2DEG*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),sn.prototype.updateMatrices.call(this,e)}});function sl(e,t,n,r,i,a){Ue.call(this,e,t),this.type="SpotLight",this.position.copy(he.DefaultUp),this.updateMatrix(),this.target=new he,Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(o){this.intensity=o/Math.PI}}),this.distance=n!==void 0?n:0,this.angle=r!==void 0?r:Math.PI/3,this.penumbra=i!==void 0?i:0,this.decay=a!==void 0?a:1,this.shadow=new xo}sl.prototype=Object.assign(Object.create(Ue.prototype),{constructor:sl,isSpotLight:!0,copy:function(e){return Ue.prototype.copy.call(this,e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function bo(){sn.call(this,new Ke(90,1,.5,500)),this._frameExtents=new W(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}bo.prototype=Object.assign(Object.create(sn.prototype),{constructor:bo,isPointLightShadow:!0,updateMatrices:function(e,t){t===void 0&&(t=0);var n=this.camera,r=this.matrix,i=this._lightPositionWorld,a=this._lookTarget,o=this._projScreenMatrix;i.setFromMatrixPosition(e.matrixWorld),n.position.copy(i),a.copy(n.position),a.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(a),n.updateMatrixWorld(),r.makeTranslation(-i.x,-i.y,-i.z),o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o)}});function ll(e,t,n,r){Ue.call(this,e,t),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(i){this.intensity=i/(4*Math.PI)}}),this.distance=n!==void 0?n:0,this.decay=r!==void 0?r:1,this.shadow=new bo}ll.prototype=Object.assign(Object.create(Ue.prototype),{constructor:ll,isPointLight:!0,copy:function(e){return Ue.prototype.copy.call(this,e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}});function Mo(e,t,n,r,i,a){e===void 0&&(e=-1),t===void 0&&(t=1),n===void 0&&(n=1),r===void 0&&(r=-1),i===void 0&&(i=.1),a===void 0&&(a=2e3),xn.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}Mo.prototype=Object.assign(Object.create(xn.prototype),{constructor:Mo,isOrthographicCamera:!0,copy:function(e,t){return xn.prototype.copy.call(this,e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this},setViewOffset:function(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){var e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){var l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,a=i+l*this.view.width,o-=u*this.view.offsetY,s=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(e){var t=he.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}});function wo(){sn.call(this,new Mo(-5,5,5,-5,.5,500))}wo.prototype=Object.assign(Object.create(sn.prototype),{constructor:wo,isDirectionalLightShadow:!0,updateMatrices:function(e){sn.prototype.updateMatrices.call(this,e)}});function ul(e,t){Ue.call(this,e,t),this.type="DirectionalLight",this.position.copy(he.DefaultUp),this.updateMatrix(),this.target=new he,this.shadow=new wo}ul.prototype=Object.assign(Object.create(Ue.prototype),{constructor:ul,isDirectionalLight:!0,copy:function(e){return Ue.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}});function cl(e,t){Ue.call(this,e,t),this.type="AmbientLight"}cl.prototype=Object.assign(Object.create(Ue.prototype),{constructor:cl,isAmbientLight:!0});function hl(e,t,n,r){Ue.call(this,e,t),this.type="RectAreaLight",this.width=n!==void 0?n:10,this.height=r!==void 0?r:10}hl.prototype=Object.assign(Object.create(Ue.prototype),{constructor:hl,isRectAreaLight:!0,copy:function(e){return Ue.prototype.copy.call(this,e),this.width=e.width,this.height=e.height,this},toJSON:function(e){var t=Ue.prototype.toJSON.call(this,e);return t.object.width=this.width,t.object.height=this.height,t}});var Xv=function(){function e(){Object.defineProperty(this,"isSphericalHarmonics3",{value:!0}),this.coefficients=[];for(var t=0;t<9;t++)this.coefficients.push(new S)}return e.prototype.set=function(t){for(var n=0;n<9;n++)this.coefficients[n].copy(t[n]);return this},e.prototype.zero=function(){for(var t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this},e.prototype.getAt=function(t,n){var r=t.x,i=t.y,a=t.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.282095),n.addScaledVector(o[1],.488603*i),n.addScaledVector(o[2],.488603*a),n.addScaledVector(o[3],.488603*r),n.addScaledVector(o[4],1.092548*(r*i)),n.addScaledVector(o[5],1.092548*(i*a)),n.addScaledVector(o[6],.315392*(3*a*a-1)),n.addScaledVector(o[7],1.092548*(r*a)),n.addScaledVector(o[8],.546274*(r*r-i*i)),n},e.prototype.getIrradianceAt=function(t,n){var r=t.x,i=t.y,a=t.z,o=this.coefficients;return n.copy(o[0]).multiplyScalar(.886227),n.addScaledVector(o[1],2*.511664*i),n.addScaledVector(o[2],2*.511664*a),n.addScaledVector(o[3],2*.511664*r),n.addScaledVector(o[4],2*.429043*r*i),n.addScaledVector(o[5],2*.429043*i*a),n.addScaledVector(o[6],.743125*a*a-.247708),n.addScaledVector(o[7],2*.429043*r*a),n.addScaledVector(o[8],.429043*(r*r-i*i)),n},e.prototype.add=function(t){for(var n=0;n<9;n++)this.coefficients[n].add(t.coefficients[n]);return this},e.prototype.addScaledSH=function(t,n){for(var r=0;r<9;r++)this.coefficients[r].addScaledVector(t.coefficients[r],n);return this},e.prototype.scale=function(t){for(var n=0;n<9;n++)this.coefficients[n].multiplyScalar(t);return this},e.prototype.lerp=function(t,n){for(var r=0;r<9;r++)this.coefficients[r].lerp(t.coefficients[r],n);return this},e.prototype.equals=function(t){for(var n=0;n<9;n++)if(!this.coefficients[n].equals(t.coefficients[n]))return!1;return!0},e.prototype.copy=function(t){return this.set(t.coefficients)},e.prototype.clone=function(){return new this.constructor().copy(this)},e.prototype.fromArray=function(t,n){n===void 0&&(n=0);for(var r=this.coefficients,i=0;i<9;i++)r[i].fromArray(t,n+i*3);return this},e.prototype.toArray=function(t,n){t===void 0&&(t=[]),n===void 0&&(n=0);for(var r=this.coefficients,i=0;i<9;i++)r[i].toArray(t,n+i*3);return t},e.getBasisAt=function(t,n){var r=t.x,i=t.y,a=t.z;n[0]=.282095,n[1]=.488603*i,n[2]=.488603*a,n[3]=.488603*r,n[4]=1.092548*r*i,n[5]=1.092548*i*a,n[6]=.315392*(3*a*a-1),n[7]=1.092548*r*a,n[8]=.546274*(r*r-i*i)},e}();function Vt(e,t){Ue.call(this,void 0,t),this.type="LightProbe",this.sh=e!==void 0?e:new Xv}Vt.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Vt,isLightProbe:!0,copy:function(e){return Ue.prototype.copy.call(this,e),this.sh.copy(e.sh),this},fromJSON:function(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this},toJSON:function(e){var t=Ue.prototype.toJSON.call(this,e);return t.object.sh=this.sh.toArray(),t}});function fl(e){Oe.call(this,e),this.textures={}}fl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:fl,load:function(e,t,n,r){var i=this,a=new rn(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(o){try{t(i.parse(JSON.parse(o)))}catch(s){r?r(s):console.error(s),i.manager.itemError(e)}},n,r)},parse:function(e){var t=this.textures;function n(l){return t[l]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",l),t[l]}var r=new Iv[e.type];if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=new de().setHex(e.sheen)),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==1&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(r.skinning=e.skinning),e.morphTargets!==void 0&&(r.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(r.morphNormals=e.morphNormals),e.dithering!==void 0&&(r.dithering=e.dithering),e.vertexTangents!==void 0&&(r.vertexTangents=e.vertexTangents),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(var i in e.uniforms){var a=e.uniforms[i];switch(r.uniforms[i]={},a.type){case"t":r.uniforms[i].value=n(a.value);break;case"c":r.uniforms[i].value=new de().setHex(a.value);break;case"v2":r.uniforms[i].value=new W().fromArray(a.value);break;case"v3":r.uniforms[i].value=new S().fromArray(a.value);break;case"v4":r.uniforms[i].value=new Ie().fromArray(a.value);break;case"m3":r.uniforms[i].value=new wt().fromArray(a.value);break;case"m4":r.uniforms[i].value=new Le().fromArray(a.value);break;default:r.uniforms[i].value=a.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(var o in e.extensions)r.extensions[o]=e.extensions[o];if(e.shading!==void 0&&(r.flatShading=e.shading===1),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){var s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new W().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new W().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(r.transmission=e.transmission),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),r},setTextures:function(e){return this.textures=e,this}});var Yv={decodeText:function(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);for(var t="",n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}},extractUrlBase:function(e){var t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};function ta(){Ge.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}ta.prototype=Object.assign(Object.create(Ge.prototype),{constructor:ta,isInstancedBufferGeometry:!0,copy:function(e){return Ge.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){var e=Ge.prototype.toJSON.call(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}});function So(e,t,n,r){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),we.call(this,e,t,n),this.meshPerAttribute=r||1}So.prototype=Object.assign(Object.create(we.prototype),{constructor:So,isInstancedBufferAttribute:!0,copy:function(e){return we.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},toJSON:function(){var e=we.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}});function dl(e){Oe.call(this,e)}dl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:dl,load:function(e,t,n,r){var i=this,a=new rn(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(o){try{t(i.parse(JSON.parse(o)))}catch(s){r?r(s):console.error(s),i.manager.itemError(e)}},n,r)},parse:function(e){var t={},n={};function r(P,C){if(t[C]!==void 0)return t[C];var N=P.interleavedBuffers,V=N[C],O=i(P,V.buffer),B=bi(V.type,O),L=new St(B,V.stride);return L.uuid=V.uuid,t[C]=L,L}function i(P,C){if(n[C]!==void 0)return n[C];var N=P.arrayBuffers,V=N[C],O=new Uint32Array(V).buffer;return n[C]=O,O}var a=e.isInstancedBufferGeometry?new ta:new Ge,o=e.data.index;if(o!==void 0){var s=bi(o.type,o.array);a.setIndex(new we(s,1))}var l=e.data.attributes;for(var u in l){var c=l[u],h=void 0;if(c.isInterleavedBufferAttribute){var d=r(e.data,c.data);h=new Nn(d,c.itemSize,c.offset,c.normalized)}else{var s=bi(c.type,c.array),f=c.isInstancedBufferAttribute?So:we;h=new f(s,c.itemSize,c.normalized)}c.name!==void 0&&(h.name=c.name),a.setAttribute(u,h)}var v=e.data.morphAttributes;if(v)for(var u in v){for(var g=v[u],_=[],m=0,p=g.length;m<p;m++){var c=g[m],h=void 0;if(c.isInterleavedBufferAttribute){var d=r(e.data,c.data);h=new Nn(d,c.itemSize,c.offset,c.normalized)}else{var s=bi(c.type,c.array);h=new we(s,c.itemSize,c.normalized)}c.name!==void 0&&(h.name=c.name),_.push(h)}a.morphAttributes[u]=_}var E=e.data.morphTargetsRelative;E&&(a.morphTargetsRelative=!0);var A=e.data.groups||e.data.drawcalls||e.data.offsets;if(A!==void 0)for(var m=0,b=A.length;m!==b;++m){var y=A[m];a.addGroup(y.start,y.count,y.materialIndex)}var T=e.data.boundingSphere;if(T!==void 0){var G=new S;T.center!==void 0&&G.fromArray(T.center),a.boundingSphere=new Gn(G,T.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}});function pl(e){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Oe.call(this,e),this.options={premultiplyAlpha:"none"}}pl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:pl,isImageBitmapLoader:!0,setOptions:function(t){return this.options=t,this},load:function(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);var i=this,a=wr.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;var o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",fetch(e,o).then(function(s){return s.blob()}).then(function(s){return createImageBitmap(s,i.options)}).then(function(s){wr.add(e,s),t&&t(s),i.manager.itemEnd(e)}).catch(function(s){r&&r(s),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}});function Ql(){this.type="ShapePath",this.color=new de,this.subPaths=[],this.currentPath=null}Object.assign(Ql.prototype,{moveTo:function(e,t){return this.currentPath=new Gt,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this},lineTo:function(e,t){return this.currentPath.lineTo(e,t),this},quadraticCurveTo:function(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this},bezierCurveTo:function(e,t,n,r,i,a){return this.currentPath.bezierCurveTo(e,t,n,r,i,a),this},splineThru:function(e){return this.currentPath.splineThru(e),this},toShapes:function(e,t){function n(L){for(var D=[],F=0,U=L.length;F<U;F++){var Q=L[F],Y=new fr;Y.curves=Q.curves,D.push(Y)}return D}function r(L,D){for(var F=D.length,U=!1,Q=F-1,Y=0;Y<F;Q=Y++){var Z=D[Q],ne=D[Y],Re=ne.x-Z.x,ge=ne.y-Z.y;if(Math.abs(ge)>Number.EPSILON){if(ge<0&&(Z=D[Y],Re=-Re,ne=D[Q],ge=-ge),L.y<Z.y||L.y>ne.y)continue;if(L.y===Z.y){if(L.x===Z.x)return!0}else{var k=ge*(L.x-Z.x)-Re*(L.y-Z.y);if(k===0)return!0;if(k<0)continue;U=!U}}else{if(L.y!==Z.y)continue;if(ne.x<=L.x&&L.x<=Z.x||Z.x<=L.x&&L.x<=ne.x)return!0}}return U}var i=yn.isClockWise,a=this.subPaths;if(a.length===0)return[];if(t===!0)return n(a);var o,s,l,u=[];if(a.length===1)return s=a[0],l=new fr,l.curves=s.curves,u.push(l),u;var c=!i(a[0].getPoints());c=e?!c:c;var h=[],d=[],f=[],v=0,g;d[v]=void 0,f[v]=[];for(var _=0,m=a.length;_<m;_++)s=a[_],g=s.getPoints(),o=i(g),o=e?!o:o,o?(!c&&d[v]&&v++,d[v]={s:new fr,p:g},d[v].s.curves=s.curves,c&&v++,f[v]=[]):f[v].push({h:s,p:g[0]});if(!d[0])return n(a);if(d.length>1){for(var p=!1,E=[],A=0,b=d.length;A<b;A++)h[A]=[];for(var A=0,b=d.length;A<b;A++)for(var y=f[A],T=0;T<y.length;T++){for(var G=y[T],P=!0,C=0;C<d.length;C++)r(G.p,d[C].p)&&(A!==C&&E.push({froms:A,tos:C,hole:T}),P?(P=!1,h[C].push(G)):p=!0);P&&h[A].push(G)}E.length>0&&(p||(f=h))}for(var N,_=0,V=d.length;_<V;_++){l=d[_].s,u.push(l),N=f[_];for(var O=0,B=N.length;O<B;O++)l.holes.push(N[O].h)}return u}});var Zv=function(){function e(t){Object.defineProperty(this,"isFont",{value:!0}),this.type="Font",this.data=t}return e.prototype.generateShapes=function(t,n){n===void 0&&(n=100);for(var r=[],i=jv(t,n,this.data),a=0,o=i.length;a<o;a++)Array.prototype.push.apply(r,i[a].toShapes());return r},e}();function jv(e,t,n){for(var r=Array.from?Array.from(e):String(e).split(""),i=t/n.resolution,a=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*i,o=[],s=0,l=0,u=0;u<r.length;u++){var c=r[u];if(c===`
`)s=0,l-=a;else{var h=Jv(c,i,s,l,n);s+=h.offsetX,o.push(h.path)}}return o}function Jv(e,t,n,r,i){var a=i.glyphs[e]||i.glyphs["?"];if(!a){console.error('THREE.Font: character "'+e+'" does not exists in font family '+i.familyName+".");return}var o=new Ql,s,l,u,c,h,d,f,v;if(a.o)for(var g=a._cachedOutline||(a._cachedOutline=a.o.split(" ")),_=0,m=g.length;_<m;){var p=g[_++];switch(p){case"m":s=g[_++]*t+n,l=g[_++]*t+r,o.moveTo(s,l);break;case"l":s=g[_++]*t+n,l=g[_++]*t+r,o.lineTo(s,l);break;case"q":u=g[_++]*t+n,c=g[_++]*t+r,h=g[_++]*t+n,d=g[_++]*t+r,o.quadraticCurveTo(h,d,u,c);break;case"b":u=g[_++]*t+n,c=g[_++]*t+r,h=g[_++]*t+n,d=g[_++]*t+r,f=g[_++]*t+n,v=g[_++]*t+r,o.bezierCurveTo(h,d,f,v,u,c);break}}return{offsetX:a.ha*t,path:o}}function vl(e){Oe.call(this,e)}vl.prototype=Object.assign(Object.create(Oe.prototype),{constructor:vl,load:function(e,t,n,r){var i=this,a=new rn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(o){var s;try{s=JSON.parse(o)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),s=JSON.parse(o.substring(65,o.length-2))}var l=i.parse(s);t&&t(l)},n,r)},parse:function(e){return new Zv(e)}});var Vi,Qv={getContext:function(){return Vi===void 0&&(Vi=new(window.AudioContext||window.webkitAudioContext)),Vi},setContext:function(e){Vi=e}};function Eo(e){Oe.call(this,e)}Eo.prototype=Object.assign(Object.create(Oe.prototype),{constructor:Eo,load:function(e,t,n,r){var i=this,a=new rn(i.manager);a.setResponseType("arraybuffer"),a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(o){try{var s=o.slice(0),l=Qv.getContext();l.decodeAudioData(s,function(u){t(u)})}catch(u){r?r(u):console.error(u),i.manager.itemError(e)}},n,r)}});function ml(e,t,n){Vt.call(this,void 0,n);var r=new de().set(e),i=new de().set(t),a=new S(r.r,r.g,r.b),o=new S(i.r,i.g,i.b),s=Math.sqrt(Math.PI),l=s*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l)}ml.prototype=Object.assign(Object.create(Vt.prototype),{constructor:ml,isHemisphereLightProbe:!0,copy:function(e){return Vt.prototype.copy.call(this,e),this},toJSON:function(e){var t=Vt.prototype.toJSON.call(this,e);return t}});function gl(e,t){Vt.call(this,void 0,t);var n=new de().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}gl.prototype=Object.assign(Object.create(Vt.prototype),{constructor:gl,isAmbientLightProbe:!0,copy:function(e){return Vt.prototype.copy.call(this,e),this},toJSON:function(e){var t=Vt.prototype.toJSON.call(this,e);return t}});var yl=new Le,_l=new Le;function $v(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ke,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ke,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign($v.prototype,{update:function(e){var t=this._cache,n=t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep;if(n){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;var r=e.projectionMatrix.clone(),i=t.eyeSep/2,a=i*t.near/t.focus,o=t.near*Math.tan(xe.DEG2RAD*t.fov*.5)/t.zoom,s=void 0,l=void 0;_l.elements[12]=-i,yl.elements[12]=i,s=-o*t.aspect+a,l=o*t.aspect+a,r.elements[0]=2*t.near/(l-s),r.elements[8]=(l+s)/(l-s),this.cameraL.projectionMatrix.copy(r),s=-o*t.aspect-a,l=o*t.aspect-a,r.elements[0]=2*t.near/(l-s),r.elements[8]=(l+s)/(l-s),this.cameraR.projectionMatrix.copy(r)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(_l),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(yl)}});var Kv=function(e){wn(t,e);function t(n){var r=e.call(this)||this;return r.type="Audio",r.listener=n,r.context=n.context,r.gain=r.context.createGain(),r.gain.connect(n.getInput()),r.autoplay=!1,r.buffer=null,r.detune=0,r.loop=!1,r.loopStart=0,r.loopEnd=0,r.offset=0,r.duration=void 0,r.playbackRate=1,r.isPlaying=!1,r.hasPlaybackControl=!0,r.source=null,r.sourceType="empty",r._startedAt=0,r._progress=0,r._connected=!1,r.filters=[],r}return t.prototype.getOutput=function(){return this.gain},t.prototype.setNodeSource=function(n){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=n,this.connect(),this},t.prototype.setMediaElementSource=function(n){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(n),this.connect(),this},t.prototype.setMediaStreamSource=function(n){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(n),this.connect(),this},t.prototype.setBuffer=function(n){return this.buffer=n,this.sourceType="buffer",this.autoplay&&this.play(),this},t.prototype.play=function(n){if(n===void 0&&(n=0),this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+n;var r=this.context.createBufferSource();return r.buffer=this.buffer,r.loop=this.loop,r.loopStart=this.loopStart,r.loopEnd=this.loopEnd,r.onended=this.onEnded.bind(this),r.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=r,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},t.prototype.pause=function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},t.prototype.stop=function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},t.prototype.connect=function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(var n=1,r=this.filters.length;n<r;n++)this.filters[n-1].connect(this.filters[n]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this},t.prototype.disconnect=function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(var n=1,r=this.filters.length;n<r;n++)this.filters[n-1].disconnect(this.filters[n]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this},t.prototype.getFilters=function(){return this.filters},t.prototype.setFilters=function(n){return n||(n=[]),this._connected===!0?(this.disconnect(),this.filters=n.slice(),this.connect()):this.filters=n.slice(),this},t.prototype.setDetune=function(n){if(this.detune=n,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},t.prototype.getDetune=function(){return this.detune},t.prototype.getFilter=function(){return this.getFilters()[0]},t.prototype.setFilter=function(n){return this.setFilters(n?[n]:[])},t.prototype.setPlaybackRate=function(n){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=n,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},t.prototype.getPlaybackRate=function(){return this.playbackRate},t.prototype.onEnded=function(){this.isPlaying=!1},t.prototype.getLoop=function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},t.prototype.setLoop=function(n){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=n,this.isPlaying===!0&&(this.source.loop=this.loop),this},t.prototype.setLoopStart=function(n){return this.loopStart=n,this},t.prototype.setLoopEnd=function(n){return this.loopEnd=n,this},t.prototype.getVolume=function(){return this.gain.gain.value},t.prototype.setVolume=function(n){return this.gain.gain.setTargetAtTime(n,this.context.currentTime,.01),this},t}(he);function $l(e,t,n){this.binding=e,this.valueSize=n;var r,i,a;switch(t){case"quaternion":r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign($l.prototype,{accumulate:function(e,t){var n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(var o=0;o!==r;++o)n[i+o]=n[o];a=t}else{a+=t;var s=t/a;this._mixBufferRegion(n,i,0,s,r)}this.cumulativeWeight=a},accumulateAdditive:function(e){var t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e},apply:function(e){var t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){var s=t*this._origIndex;this._mixBufferRegion(n,r,s,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(var l=t,u=t+t;l!==u;++l)if(n[l]!==n[l+t]){o.setValue(n,r);break}},saveOriginalState:function(){var e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(var i=n,a=r;i!==a;++i)t[i]=t[r+i%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){var e=this.valueSize*3;this.binding.setValue(this.buffer,e)},_setAdditiveIdentityNumeric:function(){for(var e=this._addIndex*this.valueSize,t=e+this.valueSize,n=e;n<t;n++)this.buffer[n]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1},_setAdditiveIdentityOther:function(){for(var e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize,n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]},_select:function(e,t,n,r,i){if(r>=.5)for(var a=0;a!==i;++a)e[t+a]=e[n+a]},_slerp:function(e,t,n,r){_t.slerpFlat(e,t,e,t,e,n,r)},_slerpAdditive:function(e,t,n,r,i){var a=this._workIndex*i;_t.multiplyQuaternionsFlat(e,a,e,t,e,n),_t.slerpFlat(e,t,e,t,e,a,r)},_lerp:function(e,t,n,r,i){for(var a=1-r,o=0;o!==i;++o){var s=t+o;e[s]=e[s]*a+e[n+o]*r}},_lerpAdditive:function(e,t,n,r,i){for(var a=0;a!==i;++a){var o=t+a;e[o]=e[o]+e[n+a]*r}}});var Fo="\\[\\]\\.:\\/",em=new RegExp("["+Fo+"]","g"),Bo="[^"+Fo+"]",tm="[^"+Fo.replace("\\.","")+"]",nm=/((?:WC+[\/:])*)/.source.replace("WC",Bo),rm=/(WCOD+)?/.source.replace("WCOD",tm),im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bo),am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bo),om=new RegExp("^"+nm+rm+im+am+"$"),sm=["material","materials","bones"];function Kl(e,t,n){var r=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}Object.assign(Kl.prototype,{getValue:function(e,t){this.bind();var n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)},setValue:function(e,t){for(var n=this._bindings,r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)},bind:function(){for(var e=this._bindings,t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()},unbind:function(){for(var e=this._bindings,t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}});function ct(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e}Object.assign(ct,{Composite:Kl,create:function(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)},sanitizeNodeName:function(e){return e.replace(/\s/g,"_").replace(em,"")},parseTrackName:function(e){var t=om.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);var n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){var i=n.nodeName.substring(r+1);sm.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n},findNode:function(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){var n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){var r=function(a){for(var o=0;o<a.length;o++){var s=a[o];if(s.name===t||s.uuid===t)return s;var l=r(s.children);if(l)return l}return null},i=r(e.children);if(i)return i}return null}});Object.assign(ct.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(t,n){t[n]=this.node[this.propertyName]},function(t,n){for(var r=this.resolvedProperty,i=0,a=r.length;i!==a;++i)t[n++]=r[i]},function(t,n){t[n]=this.resolvedProperty[this.propertyIndex]},function(t,n){this.resolvedProperty.toArray(t,n)}],SetterByBindingTypeAndVersioning:[[function(t,n){this.targetObject[this.propertyName]=t[n]},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){for(var r=this.resolvedProperty,i=0,a=r.length;i!==a;++i)r[i]=t[n++]},function(t,n){for(var r=this.resolvedProperty,i=0,a=r.length;i!==a;++i)r[i]=t[n++];this.targetObject.needsUpdate=!0},function(t,n){for(var r=this.resolvedProperty,i=0,a=r.length;i!==a;++i)r[i]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty[this.propertyIndex]=t[n]},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(t,n){this.resolvedProperty.fromArray(t,n)},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0},function(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(t,n){this.bind(),this.getValue(t,n)},setValue:function(t,n){this.bind(),this.setValue(t,n)},bind:function(){var e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,i=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){var a=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(var o=0;o<e.length;o++)if(e[o].name===a){a=o;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}var s=e[r];if(s===void 0){var l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}var u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);var c=this.BindingType.Direct;if(i!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=i}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][u]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(ct.prototype,{_getValue_unbound:ct.prototype.getValue,_setValue_unbound:ct.prototype.setValue});function lm(){this.uuid=xe.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;var e={};this._indicesByUUID=e;for(var t=0,n=arguments.length;t!==n;++t)e[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};var r=this;this.stats={objects:{get total(){return r._objects.length},get inUse(){return this.total-r.nCachedObjects_}},get bindingsPerObject(){return r._bindings.length}}}Object.assign(lm.prototype,{isAnimationObjectGroup:!0,add:function(){for(var e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,i=this._bindings,a=i.length,o=void 0,s=e.length,l=this.nCachedObjects_,u=0,c=arguments.length;u!==c;++u){var h=arguments[u],d=h.uuid,f=t[d];if(f===void 0){f=s++,t[d]=f,e.push(h);for(var v=0,g=a;v!==g;++v)i[v].push(new ct(h,n[v],r[v]))}else if(f<l){o=e[f];var _=--l,m=e[_];t[m.uuid]=f,e[f]=m,t[d]=_,e[_]=h;for(var v=0,g=a;v!==g;++v){var p=i[v],E=p[_],A=p[f];p[f]=E,A===void 0&&(A=new ct(h,n[v],r[v])),p[_]=A}}else e[f]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l},remove:function(){for(var e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,i=this.nCachedObjects_,a=0,o=arguments.length;a!==o;++a){var s=arguments[a],l=s.uuid,u=t[l];if(u!==void 0&&u>=i){var c=i++,h=e[c];t[h.uuid]=u,e[u]=h,t[l]=c,e[c]=s;for(var d=0,f=r;d!==f;++d){var v=n[d],g=v[c],_=v[u];v[u]=g,v[c]=_}}}this.nCachedObjects_=i},uncache:function(){for(var e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,i=this.nCachedObjects_,a=e.length,o=0,s=arguments.length;o!==s;++o){var l=arguments[o],u=l.uuid,c=t[u];if(c!==void 0)if(delete t[u],c<i){var h=--i,d=e[h],f=--a,v=e[f];t[d.uuid]=c,e[c]=d,t[v.uuid]=h,e[h]=v,e.pop();for(var g=0,_=r;g!==_;++g){var m=n[g],p=m[h],E=m[f];m[c]=p,m[h]=E,m.pop()}}else{var f=--a,v=e[f];f>0&&(t[v.uuid]=c),e[c]=v,e.pop();for(var g=0,_=r;g!==_;++g){var m=n[g];m[c]=m[f],m.pop()}}}this.nCachedObjects_=i},subscribe_:function(e,t){var n=this._bindingsIndicesByPath,r=n[e],i=this._bindings;if(r!==void 0)return i[r];var a=this._paths,o=this._parsedPaths,s=this._objects,l=s.length,u=this.nCachedObjects_,c=new Array(l);r=i.length,n[e]=r,a.push(e),o.push(t),i.push(c);for(var h=u,d=s.length;h!==d;++h){var f=s[h];c[h]=new ct(f,e,t)}return c},unsubscribe_:function(e){var t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){var r=this._paths,i=this._parsedPaths,a=this._bindings,o=a.length-1,s=a[o],l=e[o];t[l]=n,a[n]=s,a.pop(),i[n]=i[o],i.pop(),r[n]=r[o],r.pop()}}});var um=function(){function e(t,n,r,i){r===void 0&&(r=null),i===void 0&&(i=n.blendMode),this._mixer=t,this._clip=n,this._localRoot=r,this.blendMode=i;for(var a=n.tracks,o=a.length,s=new Array(o),l={endingStart:sr,endingEnd:sr},u=0;u!==o;++u){var c=a[u].createInterpolant(null);s[u]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=s,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Pc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}return e.prototype.play=function(){return this._mixer._activateAction(this),this},e.prototype.stop=function(){return this._mixer._deactivateAction(this),this.reset()},e.prototype.reset=function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},e.prototype.isRunning=function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},e.prototype.isScheduled=function(){return this._mixer._isActiveAction(this)},e.prototype.startAt=function(t){return this._startTime=t,this},e.prototype.setLoop=function(t,n){return this.loop=t,this.repetitions=n,this},e.prototype.setEffectiveWeight=function(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()},e.prototype.getEffectiveWeight=function(){return this._effectiveWeight},e.prototype.fadeIn=function(t){return this._scheduleFading(t,0,1)},e.prototype.fadeOut=function(t){return this._scheduleFading(t,1,0)},e.prototype.crossFadeFrom=function(t,n,r){if(t.fadeOut(n),this.fadeIn(n),r){var i=this._clip.duration,a=t._clip.duration,o=a/i,s=i/a;t.warp(1,o,n),this.warp(s,1,n)}return this},e.prototype.crossFadeTo=function(t,n,r){return t.crossFadeFrom(this,n,r)},e.prototype.stopFading=function(){var t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},e.prototype.setEffectiveTimeScale=function(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()},e.prototype.getEffectiveTimeScale=function(){return this._effectiveTimeScale},e.prototype.setDuration=function(t){return this.timeScale=this._clip.duration/t,this.stopWarping()},e.prototype.syncWith=function(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()},e.prototype.halt=function(t){return this.warp(this._effectiveTimeScale,0,t)},e.prototype.warp=function(t,n,r){var i=this._mixer,a=i.time,o=this.timeScale,s=this._timeScaleInterpolant;s===null&&(s=i._lendControlInterpolant(),this._timeScaleInterpolant=s);var l=s.parameterPositions,u=s.sampleValues;return l[0]=a,l[1]=a+r,u[0]=t/o,u[1]=n/o,this},e.prototype.stopWarping=function(){var t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this},e.prototype.getMixer=function(){return this._mixer},e.prototype.getClip=function(){return this._clip},e.prototype.getRoot=function(){return this._localRoot||this._mixer._root},e.prototype._update=function(t,n,r,i){if(!this.enabled){this._updateWeight(t);return}var a=this._startTime;if(a!==null){var o=(t-a)*r;if(o<0||r===0)return;this._startTime=null,n=r*o}n*=this._updateTimeScale(t);var s=this._updateTime(n),l=this._updateWeight(t);if(l>0){var u=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Pl:for(var h=0,d=u.length;h!==d;++h)u[h].evaluate(s),c[h].accumulateAdditive(l);break;case Do:default:for(var h=0,d=u.length;h!==d;++h)u[h].evaluate(s),c[h].accumulate(i,l)}}},e.prototype._updateWeight=function(t){var n=0;if(this.enabled){n=this.weight;var r=this._weightInterpolant;if(r!==null){var i=r.evaluate(t)[0];n*=i,t>r.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=n,n},e.prototype._updateTimeScale=function(t){var n=0;if(!this.paused){n=this.timeScale;var r=this._timeScaleInterpolant;if(r!==null){var i=r.evaluate(t)[0];n*=i,t>r.parameterPositions[1]&&(this.stopWarping(),n===0?this.paused=!0:this.timeScale=n)}}return this._effectiveTimeScale=n,n},e.prototype._updateTime=function(t){var n=this._clip.duration,r=this.loop,i=this.time+t,a=this._loopCount,o=r===Dc;if(t===0)return a===-1?i:o&&(a&1)===1?n-i:i;if(r===Cc){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=n)i=n;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(a===-1&&(t>=0?(a=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=n||i<0){var s=Math.floor(i/n);i-=n*s,a+=Math.abs(s);var l=this.repetitions-a;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?n:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){var u=t<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=a,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:s})}}else this.time=i;if(o&&(a&1)===1)return n-i}return i},e.prototype._setEndings=function(t,n,r){var i=this._interpolantSettings;r?(i.endingStart=lr,i.endingEnd=lr):(t?i.endingStart=this.zeroSlopeAtStart?lr:sr:i.endingStart=Zi,n?i.endingEnd=this.zeroSlopeAtEnd?lr:sr:i.endingEnd=Zi)},e.prototype._scheduleFading=function(t,n,r){var i=this._mixer,a=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);var s=o.parameterPositions,l=o.sampleValues;return s[0]=a,l[0]=n,s[1]=a+t,l[1]=r,this},e}();function xl(e){this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}xl.prototype=Object.assign(Object.create(Sn.prototype),{constructor:xl,_bindAction:function(e,t){var n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,l=this._bindingsByRootAndName,u=l[s];u===void 0&&(u={},l[s]=u);for(var c=0;c!==i;++c){var h=r[c],d=h.name,f=u[d];if(f!==void 0)a[c]=f;else{if(f=a[c],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,s,d));continue}var v=t&&t._propertyBindings[c].binding.parsedPath;f=new $l(ct.create(n,d,v),h.ValueTypeName,h.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,s,d),a[c]=f}o[c].resultBuffer=f.buffer}},_activateAction:function(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){var t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}for(var i=e._propertyBindings,a=0,o=i.length;a!==o;++a){var s=i[a];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}},_deactivateAction:function(e){if(this._isActiveAction(e)){for(var t=e._propertyBindings,n=0,r=t.length;n!==r;++n){var i=t[n];--i.useCount===0&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(e)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;var e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}},_isActiveAction:function(e){var t=e._cacheIndex;return t!==null&&t<this._nActiveActions},_addInactiveAction:function(e,t,n){var r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{var o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e},_removeInactiveAction:function(e){var t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;var i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,l=s[s.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,s[u]=l,s.pop(),e._byClipCacheIndex=null;var c=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete c[h],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)},_removeInactiveBindingsForAction:function(e){for(var t=e._propertyBindings,n=0,r=t.length;n!==r;++n){var i=t[n];--i.referenceCount===0&&this._removeInactiveBinding(i)}},_lendAction:function(e){var t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i},_takeBackAction:function(e){var t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i},_addInactiveBinding:function(e,t,n){var r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)},_removeInactiveBinding:function(e){var t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],l=e._cacheIndex;s._cacheIndex=l,t[l]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]},_lendBinding:function(e){var t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i},_takeBackBinding:function(e){var t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i},_lendControlInterpolant:function(){var e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new $i(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n},_takeBackControlInterpolant:function(e){var t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(e,t,n){var r=t||this._root,i=r.uuid,a=typeof e=="string"?Nt.findByName(r,e):e,o=a!==null?a.uuid:e,s=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Do),s!==void 0){var u=s.actionByRoot[i];if(u!==void 0&&u.blendMode===n)return u;l=s.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;var c=new um(this,a,t,n);return this._bindAction(c,l),this._addInactiveAction(c,o,i),c},existingAction:function(e,t){var n=t||this._root,r=n.uuid,i=typeof e=="string"?Nt.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null},stopAllAction:function(){for(var e=this._actions,t=this._nActiveActions,n=t-1;n>=0;--n)e[n].stop();return this},update:function(e){e*=this.timeScale;for(var t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1,o=0;o!==n;++o){var s=t[o];s._update(r,e,i,a)}for(var l=this._bindings,u=this._nActiveBindings,o=0;o!==u;++o)l[o].apply(a);return this},setTime:function(e){this.time=0;for(var t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)},getRoot:function(){return this._root},uncacheClip:function(e){var t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){for(var a=i.knownActions,o=0,s=a.length;o!==s;++o){var l=a[o];this._deactivateAction(l);var u=l._cacheIndex,c=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,c._cacheIndex=u,t[u]=c,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[n]}},uncacheRoot:function(e){var t=e.uuid,n=this._actionsByClip;for(var r in n){var i=n[r].actionByRoot,a=i[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}var o=this._bindingsByRootAndName,s=o[t];if(s!==void 0)for(var l in s){var u=s[l];u.restoreOriginalState(),this._removeInactiveBinding(u)}},uncacheAction:function(e,t){var n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}});var cm=function(){function e(t){typeof t=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),t=arguments[1]),this.value=t}return e.prototype.clone=function(){return new e(this.value.clone===void 0?this.value:this.value.clone())},e}();function bl(e,t,n){St.call(this,e,t),this.meshPerAttribute=n||1}bl.prototype=Object.assign(Object.create(St.prototype),{constructor:bl,isInstancedInterleavedBuffer:!0,copy:function(e){return St.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},clone:function(e){var t=St.prototype.clone.call(this,e);return t.meshPerAttribute=this.meshPerAttribute,t},toJSON:function(e){var t=St.prototype.toJSON.call(this,e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}});function eu(e,t,n,r,i){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=i,this.version=0}Object.defineProperty(eu.prototype,"needsUpdate",{set:function(e){e===!0&&this.version++}});Object.assign(eu.prototype,{isGLBufferAttribute:!0,setBuffer:function(e){return this.buffer=e,this},setType:function(e,t){return this.type=e,this.elementSize=t,this},setItemSize:function(e){return this.itemSize=e,this},setCount:function(e){return this.count=e,this}});function tu(e,t,n,r){this.ray=new ci(e,t),this.near=n||0,this.far=r||1/0,this.camera=null,this.layers=new Il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Ml(e,t){return e.distance-t.distance}function To(e,t,n,r){if(e.layers.test(t.layers)&&e.raycast(t,n),r===!0)for(var i=e.children,a=0,o=i.length;a<o;a++)To(i[a],t,n,!0)}Object.assign(tu.prototype,{set:function(e,t){this.ray.set(e,t)},setFromCamera:function(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)},intersectObject:function(e,t,n){var r=n||[];return To(e,this,r,t),r.sort(Ml),r},intersectObjects:function(e,t,n){var r=n||[];if(Array.isArray(e)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),r;for(var i=0,a=e.length;i<a;i++)To(e[i],this,r,t);return r.sort(Ml),r}});var wl=new W,hm=function(){function e(t,n){Object.defineProperty(this,"isBox2",{value:!0}),this.min=t!==void 0?t:new W(1/0,1/0),this.max=n!==void 0?n:new W(-1/0,-1/0)}return e.prototype.set=function(t,n){return this.min.copy(t),this.max.copy(n),this},e.prototype.setFromPoints=function(t){this.makeEmpty();for(var n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this},e.prototype.setFromCenterAndSize=function(t,n){var r=wl.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this},e.prototype.clone=function(){return new this.constructor().copy(this)},e.prototype.copy=function(t){return this.min.copy(t.min),this.max.copy(t.max),this},e.prototype.makeEmpty=function(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this},e.prototype.isEmpty=function(){return this.max.x<this.min.x||this.max.y<this.min.y},e.prototype.getCenter=function(t){return t===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),t=new W),this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)},e.prototype.getSize=function(t){return t===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),t=new W),this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)},e.prototype.expandByPoint=function(t){return this.min.min(t),this.max.max(t),this},e.prototype.expandByVector=function(t){return this.min.sub(t),this.max.add(t),this},e.prototype.expandByScalar=function(t){return this.min.addScalar(-t),this.max.addScalar(t),this},e.prototype.containsPoint=function(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)},e.prototype.containsBox=function(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y},e.prototype.getParameter=function(t,n){return n===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),n=new W),n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))},e.prototype.intersectsBox=function(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)},e.prototype.clampPoint=function(t,n){return n===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),n=new W),n.copy(t).clamp(this.min,this.max)},e.prototype.distanceToPoint=function(t){var n=wl.copy(t).clamp(this.min,this.max);return n.sub(t).length()},e.prototype.intersect=function(t){return this.min.max(t.min),this.max.min(t.max),this},e.prototype.union=function(t){return this.min.min(t.min),this.max.max(t.max),this},e.prototype.translate=function(t){return this.min.add(t),this.max.add(t),this},e.prototype.equals=function(t){return t.min.equals(this.min)&&t.max.equals(this.max)},e}();function na(e){he.call(this),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}na.prototype=Object.create(he.prototype);na.prototype.constructor=na;na.prototype.isImmediateRenderObject=!0;var fm=new _n({side:Qe,depthWrite:!1,depthTest:!1});new et(new Oo,fm);se.create=function(e,t){return console.log("THREE.Curve.create() has been deprecated"),e.prototype=Object.create(se.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e};Object.assign(Gt.prototype,{fromPoints:function(e){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(e)}});function nu(e){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),Bt.call(this,e),this.type="catmullrom"}nu.prototype=Object.create(Bt.prototype);Object.assign(nu.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});Object.assign(Oe.prototype,{extractUrlBase:function(e){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Yv.extractUrlBase(e)}});Oe.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(hm.prototype,{center:function(e){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},size:function(e){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(Hn.prototype,{center:function(e){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(e)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(e){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionSphere:function(e){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)},size:function(e){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(e)}});Object.assign(Gn.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});ua.prototype.setFromMatrix=function(e){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(e)};Object.assign(xe,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(e){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),xe.floorPowerOfTwo(e)},nextPowerOfTwo:function(e){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),xe.ceilPowerOfTwo(e)}});Object.assign(wt.prototype,{flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},multiplyVector3:function(e){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),e.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},getInverse:function(e){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(e).invert()}});Object.assign(Le.prototype,{extractPosition:function(e){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(e)},flattenToArrayOffset:function(e,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(e,t)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(e){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(e)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(e){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector4:function(e){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(e){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),e.transformDirection(this)},crossVector:function(e){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(e){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),e.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(e,t,n,r,i,a){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(e,t,r,n,i,a)},getInverse:function(e){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(e).invert()}});en.prototype.isIntersectionLine=function(e){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(e)};Object.assign(_t.prototype,{multiplyVector3:function(e){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),e.applyQuaternion(this)},inverse:function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()}});Object.assign(ci.prototype,{isIntersectionBox:function(e){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(e)},isIntersectionPlane:function(e){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(e)},isIntersectionSphere:function(e){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(e)}});Object.assign(tn.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(e,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(e,t)},midpoint:function(e){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(e)},normal:function(e){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(e)},plane:function(e){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(e)}});Object.assign(tn,{barycoordFromPoint:function(e,t,n,r,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),tn.getBarycoord(e,t,n,r,i)},normal:function(e,t,n,r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),tn.getNormal(e,t,n,r)}});Object.assign(fr.prototype,{extractAllPoints:function(e){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(e)},extrude:function(e){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Jl(this,e)},makeGeometry:function(e){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Pv(this,e)}});Object.assign(W.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(S.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(e){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(e)},getScaleFromMatrix:function(e){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(e)},getColumnFromMatrix:function(e,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,e)},applyProjection:function(e){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(e)},fromAttribute:function(e,t,n){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},distanceToManhattan:function(e){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(e)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ie.prototype,{fromAttribute:function(e,t,n){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(e,t,n)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(he.prototype,{getChildByName:function(e){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(e)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(e,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,e)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(e){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(he.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(e){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=e}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(et.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(et.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Ic},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(ro.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(oo.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});io.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(se.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(e){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=e}});Ke.prototype.setLens=function(e,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)};Object.defineProperties(Ue.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(e){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(e){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(e){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=e}}});Object.defineProperties(we.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Jr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Jr)}}});Object.assign(we.prototype,{setDynamic:function(e){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?Jr:la),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Ge.prototype,{addIndex:function(e){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(e)},addAttribute:function(e,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(e,new we(arguments[1],arguments[2]))):e==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(e,t)},addDrawCall:function(e,t,n){n!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(e,t)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(e){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(e)},applyMatrix:function(e){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(e)}});Object.defineProperties(Ge.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(ta.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(e){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=e}}});Object.defineProperties(tu.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(e){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=e}}});Object.defineProperties(St.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===Jr},set:function(e){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(e)}}});Object.assign(St.prototype,{setDynamic:function(e){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(e===!0?Jr:la),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(Jl.prototype,{getArrays:function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")}});Object.assign(uv.prototype,{dispose:function(){console.error("THREE.Scene: .dispose() has been removed.")}});Object.defineProperties(cm.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(pe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new de}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=e===Al}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(e){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=e}}});Object.defineProperties(Un.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(zn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(e){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=e}}});Object.defineProperties(pt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(e){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=e}}});Object.assign(ca.prototype,{clearTarget:function(e,t,n,r){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(e),this.clear(t,n,r)},animate:function(e){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(e)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(e){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(e)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(ca.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(e){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=e===!0?Dl:ui}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Wl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(qr.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(e){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(e){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(e){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=e}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(e){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=e}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(e){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=e}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(e){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=e}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(e){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(e){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=e}}});Object.defineProperties(Kv.prototype,{load:{value:function(e){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var t=this,n=new Eo;return n.load(e,function(r){t.setBuffer(r)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});pr.prototype.updateCubeMap=function(e,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(e,t)};pr.prototype.clear=function(e,t,n,r){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(e,t,n,r)};Er.crossOrigin=void 0;Er.loadTexture=function(e,t,n,r){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var i=new _o;i.setCrossOrigin(this.crossOrigin);var a=i.load(e,n,void 0,r);return t&&(a.mapping=t),a};Er.loadTextureCube=function(e,t,n,r){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var i=new yo;i.setCrossOrigin(this.crossOrigin);var a=i.load(e,n,void 0,r);return t&&(a.mapping=t),a};Er.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Er.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);var Am=function(e){return e!=null},dm=function(e){return function(t){return e(t)}},Lm=function(e){return function(t){var n=t.dataType;return e&&n===qa.STRING||n!==qa.STRING}},Rm=function(e){return e.dataType===qa.NUMBER},Cm=function(e){return typeof e=="number"},Pm=function(e){return"start"in e&&"end"in e};function pm(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function vm(e){var t=e,n=e;e.length===1&&(t=function(o,s){return e(o)-s},n=mm(e));function r(o,s,l,u){for(l==null&&(l=0),u==null&&(u=o.length);l<u;){var c=l+u>>>1;n(o[c],s)<0?l=c+1:u=c}return l}function i(o,s,l,u){for(l==null&&(l=0),u==null&&(u=o.length);l<u;){var c=l+u>>>1;n(o[c],s)>0?u=c:l=c+1}return l}function a(o,s,l,u){l==null&&(l=0),u==null&&(u=o.length);var c=r(o,s,l,u-1);return c>l&&t(o[c-1],s)>-t(o[c],s)?c-1:c}return{left:r,center:a,right:i}}function mm(e){return function(t,n){return pm(e(t),n)}}var Dm=function(e,t){if(t===void 0&&(t=4),Number.isNaN(e)||e===1/0||e===-1/0)return e;if(Math.abs(e)<1)return Number(e.toPrecision(t));var n=Math.trunc(e),r=e-n;return Number((n+Number(r.toFixed(t))).toFixed(t))},ra=function(e){return/^(\+|-)?(Infinity|\d+)(\.\d+)?e?((\+|-)?\d+)?$/.test(String(e))},gm=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},ym=function(e){return e.filter(function(t){return ra(t.value)})},Im=function(e){var t=e&&Array.isArray(e.y)&&e.y;if(!t)return e;var n=t.filter(function(i){return ra(i.value)});if(n.length<1){var r=gm(e,["y"]);return r}return Object.assign(Object.assign({},e),{y:n})},_m=function(e,t){var n,r=(n=e[0])===null||n===void 0?void 0:n.severity,i=t.severity,a=[t];return e.length===0?a:r==null&&i==null||r===i?(e.push(t),e):r==null?a:i==null||r<i?e:a},xm=function(e){return e.reduce(_m,[])},bm=function(e){var t=99999,n=-9999,r=.001,i=5,a=4;return e>t||e<n||e<r&&e>0||e>-r&&e<0?e.toExponential(i-a).toString():e.toString().length>i?e.toString().substr(0,i):e.toString()},ru=function(e){var t=e.value,n=e.resolution,r=e.viewport,i=e.formatText;return typeof t=="number"?i?bm(t):t.toString():typeof t=="string"?t:typeof t=="boolean"?String(t):iu(t,n,r)},Om=function(e){return e.color},Nm=function(e){var t=e.annotation,n=e.resolution,r=e.viewport,i=t.showValue?ru({value:t.value,resolution:n,viewport:r,formatText:!1}):null,a=t.label&&t.label.show?t.label.text:null;return a&&i?a+" ("+i+")":!i&&a?a:!a&&i?"("+i+")":""},Fm=function(e){var t=e.label&&e.label.show?e.label.text:null;return t?""+t:""},Bm=function(e){return e.label&&e.label.show?"inline":"none"},zm=function(e){return e.showValue?"inline":"none"},Um=function(e){var t=e.showValue,n=e.label&&e.label.show;return t||n?"inline":"none"},Hm=function(e){var t=e.annotation,n=e.resolution,r=e.viewport,i=e.formatText,a,o=t.showValue?ru({value:t.value,resolution:n,viewport:r,formatText:i}):null,s="comparisonOperator"in t?((a=au[t.comparisonOperator])!==null&&a!==void 0?a:"")+" ":"";return o?""+s+o:""},Ut=function(e,t){var n=ra(e)?Number(e):e,r=ra(t.value)?Number(t.value):t.value,i=t.comparisonOperator;if(typeof n=="number"&&typeof r=="number")switch(i){case lt.GREATER_THAN:return n>r;case lt.GREATER_THAN_EQUAL:return n>=r;case lt.LESS_THAN:return n<r;case lt.LESS_THAN_EQUAL:return n<=r;case lt.EQUAL:return n===r;default:throw new Error("Unsupported number threshold comparison operator: "+i)}if(typeof n=="string"&&typeof r=="string"){if(i===lt.EQUAL)return n===r;if(i===lt.CONTAINS)return n.includes(r);throw new Error("Unsupported string threshold comparison operator: "+i)}if(typeof n=="string"&&Array.isArray(r)){if(i===lt.EQUAL||i===lt.CONTAINS)return r.some(function(a){return n.includes(a)});throw new Error("Unsupported string array threshold comparison operator: "+i)}if(typeof n=="boolean"&&typeof r=="boolean"){if(i===lt.EQUAL)return n===r;throw new Error("Unsupported boolean threshold comparison operator: "+i)}return!1},Mm=vm(function(e){return e.value}).left,Sl=(An={},An[lt.LESS_THAN_EQUAL]=1,An[lt.LESS_THAN]=2,An[lt.GREATER_THAN_EQUAL]=3,An[lt.GREATER_THAN]=4,An[lt.EQUAL]=5,An),wm=function(e){return lu(e).sort(function(t,n){return t.value===n.value?Sl[t.comparisonOperator]-Sl[n.comparisonOperator]:t.value-n.value})},Gm=function(e,t){if(t.length!==0){if(typeof e=="string"||typeof e=="boolean")return t.find(function(u){return Ut(e,u)})||void 0;var n=t.filter(function(u){return Ut(e,u)}),r=xm(n),i=ym(r),a=wm(i),o=Mm(a,e),s=a[o-1],l=a[o];if(o===i.length&&i.length>1&&a[o-1].value===a[o-2].value&&(s=a[o-2],l=a[o-1]),o===0&&i.length>1&&a[o].value===a[o+1].value&&(s=a[o],l=a[o+1]),!(s==null&&l==null)){if(s!=null&&l==null)return Ut(e,s)?s:void 0;if(s==null&&l!=null)return Ut(e,l)?l:void 0;if(Ut(e,s)&&Ut(e,l))return e>=0?l:s;if(Ut(e,s)&&!Ut(e,l))return s;if(!Ut(e,s)&&Ut(e,l))return l}}},Vm=dm(function(e){return e.comparisonOperator!=null});export{we as B,aa as D,ta as I,Mo as O,Js as P,ai as R,uv as S,ca as W,pm as a,vm as b,Lm as c,Am as d,Rm as e,ra as f,Vm as g,Im as h,Pm as i,Cm as j,Om as k,Nm as l,Um as m,zm as n,Hm as o,Bm as p,Fm as q,ym as r,dm as s,Gs as t,So as u,Ge as v,pt as w,wm as x,Gm as y,Dm as z};
