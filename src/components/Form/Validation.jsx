
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{6,10}$/;

export default function validation (userData){
    let errors = {}

    if (!userData.email){
        errors.email = 'E-mail vacío'
    }
    else{
        if (!regexEmail.test(userData.email)){
            errors.email = "E-mail inválido"
        }
        else{
            if (userData.email.length > 35){
                errors.email = "E-mail demasiado largo"
            }
            else{
                errors.email = ""
            } 
        }
    }

    if (!userData.password){
        errors.password = 'Password vacía'
    }
    else{
        if (!regexPassword.test(userData.password)){
            errors.password = 'Entre 6 y 10 caracteres y al menos un número'
        }
        else{
            errors.password = ''
        }
    }

    return errors
}