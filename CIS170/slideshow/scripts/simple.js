/*----------------------------------------------------------------*/
/* slideshow: Simple */
/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
/* Onload Slide Default */
/*----------------------------------------------------------------*/
window.onload = function () {
    // get all slideshows
    let slideshows       = document.querySelectorAll('[data-slideshow--type]');
    let slide_index     = 0;

    // loop slideshows
    slideshows.forEach(slideshow => {
        // get slideshow type
        let slideshow_type   = slideshow.getAttribute('data-slideshow--type');
        let slide_container = slideshow.querySelector('[class$="slide-container"]');
        let slides          = slide_container.children;

        // loop slides and set attributes
        for (let i = 0; i < slides.length; i++) {
            // set data-slide--active attribute
            if (i == slide_index) {slides[slide_index].setAttribute('data-slide--active', 'true');} 
            else {slides[i].setAttribute('data-slide--active', 'false');}
            // draw slide number
            let data_slide_num  = i + 1;
            let element_num     = slides[i].querySelector('[class*="num"]');
            // set data attribute
            slides[i].setAttribute('data-slide', data_slide_num);
            if (element_num) {
                // draw number
                element_num.innerHTML = data_slide_num;
            }
        }

        // type simple
        if (slideshow_type == 'simple') {
            //data-dot--active="true"
            const template_dot  = slideshow.querySelector('[class*="dots__item"]');
            let dot_container   = slideshow.querySelector('[class$="dots-container"]');
            // draw 
            if (template_dot != null) {
                // copy element
                let dot = template_dot.cloneNode(false);
                // delete template
                template_dot.remove();
                // for loop
                for(let i = 0; i < slides.length; i++) {
                    // set display
                    dot.style.display = 'block';
                    // set attributes
                    if (i == slide_index) {dot.setAttribute('data-dot--active', 'true');}
                    else {
                        // set active to false
                        dot.setAttribute('data-dot--active', 'false')
                        // add onclick
                        dot.setAttribute('onclick', 'dotClick(this)');
                    }
                    // draw dots
                    dot_container.appendChild(dot.cloneNode(true));
                }
            };
        }
        // type thumb
        if (slideshow_type == 'thumb') {
            const template_thumb    = slideshow.querySelector('[class*=thumbs__item]');
            const thumb_container   = slideshow.querySelector('[class$=thumbs-container]');
            // format and draw
            if (template_thumb != null) {
                let thumb       = template_thumb.cloneNode(true);
                let thumb_img   = thumb.querySelector('img');
                // remove template
                template_thumb.remove();
                // loop slides
                for (let i = 0; i < slides.length; i++) {
                    // slide info
                    let slide_img   = slides[i].querySelector('img');
                    let img_src     = slide_img.getAttribute('src');
                    // set display
                    thumb.style.display = 'block';
                    // thumb active state
                    if (i == slide_index) {thumb.setAttribute('data-thumb--active', 'true')}
                    else {
                        // set active attribute
                        thumb.setAttribute('data-thumb--active', 'false');
                        // set onclick
                        thumb.setAttribute('onclick', 'thumbClick(this)');
                    }
                    // set data-slide--index
                    thumb.setAttribute('data-slide--index', i);
                    // set image source
                    thumb_img.setAttribute('src', img_src);
                    // draw thumbs
                    thumb_container.appendChild(thumb.cloneNode(true));
                }
            }
        }
    });
};
/*----------------------------------------------------------------*/
/* Advance Slide */
/*----------------------------------------------------------------*/
function advanceSlide(btn_element, advance) {
    // get slideshow parent
    let slideshow            = btn_element.parentElement;
    let slideshow_type       = slideshow.getAttribute('data-slideshow--type');
    let slide_current       = slideshow.querySelectorAll('[data-slide--active="true"]');
    let slide_current_num   = parseInt(slide_current[0].getAttribute('data-slide'));
    let slide_index         = slide_current_num - 1;
    // get slides array
    let slides = slideshow.querySelectorAll('[data-slide]');
    slides.forEach(slide => {
        // reset to inactive
        let slide_num = parseInt(slide.getAttribute('data-slide'));
        if (slide_num == slide_current_num) {
            // display block to none for active
            slide.setAttribute('data-slide--active', 'false');
        }
    });
    // advance slide index for next
    slide_index = slide_index + parseInt(advance);

    // check slide index
    if (slide_index >= slides.length) {
        // reset to start
        slide_index = 0;
    } else if (slide_index < 0) {
        // return to last slide
        slide_index = slides.length - 1;
    }
    // display advanced slide
    slides[slide_index].setAttribute('data-slide--active', 'true');
    // update dots / thumbs
    if (slideshow_type == 'simple') {
        // update dots
        updateDots(slideshow);        
    } else if (slideshow_type == 'thumb') {
        // update thumbs
        updateThumbs(slideshow);
    }
}
/*----------------------------------------------------------------*/
/* Update Dots */
/*----------------------------------------------------------------*/
function updateDots(slideshow) {
    let dots            = slideshow.querySelectorAll('[class*="dots__item"]');
    let slide_current   = slideshow.querySelectorAll('[data-slide--active="true"][data-slide]')[0];
    let slide_index     = parseInt(slide_current.getAttribute('data-slide')) - 1;
    // reset dots
    if (dots.length > 0) {
        dots.forEach(dot => {
            dot.setAttribute('data-dot--active', 'false');
            dot.setAttribute('onclick', 'dotClick(this)');
        });
        // change dot attribute
        dots[slide_index].setAttribute('data-dot--active', 'true');
        dots[slide_index].removeAttribute('onclick');
    }
}
/*----------------------------------------------------------------*/
/* Update Thumbs */
/*----------------------------------------------------------------*/
function updateThumbs(slideshow) {
    let thumbs          = slideshow.querySelectorAll('[class*="thumbs__item"]');
    let slide_current   = slideshow.querySelectorAll('[data-slide--active="true"][data-slide]')[0];
    let slide_index     = parseInt(slide_current.getAttribute('data-slide')) - 1;
    // reset dots
    if (thumbs.length > 0) {
        thumbs.forEach(thumb => {
            thumb.setAttribute('data-thumb--active', 'false');
            thumb.setAttribute('onclick', 'thumbClick(this)');
        });
        // change dot attribute
        thumbs[slide_index].setAttribute('data-thumb--active', 'true');
        thumbs[slide_index].removeAttribute('onclick');
    }
}
/*----------------------------------------------------------------*/
/* DotClick */
/*----------------------------------------------------------------*/
function dotClick(btn_dot) {
    // dot information
    let dot_container   = btn_dot.parentNode;
    let dot_index       = Array.prototype.indexOf.call(dot_container.children, btn_dot);
    // slide information
    let slideshow    = dot_container.parentElement;
    let slides      = slideshow.querySelectorAll('[data-slide]');
    // loop slides and set slide attributes
    for (let i = 0; i < slides.length; i++) {
        // set data-slide--active attribute
        if (i == dot_index) {slides[dot_index].setAttribute('data-slide--active', 'true');} 
        else {slides[i].setAttribute('data-slide--active', 'false');}
    }
    // update dots
    updateDots(slideshow);
    
}
/*----------------------------------------------------------------*/
/* Thumb Click */
/*----------------------------------------------------------------*/
function thumbClick(btn_thumb) {
    let thumb_container = btn_thumb.parentElement;
    let slideshow        = thumb_container.parentElement;
    let slide_index     = btn_thumb.getAttribute('data-slide--index');
    let slides          = slideshow.querySelectorAll('[data-slide]');
    // update slides
    for (let i = 0; i < slides.length; i++) {
        // set data-slide--active attribute
        if (i == slide_index) {slides[slide_index].setAttribute('data-slide--active', 'true');} 
        else {slides[i].setAttribute('data-slide--active', 'false');}
    }
    // update thumbs
    updateThumbs(slideshow);
}