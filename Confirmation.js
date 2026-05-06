const { useState, useEffect } = React;

function Confirmation({ bookingDetails, onHome }) {
  const [emailStatus, setEmailStatus] = useState('sending');

  useEffect(() => {
    // Simulate sending an email with a timeout
    const timer = setTimeout(() => {
      setEmailStatus('sent');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="card confirmation">
      <div className="success-icon">✓</div>
      <h2>Booking Confirmed!</h2>
      <p className="success-message">Your ticket has been successfully booked.</p>
      
      <div style={{ margin: '1rem 0', padding: '0.8rem', borderRadius: '8px', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        {emailStatus === 'sending' ? (
          <>
            <span className="spinner" style={{ width: '16px', height: '16px', border: '2px solid transparent', borderTopColor: '#34d399', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></span>
            <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Sending confirmation email to <strong>{bookingDetails.email}</strong>...</span>
          </>
        ) : (
          <>
            <span style={{ color: '#34d399' }}>✉️</span>
            <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Confirmation email sent to <strong>{bookingDetails.email}</strong>!</span>
          </>
        )}
      </div>
      
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>

      <div className="booking-details">
        <h3>Booking Summary</h3>
        <p><strong>Name:</strong> <span>{bookingDetails.name}</span></p>
        <p><strong>Email:</strong> <span>{bookingDetails.email}</span></p>
        <p><strong>Event:</strong> <span>{bookingDetails.event.name}</span></p>
        <p><strong>Date:</strong> <span>{bookingDetails.event.date}</span></p>
        <p><strong>Venue:</strong> <span>{bookingDetails.event.venue}</span></p>
      </div>
      
      <button className="btn" onClick={onHome}>Back to Events</button>
    </div>
  );
}
