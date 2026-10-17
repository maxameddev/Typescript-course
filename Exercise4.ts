// 1
{
  interface User {
    username: string;
    password: string;
  }

  function login(user: User): void {
    console.log(user.username);
  }

  login({ username: "ali", password: "12345" });
}

// 2
{
  interface User {
    username: string;
    password: string;
    email?: string;
  }

  function login(user: User): void {
    console.log(user.username);
  }

  login({ username: "ali", password: "12345" });
  login({ username: "amina", password: "abcde", email: "amina@mail.com" });
}

// 3
{
  interface User {
    readonly id: number;
    username: string;
    password: string;
    email?: string;
  }

  const user: User = { id: 1, username: "ali", password: "12345" };

  // user.id = 2;
}
