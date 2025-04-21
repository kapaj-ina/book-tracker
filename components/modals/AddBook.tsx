import { useState } from "react";
import styles from "@/styles/modal.module.scss";
import { Book } from "@/types/book";

type Props = {
  onClose: () => void;
  onAddBook: (newBook: Book) => void;
};

const AddBook = ({ onClose, onAddBook }: Props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const newBook: Book = { title, author };
    onAddBook(newBook);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        <h2 className={styles.modalTitle}>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
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

export default AddBook;
