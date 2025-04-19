import styles from "@/styles/page.module.scss";

type Book = {
  title: string;
  author: string;
};

type BookTableProps = {
  books: Book[];
};

const BookTable = ({ books }: BookTableProps) => {
  if (!books.length) {
    return <p className={styles.empty}>No books to display.</p>;
  }

  return (
    <table className={styles.bookTable}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, i) => (
          <tr key={i}>
            <td>{book.title}</td>
            <td>{book.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
