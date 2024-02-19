import { cn } from "@/lib/utils";

import { pacifico } from "./fonts";
import Wrapper from "@/components/ui/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <h1 className={cn(" text-rose-500 text-4xl", pacifico.className)}>
        TENNIS-NET
      </h1>
    </Wrapper>
  );
}
