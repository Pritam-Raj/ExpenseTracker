import React, { useState } from 'react'
import './Services.css'
import serviceimg from '../assets/service.png'

const Services = () => {
  const [form, setForm] = useState({
    date: '',
    total: '',
    category: '',
    description: '',
    invoice: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      invoice: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData();
    formData.append('date', form.date);
    formData.append('total', form.total);
    formData.append('category', form.category);
    formData.append('description', form.description);
    formData.append('invoice', form.invoice);

    try {
      const response = await fetch('http://localhost:3000/users/expenses', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Expense saved:', result);
      } else {
        console.error('Error saving expense');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='services'>
      <form className="expense-form" onSubmit={handleSubmit}>
        <h2>New Expense</h2>
        <label>
          Date
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </label>
        <label>
          Total
          <input type="number" name="total" value={form.total} onChange={handleChange} required />
          <select name="currency" value={form.currency} onChange={handleChange}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </label>
        <label>
          Category
          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="">Select category</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="accommodation">Accommodation</option>
            <option value="health">Health</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Description
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </label>
        <label>
          Upload an invoice
          <input type="file" onChange={handleFileChange} />
        </label>
        <button className='buttons' type="submit">Add Your Expense</button>
      </form>
      <div className="serviceimg">
        <img className='service-image' src={serviceimg} alt="" />
      </div>
    </div>
  )
}

export default Services