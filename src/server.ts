import {
  blue,
  green,
  yellow,
} from "https://deno.land/std@0.85.0/fmt/colors.ts";

import { name, port } from "./config/config.ts";
import loaders from "./loaders/index.ts";
import Logger from "./helpers/logger.ts";

const { oakApp: app } = await loaders()

app.addEventListener("listen", ({ hostname, port }) => {
  Logger.info(
    `${yellow("########################################################")}
🛡️  ${green(`Server ${blue(name)} listening on port:`)} ${
      blue(port + "")
    } 🛡️
${yellow("########################################################")}`,
  );
});

await app.listen({ hostname: "127.0.0.1", port: +port });
