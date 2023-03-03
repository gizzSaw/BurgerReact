import style from "./CatalogProduct.module.css";

export const CatalogProduct = (props) => (
  <article className={style.product}>
    <img src="img/photo-1.jpg" alt={props.title} className="product__image" />

    <p className={style.price}>
      550<span className="currency">₽</span>
    </p>

    <h3 className={style.title}>
      <button className={style.detail}>{props.title}</button>
    </h3>

    <p className={style.weight}>512г</p>

    <button className={style.add} type="button">
      Добавить
    </button>
  </article>
);

/*
<article className="product">
                <img
                  src="img/photo-1.jpg"
                  alt="Супер сырный"
                  className="product__image"
                />

                <p className="product__price">
                  550<span className="currency">₽</span>
                </p>

                <h3 className="product__title">
                  <button className="product__detail">Супер сырный</button>
                </h3>

                <p className="product__weight">512г</p>

                <button className="product__add" type="button">
                  Добавить
                </button>
              </article>
*/
