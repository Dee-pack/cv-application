import { useState } from "react";

const emptyEntry = () => ({
  id: crypto.randomUUID(),
  company: "",
  position: "",
  resp: "",
  from: "",
  until: "",
});

export default function Experience() {
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
        <h2 className="section-title">Experience</h2>
        {entries.map((entry) => (
          <div key={entry.id} className="entry">
            <div className="entry-header">
              <h3>{entry.company}</h3>
              <span className="muted">
                {entry.from} - {entry.until}
              </span>
            </div>
            <p>{entry.position}</p>
            <p>{entry.resp}</p>
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
      <h2 className="section-title">Experience</h2>
      {entries.map((entry) => (
        <div key={entry.id} className="entry entry-form">
          <input
            name="company"
            value={entry.company}
            onChange={(e) => handleChange(entry.id, e)}
            placeholder="Company name"
            required
          />
          <input
            name="position"
            value={entry.position}
            onChange={(e) => handleChange(entry.id, e)}
            placeholder="Job Title"
          />
          <input
            name="resp"
            value={entry.resp}
            onChange={(e) => handleChange(entry.id, e)}
            placeholder="Job Descrption"
          />
          <input
            name="from"
            value={entry.from}
            onChange={(e) => handleChange(entry.id, e)}
            placeholder="Start Date"
          />
          <input
            name="until"
            value={entry.until}
            onChange={(e) => handleChange(entry.id, e)}
            placeholder="End Date"
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
          + Add Experience
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}
