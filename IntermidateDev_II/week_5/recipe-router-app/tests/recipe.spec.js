import { test, expect } from "@playwright/test";

// ─── Normal Cases ────────────────────────────────────────────────────────────

test("home page loads with welcome message", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await expect(page.getByText("Welcome to Recipe Gallery")).toBeVisible();
  await expect(page.getByText("Browse Recipes")).toBeVisible();
});

test("gallery page shows all 6 recipes", async ({ page }) => {
  await page.goto("http://localhost:5173/gallery");
  await expect(page.getByText("Spaghetti Carbonara")).toBeVisible();
  await expect(page.getByText("Chicken Tacos")).toBeVisible();
  await expect(page.getByText("Margherita Pizza")).toBeVisible();
  await expect(page.getByText("Beef Burger")).toBeVisible();
  await expect(page.getByText("Caesar Salad")).toBeVisible();
  await expect(page.getByText("Mushroom Stir Fry")).toBeVisible();
});

test("clicking a recipe card navigates to detail page", async ({ page }) => {
  await page.goto("http://localhost:5173/gallery");
  await page.getByText("Spaghetti Carbonara").click();
  await expect(page).toHaveURL(/\/recipe\/1/);
  await expect(page.getByRole("heading", { name: "Ingredients" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Cooking Instructions" })).toBeVisible();
});

test("recipe detail page shows correct content", async ({ page }) => {
  await page.goto("http://localhost:5173/recipe/2");
  await expect(page.getByRole("heading", { name: "Chicken Tacos" })).toBeVisible();
  await expect(page.getByText("Mexican · 25 mins")).toBeVisible();
  await expect(page.getByText("chicken breast")).toBeVisible();
});

test("back to gallery link works", async ({ page }) => {
  await page.goto("http://localhost:5173/recipe/1");
  await page.getByText("← Back to Gallery").click();
  await expect(page).toHaveURL(/\/gallery/);
  await expect(page.getByRole("heading", { name: "Recipe Gallery" })).toBeVisible();
});

// ─── Edge Cases ──────────────────────────────────────────────────────────────

test("invalid recipe ID shows not found message", async ({ page }) => {
  await page.goto("http://localhost:5173/recipe/999");
  await expect(page.getByRole("heading", { name: "Recipe not found" })).toBeVisible();
});

test("direct URL access to gallery works", async ({ page }) => {
  await page.goto("http://localhost:5173/gallery");
  await expect(page.getByRole("heading", { name: "Recipe Gallery" })).toBeVisible();
});

test("navbar is visible on all pages", async ({ page }) => {
  for (const url of [
    "http://localhost:5173",
    "http://localhost:5173/gallery",
    "http://localhost:5173/recipe/1",
  ]) {
    await page.goto(url);
    await expect(page.getByRole("link", { name: "Home", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Gallery", exact: true })).toBeVisible();
  }
});

test("browse recipes button navigates to gallery", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.getByText("Browse Recipes").click();
  await expect(page).toHaveURL(/\/gallery/);
});