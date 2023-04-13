import { allBlogs } from ".contentlayer/generated";
import { DashboardTableOfContents } from "components/toc";
import { getTableOfContents } from "lib/toc";
import { Metadata } from "next";
import { Mdx } from "../../../components/Mdx";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const page = async ({ params }: any) => {
  const blog = allBlogs.find((blog) => blog.slug === params.blogName);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  const toc = await getTableOfContents(blog.body.raw);

  return (
    <div className="flex space-x-4">
      <div className="prose prose-invert w-full">
        <h2>{blog.title}</h2>
        <p>{blog.publishedAt}</p>
        <hr className="border-neutral-600 mt-0 mb-5" />
        <Mdx code={blog.body.code} />
      </div>
      <div className="hidden text-sm lg:block">
        <div className="sticky top-16 overflow-y-auto mt-20">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </div>
  );
};

export default page;
