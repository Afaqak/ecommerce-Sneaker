import React from "react";

const Images = (props) => {
  const { images, i, thumb, onClickMove } = props;

  return (
    <>
      {thumb.map((img, ind) => {
        return (
          <img
            src={img}
            key={ind}
            onClick={() => onClickMove(images[ind])}
            alt="sneaker"
            className={`w-16 h-16
                ${i === ind && "border-4 border-primary"}
                rounded-md hover:border-primary hover:border-2 cursor-pointer`}
          />
        );
      })}
    </>
  );
};

export default Images;
