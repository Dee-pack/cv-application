import { useState } from "react";

export default function GeneralInfo() {
  const [data, setData] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <section className="card">
        <h1>{data.name}</h1>
        <p>{data.email} · {data.phone}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </section>
    );
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input name="name" value={data.name} onChange={handleChange} placeholder="Full name" required />
      <input name="email" type="email" value={data.email} onChange={handleChange} placeholder="Email" />
      <input name="phone" value={data.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit">Save</button>
    </form>
  );
}