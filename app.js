let userName = document.querySelector("#name")
let userAge = document.querySelector("#age")
let userContact = document.querySelector("#contact")
let userLocation = document.querySelector("#location")
let userProfilepic = document.querySelector("#profilePic")
const UserData = async () => {
    let randomUserapi = await fetch(`https://randomuser.me/api/`);
    let data = await randomUserapi.json()
    const [title, first, last] = [data.results[0].name.title, data.results[0].name.first, data.results[0].name.last]
    userName.textContent = [title + " " + first + " " + last];
    userAge.textContent = data.results[0].dob.age;
    userContact.textContent = data.results[0].phone;
    userLocation.textContent = data.results[0].location.country;
    userProfilepic.src = data.results[0].picture.medium;
}
UserData()
