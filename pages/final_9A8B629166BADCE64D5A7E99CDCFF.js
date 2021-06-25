/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect } from "react";

export default function Example() {
  const [counter, setCounter] = useState(20);
  if (process.browser) {
    setTimeout(() => {
      document.querySelectorAll(".hero-header").forEach((el) => el.remove());
    }, 20000);
  }
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <div>
      <div className="z-30 relative items-center justify-center w-full w-screen h-screen">
        <div>
          <div className="inset-0  h-screen">
            <iframe
              className="object-cover w-full h-full"
              src="https://www.youtube.com/embed/6onuv5Sjtog?autoplay=1&muted"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="hero-header absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-50"></div>
          <div
            data-aos="flip-down"
            className="hero-header absolute inset-0  z-30 container flex flex-col items-center justify-center h-full max-w-6xl pl-0 mx-auto  sm:pl-8 xl:pl-0 md:flex-row md:justify-between"
          >
            <div className="flex flex-col items-center justify-center mx-auto">
              <div className="relative text-center ">
                <h1 className="text-white relative mb-4 text-6xl font-bold font-sans italic leading-none text-center lg:text-9xl xl:text-9xl">
                  {" "}
                  42<br></br>
                  <span className="text-red-500">MADRID</span>
                </h1>
                <p className="text-gray-200 text-sm lg:text-4xl lg:text-center font-sans italic">
                  &quot;A diferencia de las cryptos, durante la piscina, el
                  mayor beneficio lo obtienes controlando las horas de
                  sueño.&quot;
                </p>
                <p className="text-gray-200 text-sm lg:text-4xl lg:text-center font-sans">{counter}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
