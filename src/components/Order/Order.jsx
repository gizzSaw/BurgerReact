import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderRequestAsync } from "../../store/order/orderSlice";
import { OrderGoods } from "../OrderGoods/OrderGoods";
import style from "./Order.module.css";

const orderList = ["Бастурма", "Селёдка", "Сыр"];

export const Order = () => {
  const { totalPrice, totalCount } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, []);

  return (
    <div className={style.order}>
      <section className={style.wrapper}>
        <div className={style.header} tabIndex="0" role="button">
          <h2 className={style.title}>Корзина</h2>

          <span className={style.count}>4</span>
        </div>

        <div className={style.wrap_list}>
          <ul className={style.list}>
            {orderList.map((item, i) => (
              <OrderGoods key={i} title={item} />
            ))}
          </ul>

          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className={style.amount}>{totalPrice} </span>
              <span className={style.currency}>₽</span>
            </p>
          </div>

          <button className={style.submit}>Оформить заказ</button>
          <div className={style.apeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button className={style.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
