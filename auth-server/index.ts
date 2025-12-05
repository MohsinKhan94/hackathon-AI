import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./auth";

const app = new Hono();

app.use("/*", cors({
  origin: ["http://localhost:3000", "http://localhost:8080"],
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["POST", "GET", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
  credentials: true,
}));

app.get("/", (c) => c.text("Auth Server is running!"));

app.on(["POST", "GET"], "/api/auth/**", (c) => {
    console.log(`[Auth] ${c.req.method} ${c.req.url}`);
    return auth.handler(c.req.raw);
});

const port = 3001;
console.log(`Auth server running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
});
