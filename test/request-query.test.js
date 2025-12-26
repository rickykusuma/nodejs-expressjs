import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Request Query Param", async () => {
  const response = await request(app)
    .get("/")
    .query({ firstName: "Ricky", lastName: "Kusuma" });

  expect(response.text).toBe("Hello Ricky Kusuma");
});
