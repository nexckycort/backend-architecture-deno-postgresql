import "https://deno.land/x/dotenv/load.ts";

// Mapper for environment variables
export const environment = Deno.env.get("NODE_ENV");

export const name = Deno.env.get("NAME_API") ?? "";
export const port = Deno.env.get("PORT") ?? "";

export const pgUser = Deno.env.get("PGUSER") ?? "";
export const pgPassword = Deno.env.get("PGPASSWORD") ?? "";
export const pgHost = Deno.env.get("PGHOST") ?? "";
export const pgDatabase = Deno.env.get("PGDATABASE") ?? "";
export const pgPort = Deno.env.get("PGPORT") ?? "";
