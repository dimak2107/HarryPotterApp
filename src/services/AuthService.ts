import getRandomInt from "../utils/getRandomInt";

interface checkAuth {
  username: string;
  id: number;
}

interface login {
  status: 200 | 404;
}

interface registration {
  status: 201 | 404;
}

interface logout {
  status: 200 | 500;
}

export default class AuthService {
  static registration(username: string, password: string): registration {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("id", String(getRandomInt()));

    return { status: 201 };
  }

  static login(username: string, password: string): login {
    const usernameFromLS = localStorage.getItem("saved_username");
    const passwordFromLS = localStorage.getItem("saved_password");

    if (username === usernameFromLS && password === passwordFromLS) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

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

  static logout(): logout {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    username && localStorage.setItem("saved_username", username);
    password && localStorage.setItem("saved_password", password);

    localStorage.removeItem("username");
    localStorage.removeItem("password");
    
    return { status: 200 };
  }
}
