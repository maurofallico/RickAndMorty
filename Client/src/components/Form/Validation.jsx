
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{6,10}$/;

export default function validation (userData){
    let errors = {}

    if (!userData.email){
        errors.email = 'Empty E-mail'
    }
    else{
        if (!regexEmail.test(userData.email)){
            errors.email = "Invalid E-mail"
        }
        else{
            if (userData.email.length > 35){
                errors.email = "E-mail too long"
            }
            else{
                errors.email = ""
            } 
        }
    }

    if (!userData.password){
        errors.password = 'Empty Password'
    }
    else{
        if (!regexPassword.test(userData.password)){
            errors.password = "Between 6 and 10 and at least one number"
        }
        else{
            errors.password = ''
        }
    }

    return errors
}