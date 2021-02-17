import { pool } from "../../loaders/pgPool.ts";

export default class TestModel {
  private static instance: TestModel;
  private constructor() {}

  public static getInstance(): TestModel {
    if (TestModel.instance === undefined) {
      TestModel.instance = new TestModel();
    }
    return TestModel.instance;
  }

  test = async (test: number): Promise<number> => {
    const object_result = await pool.queryObject<{ test: number }>(
      "SELECT $1 + 1 test",
      test,
    );
    const result = object_result.rows[0];
    return result.test;
  };
}
