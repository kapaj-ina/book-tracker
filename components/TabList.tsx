"use client";
import { useState } from "react";

import styles from "@/styles/page.module.scss";

import BookTable from "@/components/BookTable";

const booksData = {
  "All Books": [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "1984", author: "George Orwell" },
  ],
  Reading: [{ title: "The Midnight Library", author: "Matt Haig" }],
  Completed: [{ title: "To Kill a Mockingbird", author: "Harper Lee" }],
  Wishlist: [
    { title: "The Book Thief", author: "Markus Zusak" },
    { title: "Pachinko", author: "Min Jin Lee" },
    { title: "Circe", author: "Madeline Miller" },
  ],
};

type TabKey = keyof typeof booksData;

const TabList = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("All Books");
  const tabOptions = Object.keys(booksData) as TabKey[];

  return (
    <div className={styles.wrapper}>
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

      <BookTable books={booksData[activeTab]} />
    </div>
  );
};

export default TabList;
