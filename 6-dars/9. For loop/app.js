"use strict";

// for loop ishlashi uchun for kalit so'zidan foydalanamiz

// for (let i = 0; i < 10; i++) {
//   console.log("Asilbek");
// }

// let i = 0

// Bu joyda i = 0 bo'lyapti bu o'zimiz ishlatgan oddiy ozgaruvchi desak ham bo'ladi

// i < 10

// Bu joyda i ga bergan 0 miz keladi va 0 < 10 bo'ladi 0 < 10 bo'lgani sababli true boladi agar false bo'lsa hatolik boladi

// i++

// Bu esa 0 + 1 boladi va bu qo'shilish amali i < number gacha bajariladi

// Agarda i++ qo'yilmasa function cheksiz davom etadi va browser qotip qoladi

const names = ["Ziyodulla", "Asilbek", "Firdavs"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
