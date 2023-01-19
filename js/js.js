// // // const h1 = document.querySelector("#hello");

// // // console.log(h1);

// // // const p = document.getElementById("my_name");

// // // p.innerText = "rhrlfgus";

// // // const h2 = document.createElement("h2");
// // // h1.prepend(h2);
// // // h2.innerText = "nice to meet you";



// // // h1.addEventListener('click', handleClick);

// // // function handleClick(){
// // //     h1.innerText = "클릭했습니다.";
// // // }


// //for문
// // const vegs = ['onion', 'potato', 'tomato'];

// // vegs.forEach(item => console.log(item));

// const array1 = [0, 1, 2];

// const map = array1.map(arraydata => 1 + arraydata);

// console.log(map);

// const spanname = document.getElementById("span1");
// const spanname2 = document.getElementById("name");
// const buttonname = document.getElementById("bt1");

// buttonname.addEventListener("click", clicker);

// function clicker(){
//     spanname.innerText = "안녕하세요";
//     spanname2.innerText = "소중한";
// }
const spann = document.getElementById("spanTag");
const h3 = document.getElementById("greeting");
const input = document.getElementById("inputTag");
const button1 = document.getElementById("bt1");
const button2 = document.getElementById("bt2");

let count = 0;

const handleButton= (event) =>{
    event.preventDefault();
    h3.innerText = `안녕하세요 ${input.value} 님`;
}

const handleNumber = (event) => {
    count++;
    spann.innerText = `공감수: ${count}`;
}

button1.addEventListener("click", handleButton);
button2.addEventListener("click", handleNumber);