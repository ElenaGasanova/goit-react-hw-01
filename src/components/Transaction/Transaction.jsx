import s from "./Transaction.module.css";

function Transaction({ type, amount, currency }) {
  return (
    <>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </>
  );
}

export default Transaction;
