"use client";
import { useState } from "react";

import styles from "@/styles/page.module.scss";

import BookTable from "@/components/BookTable";
import AddBook from "./modals/AddBook";
import { Book } from "@/types/book";

const StatusBookList = () => {
  const [booksData, setBooksData] = useState({
    Reading: [{ title: "The Midnight Library", author: "Matt Haig" }],
    Completed: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        dateFinished: "15/08/2023",
      },
    ],
    Wishlist: [
      { title: "The Book Thief", author: "Markus Zusak" },
      { title: "Pachinko", author: "Min Jin Lee" },
      { title: "Circe", author: "Madeline Miller" },
    ],
  });

  type TabKey = keyof typeof booksData;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("Reading");
  const tabOptions = Object.keys(booksData) as TabKey[];

  const handleAddBook = (newBook: Book) => {
    setBooksData((prev) => ({
      ...prev,
      Wishlist: [...prev.Wishlist, newBook],
    }));
    setIsModalOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      {activeTab === "Wishlist" && (
        <button
          className={styles.bookTableButton}
          onClick={() => setIsModalOpen(true)}
        >
          + Add Book
        </button>
      )}
      <div className={styles.tabButtons}>
        {tabOptions.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.active : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <BookTable
        books={booksData[activeTab]}
        tab={activeTab}
        handleDeleteBook={(tab: TabKey, index: number) => {
          setBooksData((prev) => ({
            ...prev,
            [tab]: prev[tab].filter((_, i) => i !== index),
          }));
          setActiveTab(tab);
        }}
      />
      {isModalOpen && (
        <AddBook
          onClose={() => setIsModalOpen(false)}
          onAddBook={handleAddBook}
        />
      )}
    </div>
  );
};

export default StatusBookList;
