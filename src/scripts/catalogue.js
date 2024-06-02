/*
const URI = "";
let desserts = [];
async function fetchData() {
    fetch(URI)
        .then((response) => response.json())
        .then((response) => desserts = response)
        .catch((error) => console.log("Error: ", error));
}
*/

let desserts = [
    {
        image : "./../../assets/images/6aa2e3f00989fbdbdb725c6305d5f25a.jpg",
        nameDessert : "Torta Personalizada",
        type : "cake",
        price : "Precio a connsultar",
    },
    {
        image : "./../../assets/images/de5a8814b1872818a047badf65e2596d.jpg",
        nameDessert : "Macarons",
        type : "cookies",
        price : "$5000 x Docena",
    },
    {
        image : "./../../assets/images/91861e7dc91dbd3b9f3ec6566e1a5f04.jpg",
        nameDessert : "Pie de Limon",
        type : "cake",
        price : "$5000 | Entera",
    },
    {
        image : "./../../assets/images/890964c2874a04453ae015321d3389d6.jpg",
        nameDessert : "3 Leches",
        type : "cake",
        price : "$650 | Entera",
    },
    
    {
        image : "./../../assets/images/dbf2756dbceefaf0eabec31a26001f63.jpg",
        nameDessert : "Magdalenas Personalizadas",
        type : "cupcakes",
        price : "Precio a connsultar",
    },
    {
        image : "./../../assets/images/18477a646065e1f47ae93733ee1f215c.jpg",
        nameDessert : "Galletas Personalizadas",
        type : "cookies",
        price : "Precio a connsultar",
    },
    {
        image : "./../../assets/images/e9a7420e011d536b99f4110455a3551a.jpg",
        nameDessert : "Fresas Cubiertas",
        type : "fruits",
        price : "$3500 x Docena",
    },
    {
        image : "./../../assets/images/e7a9083fc290de4185db0a4a4f2930f2.jpg",
        nameDessert : "Donas Cubiertas",
        type : "donuts",
        price : "$4000 x Docena",
    },
];

navBbar();
card(desserts);