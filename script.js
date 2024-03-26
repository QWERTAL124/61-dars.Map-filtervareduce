'use strict'

// Massiv metodlari (iteratsiya qiladigan);

// Bu metodlar yngi massiv qaytaradi

// map metod

const car = ['Merc','Bmw','Roly RoYce'];
// massivdagi harflarni kichkina harflarga o'tkazish

const arr = car.map((item)=>{
    return item.toLowerCase();
});
console.log(arr);

// filter metod 

const car1 = ['mercedes benz','audi','rolly royce','bmw'];
// masivdagi eng qisqa so'zni olish

const arr1 = car1.filter((item)=>{
    return item.length<5;
});

console.log(arr1);

// some | every - bu mantiqiy qiymat qaytaardi

const arr = [1,'samar',true];
// masivda biror vazifa to'g'ri bajarilgan bo'lsa
//some
console.log(arr.some((item)=>{typeof item == 'number'}));

// every
console.log(arr.every((item)=>{typeof item == 'number'}));

//reduce  - massivlarni bitta yaxlit qiymatga oladi

const arr = [13,22,3,4,5];

let sa=arr.reduce((sum,current)=>{
    return sum+current;
});
//      0   13
//      13  22
//      35  3
//      38  4
//      42  5
//      47  0
console.log(sa);

// reduce ga boshlang'ich qiymatni berish
let sa=arr.reduce((sum,current,10)=>{
    return sum+current;
});
