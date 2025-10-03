//let userName = prompt ("Введите имя");
let date = prompt ("Введите год рождения");


console.log(Number.isInteger(+date))


if (Number.isInteger(+date)) {
   alert("да")
  
} else {
  alert("Год должен быть числом")
}


