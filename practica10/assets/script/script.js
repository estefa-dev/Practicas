let button= document.getElementById("btnValidate")

button.addEventListener('click', function(){
let name= document.getElementById("nameUser").value
let age= document.getElementById("ageUser").value
if(/\d/.test(name)){
        alert("Ingrese valores de letras")
    }
if(age >= 18){
    document.getElementById("resultAge").textContent = name + " es mayor de edad"
    document.getElementById("resultAge").style.color = "green"
}else if(age < 18){
    document.getElementById("resultAge").textContent = name + " es menor de edad"
    document.getElementById("resultAge").style.color = "red"
}else{
    alert("Ingrese un valor numerico")
}

})