import WelcomeHome from "@/components/Home/WelcomeHome";
import Services from "@/components/Home/Services/Services";
import Trainings from "@/components/Home/Trainings/Trainings";
import Booking from "@/components/Home/Booking/Booking";

export default function Home() {
  return (
    <>
      <WelcomeHome /> <Services /> <Trainings /> <Booking />
    </>
  );
}
