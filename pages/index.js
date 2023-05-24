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
      heading: "Out There",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error fuga, dolorum",
    },
    {
      heading: "Immersion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error fuga, dolorum",
    },
    {
      heading: "To Infinity",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error fuga, dolorum",
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
              } px-24 w-screen h-screen flex flex-col-reverse justify-center items-center `}
            >
              <div
                className={`flex-1 flex flex-col justify-center items-center ${
                  isEven ? "md:items-start" : "md:items-end text-right"
                } `}
              >
                <h2>{info.heading}</h2>
                <div className="max-w-[25rem]">{info.description}</div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img src="./1.png" alt={`img-${index + 1}`} />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
