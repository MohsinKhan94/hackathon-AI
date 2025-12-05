import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";

const db = {
  user: [],
  session: [],
  account: [],
  verification: []
};

export const auth = betterAuth({
  database: memoryAdapter(db),
  user: {
    additionalFields: {
      software: { type: "string", required: false, input: true },
      hardware: { type: "string", required: false, input: true }
    }
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true
  },
  trustedOrigins: ["http://localhost:3000", "http://localhost:8080"]
});
