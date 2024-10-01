// Form Validation 02

function validateForm() {
    // input values
    let result  = true;
    let msg     = "";
    let fname   = document.getElementById('fname');
    let lname   = document.getElementById('lname');
    let email   = document.getElementById('email');
    let pword   = document.getElementById('password');
    let rpword  = document.getElementById('reenter');
    let breed   = document.getElementById('breeds');
    let results = [fname, lname, email, pword, rpword, breed];
    
    // validate if empty
    results.forEach(element => {
        if (element.value == "" || element.value == null) {
            // format msg
            msg = "Please enter your " + element.name;
            if (element.id == "breeds") {
                msg = "Please select a " + element.name;
            }

            // output
            document.getElementById(element.id).style.borderColor = "red";
            document.getElementById('error_' + element.id).style.display = "block";
            document.getElementById('error_' + element.id).innerHTML = msg;
            result = false;
        } else if (element.value != "" || element.value != null) {
            document.getElementById(element.id).style.borderColor = "";
            document.getElementById('error_' + element.id).style.display = "none";
        }
    });

    // email handling
    if (!email.value.includes('@')) {
        msg = "Email Address invalid";

        document.getElementById(email.id).style.borderColor = "red";
        document.getElementById('error_' + email.id).style.display = "block";
        document.getElementById('error_' + email.id).innerHTML = msg;
        result = false;
    }

    // validate password match
    if (pword.value != rpword.value) {
        msg = "Passwords do not match";
        document.getElementById(pword.id).style.borderColor = "red";
        document.getElementById('error_' + pword.id).style.display = "block";
        document.getElementById('error_' + pword.id).innerHTML = msg;
        result = false;
    }

    return result;
}

// reset form
function resetForm() {
    var records  = document.getElementsByClassName('error-msg');
    var elements = Array.from(records);
    
    elements.forEach(element => {
        document.getElementById(element.id).style.display = "none";
    });

    var records = document.getElementsByClassName('form-input');
    var elements = Array.from(records);

    elements.forEach(element => {
        document.getElementById(element.id).style.borderColor = "";
    });
}