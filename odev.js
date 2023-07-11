import axios from 'axios';

async function getUserData(userId) {
  const {data : user} = await axios ("https://jsonplaceholder.typicode.com/users/" + userId);
  const {data : post} = await axios ("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

  console.log("user : ", user);
  console.log("post : ", post);
}

export default getUserData;
