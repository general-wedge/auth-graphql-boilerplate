import { request } from "graphql-request";
import {
  email,
  password,
  username,
  newemail,
  newpassword,
  newusername
} from "../mocks";

const createAccount = `
  mutation {
    createUser(email: "${email}", password: "${password}", role: "ADMIN") {
      user {
        id
        email
        username
        role
      }
    }
  }
`;

const login = `
  mutation {
    login(email: "${email}", password: "${password}") {
      token
    }
  }
`;

const signup = `
  mutation {
    signup(email: "${email}", password: "${password}") {
      user {
        id
        email
        username
        role
      }
    },
  }
`;

const newSignup = `
  mutation {
    signup(email: "${newemail}", password: "${newpassword}") {
      user {
        id
        email
        username
        role
      }
    },
  }
`;

const host = "http://localhost:4001" as string;

describe("authentication flow where email exists", () => {
  // create admin account so it exists and so we can remove it later
  it("should create admin account so it exists and so we can remove it later", async () => {
    await request(host, createAccount);
  });

  it("exists and should throw error with message when signing up", async () => {
    try {
      await request(host, signup);
    } catch (err) {
      const errorMessage = err.response.errors[0].message;
      expect(errorMessage).toEqual(
        "Unique constraint violated on User. Mutation did not complete."
      );
    }
  });

  it("should be able to login still", async () => {
    const response = await request(host, login);
    expect(response).toBeTruthy();
  });
});

describe("authentication flow first time sign up where email doesn't exist", () => {
  it("doesn't exist and should not throw error with message when signing up", async () => {
    try {
      const response = await request(host, newSignup);
      console.log(response);
      expect(response).not.toBeNull();
    } catch (err) {
      throw err;
    }
  });

  it("should be able to login with new account", async () => {
    const response = await request(host, login);
    expect(response).toBeTruthy();
  });
});
