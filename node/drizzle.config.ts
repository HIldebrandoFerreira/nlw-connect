import type { Config } from "drizzle-kit";
import { env } from "./src/env";

export default {
  schema: "src/drizzle/schema/*",
  out: "src/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: { url: env.DATABASE_URL },
} satisfies Config;
