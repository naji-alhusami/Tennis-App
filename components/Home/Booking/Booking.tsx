import Header from "@/components/ui/Header";
import { DatePickerForm } from "@/components/ui/datepicker";
import React from "react";

interface Props {}

interface NumbersData {
  id: string;
  number: number;
  details: string;
}

const Numbers: NumbersData[] = [
  {
    id: "1",
    number: 20,
    details: "Courts",
  },
  {
    id: "2",
    number: 30,
    details: "Couches",
  },
  {
    id: "3",
    number: 90,
    details: "Players",
  },
];

const Booking = () => {
  return (
    <div className="mx-10 my-40">
      <Header
        H3Header="Courses, Lessons & Reserved Courts"
        H1Header="BEST COURTS"
        H2Header="Book Your Court"
        PHeader="Enjoy free bookings and focus on your game. Join us to play when you want, how you want, and elevate your tennis experience"
      />
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="w-full h-24 px-2 flex flex-row justify-between items-center shadow-2xl bg-white mb-4 md:px-6 md:mr-2 md:mb-0 md:h-44">
          {Numbers.map((number) => {
            return (
              <div
                key={number.id}
                className="flex flex-col justify-center items-center md:flex-row"
              >
                <h1 className="text-xl font-bold text-green-700 mr-1 md:text-4xl">
                  {number.number}
                </h1>
                <p className="font-bold">{number.details}</p>
              </div>
            );
          })}
        </div>
        <div
          className="h-44 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: "url('/images/calendarBackground.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <DatePickerForm />
        </div>
      </div>
    </div>
  );
};

export default Booking;
