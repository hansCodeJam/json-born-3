const xhr = new XMLHttpRequest();

xhr.addEventListener('loadend', (event) => {
  console.log(event.target.response);
})

// const getUser = ()=>{
//     xhr.open('GET','http://localhost:3000/data')
//     xhr.send()
// }

// const getFriend = ()=>{
    
    // let myFriend = data[i].friends
//     xhr.open('GET','http://localhost:3000/data/2')
//     xhr.send()
// }

const getFriend = (i)=>{
    xhr.open('GET',`'http://localhost:3000/data/${i}'`)
    xhr.send()
}