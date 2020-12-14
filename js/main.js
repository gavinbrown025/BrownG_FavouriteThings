import{fetchData} from "./modules/DataMiner.js"; 

(() => {
    //const tl = gsap.timeline({ defaults: { ease: "power1.inout" } });

    let gallerySection = document.querySelector('.gallery'),
        galleryTemplate = document.querySelector('#gallery-template').content,
        counters = document.querySelector('.counters'),
        lightbox = document.querySelector('#lightbox'),
        mainArrow = document.querySelector('.main-arrow');


    function popErrorBox(message) {
        console.log(message);
    }

    function renderThumbs(data) {
        console.log(data);

        for (let item in data) {
            let favThing = galleryTemplate.cloneNode(true),
                favThingInfo = favThing.querySelector('.selection').children;
            
            favThingInfo[0].textContent = data[item].title;
            favThingInfo[1].id = data[item].id;
            favThingInfo[1].src = `images/${data[item].media[0]}`;

            gallerySection.appendChild(favThing);
        }
        gallerySection.addEventListener("click", retrieveItemInfo);
    }
    
    
    function retrieveItemInfo(event) {
        //console.log(event.target.id);
        gallerySection.removeEventListener("click", retrieveItemInfo);
        
        if (event.target.src || event.target.classList.contains('dot')){
            fetchData(`./includes/index.php?id=${event.target.id}`)
            .then(data => loadSelectedInfo(data), changeUI(event.target.id))
            .catch(err => popErrorBox(err));
        }
        
        mainArrow.id = parseInt(event.target.id) + 1;
        if (mainArrow.id > 3) { mainArrow.id = 1 }
    }
    
    function changeUI(item) {
        //* show dots and make correct one active
        counters.classList.add('showFlex');
        let dots = document.querySelectorAll('.dot');
        
        dots.forEach(dot => { dot.classList.remove('dot-on'); 
        dot.addEventListener('click', retrieveItemInfo);
        })
        let currentDot = dots[parseInt(item) - 1];
        currentDot.classList.add('dot-on');
        
        //* remove captions from gallery
        let captions = document.querySelectorAll('.caption');
        captions.forEach(caption => {caption.classList.add('hidden');})
        
        //* remove main title
        let mainTitle = document.querySelector('.mainTitle');
        mainTitle.textContent = "";   
    }
    
    function loadSelectedInfo(selection) {
        let descTitle = document.querySelector('.desc-title'),
        description = document.querySelector('.description'),
        mainImg = document.querySelector('.bg-image');
        
        //* change copy and images on page
        descTitle.textContent = selection[0].title;
        description.textContent = selection[0].description;
        mainImg.src = `images/${selection[0].media[0]}`;
        //* change images to the new ones
        changeThumbs(selection[0]);
    }
    

    function changeThumbs(thumbInfo) { 
        let oldThumbs = document.querySelectorAll('.gallery .selection');
            oldThumbs.forEach(OT => {OT.remove();})     
            
        thumbInfo.media.forEach(thumb =>{
            let newThumb = galleryTemplate.cloneNode(true),
                newThumbImg = newThumb.querySelector('.selection .thumb');
            
            newThumbImg.src = `images/${thumb}`;

            //* check if video or image and change accordingly
            let sourceType = String(newThumbImg.src);
            sourceType = sourceType.substring(sourceType.length - 3, sourceType.length);
            
            if (sourceType === "mp4"){   //? && newThumbImg.tagName === 'IMG' -- couldnt add event listener to all them
                let videoThumb = document.createElement('video');
                videoThumb.src = newThumbImg.src;
                videoThumb.id = newThumbImg.id;
                videoThumb.classList.add('thumb');
                
                newThumbImg.parentNode.replaceChild(videoThumb, newThumbImg);      
                videoThumb.addEventListener('click', playVideo);
                
            } if (sourceType === "jpg" ) {  //? && newThumbImg.tagName === 'VIDEO'
                let imageThumb = document.createElement('img');
                imageThumb.src = newThumbImg.src;
                imageThumb.id = newThumbImg.id;
                imageThumb.classList.add('thumb');
                
                newThumbImg.parentNode.replaceChild(imageThumb, newThumbImg);  
                imageThumb.addEventListener('click', showLargeImg);
            }
            gallerySection.appendChild(newThumb);
        })
    }
    
    function showLargeImg(thumb){
        lightbox.classList.add('showLightBox');
        let currentImg = thumb.target;
        let largeImg = currentImg.cloneNode(true);
        lightbox.appendChild(largeImg);
        
        lightbox.addEventListener('click', hideLightbox);
    };
    
    function playVideo(videoThumb) {
        lightbox.classList.add('showLightBox');
        let currentVideo = videoThumb.target;
        let largeVideo = currentVideo.cloneNode(true);
        lightbox.appendChild(largeVideo);
        
        largeVideo.play();
        largeVideo.addEventListener('click', function(){
            if (largeVideo.paused) {
                largeVideo.play();
            } else {
                largeVideo.pause();
            }
        });
        lightbox.addEventListener('click', hideLightbox);
    }
    
    function hideLightbox(event) {
        if (!event.target.duration){
            lightbox.classList.remove('showLightBox');
            lightbox.innerHTML = '';
        }
    }
    
    fetchData("./includes/index.php")
    .then(data => renderThumbs(data))
    .catch(err => popErrorBox(err));
    
    
    mainArrow.addEventListener('click', retrieveItemInfo);
})(); 
