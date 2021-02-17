import { Router, RouterContext, Status } from "https://deno.land/x/oak/mod.ts";
import TestService from "../../../services/test/test.service.ts";
import { response } from "../../../helpers/response.ts";

const router = new Router();

const testService = TestService.getInstance();

router
  .post("/api/v1.0/test", async (ctx: RouterContext) => {
    if (!ctx.request.hasBody) {
      ctx.throw(Status.BadRequest, "Bad Request");
    }
    const body = ctx.request.body();

    if (body.type !== "json") {
      ctx.throw(Status.BadRequest, "Bad Request");
    }

    const { test } = await body.value;

    const result = await testService.test(test);
    ctx.response.body = response(
      10001,
      "Test successfully",
      result,
    );
  });

export default router;
