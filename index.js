// let students = [
//     {
//         id: 1,
//         name: "MuhammadAli",
//         course: "Frontend",
//         startDate: "2023-12-02",
//         scores: [
//             {
//                 theme: "HTML",
//                 score: 7
//             },
//             {
//                 theme: "CSS",
//                 score: 8
//             },
//             {
//                 theme: "JS",
//                 score: 4
//             },
//         ]
//     },
//     {
//         id: 2,
//         name: "Javohir",
//         course: "Frontend",
//         startDate: "2023-12-10",
//         scores: [
//             {
//                 theme: "HTML",
//                 score: 4
//             },
//             {
//                 theme: "CSS",
//                 score: 9
//             },
//             {
//                 theme: "JS",
//                 score: 6
//             },
//         ]
//     },
//     {
//         id: 3,
//         name: "Munir",
//         course: "Frontend",
//         startDate: "2023-10-29",
//         scores: [
//             {
//                 theme: "digital",
//                 score: 7
//             },
//             {
//                 theme: "HTML",
//                 score: 9
//             },
//             {
//                 theme: "CSS",
//                 score: 5
//             },
//             {
//                 theme: "JS",
//                 score: 7
//             },
//         ]
//     },
//     {
//         id: 4,
//         name: "Jahonbek",
//         course: "Frontend",
//         startDate: "2023-10-29",
//         scores: [
//             {
//                 theme: "digital",
//                 score: 6
//             },
//             {
//                 theme: "HTML",
//                 score: 7
//             },
//             {
//                 theme: "CSS",
//                 score: 6
//             },
//             {
//                 theme: "JS",
//                 score: 8
//             },
//         ]
//     },
// ]



// let bestStudent = {
//     averageScore: 0
// }
// let oldestStudent = {
//     studyDuration: "0/month"
// }

// console.warn("BEFORE");
// console.table(students);

// for (let item of students) {
//     item.averageScore = 0

//     for (let grade of item.scores) {
//         item.averageScore += grade.score
//     }

//     item.averageScore = (item.averageScore / item.scores.length).toFixed(2)

//     let variance = Date.parse(new Date()) - Date.parse(item.startDate)

//     item.studyDuration = Math.round((variance / 1000) / 60 / 60 / 24 / 30) + "/month"

//     if(item.averageScore > bestStudent.averageScore) {
//         bestStudent = item
//     }
//     if(+item.studyDuration.split('/')[0]  > +oldestStudent.studyDuration.split('/')[0] ) {
//         oldestStudent = item
//     }
// }

// let newest = students.reduce((a,b) => {
//     let a_length = +a.studyDuration.split('/')[0]
//     let b_length = +b.studyDuration.split('/')[0]
//     if(a_length < b_length) {
//         return a
//     } else {
//         return b
//     }
// })

// console.warn("AFTER");
// console.table(students);



let a = +prompt("Kol-vo")
let b = +prompt('Brak?')


function proporcii() {
    alert(((b/a) * 100) +  '%') 
}

proporcii()

let name = prompt('Whats ur name?')

function hello () {
    alert(`Hello ${name}`)
    alert(`Welcome to our club ${name} `)
}

hello()

