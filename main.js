/*let active=document.getElementsByClassName("active");
let button=document.querySelectorAll("button");
let section=document.querySelectorAll("body > main > section");

for(let i=0;section.length;i++)
{
    let idx=i;
    button[i].addEventListener("click", function (e){
        if((idx+1)<button.length)
            {
                section[idx].classList.remove("active");
                section[idx+1].classList.add("active");
            }
        else {
            section[idx].classList.remove("active");
            section[0].classList.add("active");
        }
    });
}*/

let form = document.querySelector("form:first-of-type");
let formOK=true
form.addEventListener("submit", function(e){
    e.preventDefault(); 
    
    formOK=true;
    
    //USERNAME
    
    let usernameInput = document.querySelector("#username");
    
    if(usernameInput.value !== "")
    {
        
    }
    
    else 
    {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:first-of-type");
        
        inputError.innerHTML = "Veuillez choisir un nom d'utilisateur";
        inputError.classList.add("error");
        usernameInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    
    //EMAIL
    
    let emailInput=document.querySelector("#email");
    
    if(emailInput.value == "")
    {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        
        inputError.innerHTML = "Aucun email n'a été saisi";
        inputError.classList.add("error");
        emailInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    
    else if(emailInput.value.indexOf("@",0)<0)
    {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        
        inputError.innerHTML = "Un email invalide a été saisi (un email doit avoir au moins un @ et un .)";
        inputError.classList.add("error");
        emailInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    else if(emailInput.value.indexOf(".", 0)<0)
    {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
        
        inputError.innerHTML = "Un email invalide a été saisi (un email doit avoir au moins un @ et un .)";
        inputError.classList.add("error");
        emailInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    
    
    //PASSWORD
    
    let passwordInput=document.querySelector("#password");
    let confirmPwd=document.querySelector("#confirm-password")
    if(passwordInput.value == "")
    {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(4)");
        
        inputError.innerHTML = "Aucun mot de passe saisi";
        inputError.classList.add("error");
        passwordInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }
    else if (passwordInput.value!=confirmPwd.value)
    {
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(4)");
        inputError.innerHTML = "Aucun mot de passe saisi";
        inputError.classList.add("error");
        passwordInput.classList.add("error");
        fieldset.appendChild(inputError);
        formOK=false;
    }

    if(formOK==true)
    {
        e.target.submit();
    }
    
});