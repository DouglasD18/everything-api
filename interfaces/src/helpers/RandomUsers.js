import fetch from "./Fetch";

const URL = "https://randomuser.me/api/?results=90";

export default class RandomUserGenerator {
  static async get() {
    const data = await fetch(URL);
    const users = data.map((user) => {
      return {
        foto: user.picture.thumbnail,
        nome: `${user.name.title} ${user.name.first} ${user.name.last}`,
        email: user.email,
        username: user.login.username,
        idade: user.dob.age,
      }
    });
    return users;
  }
};
