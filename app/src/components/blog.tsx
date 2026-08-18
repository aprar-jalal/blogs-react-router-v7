import { Link } from "react-router";

type BlogProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  priority?: boolean;
};

function getUnsplashImageUrl(
  image: string,
  width: number,
  quality = 75
) {
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

export default function Blog({
  id,
  title,
  description,
  image,
  author,
  authorImage,
  date,
  priority = false,
}: BlogProps) {
  return (
    <Link
      to={`/blogs/blogDetails/${id}`}
      className="block w-full overflow-hidden rounded-2xl bg-white"
    >
      <img
        src={getUnsplashImageUrl(image, 800)}
        srcSet={`
          ${getUnsplashImageUrl(image, 400)} 400w,
          ${getUnsplashImageUrl(image, 800)} 800w,
          ${getUnsplashImageUrl(image, 1200)} 1200w
        `}
        sizes="
          (max-width: 640px) calc(100vw - 3rem),
          (max-width: 1024px) calc((100vw - 4rem - 2.5rem) / 2),
          360px
        "
        alt={title}
        width={800}
        height={450}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-64 w-full rounded-xl object-cover"
      />

      <div className="pt-2">
        <h2 className="text-lg font-bold text-gray-900">
          {title}
        </h2>

        <p className="line-clamp-3 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-3 pt-1">
          <img
            src={getUnsplashImageUrl(authorImage, 100)}
            alt={`${author}'s profile`}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 rounded-full object-cover"
          />

          <p className="text-sm font-semibold text-gray-900">
            {author}
          </p>

          <p className="text-xs font-medium text-gray-500">
            - {date}
          </p>
        </div>
      </div>
    </Link>
  );
}