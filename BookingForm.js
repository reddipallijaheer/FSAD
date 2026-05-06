const { useState } = React;

function BookingForm({ event, onConfirm, onCancel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
    const localPart = email.split('@')[0];
    return /[a-zA-Z]/.test(localPart);
  };

  const validateName = (name) => {
    return /^[a-zA-Z\s]{2,50}$/.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateName(name.trim())) {
      setError('Please enter a valid name (letters and spaces only, min 2 characters).');
      return;
    }

    if (!validateEmail(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    onConfirm({ name, email, event });
  };

  return (
    <div className="card booking-form">
      <h2>Book Ticket</h2>
      <p style={{ marginBottom: '1.5rem', color: '#cbd5e1' }}><strong>Event:</strong> {event.name}</p>
      
      {error && <div className="alert alert-danger" style={{ color: '#ef4444', marginBottom: '1rem' }}>{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            placeholder="Enter your name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email"
          />
        </div>
        
        <div className="button-group">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          <button type="submit" className="btn btn-primary">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
}
