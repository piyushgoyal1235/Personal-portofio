import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";


function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: "https://img.icons8.com/?size=100&id=91869&format=png&color=000000",
      name: "Cloud Computing",
    },
    {
      id: 7,
      logo:"https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
      name: "React",
    },
    {
      id: 8,
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      name: "Express",
    },
    {
      id: 9,
      logo: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
      name: "Docker",
    },
    {
      id: 10,
      logo: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
      name: "Node.js",
    },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've more than 2 years of experience in the following technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt={name} />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
