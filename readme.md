# HashMap in TypeScript

## What is a Hash?

A **hash** is a unique identifier generated from data using a **hash function**.  
Think of it as a shortcut that lets you quickly locate data without scanning everything.

Example: a name `"Bob"` could be hashed into a number like `12345`.  
This number can then be used to find the data quickly.

---

## What is a HashMap?

A **HashMap** (or dictionary) is a **data structure** that stores data as **key-value pairs**.

- Each **key** is unique.
- Each **key maps to a value**.
- Internally, a hash function allows fast lookup by key.

Example in TypeScript:

```ts
type IUser = { name: string; level: number };

const users: Record<string, IUser> = {};

// Add users
users["Bob"] = { name: "Bob", level: 10 };
users["Alice"] = { name: "Alice", level: 5 };

// Access users
console.log(users["Bob"]); // { name: 'Bob', level: 10 }

// Update a user
users["Bob"].level = 11;

// Remove a user
delete users["Alice"];
```

## Why is HashMap Useful?

1. **Fast lookups:** Access any value by key in roughly `O(1)` time, much faster than searching an array.
2. **Organized data:** Keys label your data, making it easy to manage.
3. **Easy updates:** Adding, updating, or removing items is simple.
4. **Flexible keys:** Modern JS `Map<K,V>` even allows objects as keys.

## Analogy

A HashMap is like a **real-life dictionary**:

- **Word** = key
- **Definition** = value
- You don’t read every page to find the word; you jump straight to it — that’s the “hash magic” at work.
