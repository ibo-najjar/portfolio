import Card from "./Card";

const page = ({}) => {
  return (
    <div className="w-full space-y-10 prose prose-invert mt-10">
      {projects.map((project, index) => (
        <Card
          title={project.title}
          description={project.description}
          url={project.url}
          image={project.image}
          tools={project.tools}
          key={index}
        />
      ))}
    </div>
  );
};

const projects = [
  {
    title: "NFT WEBSTORE",
    description:
      "A webstore for NFTs. Built with Next.js, Tailwind CSS, and Thirdweb.",
    url: "https://nftwebstore.com",
    image: "nft.png",
    tools: ["Next.js", "Tailwind CSS", "Thirdweb"],
  },
  {
    title: "3D KEY",
    description: "a typing speed test game with an interactive 3d keyboard",
    url: "https://3dkey.online",
    image: "3dkey.png",
    tools: ["Next.js", "Tailwind CSS", "Thirdweb"],
  },
  {
    title: "GPT Translate",
    description:
      "A GPT-3 powered translation tool, with api access and live demo",
    url: "https://gpt-translate.vercel.app",
    image: "gpt-translate.png",
    tools: ["Next.js", "Tailwind CSS", "openiai", "next-auth"],
  },
];

export default page;
