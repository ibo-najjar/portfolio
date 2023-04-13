import Card from "./Card";

const page = ({}) => {
  return (
    <div className="w-full space-y-16 mt-10 container">
      {projects.map((project: Project, index: number) => (
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

type Project = {
  title: string;
  description: string;
  url: string;
  image: string;
  tools: string[];
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "NFT WEBSTORE",
    description:
      "A webstore for NFTs. Built with Next.js, Tailwind CSS, and Thirdweb.",
    url: "https://nft-webstore.vercel.app/",
    image: "nft.png",
    tools: ["Next.js", "Tailwind CSS", "Thirdweb"],
    githubUrl: "d",
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
