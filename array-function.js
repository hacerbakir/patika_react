/*
push 
map
find
filter
some
every
includes
*/

const users = [
    {
        name: "ayse",
        age: 17,
    },
    {
        name: "ayse",
        age: 32,
    },
    {
        name: "hacer",
        age: 22,
    },
];

//push
//sers.push("KEREM");
//sers.push("CEM");
//onsole.log(users);

//map : for ile düz arrayi gezdirmek yerine map ile her veriye ulaşılır.
//users.map((item)=>{
//    console.log(item.name);
//});

//find array içinde verilen koşullarrda arama yapar
//const result = users.find((item) => item.name === "ayse" && item.age>20);
//console.log(result);


//filter : verilen koşullar array içinde sağlanan veriler döner
//const filtered = users.filter((item)=> item.name==="ayse");
//console.log(filtered);

//some : verilen koşullar array içinde uyuyorsa true döner yoksa false
//const some = users.some((item)=> item.age ===95);
//console.log(some);

//every : array in bütün elemanların şarta uuymasını bekliyor
const every = users.every((item)=> item.age > 5);
console.log(every);

//includes
const meyveler = ['elma','armut','kiraz'];
const isIncludes = meyveler.includes("elma");
console.log(isIncludes);