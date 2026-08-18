
import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("home.tsx"),
  route(
    "blogs/blogDetails/:blogId",
    "src/pages/blogDetails.tsx"
  ),
] satisfies RouteConfig;