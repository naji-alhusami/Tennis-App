import React from "react";
import Image from "next/image";

import signup from "@/public/Images/signup.jpg";
import Login from "@/components/Authentication/LoginForm";

interface Props {}

const page = () => {
  return (
    // <div className="">
    //   <Image
    //     src={signup}
    //     alt="auth-background"
    //     sizes="100vw"
    //     objectFit="cover"
    //     fill
    //     priority
    //   />
    // </div>
    <div className="h-full relative">
      <div
        className=" h-screen w-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/images/signup.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundSize: "26rem",
            backgroundSize: "cover",
          // filter: "brightness(0.5)",
        }}
      ></div>
      <div className="w-full absolute top-32 z-10 flex justify-center items-center bg-white bg-opacity-60">
        <Login />
      </div>
    </div>
  );
};
{
  /* <div>
        {params.authType === "signup" ? (
          <Signup />
        ) : params.authType === "signin" ? (
          <Login callbackUrl={searchParams.callbackUrl || "/"} />
        ) : (
          <AddExtraInfo />
        )}
      </div> */
}
// </div>

export default page;
