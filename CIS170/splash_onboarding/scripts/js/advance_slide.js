/*------------------------------------------------------*/
/**
 * @name advanceSlide
 * @param {HTMLElement} btn button
 * @property {HTMLElement} form_login
 * @property {HTMLElement} form_register
 * @property {HTMLElement} btn_login
 * @property {HTMLElement} btn_register
 * @property {string} class_active '--active'
 */
/*------------------------------------------------------*/
function advanceSlide(btn){
    let btn_name    = btn.id;
    let btn_prev    = document.getElementById('prev');
    let btn_next    = document.getElementById('next');
    let btn_submit  = document.getElementById('submit');
    let data        = document.getElementById('data');
    let index       = parseInt(data.getAttribute('data-index'));
    let class_ani   = 'ani--advance';
    let cards       = document.querySelectorAll('[class*="__card"]');
    let root        = document.querySelector(':root');
    let dots        = document.getElementById('dots').children;
    let flag        = false;
    let input_data  = document.getElementById('input_data');

    // set start and end positions
    let start_pos = `${index * -100}%`;
    let end_pos;
    if (btn_name == btn_prev.id){
        index   = index - 1;
        end_pos = `${index * -100}%`;
        flag    = true;
        // check if submit enabled / next disabled and reverse
        if (btn_submit.style.display == 'block'){
            btn_submit.style.display    = 'none';
            btn_next.style.display      = 'block';
            // erase hidden input
            input_data.setAttribute('value', '[]');
        }
    } else if (btn_name == btn_next.id) {
        // validate form
        if(validateInput(index, cards)){
            // if form validation true --> validate index num
            if (index < (cards.length - 1)) {
                index   = index + 1;
                end_pos = `${index * -100}%`;
                flag    = true;
                // check if form completed
                let inputs_len  = document.querySelectorAll('input[type="text"], input[type="email"]').length;
                let user_len    = JSON.parse(data.getAttribute('data-user')).length;
                if (inputs_len == user_len){
                    // output form information
                    outputFormValues();
                    // deactivate next button
                    btn_next.style.display = 'none';
                    // activate submit button
                    btn_submit.style.display = 'block';
                    // fill hidden input
                    input_data.setAttribute('value', data.getAttribute('data-user'));
                    // submit form
                    console.log('Form Submitted');
                }
            }
        } else {
            // form validation failed
            console.log('Validation Failed');
        }
    }
    
    // check flags --> true = passed validation
    if(flag == true){
        // set animation vars
        root.style.setProperty('--start_pos', start_pos);
        root.style.setProperty('--end_pos', end_pos);
        // loop cards and apply style
        for(let i = 0; i < (cards.length); i++){
            // update cards
            let card        = cards[i];
            let dot         = dots[i];
            let dot_index   = getHTMLElementIndex(dot);
            card.classList.add(class_ani);
            // at animation end --> set transition, remove animation
            card.addEventListener('animationend', function(){
                // set transform position
                card.style.transform = `translateX(${end_pos})`;
                // remove animation
                card.classList.remove(class_ani);
                // update dot appearance
                if (index == dot_index) {dot.classList.add('--active')}
                else if (index != dot_index) {dot.classList.remove('--active')}
            });
        }
        // update data-element: index
        data.setAttribute('data-index', JSON.stringify(index));
        // activate prev button
        if (index != 0) {
            btn_prev.style.display = 'block';
        } else if (index == 0) {
            btn_prev.style.display = 'none';
        }
    }
}

/*------------------------------------------------------*/
/**
 * @name validateInput
 * @param {number} index carousel index
 * @param {HTMLElement} cards list of card
 * @property {HTMLAttribute} user_arr
 * @property {HTMLElement} inputs
 */
/*------------------------------------------------------*/
function validateInput(index, cards) {
    let user_arr    = JSON.parse(data.getAttribute('data-user'));
    let result      = false;
    let flag        = true;
    let inputs      = cards[index].querySelectorAll('input[type="text"], input[type="email"]');
    // loop inputs for values
    if (inputs.length > 0) {
        for(let i = 0; i < (inputs.length); i++){
            let input_name  = inputs[i].name;
            let input_value = inputs[i].value;
            let min_value   = inputs[i].min;
            let alert       = document.querySelector(`span[for="${input_name}"]`);

            // check if values 0
            if (input_value.length < min_value) {
                // show alert message
                alert.style.display = 'block';
                // set flag
                flag = false;
            } else {
                // reset alert message
                alert.style.display = 'none';
                // save user data
                let user_obj    = {[input_name]: input_value};
                let result_obj  = user_arr.find(key => key[input_name]);
                // check if value already exists
                if (result_obj){
                    let result_value = result[input_name];
                    let result_index = user_arr.indexOf(result_obj);
                    // value different
                    if (input_value != result_value){
                        // update value in user_array
                        user_arr[result_index][input_name] = input_value;
                    }
                } else if (!result_obj){
                    // push new value
                    user_arr.push(user_obj);
                }
            }
        }
        // set result from flag
        if(flag == false){result = false;}
        else if (flag == true){
            // set result
            result = true;
            // save data
            data.setAttribute('data-user', JSON.stringify(user_arr));
        }
    } else {
        // no input fields present on page --> advance slide okay
        result = true;
    }
    return result;
}

/*------------------------------------------------------*/
/**
 * @name outputValues
 * @param {number} index carousel index
 * @property {HTMLAttribute} user_arr
 */
/*------------------------------------------------------*/
function outputFormValues(){
    let data        = document.getElementById('data');
    let user_arr    = JSON.parse(data.getAttribute('data-user'));
    let keys_arr    = getKeysFromArray(user_arr);
    let values_arr  = getValuesFromArray(user_arr);

    // loop values and output
    for(let i = 0; i < user_arr.length; i++){
        let key     = keys_arr[i];
        let value   = values_arr[i];
        let target  = document.getElementById(key);
        // write information
        target.innerHTML = value;
    }
}