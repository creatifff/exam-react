import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const SinglePage = () => {
  // Получение полей одного предмета
  const params = useParams();

  // Стейт одного предмета
  const [item, setItem] = useState({});

  // Получение данных одного предмета с API через fetch (GET)
  useEffect(() => {
    fetch(`https://flowers.avavion.ru/api/products/${params.id}`)
      .then((response) => response.json()) // преобразование в json формат для чтения
      .then((data) => setItem(data.data)); // запись в массив всех предметов
  }, []);

  return (
    <>
      <div className="single__page">
        <img className="single__img" src={item.preview_image} alt={item.name} />
        <div className="container single-img">
          <div className="single__info">
            <h2>{item.name}</h2>
            <p className="text">{item.text}</p>
            <div className="btnprice">
              <span>
                Стоимость: <span className="price">{item.price} руб.</span>
              </span>
              <button>В корзину</button>
            </div>
            <br />
            <span className="quantity">В наличии: {item.quantity} шт.</span>
            <div сlassName="add">
              
            </div>
            <NavLink className="button" to={`/`}>
              Назад
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
