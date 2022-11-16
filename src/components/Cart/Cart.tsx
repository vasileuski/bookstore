import React from "react";
import { CartBookCard } from "../CartBookCard/CartBookCard";

const arr: {}[] = [
  {
    title: "Deno Succinctly",
    subtitle: "",
    isbn13: "9781642002140",
    price: "$0.00",
    image: "https://itbook.store/img/books/9781642002140.png",
    url: "https://itbook.store/books/9781642002140",
  },
  {
    title: "Robotics, AI, and Humanity",
    subtitle: "Science, Ethics, and Policy",
    isbn13: "9783030541729",
    price: "$59.99",
    image: "https://itbook.store/img/books/9783030541729.png",
    url: "https://itbook.store/books/9783030541729",
  },
  {
    title: "Introduction to Autonomous Robots, 3rd Edition",
    subtitle: "",
    isbn13: "9781493773077",
    price: "$20.99",
    image: "https://itbook.store/img/books/9781493773077.png",
    url: "https://itbook.store/books/9781493773077",
  },
  {
    title: "Learning Go",
    subtitle: "An Idiomatic Approach to Real-World Go Programming",
    isbn13: "9781492077213",
    price: "$35.88",
    image: "https://itbook.store/img/books/9781492077213.png",
    url: "https://itbook.store/books/9781492077213",
  },
  {
    title: "Open Workbook of Cryptology",
    subtitle: "A project-based introduction to crypto in Python",
    isbn13: "1001656678502",
    price: "$0.00",
    image: "https://itbook.store/img/books/1001656678502.png",
    url: "https://itbook.store/books/1001656678502",
  },
];
export const Cart = () => {
  if (arr.length === 0) {
    return <h2 className="m-3">No products in the cart 😔</h2>;
  }
  return (
    <>
      <ul>
        {arr.map((item: any) => (
          <CartBookCard card={item} key={item.isbn13} />
        ))}
      </ul>
      <h2>Total:</h2>
    </>
  );
};
