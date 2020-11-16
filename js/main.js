import{fetchData} from "./modules/DataMiner.js";

(() => {
    //const tl = gsap.timeline({ defaults: { ease: "power1.inout" } });

    let gallerySection = document.querySelector('.gallery'),
        galleryTemplate = document.querySelector('#gallery-template').content,
        counters = document.querySelector('.counters'),
        lightbox = document.querySelector('#lightbox'),
        mainArrow = document.querySelector('.main-arrow');


    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function renderThumbs(thumbs) {
        console.log(thumbs)
        for (let item in thumbs) {
            let favThing = galleryTemplate.cloneNode(true),
                favThingInfo = favThing.querySelector('.selection').children;

            favThingInfo[0].textContent = thumbs[item].title;
            favThingInfo[1].id = thumbs[item].id;
            favThingInfo[1].src = `images/${thumbs[item].media1}`;
            favThingInfo[1].dataset.index = thumbs[item].id;

            gallerySection.appendChild(favThing);
        }

        gallerySection.addEventListener("click", retrieveItemInfo);
    }

    function retrieveItemInfo(event) {
        gallerySection.removeEventListener("click", retrieveItemInfo);

        if (event.target.src){
        fetchData(`./includes/index.php?id=${event.target.id}`)
            .then(data => loadSelectedInfo(data), changeUI(event.target.id))
            .catch(err => console.log(err));
        }
    }
    
    function loadSelectedInfo(selection) {
        let descTitle = document.querySelector('.desc-title'),
            description = document.querySelector('.description'),
            mainImg = document.querySelector('.bg-image');

        descTitle.textContent = selection[0].title;
        description.textContent = selection[0].description;
        mainImg.src = `images/${selection[0].media1}`;

        //* change images to the new ones
        changeThumbs(selection[0]);
    }


    function changeUI(item) {
        counters.classList.add('showFlex');

        let dots = document.querySelectorAll('.dot');
        dots.forEach(dot => { dot.classList.remove('dot-on'); })

        let currentDot = dots[parseInt(item) - 1];
        currentDot.classList.add('dot-on');

        //* remove captions from gallery
        let captions = document.querySelectorAll('.caption');
        captions.forEach(caption => {caption.classList.add('hidden');})

        let mainTitle = document.querySelector('.mainTitle');
            mainTitle.textContent = "";   
    }


    function changeThumbs(thumbInfo) { 
        let galleryThumb = document.querySelectorAll('.selection img');
        galleryThumb[0].src = `images/${thumbInfo.media1}`;
        galleryThumb[1].src = `images/${thumbInfo.media2}`;
        galleryThumb[2].src = `images/${thumbInfo.media3}`;
        
        galleryThumb.forEach(thumb => {
            let source = String(thumb.src);
            source = source.substring(source.length - 3, source.length);
            if (source === "mp4"){
                let videoThumb = document.createElement('video');
                videoThumb.src = thumb.src;    
                thumb.parentNode.replaceChild(videoThumb, thumb);
                
                videoThumb.addEventListener('click', playVideo);
            } else {
                thumb.addEventListener('click', showLargeImg);
            }
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
        if(event.target.id){
            lightbox.classList.remove('showLightBox');
            lightbox.innerHTML = '';
        }
    }

    mainArrow.addEventListener('click', nextFavThing);


    fetchData("./includes/index.php")
    .then(data => renderThumbs(data))
    .catch(err => console.log(err));

})(); 
