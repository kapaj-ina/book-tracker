import { useState } from "react";
import styles from "@/styles/page.module.scss";
import DeleteBook from "./modals/DeleteBook";

type Book = {
  title: string;
  author: string;
  dateFinished?: string;
};

type TabKey = "Reading" | "Completed" | "Wishlist";

type BookTableProps = {
  books: Book[];
  tab: TabKey;
  handleDeleteBook?: (tab: TabKey, index: number) => void;
};

const BookTable = ({ books, tab }: BookTableProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!books.length) {
    return <p className={styles.empty}>No books to display.</p>;
  }

  const renderActions = () => {
    switch (tab) {
      case "Reading":
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <button className={styles.bookTableButton}>Update Progress</button>
            <button className={styles.bookTableButton}>Mark as Done</button>
          </div>
        );
      case "Completed":
        return (
          <>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className={styles.bookTableButton}>Edit</button>
              <button
                className={styles.bookTableButton}
                onClick={() => setIsModalOpen(true)}
              >
                Delete
              </button>
            </div>
            {isModalOpen && (
              <DeleteBook
                onClose={() => setIsModalOpen(false)}
                handleDeleteBook={() => {}}
              />
            )}
          </>
        );
      case "Wishlist":
        return (
          <div style={{ display: "flex", gap: "10px" }}>
            <button className={styles.bookTableButton}>Delete</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <table className={styles.bookTable}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          {tab === "Completed" && <th>Date Finished</th>}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, i) => (
          <tr key={i}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            {tab === "Completed" && <td>{book?.dateFinished}</td>}
            <td>{renderActions()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
