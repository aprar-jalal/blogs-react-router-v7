import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Route } from "./+types/blogDetails";
import { getBlogById, getBlogs } from "../services/GetData";

export function meta({ data }: Route.MetaArgs) {
  return [
    {
      title: data?.blog?.title ?? "Blog Details",
    },
    {
      name: "description",
      content:
        data?.blog?.description ??
        "Read our latest articles and insights.",
    },
  ];
}
export async function loader({ params }: Route.LoaderArgs) {
  if (!params.blogId) {
    throw new Response("Blog ID is required", {
      status: 400,
    });
  }
 const [blog, blogs] = await Promise.all([
    getBlogById(params.blogId),
    getBlogs(),
  ]);
  const relatedBlogs = blogs
    .filter((item) => item.id !== params.blogId)
    .slice(0, 3);

  return Response.json(
    {
      blog,
      relatedBlogs,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=3600",
      },
    },
  );
}

function getUnsplashImageUrl(image: string, width: number, quality = 75) {
  try {
    const url = new URL(image);

    if (url.hostname.includes("unsplash.com")) {
      url.searchParams.set("auto", "format");
      url.searchParams.set("fit", "crop");
      url.searchParams.set("w", String(width));
      url.searchParams.set("q", String(quality));
    }

    return url.toString();
  } catch {
    return image;
  }
}
export default function BlogDetails({ loaderData }: Route.ComponentProps) {
  const { blog, relatedBlogs } = loaderData;

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headings = blog.content.filter((item: any) => item.type === "heading");
  const keyTakeaways = blog.content
    .filter((item: any) => item.type === "paragraph")
    .slice(0, 5);
  let headingIndex = 0;

  return (
    <div className="min-h-screen bg-blue-50" role="contentinfo">
      <main>
        <section className="mx-auto grid max-w-11/12 gap-5 px-6 pb-20 pt-14 lg:grid-cols-[3fr_1fr]">
          <div className="min-w-0 ">
            <div className="rounded-xl border border-gray-300 p-7 bg-white">
              <div className="mb-5 mt-5">
                <span className="text-sm  uppercase tracking-widest bg-emerald-100 py-4 px-6 rounded-4xl">
                  Article
                </span>
              </div>
              <h1 className="max-w-5xl mt-8 text-2xl font-bold  text-slate-900 md:text-xl lg:text-2xl">
                {blog.title}
              </h1>
              <div className="mt-6 overflow-hidden ">
                <img
                  src={getUnsplashImageUrl(blog.image, 800)}
                  srcSet={`
          ${getUnsplashImageUrl(blog.image, 400)} 400w,
          ${getUnsplashImageUrl(blog.image, 800)} 800w,
          ${getUnsplashImageUrl(blog.image, 1200)} 1200w
        `}
                  sizes="
          (max-width: 640px) calc(100vw - 3rem),
          (max-width: 1024px) calc((100vw - 4rem - 2.5rem) / 2),
          360px
        "
                  alt={blog.title}
                  className="max-h-[500px] w-full object-cover"
                  fetchPriority="high"
                  width={800}
                  height={500}
                />
              </div>
            </div>

            <article className="mt-10 rounded-xl border border-gray-300 p-7 bg-white">
              {/* DESCRIPTION */}

              <div className="mb-10">
                <p className="text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
                  {blog.description}
                </p>
              </div>

              {/* KEY TAKEAWAYS */}

              <section className="mb-12 rounded-r-2xl border-l-4 border-amber-400 bg-amber-50 p-6 md:p-8">
                <h2 className="mb-5 text-2xl font-bold text-slate-900">
                  Key Takeaways
                </h2>

                <ul className="space-y-3">
                  {keyTakeaways.map((item: any, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-slate-700 md:text-base"
                    >
                      <span className="mt-1 text-lg font-bold text-amber-500">
                        •
                      </span>

                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* MOBILE TABLE OF CONTENTS */}

              <section className="mb-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:hidden">
                <h2 className="mb-5 text-2xl font-bold text-slate-900">
                  Table Of Contents
                </h2>

                <ol className="space-y-3">
                  {headings.map((heading: any, index: number) => (
                    <li key={index}>
                      <a
                        href={`#section-${index}`}
                        className="text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-amber-500"
                      >
                        {index + 1}. {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>

              {/* CONTENT */}

              <div>
                {blog.content.map((item: any, index: number) => {
                  if (item.type === "heading") {
                    const id = `section-${headingIndex}`;

                    headingIndex++;

                    return (
                      <section key={index} id={id} className="scroll-mt-24">
                        <h2 className="mb-5 mt-12 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                          {item.text}
                        </h2>
                      </section>
                    );
                  }

                  if (item.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="mb-6 text-base leading-8 text-slate-700 md:text-lg md:leading-9"
                      >
                        {item.text}
                      </p>
                    );
                  }

                  if (item.type === "list") {
                    return (
                      <ul
                        key={index}
                        className="mb-8 list-disc space-y-3 pl-6 text-base leading-7 text-slate-700"
                      >
                        {item.items.map(
                          (listItem: string, listIndex: number) => (
                            <li key={listIndex}>{listItem}</li>
                          ),
                        )}
                      </ul>
                    );
                  }

                  return null;
                })}
              </div>

              {/* CTA */}

              <section className="my-14 overflow-hidden rounded-2xl bg-[#0d0f2e] px-6 py-10 text-center md:px-12">
                <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white md:text-3xl">
                  Protect your subscription revenue with Churn Solution
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300">
                  Automate your revenue recovery and reduce involuntary churn.
                </p>

                <button className="mt-7 rounded-lg bg-amber-400 px-7 py-3 font-semibold text-[#0d0f2e] transition hover:bg-amber-300">
                  Get Started
                </button>
              </section>

              {/* FAQ */}

              <section className="mt-16">
                <h2 className="mb-7 text-3xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>

                <div className="border-y border-slate-200">
                  {[
                    {
                      q: "What is this article about?",
                      a: "This article explains the key concepts, strategies, and best practices related to the topic.",
                    },
                    {
                      q: "Why is this important?",
                      a: "Understanding these strategies can help businesses improve their processes and achieve better results.",
                    },
                    {
                      q: "How can I implement these strategies?",
                      a: "Start by analyzing your current workflow, identifying problems, and gradually introducing automated solutions.",
                    },
                  ].map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={index}
                        className="border-b border-slate-200 last:border-b-0"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between gap-6 py-5 text-left"
                        >
                          <span className="font-semibold text-slate-900">
                            {faq.q}
                          </span>

                          {isOpen ? (
                            <Minus className="h-5 w-5 shrink-0 text-amber-500" />
                          ) : (
                            <Plus className="h-5 w-5 shrink-0 text-slate-400" />
                          )}
                        </button>

                        {isOpen && (
                          <p className="pb-5 pr-10 text-sm leading-7 text-slate-600">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </article>
          </div>

          <aside className="hidden lg:block">
            <div className="block top-24 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="mb-8 text-2xl font-bold text-[#080f3d]">
                Table Of Contents
              </h2>

              <ol className="border-l border-slate-200 pl-5">
                {headings.map((heading: any, index: number) => (
                  <li key={index} className="mb-8 last:mb-0">
                    <a
                      href={`#section-${index}`}
                      className="
              block
              text-base
              font-normal
              leading-7
              text-[#080f3d]
              transition-all
              duration-200
              hover:font-bold
              hover:text-[#050a2f]          
            "
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((relatedBlog) => (
                <a
                  key={relatedBlog.id}
                  href={`/blogs/blogDetails/${relatedBlog.id}`}
                  className="group overflow-hidden rounded-2xl bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={getUnsplashImageUrl(relatedBlog.image, 800)}
                    srcSet={`
          ${getUnsplashImageUrl(blog.image, 400)} 400w,
          ${getUnsplashImageUrl(blog.image, 800)} 800w,
          ${getUnsplashImageUrl(blog.image, 1200)} 1200w
        `}
                    sizes="
          (max-width: 640px) calc(100vw - 3rem),
          (max-width: 1024px) calc((100vw - 4rem - 2.5rem) / 2),
          360px
        "
                    alt={relatedBlog.title}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="p-6">
                    <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-snug text-slate-900">
                      {relatedBlog.title}
                    </h3>
                    <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-500">
                      {relatedBlog.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <img
                        src={relatedBlog.authorImage}
                        alt={relatedBlog.author}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <span>{relatedBlog.author}</span>
                      <span>·</span>
                      <span>{relatedBlog.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
