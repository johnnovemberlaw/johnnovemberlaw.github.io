// Created by iWeb 3.0.2 local-build-20150126

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,594),url:'Publicity_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Publicity_files/stroke_1.png'},{rect:new IWRect(1,-1,278,2),url:'Publicity_files/stroke_2.png'},{rect:new IWRect(279,-1,3,2),url:'Publicity_files/stroke_3.png'},{rect:new IWRect(279,1,3,594),url:'Publicity_files/stroke_4.png'},{rect:new IWRect(279,595,3,2),url:'Publicity_files/stroke_5.png'},{rect:new IWRect(1,595,278,2),url:'Publicity_files/stroke_6.png'},{rect:new IWRect(-1,595,2,2),url:'Publicity_files/stroke_7.png'}],new IWSize(281,596))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Publicity_files/PublicityMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
