// Created by iWeb 3.0.2 local-build-20150113

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,69),url:'Practice_Areas_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Practice_Areas_files/stroke_1.png'},{rect:new IWRect(1,-1,661,2),url:'Practice_Areas_files/stroke_2.png'},{rect:new IWRect(662,-1,3,2),url:'Practice_Areas_files/stroke_3.png'},{rect:new IWRect(662,1,3,69),url:'Practice_Areas_files/stroke_4.png'},{rect:new IWRect(662,70,3,2),url:'Practice_Areas_files/stroke_5.png'},{rect:new IWRect(1,70,661,2),url:'Practice_Areas_files/stroke_6.png'},{rect:new IWRect(-1,70,2,2),url:'Practice_Areas_files/stroke_7.png'}],new IWSize(664,71)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Practice_Areas_files/Practice_AreasMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
