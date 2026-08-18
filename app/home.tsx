import { useState } from "react";
import type { Route } from "./+types/home";
import Navbar from "./src/components/navbar";
import Footer from "./src/components/footer";
import Blog from "./src/components/blog";
import { getBlogs } from "./src/services/GetData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export async function loader() {
  const blogs = await getBlogs();
  return blogs;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blogs" },
    {
      name: "description",
      content: "Discover our featured articles",
    },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(loaderData.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;

  const currentBlogs = loaderData.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  return (
    <div>
      <Navbar />

      <main role="main">
        <h2 className="mt-14 text-center text-3xl font-bold">
          Some of our featured articles
        </h2>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentBlogs.map((blog, index) => (
            <Blog
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              author={blog.author}
              authorImage={blog.authorImage}
              date={blog.date}
              priority={index === 0}
            />
          ))}
        </div>

        <div className="mt-12 mb-12 flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage((page) => page - 1)}
            disabled={currentPage === 1}
            className="cursor-pointer rounded-lg bg-blue-950 px-2 py-1 text-white disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`cursor-pointer rounded-lg px-2 ${
                currentPage === index + 1
                  ? "bg-gray-200"
                  : "bg-blue-950 text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((page) => page + 1)}
            disabled={currentPage === totalPages}
            className="cursor-pointer rounded-lg bg-blue-950 px-2 py-1 text-white disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}