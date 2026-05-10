import { test, expect } from "@playwright/test";

// ─── Normal Cases ────────────────────────────────────────────────────────────

test("home page loads with blog feed", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await expect(page.getByRole("heading", { name: "Blog Feed" })).toBeVisible();
  await expect(page.getByText("Welcome to the blog")).toBeVisible();
});

test("home page shows all 3 posts", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await expect(page.getByText("React Router Tips")).toBeVisible();
  await expect(page.getByText("State Management")).toBeVisible();
  await expect(page.getByText("The Future of Web")).toBeVisible();
});

test("clicking a post navigates to post detail page", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.getByText("React Router Tips").click();
  await expect(page).toHaveURL(/\/post\/1/);
  await expect(page.getByRole("heading", { name: "React Router Tips" })).toBeVisible();
});

test("post detail page shows full content", async ({ page }) => {
  await page.goto("http://localhost:5173/post/2");
  await expect(page.getByRole("heading", { name: "State Management" })).toBeVisible();
  await expect(page.getByText("Context API vs Redux")).toBeVisible();
});

test("return to feed button navigates back home", async ({ page }) => {
  await page.goto("http://localhost:5173/post/1");
  await page.getByText("← Return to Feed").click();
  await expect(page).toHaveURL("http://localhost:5173/");
  await expect(page.getByRole("heading", { name: "Blog Feed" })).toBeVisible();
});

test("about page loads correctly", async ({ page }) => {
  await page.goto("http://localhost:5173/about");
  await expect(page.getByRole("heading", { name: "About This Blog" })).toBeVisible();
});

// ─── Edge Cases ──────────────────────────────────────────────────────────────

test("invalid post ID shows not found message", async ({ page }) => {
  await page.goto("http://localhost:5173/post/99");
  await expect(page.getByRole("heading", { name: "Post not found" })).toBeVisible();
});

test("return to feed button on not found page works", async ({ page }) => {
  await page.goto("http://localhost:5173/post/99");
  await page.getByText("Return to Feed").click();
  await expect(page).toHaveURL("http://localhost:5173/");
});

test("navbar is visible on all pages", async ({ page }) => {
  for (const url of [
    "http://localhost:5173",
    "http://localhost:5173/about",
    "http://localhost:5173/post/1",
  ]) {
    await page.goto(url);
    await expect(page.getByRole("link", { name: "Home", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "About", exact: true })).toBeVisible();
  }
});

test("direct URL access to about page works", async ({ page }) => {
  await page.goto("http://localhost:5173/about");
  await expect(page.getByRole("heading", { name: "About This Blog" })).toBeVisible();
});