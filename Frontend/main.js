const xhr = new XMLHttpRequest();

xhr.addEventListener('loadend', (event) => {
  console.log(event.target.response);
})

const getUser = () => {
    xhr.open('GET','http://localhost:3000/data')
    xhr.send()
}

// const getFriend = ()=>{
    
    // let myFriend = data[i].friends
//     xhr.open('GET','http://localhost:3000/data/2')
//     xhr.send()
// }

const getFriend = (i) => {
    xhr.open('GET',`http://localhost:3000/data/${i}`);
    xhr.responseType = 'json';
    xhr.onload = () => {
      let data = xhr.response;
      console.log(data.friends);
    };
    xhr.send();
}

const postUser = (age, eyeColor, name) => {
  xhr.open('GET',`http://localhost:3000/data`);
  xhr.responseType = 'json';
  xhr.onload = () => {
    let users = [...xhr.response];
    user = {
      "id": users.length,
      "age": age,
      "eyeColor": eyeColor,
      "name": name
    };
    users.push(user);
    console.log(users);
  };
  xhr.send();
}