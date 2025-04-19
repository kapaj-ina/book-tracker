import styles from "@/styles/modal.module.scss";

type Props = {
  onClose: () => void;
};

const BookModal = ({ onClose }: Props) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        <h2 className={styles.modalTitle}>Add a New Book</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter book title"
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="author" className={styles.label}>
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter author name"
              className={styles.inputField}
            />
          </div>

          <div className={styles.modalButtons}>
            <button
              type="button"
              onClick={onClose}
              className={styles.modalCancelButton}
            >
              Cancel
            </button>
            <button type="submit" className={styles.modalAddButton}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModal;
