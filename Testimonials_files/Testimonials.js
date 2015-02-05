// Created by iWeb 3.0.2 local-build-20150126

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,67),url:'Testimonials_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Testimonials_files/stroke_1.png'},{rect:new IWRect(1,-1,643,2),url:'Testimonials_files/stroke_2.png'},{rect:new IWRect(644,-1,3,2),url:'Testimonials_files/stroke_3.png'},{rect:new IWRect(644,1,3,67),url:'Testimonials_files/stroke_4.png'},{rect:new IWRect(644,68,3,2),url:'Testimonials_files/stroke_5.png'},{rect:new IWRect(1,68,643,2),url:'Testimonials_files/stroke_6.png'},{rect:new IWRect(-1,68,2,2),url:'Testimonials_files/stroke_7.png'}],new IWSize(645,69))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Testimonials_files/TestimonialsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
