import React from "react";
import Image from "next/image";

import signup from "@/public/images/signup.jpg";

interface Props {}

const Authentication = () => {
  return (
    <div className="">
      <div className="">
        <Image
          src={signup}
          alt="signup"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      {/* <div>
        {params.authType === "signup" && (
          <Signup />}
      </div> */}
    </div>
  );
};

export default Authentication;
