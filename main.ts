type IUserStatus = "Online" | "Offline" | "AFK" | "In Action";

interface IUser {
  name: string;
  level: number;
  status: IUserStatus;
}

// Users
const bob: IUser = { name: "Bob", level: 10, status: "Online" };
const tom: IUser = { name: "Tom", level: 20, status: "In Action" };

// Generic HashMap type
type HashMap<T> = Record<string, T>;

// Create users hashmap
const users: HashMap<IUser> = {
  [bob.name]: bob,
  [tom.name]: tom,
};

// Add a new user
// function addUser(user: IUser) {
//   users[user.name] = user;
// }

// Accessing a user safely
// function getUser(name: string): IUser | undefined {
//   return users[name];
// }

console.log("All users:", users);
