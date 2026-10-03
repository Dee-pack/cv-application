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
        entry.id === id ? { ...entry, [name]: value } : entry,
      ),
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
        <h2 className="section-title">Education</h2>
        {entries.map((entry) => (
          <div key={entry.id} className="entry">
            <div className="entry-header">
              <h3>{entry.school}</h3>
              <span className="muted">{entry.year}</span>
            </div>
            <p>{entry.title}</p>
          </div>
        ))}
        <button className="btn btn-ghost" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </section>
    );
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2 className="section-title">Education</h2>
      {entries.map((entry) => (
        <div key={entry.id} className="entry entry-form">
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
            placeholder="Course of study"
          />
          <input
            name="year"
            value={entry.year}
            onChange={(e) => handleChange(entry.id, e)}
            placeholder="2018 - 2022"
          />
          <button
            type="button"
            className="btn btn-ghost btn-danger"
            onClick={() => removeEntry(entry.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="actions">
        <button type="button" className="btn btn-ghost" onClick={addEntry}>
          + Add education
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}
