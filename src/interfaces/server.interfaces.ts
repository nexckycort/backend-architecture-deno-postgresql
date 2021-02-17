import { Application } from "https://deno.land/x/oak/mod.ts";

export interface PreLoaders {
  oakApp: Application | undefined
}

export interface Loaders {
  oakApp: Application
}
