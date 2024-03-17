import Header from "@/components/ui/Header";
import React from "react";

interface Props {}

const Trainings = () => {
  return (
    <div className="flex flex-row justify-center items-center my-20">
      <Header
        H3Header="Never Too Late"
        H1Header="TRAINING"
        H2Header="Certified Coaches"
        PHeader="Welcome to TENNIS NET club, home to certified coaches dedicated to enhancing your tennis skills. We offer beginner, intermediate, and advanced courses. Join us to elevate your game and enjoy the sport of tennis to the fullest!"
      />
    </div>
  );
};

export default Trainings;
