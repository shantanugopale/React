import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`${styles["updated-item"]} list-group-item`}>
      <span className={styles["updated-item-list"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
