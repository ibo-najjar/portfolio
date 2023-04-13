import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

const page = async ({}) => {
  console.log(allBlogs);
  return (
    <div className="">
      <div className="prose prose-invert">
        <h2>My Blogs</h2>
      </div>
      <div className="w-full space-y-4 flex flex-col">
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((blog, index) => (
            <Link href={`/blog/${blog.slug}`} key={index}>
              <div className="flex flex-row space-x-2 items-center">
                <div className="text-5xl font-semibold w-12">{index + 1}</div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl line-clamp-2 max-w-[230px]">
                      {blog.title}
                    </h2>
                    <p className="text-neutral-400 text-sm">
                      {blog.publishedAt}
                    </p>
                  </div>
                  <p className="text-neutral-400 text-sm line-clamp-2">
                    {blog.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;
