import React, { useState, useEffect } from "react";
import { logoutUser, createEntry, getUserEntries, deleteEntry } from "../services/firebase";

export default function Dashboard({ user }) {
  const [title, setTitle] = useState("");
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserEntries(user.uid);
      setEntries(data);
    };
    fetchData();
  }, [user]);

  const handleAdd = async () => {
    if (!title) return;
    const id = await createEntry(user.uid, title);
    setEntries([...entries, { id, title, userId: user.uid }]);
    setTitle("");
  };

  const handleDelete = async (id) => {
    await deleteEntry(id);
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Welcome, {user.email}</h2>
      <button onClick={logoutUser} className="bg-red-500 text-white px-4 py-2 mb-4">
        Logout
      </button>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-grow"
          placeholder="New entry title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd} className="bg-green-500 text-white px-4">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {entries.map((e) => (
          <li key={e.id} className="flex justify-between items-center border p-2">
            {e.title}
            <button
              onClick={() => handleDelete(e.id)}
              className="bg-red-500 text-white px-2 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
