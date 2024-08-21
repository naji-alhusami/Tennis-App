import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

interface Props {}

const pages = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
};

export default pages;
