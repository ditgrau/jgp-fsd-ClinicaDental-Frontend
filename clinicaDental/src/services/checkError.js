// .test : método de JavaScript para comparar una string con una regEx. Devuelve true si la cadena cumple y false en caso contrario.

export const checkError = (name, value) => {

    switch(name){
        case 'email':
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
                return "El email es incorrecto";
            }

            return '';
        
        case 'password':
            if(!/^(?=.*\d)(?=.*[!@#$%^&*()-_+=])(?=.*[a-zA-Z]).{6,}$/.test(value)){
                return "La password debe cumplir los parámetros: mín. un dígito, un caracter especial, una mayúscula y 6 al menos 6 carácteres"
            }

        break;

        default: 
            console.log ('Unknown')
    }
}