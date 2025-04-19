"use client";
import { useState } from "react";

import styles from "@/styles/page.module.scss";

import TabList from "./TabList";
import BookModal from "./BookModal";

const BookData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.bookData}>
      <button
        className={styles.bookAddButton}
        onClick={() => setIsModalOpen(true)}
      >
        + Add Book
      </button>
      <TabList />
      {isModalOpen && <BookModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default BookData;
