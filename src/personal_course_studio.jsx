import React from "react";
import { motion } from "framer-motion";
import meImage from "./assets/me.jpg";
import flutterImg from "./assets/flutter.png";
import csharpImg from "./assets/c-sharp-logo.png";
import sqlImg from "./assets/logo.svg";
import reactImg from "./assets/react.svg";
import htmlImg from "./assets/html.jpg";

import {
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaGraduationCap,
  FaFileAlt,
  FaClock,
} from "react-icons/fa";

import TypingEffect from "./typing_effic";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function AboutMeStudio() {
  const skills = [
    { name: "Dart / Flutter", img: flutterImg },
    { name: "C# / .NET / WinForms", img: csharpImg },
    { name: "SQL Server, Oracle", img: sqlImg },
    { name: "React.js", img: reactImg },
    { name: "HTML, CSS, JavaScript", img: htmlImg },
  ];

  const projects = [
    {
      title: "Stock Management System",
      desc: "Built using C# and SQL Server to manage inventory.",
      time: "3 months",
      img: htmlImg,
    },
    {
      title: "E-Shopping App",
      desc: "Flutter app with custom cart and checkout features.",
      time: "2 months",
      img: htmlImg,
    },
    {
      title: "Drone Management System",
      desc: "Python tool for organizing drone logistics.",
      time: "1.5 months",
      img: htmlImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-tea-600 to-pink-500 text-gray-100 p-6 font-sans">
      <motion.div
        className="max-w-4xl mx-auto bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl p-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center mb-10"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src={meImage}
            alt="Vanny Toch"
            className="mx-auto w-40 h-40 rounded-full shadow-xl border-4 border-white mb-6 object-cover"
          />
          <h2 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Toch Vanny
          </h2>
          <p className="mt-3 text-xl font-semibold text-pink-100 min-h-[1.5rem]">
            I'm{" "}
            <TypingEffect
              words={[
                "a Mobile App Developer",
                "a Window App Deleloper",
                "a Web Developer",
                "a Problem Solver",
              ]}
              typingSpeed={150}
              deletingSpeed={50}
              pauseTime={1500}
            />
          </p>
        </motion.div>

        {/* About Me */}
        <motion.section
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-tea-300 drop-shadow-md">
            <FaUser size={28} /> About Me
          </h2>
          <p className="text-lg leading-relaxed max-w-prose mx-auto text-white/90">
            I am a passionate developer with experience in mobile and desktop
            applications. I enjoy learning new technologies and solving
            real-world problems with clean and efficient code.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-tea-300 drop-shadow-md">
            <FaTools size={28} /> Skills
          </h2>
          <ul className="flex flex-wrap justify-start gap-5 max-w-xl mx-auto">
            {skills.map((skill, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 bg-tea-400/80 backdrop-blur-sm rounded-full px-6 py-3 text-white font-semibold shadow-lg hover:bg-blue-500 transition-colors cursor-default"
              >
                <img
                  src={skill.img}
                  className="w-8 h-8 object-contain"
                  alt={skill.name}
                />
                {skill.name}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Projects */}
        <motion.section
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-tea-300 drop-shadow-md">
            <FaProjectDiagram size={28} /> Projects
          </h2>
          <ul className="space-y-6 max-w-3xl mx-auto">
            {projects.map((proj, idx) => (
              <motion.li
                key={idx}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 30px rgba(255, 105, 180, 0.5)",
                }}
                className="p-6 rounded-2xl bg-pink-400/20 border border-pink-300/40 cursor-pointer transition-shadow"
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-2xl font-semibold text-white">
                    {proj.title}
                  </h3>
                  <span className="text-sm text-pink-200 italic">
                    <FaClock /> {proj.time}
                  </span>
                </div>
                <p className="text-pink-100">{proj.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Education */}
        <motion.section
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-tea-300 drop-shadow-md">
            <FaGraduationCap /> Education
          </h2>
          <ul className="max-w-xl mx-auto space-y-4 text-white/90">
            <li>
              <strong>Bachelor of Computer Science</strong> — University XYZ (2015 - 2019)
              <br />
              Graduated with First Class Honors. Focused on software engineering and database systems.
            </li>
            <li>
              <strong>Online Courses</strong> — Various Platforms
              <br />
              Completed courses in React, Node.js, and DevOps best practices.
            </li>
          </ul>
        </motion.section>

        {/* Certificates */}
        <motion.section
          className="mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-tea-300 drop-shadow-md">
            <FaFileAlt /> Certificates
          </h2>
          <ul className="max-w-xl mx-auto space-y-3 text-white/90">
            <li>
              Certificate of Completion – Beltei International University (2023)
              <img
                src={htmlImg}
                alt="Beltei Certificate"
                className="w-full max-w-md rounded-lg shadow-lg mt-3"
              />
            </li>
            <li>
              Certificate of Completion – Beltei International University (2023)
              <img
                src={htmlImg}
                alt="Beltei Certificate"
                className="w-full max-w-md rounded-lg shadow-lg mt-3"
              />
            </li>
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section
          className="mb-0"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-5 flex items-center gap-3 text-tea-300 drop-shadow-md">
            <FaEnvelope size={28} /> Contact
          </h2>
          <div className="space-y-2 text-white/90 text-lg max-w-md mx-auto">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:vannytoch996@gmail.com" className="text-pink-200 hover:text-white underline">
                vannytoch996@gmail.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/vannytoch" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white underline">
                github.com/vannytoch
              </a>
            </p>
            {/* <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://linkedin.com/in/vannytoch" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white underline">
                linkedin.com/in/vannytoch
              </a>
            </p> */}
            <p>
              <strong>Telegram:</strong>{" "}
              <a href="https://t.me/Toch_Vanny" target="_blank" rel="noopener noreferrer" className="text-pink-200 hover:text-white underline">
                t.me/Toch_Vanny
              </a>
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
