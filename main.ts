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
type HashMap<T> = Record<IUser["name"], T>;

// Create users hashmap
const usersObject: HashMap<IUser> = {
  [bob.name]: bob,
  [tom.name]: tom,
};

// Create fancy users hashmap
const usersHash = new Map<IUser["name"], IUser>();
usersHash.set(bob.name, bob);
usersHash.set(tom.name, tom);
