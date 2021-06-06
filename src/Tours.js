import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  const {name} = tours;
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
      {tours.map((item) =>{
        return <Tour key = {item.key} {...item} removeTour = {removeTour}></Tour>
      }
      

      )}
      </div>
    </section>
 
  );
};

export default Tours;
