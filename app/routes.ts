import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("Layout.tsx", [
    index("home.tsx"),

    route(
      "blogs/blogDetails/:blogId",
      "src/pages/blogDetails.tsx"
    ),
  ]),
] satisfies RouteConfig;