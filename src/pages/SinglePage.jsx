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
    fetch(`https://api.avavion.ru/api/products/${params.id}`)
      .then((response) => response.json()) // преобразование в json формат для чтения
      .then((data) => setItem(data.data)); // запись в массив всех предметов
  }, []);

  return (
    <>
      <div className="item">
        <img src={item.image_url} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.text}</p>
        <span>Стоимость: {item.price} руб.</span><br />
        <span>В наличии: {item.quantity} шт.</span>
        <p>Категория: {item.tag}</p>
        <NavLink to={`/`}>Назад</NavLink>
      </div>
    </>
  );
};

export default SinglePage;
