import React from "react";

const Portfolio = () => {
  const array = [
    {
      name: "YAAD NAI",
      singer: "VIKAS",
      link: "https://youtu.be/R2Qx_cvjgH8",
      thumb: "/p1.jpg",
    },
    {
      name: "SARDARI CHAPTER - 1",
      singer: "MANAVGEET GILL",
      link: "https://youtu.be/DS10hPbnDGE",
      thumb: "/p2.jpg",
    },
    {
      name: "UGLY DUNIYA",
      singer: "KARAN MAINI",
      link: "https://youtu.be/K3OtEiE1JSQ",
      thumb: "/p3.jpg",
    },
    {
      name: "QURBAAN",
      singer: "STEBIN BEN",
      link: "https://youtu.be/bKSUK7rZvag",
      thumb: "/p4.jpg",
    },
    {
      name: "INTRO - SARDARI",
      singer: "PRINCE 810",
      link: "https://youtu.be/reVMu5Hw1LE",
      thumb: "/p5.jpg",
    },
    {
      name: "IK JOGI",
      singer: "KANWAR GREWAL",
      link: "https://youtu.be/jFhn65nw2vo",
      thumb: "/p6.jpg",
    },
    {
      name: "RASHK",
      singer: "SUKHBIR GILL",
      link: "https://youtu.be/colPDffz1uM",
      thumb: "/p7.jpg",
    },
    {
      name: "BINDI",
      singer: "GARRY SANDHU & G KHAN",
      link: "https://youtu.be/bSbfE9eXKbI",
      thumb: "/p8.jpg",
    },
    {
      name: "JEE KARDA",
      singer: "G KHAN & KHAN SAAB",
      link: "https://youtu.be/xI6jLdsK15I",
      thumb: "/p9.jpg",
    },
  ];
  return (
    <div className=" min-h-screen flex flex-wrap justify-center items-center">
      {array.map((data, index) => (
        <div
          className={` w-[33.33vw] flex justify-center items-center h-[33.33vh]`}
          key={index}
        >
          <img
            onClick={() => {
              window.open(data.link);
            }}
            className="cursor-pointer"
            src={data.thumb}
            alt={`project${index + 1}`}
          />
          <div
            onClick={() => {
              window.open(data.link);
            }}
            className=" cursor-pointer h-[33.33vh] w-[33.33vw] flex justify-center items-center flex-col bg-[#0000008f] absolute text-center"
          >
            <h2 className="text-2xl font-semibold">{data.name}</h2>
            <h3>{data.singer}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
