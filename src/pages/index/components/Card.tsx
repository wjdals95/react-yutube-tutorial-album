import styles from "./Card.module.scss";

function Card() {
  const openDialog = () => {
    console.log("카드호출");
  };
  return (
    <div className={styles.card} onClick={openDialog}>
      <img src="" alt="" className={styles.card__image} />
    </div>
  );
}

export default Card;
