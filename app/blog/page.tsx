import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

const page = async ({}) => {
  console.log(allBlogs);
  return (
    <div className="">
      <div className="prose prose-invert">
        <h1>My Blogs 😃</h1>
      </div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={index}>
            <div className="flex flex-row space-x-2">
              <h3 className="mt-0 no-underline">{index + 1}</h3>
              <h2 className="mt-0 no-underline">{blog.title}</h2>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default page;
