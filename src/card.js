import React from 'react';  

//okay from here below

const Card= ()=> {  

  

  return(
    <div className="container">
      <div className="row">
      <div className="col-md-3">
          <div className="card">
          <img src="https://picsum.photos/id/237/500/325" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
     </div>
          
      </div>
    </div>
  )
}

export default Card;

