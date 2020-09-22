import React from 'react';

//okay from here below
const Card = () => {

  const deck = [
    {
      titulo: 'first title',
      descricao: 'bla bla',
      botao: 'btn',
      imagem: 'https://picsum.photos/id/237/500/325'
    },
    {
      titulo: 'first title',
      descricao: 'bla bla',
      botao: 'btn',
      imagem: 'https://picsum.photos/id/237/500/325'
    },
    {
      titulo: 'first title',
      descricao: 'bla bla',
      botao: 'btn',
      imagem: 'https://picsum.photos/id/237/500/325'
    },
    {
      titulo: 'first title',
      descricao: 'bla bla',
      botao: 'btn',
      imagem: 'https://picsum.photos/id/237/500/325'
    }
  ]


  return (
    <div className="container">
      <div className="row">
        {deck.map((e, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              <img src={e.imagem} className="card-img-top" alt="..." />
              <div className="card-body">
        <h5 className="card-title">{e.titulo}</h5>
        <p className="card-text">{e.descricao}</p>
        <a href="#" className="btn btn-primary">{e.botao}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card;

