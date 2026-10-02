import { useState } from "react";

const emptyEntry = () => ({
  id: crypto.randomUUID(),
  school: "",
  title: "",
  year: "",
});

export default function Education() {
  const [entries, setEntries] = useState([emptyEntry()]);
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, [name]: value } : entry
      )
    );
  };

  const addEntry = () => setEntries([...entries, emptyEntry()]);

  const removeEntry = (id) =>
    setEntries(entries.filter((entry) => entry.id !== id));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <section className="card">
        <h2>Education</h2>
        {entries.map((entry) => (
          <div key={entry.id}>
            <h3>{entry.school}</h3>
            <p>{entry.title}</p>
            <p>{entry.year}</p>
          </div>
        ))}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </section>
    );
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Education</h2>
      {entries.map((entry) => (
        <div key={entry.id}>
          <input
            name="school"
            value={entry.school}
            onChange={(e) => handleChange(entry.id, e)}
            placeholder="School name"
            required
          />
          <input
            name="title"
            value={entry.title}
            onChange={(e) => handleChange(entry.id, e)}
            placeholder="Title of study"
          />
          <input
            name="year"
            value={entry.year}
            onChange={(e) => handleChange(entry.id, e)}
            placeholder="2018 - 2022"
          />
          <button type="button" onClick={() => removeEntry(entry.id)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addEntry}>+ Add education</button>
      <button type="submit">Save</button>
    </form>
  );
}