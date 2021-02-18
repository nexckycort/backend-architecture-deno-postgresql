import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import TestService from "../../../services/test/test.service.ts";
import { BadRequestError, SuccessResponse } from "../../../helpers/api.response.ts";

const router = new Router();

const testService = TestService.getInstance();

router
  .post("/api/v1.0/test", async (ctx: RouterContext) => {
    if (!ctx.request.hasBody) {
      BadRequestError(ctx.response)
      return
    }
    const body = ctx.request.body();

    if (body.type !== "json") {
      BadRequestError(ctx.response)
      return
    }

    const { test } = await body.value;

    const result = await testService.test(test);

     SuccessResponse(ctx.response,
      "Test successfully",
      result,
    );
  });

export default router;
