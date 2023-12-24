export default function About() {
  const aboutDesc: string[] = [
    "Forge a passion in robotics",
    "Hone fundamental skills through true hands-on team project experience",
    "Collaborate with fellow engineers and makers",
    "Learn something fun, make something fun, and have fun!",
  ];
  let descMapping = aboutDesc.map((desc) => {
    return (
      <li className="py-2" key={desc}>
        <p className=" text-neutral-200">{desc}</p>
      </li>
    );
  });

  return (
    <div className="min-h-[70vh] min-w-full bg-blue-dark">
      <div className="text-center w-4/6 mx-auto my-12">
        <h1 className="text-5xl font-display font-bold my-6">
          We offer a wide range of resources and opportunities for members to be
          able to...
        </h1>
        <ul className="font-body text-lg list-disc text-yellow py-6 text-start">
          {descMapping}
        </ul>
        <a className="btn btn-outline btn-primary  text-2xl text-start">
          Join Us {">"}
        </a>
      </div>
    </div>
  );
}
