import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
   index("home.tsx"),
   layout("src/pages/landingPage.tsx",[
      route("blogs", "src/pages/blogs.tsx"),
      route("blogs/blogDetails/:blogId", "src/pages/blogDetails.tsx"),
   ])
   


  ] satisfies RouteConfig;
