//verilen süre tamamlandıktan sonra bir kere çalışıyor olması
//setTimeout(() =>{
//    console.log("merhaba");
//}, 2000)


//hverilen süre kadar log tekrar edilir
//setInterval(()=>{
//    console.log("çalışçalış");
//},1000);


//const sayHi = (cb) => {
//
//   cb()};
//
//sayHi(()=>{
//   console.log("helloğ");
//});


// herhangi bir veri kaynagına bağlanıyor veriyi alıyor bize gösteriyor.
import fetch from "node-fetch";
import axios from "axios";
//fetch("https://jsonplaceholder.typicode.com/users")
//    .then((data)=> data.json())
//    .then((users)=> {
//        console.log("USERS YÜKLENDİ ***  ",users);
//        fetch("https://jsonplaceholder.typicode.com/posts/1")
//            .then((data)=>data.json())
//            .then((posts)=> {
//                console.log("POST 1 YÜKLENDİ",posts);
//                fetch("https://jsonplaceholder.typicode.com/posts/2")
//                .then((data)=>data.json())
//                .then((data)=> console.log("**POST2 YÜKLENDİ",data));
//                
//        });
//
//    });

//fetch ikinci kullanım şekli daha basit
//async function getData(){
//    const users = await (
//        await fetch("https://jsonplaceholder.typicode.com/users")
//    ).json();
//
//    const post1 = await (
//        await fetch("https://jsonplaceholder.typicode.com/posts/1")
//    ).json();
//
//    const post2 = await (
//        await fetch("https://jsonplaceholder.typicode.com/posts/2")
//    ).json();
//
//    console.log("USERS",users);
//    console.log("POSTT 1 ", post1);
//    console.log("POST 2 ** ", post2);
//}
//getData();

//fetch ten daha güzel veri çekiyor

//(async ()=>{
//    const {data:users} = await ( axios("https://jsonplaceholder.typicode.com/users"));
//
//    const {data:post1} = await (axios("https://jsonplaceholder.typicode.com/posts/1"));
//
//    const {data:post2} = await (axios("https://jsonplaceholder.typicode.com/posts/2"));
//
//    console.log("USERS",users);
//    console.log("POSTT 1 ", post1);
//    console.log("POST 2 ** ", post2);
//})();


//resolve başarılı demek reject başarısız işlem demek 
const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/3");
        //resolve(data);
        reject("sorun var");
    });
};

const getPosts = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        //resolve(data);
        reject("yeni sorun var");

    });
};

Promise.all([getUsers(), getPosts(1)])
    .then(console.log)
    .catch(console.log);

//(async()=> {
//    try{
//        const users = await getUsers()
//        const posts = await getPosts(4)
//
//        console.log(users);
//        console.log(posts);
//
//    }catch(e){
//        console.log(e);
//    }
//})();
