import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">About</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello, I'm Piyush, a passionate web developer with a keen eye for the MERN Stack and cloud technologies. I strive to create impactful and visually stunning software solutions that leave a lasting impression. Explore my portfolio to see how I blend creativity and technical expertise to bring ideas to life. Let's connect and build something amazing together!
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-2xl mt-10 mb-4">
          Education & Training
        </h1>
        <span className="text-gray-700 text-lg">
          B.E Computer Science - Chitkara University (2021-2025),<br></br>
          Senior Secondary, BVM (2019-2021)
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-2xl mt-10 mb-4">
          Skills & Expertise
        </h1>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li>Programming Languages: Java, Python</li>
          <li>Soft Skills: Communication, Time Management, Problem Solving, Team Work, Leadership, Reliability</li>
          <li>Operating System: Windows, Linux</li>
          <li>Coursework: DBMS, SDLC, Testing Concepts, Data Structures, Cloud Computing</li>
          <li>Web Technologies: React.js, Node.js, HTML, CSS, API</li>
          <li>Database Management: MongoDB, MySQL</li>
          <li>Cloud Technologies: AWS Cloud, Deployment Models, Docker, Kubernetes, Cloud Infrastructure, IaaS, PaaS, SaaS, Jenkins, CI/CD Pipeline</li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-2xl mt-10 mb-4">
          Achievements & Awards
        </h1>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li>Flipkart Grid 5.0-Software Development Track, Selected in 2nd Round in commercial and Tech Quiz</li>
          <li>Leetcode, Coding Ninja, Solved more than 200+ questions and got many Badges</li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-2xl mt-10 mb-4">
          Mission Statement
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          My mission is to leverage my skills and creativity to deliver innovative Cloud and Web solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
