import styles from "@/styles/page.module.scss";

import StatusBookList from "./StatusBookList";

const BookData = () => {
  return (
    <div className={styles.bookData}>
      <StatusBookList />
    </div>
  );
};

export default BookData;
