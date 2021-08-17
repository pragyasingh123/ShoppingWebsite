import { AbstractControl,ValidationErrors } from "@angular/forms";

export const PasswordStrengthChecker =function(control:AbstractControl):ValidationErrors|null{
let value:string =control.value||"";
if(!value){
    return null;
}

let  uppercaseCharacters=/[A-Z]+/g
if(uppercaseCharacters.test(value)===false){
    return {passwordStrength :"text has contain upper case characters, current value $(value)"}
}
let  lowercaseCharacters=/[a-z]+/g
if(lowercaseCharacters.test(value)===false){
    return {passwordStrength :"text has contain small case characters, current value $(value)"}
}

let  numbercaseCharacters=/[0-9]+/g
if(numbercaseCharacters.test(value)===false){
    return {passwordStrength :"text has contain number characters, current value $(value)"}
}

return null;



}
