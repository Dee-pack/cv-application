import { useState } from "react";

const emptyEntry = () => ({
    id: crypto.randomUUID(),
    company: "",
    position: "",
    resp: "",
    date: "",

});

export default function Experience() {
    const [entries, setEntries] = useState([emptyEntry()]);
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (id, e) => {
        const [name, value] = e.target;
        setEntries(
            entries.map((entry) => 
            entry,id === id ? { ...entry, [name]: value } : entry)
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
        <h2>Experience</h2>
        {entries.map((entry) => (
          <div key={entry.id}>
            <h3>{entry.company}</h3>
            <p>{entry.position}</p>
            <p>{entry.resp}</p>
            <p>{entry.date}</p>
          </div>
        ))}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </section>
    );
  }

  
  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Experience</h2>
      {entries.map((entry) => (
        <div key={entry.id}>
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
            name="date"
            value={entry.date}
            onChange={(e) => handleChange(entry.id, e)}
            placeholder="Date (Duration)"
          />
          <button type="button" onClick={() => removeEntry(entry.id)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addEntry}>+ Add Experience</button>
      <button type="submit">Save</button>
    </form>
  );
 


}
