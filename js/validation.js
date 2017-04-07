/**
 * Created by webwerk on 5/4/17.
 */

function validateEmail(email) {
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(email);
}

function validateForm() {
    var firstName = document.forms["myForm"]["firstname"].value;
    var lastName = document.forms["myForm"]["lastname"].value;
    var contact = document.forms["myForm"]["phone"].value;
    var officeNo = document.forms["myForm"]["office"].value;
    var mail = document.forms["myForm"]["email"].value;
    //var atpos = mail.indexOf("@");
    //var dotpos = mail.lastIndexOf(".");
    var pass = document.forms["myForm"]["password"].value;
    var confirmPass = document.forms["myForm"]["confirm_password"].value;
    var radio = document.forms["myForm"]["radio"].value;
    var age = document.forms["myForm"]["age"].value;
    var txtarea = document.forms["myForm"]["txtarea"].value;
    var checkbox1= document.forms["myForm"]["checkbox1"].checked;
    var checkbox2= document.forms["myForm"]["checkbox2"].checked;
    var checkbox3= document.forms["myForm"]["checkbox3"].checked;

    if (firstName.trim() == "") {
        document.forms["myForm"]["firstname"].style.borderColor = 'red';
        alert("First Name must be filled out");
        return false;

    } else if (lastName.trim() == "") {
        alert("Last Name must be filled out");
        return false;

    } else if (contact.trim() == "") {
        alert("Phone No. must be filled out");
        return false;

    } else if (contact.length != 10 || isNaN(contact)) {
        alert("Enter 10 digit valid Phone no.");
        return false;

    } else if (officeNo.trim() == "" || officeNo.trim() == null) {
        alert("Office No. must be filled out");
        return false;

    } else if (isNaN(officeNo)) {
        alert("Only digits");
        return false;

    }else if (mail =="") {
        alert("Email must be filled");
        return false;

    }else if (!validateEmail(mail)) { // if(true) if(false)
        alert("Not a valid Mail Id");
        return false;

    } else if (pass =="") {
        alert("Passowrd must be filled out");
        return false;

    } else if (pass.length<8 || pass.length>12) {
        alert("Range should be between 8 to 12 charachers, only Alphanumeric characters, No Special characters");
        return false;

    } else if (/[^a-zA-Z0-9]/.test(pass)) {
        alert("Only Alphanumeric is allowed");
        return false;
    }else if (confirmPass == "") {
        alert("Confirm Passowrd must be filled out");
        return false;

    }else if (pass != confirmPass) {
        alert("Password & Confirm Passowrd not matching");
        return false;

    }else if (age == "") {
        alert("Select your Date Of Birth");
        return false;

    }else if (radio == "") {
        alert("Select your Gender");
        return false;

    }else if (checkbox1==false && checkbox2==false  && checkbox3==false ) {
        alert("Select any one of the Interest ");
        return false;

    }else if (txtarea == "") {
        alert("About You must be filled");
        return false;
    }

}


function birthDate() {
    var bday = document.getElementById("day").value;
    var bmonth = document.getElementById("month").value;
    var byear = document.getElementById("year").value;
    var d = new Date();
    var cday = d.getDate();
    var cmonth = d.getMonth();
    var cyear = d.getFullYear();

    cmonth++;

    if (cday < bday) {
        cmonth = cmonth - 1;
    }
    if (cmonth < bmonth) {
        cyear = cyear - 1;
        cmonth = cmonth + 12;
        month = cmonth - bmonth;
        year = cyear - byear;
    }
    else {
        month = cmonth - bmonth;
        year = cyear - byear;
    }
    console.log(year);
    console.log(month);
    var age = year + month / 100;
    console.log(age);
    var rage = age.toFixed(2);

    document.getElementById("rage").value = rage;
}




