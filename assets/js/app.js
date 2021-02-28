// const user = {
//     name: "jack",
//     loginCount: 32,
//     courseList: [],
//     buyCourse: function (courseName){
//         this.courseList.push(courseName)
//     },
//     getCourseCount: function (){
//         return console.log(this.courseList.length)
//     }
// }

// user.buyCourse("ReactJS course")
// console.log(user.courseList)
// console.log(user.getCourseCount())


const myStates = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    1971,
    "Mananli",
    "Kashmir",
    "Kumilla"
]

// for loop
// for(let i = 0; i < myStates.length; i++){
//     if (typeof myStates[i] !== "number") continue;
//     console.log(myStates[i])
// }


// for of loop
// for(const n of myStates){
//     console.log(n)
// }


// for in loop

// const symbols = {
//     yt: "YouTube",
//     in: "Instagram",
//     gl: "Google"
// }

// for(const n in symbols){
//     console.log(symbols[n])
// }



// counter application

// const counter = document.querySelector('.counter');
// const followers = document.querySelector('.followers');

// let count = 1;

// setInterval(() => {
//     if(count < 999){
//         count = count + 20;
//         counter.innerHTML = count;
//     }
// }, 1);

// setTimeout(() => {
//    followers.innerHTML = "Followers on Instagram" 
// }, 3000);

const boxes = document.querySelectorAll('.box')

boxes.forEach((box) => {
    console.log(box)
    box.addEventListener("click", (event) => {
        // boxes.classList.remove("show")
        event.target.classList.toggle("show")
        console.log(event.target)
    })
})