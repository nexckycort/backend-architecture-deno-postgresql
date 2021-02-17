import { Pool } from "https://deno.land/x/postgres/mod.ts";
import { PoolClient } from "https://deno.land/x/postgres@v0.8.0/client.ts";
import { QueryObjectResult } from "https://deno.land/x/postgres@v0.8.0/query/query.ts";
import {
  pgDatabase,
  pgHost,
  pgPassword,
  pgPort,
  pgUser,
} from "../config/config.ts";

const POOL_CONNECTIONS = 5;
const poolConfig = {
  user: pgUser,
  password: pgPassword,
  database: pgDatabase,
  hostname: pgHost,
  port: +pgPort,
};

export const pool = new Pool(poolConfig, POOL_CONNECTIONS);

export const runQuery = async (query: string, params?: any[]) => {
  const client: PoolClient = await pool.connect();
  let dbResult: QueryObjectResult<Record<string, unknown>>;
  if (params !== undefined) {
    dbResult = await client.queryObject(query, ...params);
  } else {
    dbResult = await client.queryObject(query);
  }
  client.release();
  return dbResult;
};
