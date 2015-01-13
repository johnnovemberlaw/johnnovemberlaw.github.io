// Created by iWeb 3.0.2 local-build-20150113

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,571),url:'Publicity_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Publicity_files/stroke_1.png'},{rect:new IWRect(1,-1,268,2),url:'Publicity_files/stroke_2.png'},{rect:new IWRect(269,-1,2,2),url:'Publicity_files/stroke_3.png'},{rect:new IWRect(269,1,2,571),url:'Publicity_files/stroke_4.png'},{rect:new IWRect(269,572,2,3),url:'Publicity_files/stroke_5.png'},{rect:new IWRect(1,572,268,3),url:'Publicity_files/stroke_6.png'},{rect:new IWRect(-1,572,2,3),url:'Publicity_files/stroke_7.png'}],new IWSize(270,574)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Publicity_files/PublicityMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
