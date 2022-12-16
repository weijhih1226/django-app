import * as TAG from './tagName.js'

window.addEventListener('DOMContentLoaded' , function(){
    const content = document.querySelector(TAG.CONTENT);
    const imgs = content.querySelectorAll(TAG.GALLERY_PICTURE);
    imgs.forEach(img => {
        img.onclick = () => {
            const oriImg = img;
            const zoomBg = document.createElement('div');
            const zoomLk = document.createElement('a');
            const zoomImg = new Image();
            const zoomBgS = zoomBg.style;
            const zoomLkS = zoomLk.style;
            const zoomImgS = zoomImg.style;
            document.querySelector('main').appendChild(zoomBg);
            // document.querySelector(TAG.CONTENT).appendChild(zoomBg);
            zoomBg.appendChild(zoomLk);
            zoomLk.appendChild(zoomImg);

            fadeIn(zoomBg , 10);
            zoomBg.onclick = () => fadeOut(zoomBg , 10);
            new MutationObserver(muts => {
                muts.forEach(mut => {
                    if (mut.type === 'attributes') zoomImg.src = oriImg.src;
                })
            }).observe(oriImg , {attributes: true});

            zoomBg.id = 'zoomBg';
            zoomBg.className = 'collapse-content';
            zoomBgS.left = '0';
            zoomBgS.right = content.style.right;
            // zoomBgS.right = '0';
            zoomBgS.top = '0';
            zoomBgS.bottom = '0';
            zoomBgS.position = 'absolute';
            zoomBgS.display = 'flex';
            zoomBgS.justifyContent = 'center';
            zoomBgS.alignItems = 'center';
            zoomBgS.flexWrap = 'wrap';
            zoomBgS.overflow = 'auto';
            zoomBgS.backgroundColor = 'rgba(0 , 0 , 0 , .8)';
            zoomLk.id = 'zoomLk';
            // zoomLk.href = originImg.src;
            // zoomLk.target = '_blank';
            zoomLkS.height = '90%';
            zoomLkS.position = 'absolute';
            zoomLkS.display = 'flex';
            zoomLkS.justifyContent = 'center';
            zoomLkS.alignItems = 'center';
            zoomImg.id = 'zoomImg';
            zoomImg.src = oriImg.src;
            zoomImgS.height = '100%';
        }
    })
})