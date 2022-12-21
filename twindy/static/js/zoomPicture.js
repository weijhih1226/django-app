import * as TAG from './tagInfo.js'

const TAG_BG_ZOOM = TAG.BG_ZOOM;
const TAG_LK_ZOOM = TAG.LK_ZOOM;
const TAG_IMG_ZOOM = TAG.IMG_ZOOM;
const TAG_COLLAPSE = TAG.COLLAPSE;
const TIME_FADE = 10;

window.addEventListener('DOMContentLoaded' , function(){
    showImages(TAG.MAIN , TAG.CLS_CONTENT , TAG.GALLERY_IMGS)
})

function showImages(tagContainer , tagContent , tagImages){
    const imgs = document.querySelectorAll(tagImages);
    imgs.forEach(img => {
        img.onclick = () => {
            const zoomBg = createBackground(TAG_BG_ZOOM , TAG_COLLAPSE , tagContainer , tagContent)
            const zoomLk = createHyperlink(TAG_LK_ZOOM , img)
            const zoomImg = createImage(TAG_IMG_ZOOM , img)
            zoomBg.appendChild(zoomLk);
            zoomLk.appendChild(zoomImg);
            mutationObserver(img , zoomLk , zoomImg)
        }
    })
}

function createBackground(tagID , tagClass , tagContainer , tagContent){
    const container = document.querySelector(tagContainer);
    const content = document.querySelector(tagContent);
    const bg = document.createElement('div');
    container.appendChild(bg);
    bg.id = tagID;
    bg.classList.add(tagClass)
    bg.style.left = '0';
    bg.style.right = getComputedStyle(content).right;
    bg.style.top = '0';
    bg.style.bottom = '0';
    bg.style.position = 'absolute';
    bg.style.display = 'flex';
    bg.style.justifyContent = 'center';
    bg.style.alignItems = 'center';
    bg.style.flexWrap = 'wrap';
    bg.style.overflow = 'auto';
    bg.style.backgroundColor = 'rgba(0 , 0 , 0 , .8)';
    fadeInOut(bg , TIME_FADE)
    return bg
}

function createHyperlink(tagID , img){
    const l = document.createElement('a');
    l.id = tagID;
    l.href = img.src;
    l.target = '_blank';
    l.style.top = '1em';
    l.style.bottom = '4em';
    l.style.position = 'absolute';
    l.style.display = 'flex';
    l.style.justifyContent = 'center';
    l.style.alignItems = 'center';
    return l
}

function createImage(tagID , img){
    const image = new Image();
    image.id = tagID;
    image.src = img.src;
    image.style.height = '100%';
    return image
}

function mutationObserver(img , zoomLk , zoomImg){
    new MutationObserver(muts => {
        muts.forEach(mut => {
            if (mut.type === 'attributes') zoomLk.href = zoomImg.src = img.src;
        })
    }).observe(img , {attributes: true});
}

function fadeInOut(el , delay){
    fadeIn(el , delay);
    el.onclick = () => fadeOut(el , delay);
}

function fadeIn(el , delay){
    if (el.style.opacity === '') el.style.opacity = '0';
    if (parseFloat(el.style.opacity) < 1) {
        setTimeout(() => {
            el.style.opacity = parseFloat(el.style.opacity) + 0.1;
            fadeIn(el , delay)
        } , delay)
    }
}

function fadeOut(el , delay){
    if (el.style.opacity === '') el.style.opacity = '1';
    if (parseFloat(el.style.opacity) > 0) {
        setTimeout(() => {
            el.style.opacity = parseFloat(el.style.opacity) - 0.1;
            fadeOut(el , delay)
        } , delay)
    } else {el.remove()}
}