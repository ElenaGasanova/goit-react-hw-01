import s from "./TransactionHistory.module.css";

import Transaction from "../Transaction/Transaction";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.container}>
      <thead className={s.head}>
        <tr className={s.row}>
          <th className={s.data}>Type</th>
          <th className={s.data}>Amount</th>
          <th className={s.data}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {items.map((item) => {
          return (
            <tr className={s.row} key={item.id}>
              <Transaction
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
