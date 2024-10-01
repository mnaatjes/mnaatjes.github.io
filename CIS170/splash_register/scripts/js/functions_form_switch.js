/*------------------------------------------------------*/
/**
 * @name formSwitch
 * @param {HTMLElement} btn button
 * @property {HTMLElement} form_login
 * @property {HTMLElement} form_register
 * @property {HTMLElement} btn_login
 * @property {HTMLElement} btn_register
 * @property {string} class_active '--active'
 */
/*------------------------------------------------------*/
function formSwitch(btn){
    // vars
    let form_login      = document.getElementById('form_login');
    let form_register   = document.getElementById('form_register');
    let btn_login       = document.getElementById('btn_login');
    let btn_register    = document.getElementById('btn_register');
    let class_active    = '--active';

    // check if class contains --active
    if (!btn.classList.contains(class_active)) {
        // find button
        if (btn.id == btn_login.id) {
            // add class
            btn_login.classList.add(class_active);
            form_login.classList.add(class_active);
            // remove class
            btn_register.classList.remove(class_active);
            form_register.classList.remove(class_active);
        } else if (btn.id == btn_register.id){
            // add class
            btn_register.classList.add(class_active);
            form_register.classList.add(class_active);
            // remove class
            btn_login.classList.remove(class_active);
            form_login.classList.remove(class_active);
        }
    }
}