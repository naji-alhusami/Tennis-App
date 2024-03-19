import Header from "@/components/ui/Header";
import React from "react";
import { TrainingLevelsData } from "./TrainingsData";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import player1 from "@/public/images/player1.jpg";
import player2 from "@/public/images/player2.jpg";

interface Props {}

const Trainings = () => {
  return (
    <div className="mx-10 my-40 flex flex-row">
      <div className="hidden lg:flex lg:flex-row lg:h-full lg:mr-4">
        <div className="mr-2">
          <Image
            className="lg:h-[30rem] xl:h-[29rem]"
            src={player1}
            alt="player1"
          />
        </div>
        <div className="ml-2">
          <Image
            className="lg:h-[30rem] xl:h-[29rem]"
            src={player2}
            alt="player1"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div>
          <Header
            H3Header="Never Too Late"
            H1Header="TRAINING"
            H2Header="Certified Coaches"
            PHeader="Welcome to TENNIS NET club, home to certified coaches dedicated to enhancing your tennis skills. We offer beginner, intermediate, and advanced courses. Join us to elevate your game and enjoy the sport of tennis to the fullest!"
          />
        </div>
        <div className="w-full">
          {TrainingLevelsData.map((training) => (
            <div
              key={training.id}
              className="w-full h-6 bg-gray-500 relative my-6"
            >
              <div
                className={training.style}
                // ref={ref}
                // variants={{
                //   hidden: { width: 0 },
                //   visible: { width: `${training.width}%` },
                // }}
                // initial="hidden"
                // animate={mainControls}
                // transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p
                // ref={ref}
                // variants={{
                //   hidden: { opacity: 0, z: 100 },
                //   visible: { opacity: 1, z: 0 },
                // }}
                // initial="hidden"
                // animate={mainControls}
                // transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {training.courseType}
                </p>
                <span className="flex flex-row">
                  {/* <Number n={training.percent} /> */}
                  {training.percent}
                  &#37;
                </span>
              </div>
            </div>
          ))}
          <Button className={buttonVariants()}>
            Check Training Offers &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
