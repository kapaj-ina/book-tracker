import styles from "@/styles/modal.module.scss";

type Props = {
  onClose: () => void;
  handleDeleteBook: (tab: string, index: number) => void;
};

const DeleteBook = ({ onClose, handleDeleteBook }: Props) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Delete Book</h2>
        <p>Are you sure you want to delete this book?</p>
        <div className={styles.modalButtons}>
          <button
            type="button"
            onClick={onClose}
            className={styles.modalCancelButton}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={styles.modalAddButton}
            onClick={() => handleDeleteBook}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteBook;
