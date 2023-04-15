import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  // Стейт массива услуг
  const [items, setItems] = useState([]);

  // копия массива items для сброса к дефолту
  const [initialItems, setInitialItems] = useState([]);

  // Стейт запроса для поиска по имени услуги
  const [query, setQuery] = useState("");

  // новый массив услуг, по которому будет идти поиск
  const foundItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // Функция записывает в запрос то, что вводится в инпут поиска
  const onChangeQuery = (e) => {
    setQuery(e.target.value);
  };

  // Хранение данных в форме
  // По умолчанию пустые строки и первая услуга
  const [form, setForm] = useState({
    full_name: "",
    address: "",
    message: "",
    product_id: 1,
    email: "",
  });

  // Обработчик формы
  const onChangeForm = (event) => {
    setForm((prevState) => {
      // Создание копии массива данных из формы
      prevState = { ...prevState };

      // Ссылается на поле (input) и записываем новое значение
      prevState[event.target.name] = event.target.value.trim();

      // Возвращает новый данные в объект
      return prevState;
    });
  };

  // Выборка из категории (select)
  const onChangeSelect = (event) => {
    setForm((prevState) => {
      // Создание копии массива данных из формы
      prevState = { ...prevState };

      // Ссылается на поле (input) и записываем новое значение из массива select
      prevState[event.target.name] =
        event.target.options[event.target.selectedIndex].value;

      // Возвращает новый данные в объект
      return prevState;
    });
  };

  // Отправка заявки (POST)
  const send = (event) => {
    // Отмена перезагрузки страницы после отправки
    event.preventDefault();

    fetch("https://flowers.avavion.ru/api/applications/create", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json", // Отправление в формате json
        Accept: "application/json", // Получение в json
      },
    })
      .then((r) => r.json())
      .then(alert('Заявка отправлена'));
  };

  // Получение предметов с API через fetch (GET)
  useEffect(() => {
    fetch("https://flowers.avavion.ru/api/products")
      .then((response) => response.json()) // преобразование в json формат для чтения
      .then((data) => {
        setItems(data.data); // запись в основной массив
        setInitialItems(data.data); // запись в копию массива для сброса
      }); // запись в массив всех предметов
  }, []);

  // по возрастанию
  const sortByPriceIncrease = () => {
    // Копируем массив товаров
    const sortedItems = [...items];
    // Сортируем услугами по возрастанию цены
    sortedItems.sort((a, b) => (a.price > b.price ? 1 : -1));
    // Обновляем состояние, чтобы перерендерить компонент со вновь отсортированными услугами
    setItems(sortedItems);
  };

  // по убыванию
  const sortByPriceDecrease = () => {
    // Копируем массив услуг
    const sortedItems = [...items];
    // Сортируем услуги по возрастанию цены
    sortedItems.sort((a, b) => (a.price < b.price ? 1 : -1));
    // Обновляем состояние, чтобы перерендерить компонент со вновь отсортированными услугами
    setItems(sortedItems);
  };

  // кнопка для сброса сортировки
  const resetSort = () => {
    setItems(initialItems);
  };

  // фильтрация по тегу
  const filterByTag = (tag) => {
    const filteredItems = initialItems.filter((item) => item.tag === tag);
    setItems(filteredItems);
  };

  // сброс фильтра
  const filterByDefault = () => {
    setItems(initialItems);
  };

  return (
    <div className="container">
      <div>
        <form>
          <input
            onChange={(e) => onChangeForm(e)}
            type="text"
            name="full_name"
            placeholder="Ваше полное имя*"
          />
          <input
            onChange={(e) => onChangeForm(e)}
            type="text"
            name="address"
            placeholder="Адрес доставки"
          />
          <textarea
            onChange={(e) => onChangeForm(e)}
            name="message"
            placeholder="Комментарий (минимум 10 символов)"
          ></textarea>
          <input
            onChange={(e) => onChangeForm(e)}
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <select onChange={onChangeSelect.bind(this)} name="product_id">
            {items.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <button onClick={(e) => send(e)}>Отправить</button>
        </form>
      </div>

      {/* Поиск */}
      <input
        type="search"
        placeholder="Поиск"
        value={query}
        onChange={onChangeQuery.bind(this)}
      />

      {/* Сортировка */}
      <button onClick={sortByPriceIncrease}>По возрастанию цены</button>
      <button onClick={sortByPriceDecrease}>По убыванию цены</button>
      <button onClick={resetSort}>Не сортировать</button>

      

      {/* Фильтрация */}
      <div>
        <button onClick={() => filterByTag("Букеты")}>Букеты</button>
        <button onClick={() => filterByTag("Цветы")}>Цветы</button>
        <button onClick={() => filterByTag("Подарочная упаковка")}>
          Подарочная упаковка
        </button>
        <button onClick={() => filterByTag("Пасха")}>Пасха</button>
        <button onClick={() => filterByTag("Букеты из конфет")}>
          Букеты из конфет
        </button>
        <button onClick={() => filterByTag("14 февраля")}>14 февраля</button>
        <button onClick={() => filterByTag("8 марта")}>8 марта</button>
        <button onClick={() => filterByTag("Букеты из фруктов")}>
          Букеты из фруктов
        </button>
        <button onClick={() => filterByTag("Цветы в корзине")}>
          Цветы в корзине
        </button>
        <button onClick={() => filterByTag("Мужские букеты")}>
          Мужские букеты
        </button>
        <button onClick={filterByDefault}>Все</button>
      </div>

      {/* Вывод предметов из useState массива */}
      {/* Перебор через метод map */}
      {/* Итерируем по одному item */}
      <div className="items">
        {/* Если по запросу находится услуга, то выводится она */}
        {foundItems.length ? (
          foundItems.map((item) => {
            return (
              <div key={item.id} className="item">
                <NavLink to={`/products/${item.id}`}>
                  <img src={item.preview_image} alt={item.name} />
                </NavLink>
                <h2>{item.name}</h2>
                <span>{item.price} руб.</span>
                <p>{item.tag}</p>
              </div>
            );
          })
        ) : (
          <h3>По запросу "{query}" ничего не найдено</h3>
        )}
      </div>
    </div>
  );
};

export default HomePage;
