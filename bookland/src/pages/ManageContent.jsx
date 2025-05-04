// src/pages/ManageContent.jsx
import React, { useEffect, useState } from 'react';
import {
  fetchContent,
  createContent,
  updateContent,
  deleteContent,
} from '../utils/api';

const ManageContent = () => {
  const [items, setItems]     = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm]       = useState({
    title: '',
    slug: '',
    body: '',
    type: 'page',
  });

  // load once
  useEffect(() => {
    fetchContent().then(setItems).catch(console.error);
  }, []);

  const startEdit = item => {
    setEditing(item._id);
    setForm(item);
  };

  const save = async () => {
    if (editing) {
      const updated = await updateContent(editing, form);
      setItems(items.map(i => (i._id === editing ? updated : i)));
    } else {
      const created = await createContent(form);
      setItems([created, ...items]);
    }
    // reset
    setEditing(null);
    setForm({ title: '', slug: '', body: '', type: 'page' });
  };

  const remove = async id => {
    if (!window.confirm('Really delete this content?')) return;
    await deleteContent(id);
    setItems(items.filter(i => i._id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Manage Content</h2>

      {/* Form for Create / Update */}
      <div className="mb-6 p-4 border rounded">
        <input
          className="w-full mb-2 p-2 border"
          placeholder="Title"
          value={form.title}
          onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
        />
        <input
          className="w-full mb-2 p-2 border"
          placeholder="Slug"
          value={form.slug}
          onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
        />
        <select
          className="w-full mb-2 p-2 border"
          value={form.type}
          onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
        >
          <option value="page">Page</option>
          <option value="article">Article</option>
          <option value="quiz">Quiz</option>
        </select>
        <textarea
          className="w-full mb-2 p-2 border h-32"
          placeholder="Body (Markdown allowed)"
          value={form.body}
          onChange={e => setForm(f => ({ ...f, body: e.target.value }))}
        />

        <button
          onClick={save}
          className="px-4 py-2 bg-button text-white mr-2 rounded-md"
        >
          {editing ? 'Update' : 'Create'}
        </button>
        {editing && (
          <button
            onClick={() => {
              setEditing(null);
              setForm({ title: '', slug: '', body: '', type: 'page' });
            }}
            className="px-4 py-2 bg-gray-300"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Content list */}
      <div className="w-full overflow-x-auto">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gray-100">
        {['Type', 'Slug', 'Title', 'Actions'].map(h => (
          <th key={h} className="border p-2 text-left">{h}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {items.map(i => (
        <tr key={i._id}>
          <td className="border p-2">{i.type}</td>
          <td className="border p-2">{i.slug}</td>
          <td className="border p-2">{i.title}</td>
          <td className="border p-2">
            {/* flex-column on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <button
                onClick={() => startEdit(i)}
                className="w-full sm:w-auto px-2 py-1 bg-secondary rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => remove(i._id)}
                className="w-full sm:w-auto px-2 py-1 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div></div>
  );
};

export default ManageContent;
