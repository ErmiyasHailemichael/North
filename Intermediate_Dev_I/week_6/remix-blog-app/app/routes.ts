import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route("blog/category/:tag", "routes/blog.category.$tag.tsx"),
] satisfies RouteConfig;