'use strict';const a18_0x187961=a18_0x15bb;(function(_0x334de3,_0x54db7e){const _0x13fb81=a18_0x15bb,_0x409ee5=_0x334de3();while(!![]){try{const _0xf86b4=parseInt(_0x13fb81(0xac))/0x1+parseInt(_0x13fb81(0xa2))/0x2+-parseInt(_0x13fb81(0xe9))/0x3*(-parseInt(_0x13fb81(0xcc))/0x4)+parseInt(_0x13fb81(0x99))/0x5*(-parseInt(_0x13fb81(0xdc))/0x6)+parseInt(_0x13fb81(0xc1))/0x7+-parseInt(_0x13fb81(0x9a))/0x8*(parseInt(_0x13fb81(0xe3))/0x9)+-parseInt(_0x13fb81(0xd6))/0xa*(parseInt(_0x13fb81(0xf5))/0xb);if(_0xf86b4===_0x54db7e)break;else _0x409ee5['push'](_0x409ee5['shift']());}catch(_0x2285bf){_0x409ee5['push'](_0x409ee5['shift']());}}}(a18_0x52ba,0xf2f74));function a18_0x15bb(_0x59e8ca,_0x3d7777){const _0x52bae0=a18_0x52ba();return a18_0x15bb=function(_0x15bb53,_0x57a29a){_0x15bb53=_0x15bb53-0x97;let _0x1fd13d=_0x52bae0[_0x15bb53];return _0x1fd13d;},a18_0x15bb(_0x59e8ca,_0x3d7777);}var __awaiter=this&&this[a18_0x187961(0xdf)]||function(_0x52d40f,_0x4c2954,_0x18ed0a,_0x506090){function _0x1fcfd6(_0xdc993b){return _0xdc993b instanceof _0x18ed0a?_0xdc993b:new _0x18ed0a(function(_0x335337){_0x335337(_0xdc993b);});}return new(_0x18ed0a||(_0x18ed0a=Promise))(function(_0x56a0d5,_0xbf7603){const _0x438a7a=a18_0x15bb;function _0x395246(_0x5870b2){const _0x1207a8=a18_0x15bb;try{_0x31a7a3(_0x506090[_0x1207a8(0xc7)](_0x5870b2));}catch(_0x44f986){_0xbf7603(_0x44f986);}}function _0x9ef2ee(_0x3a3f28){const _0x522518=a18_0x15bb;try{_0x31a7a3(_0x506090[_0x522518(0x9d)](_0x3a3f28));}catch(_0x225e6c){_0xbf7603(_0x225e6c);}}function _0x31a7a3(_0x1e647e){const _0x5d7923=a18_0x15bb;_0x1e647e[_0x5d7923(0xc0)]?_0x56a0d5(_0x1e647e[_0x5d7923(0xc8)]):_0x1fcfd6(_0x1e647e[_0x5d7923(0xc8)])[_0x5d7923(0xcb)](_0x395246,_0x9ef2ee);}_0x31a7a3((_0x506090=_0x506090[_0x438a7a(0xb5)](_0x52d40f,_0x4c2954||[]))[_0x438a7a(0xc7)]());});},__importDefault=this&&this['__importDefault']||function(_0x40405a){const _0x30a12f=a18_0x187961;return _0x40405a&&_0x40405a[_0x30a12f(0xef)]?_0x40405a:{'default':_0x40405a};};Object[a18_0x187961(0xd4)](exports,a18_0x187961(0xef),{'value':!![]}),exports[a18_0x187961(0xa9)]=void 0x0;const Wrapper_1=__importDefault(require(a18_0x187961(0xc4))),CamDigiKeyError_1=__importDefault(require('./error/CamDigiKeyError')),InvalidAccessTokenTypeError_1=__importDefault(require(a18_0x187961(0xd1))),DigestHelper_1=__importDefault(require('./crypto/DigestHelper')),CamDigiKeyMemoryCache_1=__importDefault(require(a18_0x187961(0xcf))),InvalidTokenSignatureError_1=__importDefault(require(a18_0x187961(0xde))),fs_1=__importDefault(require('fs')),request_1=__importDefault(require(a18_0x187961(0xb0))),crypto_1=__importDefault(require('crypto')),node_forge_1=__importDefault(require(a18_0x187961(0xf3))),api_1=require(a18_0x187961(0xad));class CamDigiKeyClient{static[a18_0x187961(0xd7)](){const _0x222149=a18_0x187961,_0x2b5f32=fs_1[_0x222149(0xbf)][_0x222149(0xc2)](String(process[_0x222149(0xbc)][_0x222149(0xe6)]),_0x222149(0xe8)),_0x4f6842=node_forge_1[_0x222149(0xbf)][_0x222149(0xa6)]['fromDer'](_0x2b5f32),_0x518128=node_forge_1[_0x222149(0xbf)][_0x222149(0xae)][_0x222149(0xb7)](_0x4f6842,String(process[_0x222149(0xbc)][_0x222149(0xcd)])),_0x4cd469=_0x518128['getBags']({'bagType':node_forge_1[_0x222149(0xbf)][_0x222149(0xab)][_0x222149(0xa3)][_0x222149(0xb6)]}),_0x458f30=_0x4cd469[node_forge_1[_0x222149(0xbf)]['pki'][_0x222149(0xa3)][_0x222149(0xb6)]][0x0],_0x37eae7={'type':_0x222149(0xdd),'body':node_forge_1[_0x222149(0xbf)][_0x222149(0xa6)][_0x222149(0xed)](_0x458f30['asn1'])[_0x222149(0xc6)]()},_0xdc5549=node_forge_1[_0x222149(0xbf)][_0x222149(0xe7)]['encode'](_0x37eae7);this['_trustedRootCert']=new crypto_1['default'][(_0x222149(0xe2))](_0xdc5549),this['_cacheService']=new CamDigiKeyMemoryCache_1[(_0x222149(0xbf))](this[_0x222149(0x98)]);}static['requestToServer'](_0x1b9157,_0x589daf){return __awaiter(this,void 0x0,void 0x0,function*(){const _0x19e913=a18_0x15bb;try{const _0x2b4a68=String(process[_0x19e913(0xbc)][_0x19e913(0xb3)])+_0x589daf,_0x414346=Wrapper_1[_0x19e913(0xbf)][_0x19e913(0xba)](_0x1b9157),_0x4e139b={'url':_0x2b4a68,'headers':{'Content-Type':_0x19e913(0xa4)},'json':_0x414346};return process[_0x19e913(0xbc)][_0x19e913(0xb1)]&&(_0x4e139b['agentOptions']={'pfx':fs_1['default'][_0x19e913(0xc2)](String(process[_0x19e913(0xbc)]['CAMDIGIKEY_CLIENT_KEYSTORE_FILE'])),'passphrase':String(process[_0x19e913(0xbc)][_0x19e913(0xe4)])}),yield new Promise(_0x47c248=>{const _0x2395eb=_0x19e913;request_1[_0x2395eb(0xbf)][_0x2395eb(0xe0)](_0x4e139b,(_0x17286f,_0x17d642,_0x205b85)=>{const _0x51f4f3=_0x2395eb;if(!_0x17286f){if(_0x17d642[_0x51f4f3(0xca)]>=0xc8&&_0x17d642['statusCode']<0x12c){if(_0x205b85!=null)try{const _0x536843=Wrapper_1[_0x51f4f3(0xbf)][_0x51f4f3(0xd0)](_0x205b85);return _0x47c248(_0x536843);}catch(_0x55c002){throw _0x55c002;}else return _0x47c248({});}throw new CamDigiKeyError_1[(_0x51f4f3(0xbf))](_0x51f4f3(0xbe));}else throw new CamDigiKeyError_1[(_0x51f4f3(0xbf))](_0x17286f['message']);});});}catch(_0x387af1){throw new CamDigiKeyError_1[(_0x19e913(0xbf))](_0x387af1[_0x19e913(0xc3)]);}});}static[a18_0x187961(0xe1)](_0xa392b4){var _0x333957;return __awaiter(this,void 0x0,void 0x0,function*(){const _0x17e879=a18_0x15bb;!this[_0x17e879(0xf1)]&&CamDigiKeyClient[_0x17e879(0xd7)]();if(typeof _0xa392b4!==_0x17e879(0xee))throw new InvalidAccessTokenTypeError_1[(_0x17e879(0xbf))](_0x17e879(0xa8));_0xa392b4[_0x17e879(0xaf)]('%')&&(_0xa392b4=decodeURIComponent(_0xa392b4));try{const _0xf6330a=_0xa392b4[_0x17e879(0xd5)]('.');if(_0xf6330a[_0x17e879(0xda)]!==0x3)throw new InvalidAccessTokenTypeError_1[(_0x17e879(0xbf))](_0x17e879(0xd9));const _0x11b36d=_0xf6330a[0x0]+'.'+_0xf6330a[0x1],_0x4d956f=DigestHelper_1['default'][_0x17e879(0xa0)](Buffer['from'](_0x11b36d)),_0x428856=yield(_0x333957=this[_0x17e879(0xf1)])===null||_0x333957===void 0x0?void 0x0:_0x333957[_0x17e879(0xea)](),_0x34f30b=Buffer['from'](_0xf6330a[0x2],'base64'),_0x1e1fee=_0x428856===null||_0x428856===void 0x0?void 0x0:_0x428856[_0x17e879(0xc5)],_0x31ce9d=_0x1e1fee[_0x17e879(0xf4)]({'type':_0x17e879(0x9b),'format':_0x17e879(0xe7)}),_0x5337f4=crypto_1['default'][_0x17e879(0xbb)]('sha512');_0x5337f4[_0x17e879(0xc9)](_0x4d956f),_0x5337f4[_0x17e879(0xa7)]();const _0x23ba8e=_0x5337f4[_0x17e879(0xa5)](Buffer['from'](_0x31ce9d),_0x34f30b);return _0x23ba8e;}catch(_0x473f2b){return console[_0x17e879(0xeb)](_0x473f2b),![];}});}static[a18_0x187961(0x97)](_0x12474d){return __awaiter(this,void 0x0,void 0x0,function*(){const _0x10ed1f=a18_0x15bb;if(yield this[_0x10ed1f(0xe1)](_0x12474d)){_0x12474d[_0x10ed1f(0xaf)]('%')&&(_0x12474d=decodeURIComponent(_0x12474d));const _0x25d937={'clientId':process[_0x10ed1f(0xbc)]['CAMDIGIKEY_CLIENT_ID'],'accessToken':_0x12474d};try{let _0x14496f=yield this[_0x10ed1f(0xce)](_0x25d937,api_1[_0x10ed1f(0xbd)][_0x10ed1f(0xec)]);if(_0x14496f[_0x10ed1f(0xa1)][_0x10ed1f(0xd3)])return{'is_valid':!![],'payload':_0x14496f};}catch(_0x870e98){}}return{'is_valid':![],'payload':null};});}static['getOrganizationAccessToken'](){return __awaiter(this,void 0x0,void 0x0,function*(){const _0x2f807a=a18_0x15bb,_0x4746a7={'clientId':process['env'][_0x2f807a(0xd2)],'domain':process['env'][_0x2f807a(0xaa)],'requestedDate':Date['now']()};return yield this[_0x2f807a(0xce)](_0x4746a7,api_1[_0x2f807a(0xbd)]['ORG_ACCESS_TOKEN_URL']);});}static[a18_0x187961(0x9e)](){return __awaiter(this,void 0x0,void 0x0,function*(){const _0x3157ba=a18_0x15bb,_0x105453={'clientId':process[_0x3157ba(0xbc)][_0x3157ba(0xd2)],'domain':process[_0x3157ba(0xbc)][_0x3157ba(0xaa)],'requestedDate':Date[_0x3157ba(0x9f)]()};return yield this[_0x3157ba(0xce)](_0x105453,api_1[_0x3157ba(0xbd)][_0x3157ba(0xb8)]);});}static[a18_0x187961(0xf0)](_0x582318){return __awaiter(this,void 0x0,void 0x0,function*(){const _0x1bb6a1=a18_0x15bb;if(!(yield this[_0x1bb6a1(0xe1)](_0x582318)))throw new InvalidTokenSignatureError_1[(_0x1bb6a1(0xbf))](_0x1bb6a1(0xd8));_0x582318['includes']('%')&&(_0x582318=decodeURIComponent(_0x582318));const _0x4a55eb={'clientId':process[_0x1bb6a1(0xbc)][_0x1bb6a1(0xd2)],'authToken':_0x582318};return yield this[_0x1bb6a1(0xce)](_0x4a55eb,api_1[_0x1bb6a1(0xbd)][_0x1bb6a1(0xb9)]);});}static['refreshUserAccessToken'](_0x3c1b97){return __awaiter(this,void 0x0,void 0x0,function*(){const _0xb5db95=a18_0x15bb;if(!(yield this[_0xb5db95(0xe1)](_0x3c1b97)))throw new InvalidTokenSignatureError_1['default'](_0xb5db95(0xb4));_0x3c1b97['includes']('%')&&(_0x3c1b97=decodeURIComponent(_0x3c1b97));const _0x332b96={'clientId':process['env']['CAMDIGIKEY_CLIENT_ID'],'accessToken':_0x3c1b97};return yield this[_0xb5db95(0xce)](_0x332b96,api_1[_0xb5db95(0xbd)][_0xb5db95(0x9c)]);});}static[a18_0x187961(0xf2)](_0x4b20cf){return __awaiter(this,void 0x0,void 0x0,function*(){const _0x34f30a=a18_0x15bb;if(!(yield this['validateTokenSignature'](_0x4b20cf)))throw new InvalidTokenSignatureError_1[(_0x34f30a(0xbf))](_0x34f30a(0xb4));_0x4b20cf[_0x34f30a(0xaf)]('%')&&(_0x4b20cf=decodeURIComponent(_0x4b20cf));const _0xa7f5f8={'clientId':process[_0x34f30a(0xbc)][_0x34f30a(0xd2)],'accessToken':_0x4b20cf};return yield this[_0x34f30a(0xce)](_0xa7f5f8,api_1['CAMDIGIKEY_API'][_0x34f30a(0xe5)]);});}static['lookupUserProfile'](_0x5af3e9,_0x5b9ee9){return __awaiter(this,void 0x0,void 0x0,function*(){const _0x1986a1=a18_0x15bb;if(!(yield this[_0x1986a1(0xe1)](_0x5af3e9)))throw new InvalidTokenSignatureError_1[(_0x1986a1(0xbf))](_0x1986a1(0xb2));_0x5af3e9[_0x1986a1(0xaf)]('%')&&(_0x5af3e9=decodeURIComponent(_0x5af3e9));const _0x549e64={'clientId':process[_0x1986a1(0xbc)][_0x1986a1(0xd2)],'domain':process[_0x1986a1(0xbc)][_0x1986a1(0xaa)],'accessToken':_0x5af3e9,'personalCode':_0x5b9ee9};return yield this[_0x1986a1(0xce)](_0x549e64,api_1[_0x1986a1(0xbd)][_0x1986a1(0xdb)]);});}static['verifyAccountToken'](_0x58c077){return __awaiter(this,void 0x0,void 0x0,function*(){const _0x54c5b7=a18_0x15bb;if(!(yield this['validateTokenSignature'](_0x58c077)))throw new InvalidTokenSignatureError_1[(_0x54c5b7(0xbf))](_0x54c5b7(0xb2));_0x58c077[_0x54c5b7(0xaf)]('%')&&(_0x58c077=decodeURIComponent(_0x58c077));const _0x50a259={'clientId':process['env'][_0x54c5b7(0xd2)],'domain':process[_0x54c5b7(0xbc)][_0x54c5b7(0xaa)],'accountToken':_0x58c077};return yield this['requestToServer'](_0x50a259,api_1['CAMDIGIKEY_API']['VERIFY_USER_PROFILE']);});}}exports[a18_0x187961(0xa9)]=CamDigiKeyClient;function a18_0x52ba(){const _0x3844ed=['logoutAccessToken','node-forge','export','11SsabXP','validateJwt','_trustedRootCert','13155wSrvTc','320uSfTeE','spki','ACCESS_TOKEN_REFRESH_URL','throw','getLoginToken','now','digest','data','700034xNYuUd','oids','application/json','verify','asn1','end','invalid.token.type','CamDigiKeyClient','CAMDIGIKEY_CLIENT_DOMAIN','pki','1257733LiuGJN','./api','pkcs12','includes','request','CAMDIGIKEY_CLIENT_KEYSTORE_FILE','Invalid\x20access\x20token\x20signature','CAMDIGIKEY_SERVER_BASED_URL','Invalid\x20user\x20access\x20token\x20signature.','apply','certBag','pkcs12FromAsn1','LOGIN_TOKEN_REQUEST_URL','ACCESS_TOKEN_REQUEST_URL','wrapRequest','createVerify','env','CAMDIGIKEY_API','Error\x20requesting\x20to\x20CamDigiKey\x20Server.','default','done','10366013BHnBGW','readFileSync','message','./crypto/Wrapper','publicKey','getBytes','next','value','write','statusCode','then','668QpBEtV','CAMDIGIKEY_CLIENT_TRUST_STORE_FILE_PASSWORD','requestToServer','./cache/CamDigiKeyMemoryCache','unwrapResponse','./error/InvalidAccessTokenTypeError','CAMDIGIKEY_CLIENT_ID','status','defineProperty','split','29484030XxeSvb','init','Invalid\x20auth\x20token\x20signature.','invalid.token.format','length','LOOKUP_USER_PROFILE','1446HnwFJl','CERTIFICATE','./error/InvalidTokenSignatureError','__awaiter','post','validateTokenSignature','X509Certificate','62469eagPRq','CAMDIGIKEY_CLIENT_KEYSTORE_FILE_PASSWORD','LOGOUT_USER_ACCESS_TOKEN_URL','CAMDIGIKEY_CLIENT_TRUST_STORE_FILE','pem','binary','31737awUqZA','signerCertificate','error','ACCESS_TOKEN_STATUS_URL','toDer','string','__esModule','getUserAccessToken','_cacheService'];a18_0x52ba=function(){return _0x3844ed;};return a18_0x52ba();}