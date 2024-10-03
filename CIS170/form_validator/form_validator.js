// Form Validation
function validateForm(btn) {
    // form properties
    let form    = document.getElementById('form');
    let flags   = [];
    if(btn.id == 'submit'){
        for(let i = 0; i < form.length; i++){
            let error = document.getElementById(`error-${form[i].id}`);
            // loop form elements
            if (form[i].value == ''){
                // if element empty
                if(error != null){error.style.display = 'block';}
            } else {
                error.style.display = 'none';
                flags.push(true);
            }
        }
        // checkbox
        let error_agree = document.getElementById('error-agree');
        if(form['agree'].checked != true){error_agree.style.display = 'block';}
        else {
            error_agree.style.display = 'none';
            flags.push(true);
        }
        // check flags
        if(flags.length == (form.length - 1)){
            // redirect
            let url = `?fname=${form['fname'].value}&lname=${form['lname'].value}&email=${form['email'].value}`;
            window.location.replace(`splash.html${url}`);
        }
    } else if (btn.id == 'reset'){
        for(let i = 0; i < form.length; i++){
            // reset values
            form[i].value = '';
            // reset errors
            let error = document.getElementById(`error-${form[i].id}`);
            if (error != null){error.style.display = 'none';}
        }
    }
}