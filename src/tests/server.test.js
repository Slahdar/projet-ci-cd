import request from "supertest";
import app from "../server.js";

describe("API Test", () => {
  it("Status 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});
