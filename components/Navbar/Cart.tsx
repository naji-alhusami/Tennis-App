import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ShoppingCart } from "lucide-react";

interface Props {}

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="group ml-4 flex flex-row justify-center items-center">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="spacy-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
