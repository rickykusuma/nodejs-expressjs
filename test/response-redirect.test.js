import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  // res.redirect("/to-next-page");
  // res.redirect(301, "/to-next-page");
  res.redirect("https://www.google.com/");
});

test("Response redirect page", async () => {
  const response = await request(app).get("/");

  // expect(response.status).toBe(302);
  // expect(response.get("Location")).toBe("/to-next-page");

  // expect(response.status).toBe(301);
  // expect(response.get("Location")).toBe("/to-next-page");

  expect(response.status).toBe(302);
  expect(response.get("Location")).toContain("https://www.google.com/");
});
