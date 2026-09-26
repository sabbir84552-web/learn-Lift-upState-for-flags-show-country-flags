// const { title } = require("node:process")

function isAnagram(s1,s2) {
    let cleans1=""
    for (const charectar of s1.toLowerCase()) {
        if (charectar>='a'&& charectar<='z') {
            cleans1+=charectar
        }
    }
    let cleans2=""
    for (const charectar of s2.toLowerCase()) {
        if (charectar>='a'&&charectar<='z') {
            cleans2+=charectar
        }
    }
    const sorteds1=cleans1.split('').sort().join('')
    const sorted2=cleans2.split('').sort().join('')
    return sorteds1===sorted2
}
console.log(isAnagram("silent","listen"));
function compressCharacters(str) {
let result = "";
let  count = 1;
for (let i=0;i < str.length; i++) {
    if (str[i] === str[i+1]) {
        count++
    } // ata goni man barai dibo age dia
    else{
        result+=str[i]
        console.log(result);
        if (count>1) {
            result+=count
        }
        count=1  // ata reset point 
    }
    
} 
return result  
}  
console.log(compressCharacters("sabbir"));
function gononasonkhepkora(str) {
    let result = "";
    let count = 1
    for (let i=0;i< str.length;i++ ) {
        if (str[i] === str[i+1]) {
            count++
        }
        else{
            result+=str[i]
            if (count>1) {
                result+=count
            }
            count=1
        }

        
    }
    return result
}
console.log(gononasonkhepkora("sabbbiiirr"));



// =========================
function countWordFrequencies(sentence) {
    // 1. Lowercase banano ebong shudhu word-gulo alada kora
    const words = sentence.toLowerCase().match(/[a-z0-9]+/g);
  console.log(words);
  
    // Jodi sentence khali hoy ba kono valid word na thake
    if (!words) return {};

    const frequency = {};

    // 2. Loop chaliye frequency count kora
    for (let word of words) {
        console.log(word);
        
        if (frequency[word]) {
            frequency[word] += 1;
            console.log(frequency[word]);
            
        } //console.log(frequency[word]);
        
        else {
            frequency[word] = 1;
            
        }
    }

    return frequency;
}


function notifymeAtaAmrNumber() {
    console.log("Birani ready hole amk ai number a callback korien,bolben apnar birani ready asi nia jan");
    
}
function cookBiryani(callbackFunToiri) {
    console.log("Birani ranna choltase vhai ai function ar kaj ses hole setar kaj suru hobe, mane akta funciton ar moddhe arekta function re pathono, ai function tar kaj ses hole oitare call kori dewa hobe atai holo callback function jemon ai udahoron ta dekho");
    callbackFunToiri()
}
cookBiryani(notifymeAtaAmrNumber)


// fetch("https://openapi.programming-hero.com/api/all")
// .then((res)=>res.json())
// .then((user)=>console.log(user.name))
// .catch((err)=>console.error(err))
async function showUser() {
    try{
 const res = await fetch("link")
    const pakaData = await res.json();
    console.log(pakaData.name);
    return pakaData.name
    }
    catch(err){
        console.error(err)
    }
}

// most used async funtino
// async function gertUser(id) {
//     const res= await fetch(`link/${id}`)
//     // fetch 404 /500 rejected kore na ata nijer kori nite hoy 
//     if(!res.ok) throw new Error(`HTTP ${res.status}`)
//     return res.json()
// }
// gertUser(3).then((u)=>console.log(u.name))
// gertUser(5).then((aktaName)=>console.log(aktaName.name))
// gertUser(999).catch((e)=>console.error(e.massage))
// post for data pathate 
// async function CreatePost(Data){
// const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"Post",
//     headers: {"Content-Type":"application/json"},
//     body:JSON.stringify(Data)
// })
// if(!res.ok) throw new Error("Failed")
//     return res.json()
// }
// CreatePost({title:"hello",body:"ata amr first post",userId:1}).then((val)=>console.log(val)).catch((err)=>console.error("error handle kora hoitase",err.massage))
// ===================
async function CreatePost(Data) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // বড় হাতের অক্ষরে 'POST' দেওয়া ভালো
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Data)
    });

    if (!res.ok) throw new Error("Failed to create post");

    return await res.json();
  } catch (error) {
    console.error("Error:", error.message);
  }
}

CreatePost({ title: "hello", body: "ata amr first post", userId: 1 })
  .then((val) => console.log(val));