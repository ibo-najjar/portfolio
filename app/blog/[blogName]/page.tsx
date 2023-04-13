import { allBlogs } from ".contentlayer/generated";
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

  return (
    <div className="prose prose-invert">
      <h2>{blog.title}</h2>
      <p>{blog.publishedAt}</p>
      <hr className="border-neutral-600 mt-0 mb-5" />
      <Mdx code={blog.body.code} />
    </div>
  );
};

export default page;
