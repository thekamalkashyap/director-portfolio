import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Hero from "@/components/home/Hero";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const index = useRef();
  const cardsContainer = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      let cards = gsap.utils.toArray(".slide");
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: cardsContainer.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => "+=" + cardsContainer.current.offsetWidth,
        },
      });
    }, index);

    return () => {
      ctx.revert();
    };
  }, []);

  const data = [
    {
      heading: "About me",
      description: `I have always had a staunch interest in films, music
      videos and visual media. Throughout my schooling, I have always made 
       it a point to engage in extracurricular activities related to this 
       field and having a lot of passion for filmmaking, brought me an 
       opportunity to get engaged in an internship, as an Editor and Assistant
        Director, during my high school. Till the end of my schooling, I have
         been part of more than 30 music videos as Chief Assistant Director,
          Editor and VFX Artists in numerous independent projects.`,
    },
    {
      heading: "Immersion",
      description: `I believe that, with multitasking a wish to turn into a 
      Superman can be made possible. Here I introduce myself well inclined to 
      Direction, Video Editing, Graphic designing, Writing, Sketching and music
       programming.`,
    },
  ];

  return (
    <main className={"overflow-hidden"} ref={index}>
      <Hero />
      <div ref={cardsContainer} className=" w-[300vw] flex">
        {data.map((info, index) => {
          const isEven = index % 2 == 0;
          return (
            <section
              key={index}
              className={`slide ${
                isEven
                  ? "bg-[#1a1a1a] md:flex-row text-white"
                  : "md:flex-row-reverse bg-white text-black "
              } px-2 md:px-24 w-screen h-screen flex flex-col-reverse justify-center items-center `}
            >
              <div
                className={`flex-1 flex flex-col justify-center items-center ${
                  isEven ? "md:items-start" : "md:items-end text-right"
                } `}
              >
                <h2 className=" text-4xl font-bold my-6 ">{info.heading}</h2>
                <p className="max-w-[35rem] text-xs md:text-base">{info.description}</p>
              </div>
              <div className="flex-1 mx-6 flex justify-center items-center">
                <img className=" rounded-xl " src="./bg.jpeg" alt={`img-${index + 1}`} />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
