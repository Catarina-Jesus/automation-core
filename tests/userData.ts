 interface User {
  username: string;
  password: string;
}
 
export const validUserData = {
  customer: {
    username: "test",
    password: "test",
  } as User,
  admin: {
    username: "admin",
    password: "admin",
  } as User,
};
 
export const invalidUserData = {
   wrongPassword: {
    username: "test",
    password: "wrongpass"
  } as User,
  wrongUsername: {
    username: "nonexistent",
    password: "test"
  } as User,
  emptyUsername: {
    username: "",
    password: "test"
  } as User,
  emptyPassword: {
    username: "test",
    password: ""
  } as User,
  sqlInjection: {
    username: "\" OR 1=1 --",
    password: "anything"
  } as User,
  xssAttempt: {
    username: "<script>alert('xss')</script>",
    password: "test"
  } as User,
  specialCharacters: {
    username: "test@#$%^&*()",
    password: "pass!@#$"
  } as User,
};