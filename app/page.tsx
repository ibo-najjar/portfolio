import Room from "./Room";

export default function Home() {
  return (
    <>
      <Room />

      <div className="prose prose-invert">
        <h2 className="">Ibrahim Najjar</h2>
        <h4>Full-Stack Developer / UI/UX Designer</h4>
        <h5>Based in istanbul</h5>
        <p>
          As a 3rd year computer science student, I am proud to say that I am
          already a full-stack developer with a passion for creating dynamic and
          engaging web applications. One of my favorite tools to work with is
          Next.js, and I have experience using it to build complex and scalable
          projects from the ground-up.
        </p>
        <p>
          In addition to my expertise in web development, I have hands-on
          experience in building real-time applications and designing
          pixel-perfect websites that not only look great but also function
          seamlessly. I take pride in my ability to create efficient database
          infrastructure and ensure that the applications I build are optimized
          for speed and performance.
        </p>
        <p>
          I am always looking for new challenges and enjoy exploring new
          technologies to expand my skills and knowledge base. Whether it&#x27;s
          trying out a new framework or experimenting with cutting-edge tools, I
          am always eager to learn and improve my craft.
        </p>
        {/* github a tag */}
        <a
          href="https://github.com/ibo-najjar"
          target="_blank"
          className="cursor-pointer w-6 h-6 underline-offset-2 hover:text-neutral-500 transition"
        >
          check my work
        </a>
      </div>
    </>
  );
}
