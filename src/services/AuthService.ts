import getRandomInt from "../utils/getRandomInt";

interface checkAuth {
  username: string;
  id: number;
}

interface login {
  status: 200 | 404;
}

interface registrationReturn {
  status: 201 | 404;
}

interface Logout {
  status: string;
}

export default class AuthService {
  static registration(username: string, password: string): registrationReturn {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("id", String(getRandomInt()));

    return { status: 201 };
  }

  static login(username: string, password: string): login {
    const usernameFromLS = localStorage.getItem("username");
    const passwordFromLS = localStorage.getItem("password");

    if (username === usernameFromLS && password === passwordFromLS) {
      return { status: 200 };
    }

    return { status: 404 };
  }

  static checkAuth(): checkAuth | false {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const id = Number(localStorage.getItem("id"));

    if (username && password) {
      return { username, id };
    }

    return false;
  }

  static logout(): Logout {
    const username = localStorage.getItem("username");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("id");
    return { status: `Пользователь ${username} не авторизован.` };
  }
}
