// Created by iWeb 3.0.2 local-build-20150126

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,72),url:'Home_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Home_files/stroke_1.png'},{rect:new IWRect(1,-1,696,2),url:'Home_files/stroke_2.png'},{rect:new IWRect(697,-1,2,2),url:'Home_files/stroke_3.png'},{rect:new IWRect(697,1,2,72),url:'Home_files/stroke_4.png'},{rect:new IWRect(697,73,2,3),url:'Home_files/stroke_5.png'},{rect:new IWRect(1,73,696,3),url:'Home_files/stroke_6.png'},{rect:new IWRect(-1,73,2,3),url:'Home_files/stroke_7.png'}],new IWSize(698,75))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
