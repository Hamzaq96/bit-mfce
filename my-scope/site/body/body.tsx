import React, { ReactNode } from 'react';
import './body.css'

export function Body(props:any) {
  return (
    <div className="container">
      <div className="image"></div>
      <div className="content">
        <h1>Futuristic shoes</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Quia, commodi. Molestiae blanditiis quis, laborum necessitatibus
            pariatur quam ipsa accusamus corporis,
           minima labore recusandae earum reprehenderit saepe autem ratione, laudantium natus.
        </p>
      </div>
    </div>
  );
}