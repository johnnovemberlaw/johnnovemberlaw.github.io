// Created by iWeb 3.0.2 local-build-20150126

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,104),url:'About_Me_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'About_Me_files/stroke_1.png'},{rect:new IWRect(1,-1,230,2),url:'About_Me_files/stroke_2.png'},{rect:new IWRect(231,-1,2,2),url:'About_Me_files/stroke_3.png'},{rect:new IWRect(231,1,2,104),url:'About_Me_files/stroke_4.png'},{rect:new IWRect(231,105,2,3),url:'About_Me_files/stroke_5.png'},{rect:new IWRect(1,105,230,3),url:'About_Me_files/stroke_6.png'},{rect:new IWRect(-1,105,2,3),url:'About_Me_files/stroke_7.png'}],new IWSize(232,106))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('About_Me_files/About_MeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
