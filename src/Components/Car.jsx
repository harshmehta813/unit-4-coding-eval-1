import React from "react";

const car = (props) => {
  const{
    name,
    type: {SUV, Hatchback, Sedan},
    year,
    price,
    image
  } = props.data;

  return (
    <>
    <div>
      <div>
        <h3> {name} </h3>
  {SUV ? (<p>SUV</p>) : Hatchback ? (<p>Hatchback</p>) : Sedan ? ((<p>Sedan</p>))}
  <p>{year}</p>
  <p>Price: ₹{price}</p>
        </div>
        <div>
          <img src={image} alt={name}/>
        </div>
        <div>
          <button>Buy Now</button>
          </div>
      </div>
    </>
  )
}