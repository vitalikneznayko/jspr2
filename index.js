let Zamov = "Ваше замовлення: ";
let list = 0;
let sugar = 0;

list = prompt("Яку каву ви бажаєте(1 - Американо, 2 - Американо з молоком, 3 - Капучіно, 4 - Лате)");
if(list == 1){
    Zamov += "американо";
}else if(list == 2){
    Zamov += "американо"
    list = prompt("З вершками(1) чи з молоком(2)");
    if(list == 1){
        Zamov += " з вершками";
    }else if(list == 2){
        Zamov += " з молоком";
    }else
        alert("Такого вибору немає спробуйте ще раз!!!");
}else if(list == 3){
    Zamov += "капучіно";
    list = prompt("Великий(1) або маленький(2)");
    if(list == 1){
        Zamov += " великий";
    }else if(list == 2){
        Zamov += " маленький";
    }else
        alert("Такого вибору немає спробуйте ще раз!!!");
}else if(list == 4){
    Zamov += "лате";
    list = prompt("Великий(1) або маленький(2)");

    if(list == 1){
        Zamov += " великий";
    }else if(list == 2){
        Zamov += " маленький";
    }else
        alert("Такого вибору немає спробуйте ще раз!!!");
}else
    alert("Такого вибору немає спробуйте ще раз!!!");

list = prompt("Додаток до кави(1 - Кубаш, 2 - Арабіка, 3 - Нічого)");
if(list == 1){
    Zamov += " з кубашом";
}else if(list == 2){
    Zamov += " з арабікой";
}else if(list > 4)
    alert("Такого вибору немає спробуйте ще раз!!!");

sugar = prompt("Скільки кубіків цукру?")    
if(sugar == 0){ 
   Zamov += " без цукру"
}else if (sugar == 1){
    Zamov += " 1 кубік цукру";
}else
    Zamov += ` ${sugar} кубіків цукру`;

console.log(Zamov);