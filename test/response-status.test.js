import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  if (req.query.name) {
    res.status(200).send(`Hello ${req.query.name}`);
  } else {
    res.sendStatus(400).end();
  }
});

test("Response Status", async () => {
  let response = await request(app).get("/").query({ name: "World" });

  expect(response.text).toBe("Hello World");
  expect(response.status).toBe(200);

  response = await request(app).get("/");
  expect(response.status).toBe(400);
});
