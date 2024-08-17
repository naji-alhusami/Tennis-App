import { buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import React from "react";
import Signup from "./Signup";

interface SignupDrawerProps {
  onClose: () => void;
}

const SignupDrawer: React.FC<SignupDrawerProps> = ({ onClose }) => {
  return (
    <Drawer>
      {/* <DrawerTrigger className={buttonVariants()}>
        {" "}
        Become Member &rarr;
      </DrawerTrigger> */}
      <Signup onClose={onClose} />
    </Drawer>
  );
};

export default SignupDrawer;
