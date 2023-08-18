import React from "react";
import "../css/Industries.scss";

const IndustriesWe = () => {
  const data = [
    {
      title: "Online marketplaces",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEX///8AAADExMT29vZCQkK+vr5ycnJsbGy3t7epqamEhITU1NTy8vKHh4eAgIDe3t6enp6vr69fX18SEhJQUFCXl5c2NjY8PDwuLi7p6ekgICBmZmYZGRnOzs4mJiZ6enpRUMPmAAACbUlEQVR4nO3b63KCMBAF4INoEYNVBG+02vd/y2LtRSDXhSQzds9fBT43mSErAUn0IDaACc9DOB5jE/KiyOMSFmiziEioLvjKpYpGEPiOiEX4FYwz0AmHDR6yOYQnzAU6EfPQhG4NRtWBSBgKWsMpJGF+HgqAM20sSAS5gGqgEE6FXAAUlLEgEOpUJQDSOgQhU9bgqw6Zf8KLVtAaXnwTMs0ofI+Fax0cCR9GQWv4GE/IVo9ZP8ywtYWgNazHEl77Z6xVnyjzOpKw7J/w50dZC9wMDoS9vQDY+yBsXQTAdnqCUw2c6mBLcKyBSx0sCaW7ACinI6xoAluDFSGnCSwNNgTDjUkXm0bLhjAml/gEi2bPOwGzJjoBwrCgDEAwNTkhCBBaQxCCvtEKQ8BZU4dABKTX6AQUyn/mghFQqBqtcASku+gEFHJDSAKKt+gEeaMlISz8EQCJYUhwaFgoGTY5A8LKr+C2EjUQCIt11/QX9z2Cc8NCyV5HCCLoGzqEAKNwz1ZFIDYslJRyArlhoSSXEQLW4JZySJiFFTw0WoglaBuMDqHxel9QZdH8EaoINbhlVv0QGmH+tp+I5k44RBPcmxwkx4iC1nBMcJU8ZQqZzRWRZuJfogNuiToT7oB6xJ9ZU6SokVS7rBuvdRG9i+0q2SLe6/yYDa/HBCYwgQlMYAITmOCJIHJJSsWOKy8ExRPQk9kwGUG1YcbcoE9GUO1dYgITmMAEJjCBCUxgAhOYwAQm/HOCxb4mOmFpRXjzSZDs75K9qGIuA5kgKYL8dZ2VSLVREpbQHicGe5qUhOR9rs+7gnCgHPYMr3oz4WkIn33nMSMaKt8fAAAAAElFTkSuQmCC",
    },
    {
      title: "Custom Saas application",
      img: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg",
    },
    {
      title: "Data visualization dashboard",
      img: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg",
    },
    {
      title: "Content sharing platform",
      img: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg",
    },
    {
      title: "Location-based apps",
      img: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg",
    },
    {
      title: "on-demand services platforms",
      img: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg",
    },
    {
      title: "Content sharing platform",
      img: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg",
    },
    {
      title: "Location-based apps",
      img: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg",
    },
    {
      title: "on-demand services platforms",
      img: "https://png.pngtree.com/element_our/sm/20180520/sm_5b0125134eb72.jpg",
    },
  ];
  return (
    <>
      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="industries-heading text-white fs-2 fw-bold">
          We can build for you
        </div>
        <div className="row ">
          {data.map((data, index) => (
            <div className="col-lg-4 mt-4 " key={index}>
              <div className="row m-1 bg-industries  py-4 rounded">
                <div className="col-2   d-flex align-items-center">
                  <img className="w-100" src={data.img} alt="" />
                </div>
                <div className="col-10   d-flex align-items-center">
                  <div className="text-white fs-5 title-indus fw-bold">
                    {data.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndustriesWe;
