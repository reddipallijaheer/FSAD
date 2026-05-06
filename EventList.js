const events = [
  { id: 1, name: 'Tech Fest 2026', date: 'Oct 15, 2026', venue: 'Main Auditorium' },
  { id: 2, name: 'Department Seminar', date: 'Nov 02, 2026', venue: 'Conference Hall A' },
];

function EventList({ onBook }) {
  return (
    <div className="card event-list">
      <h2>Upcoming Events</h2>
      <div className="events">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <button className="btn" onClick={() => onBook(event)}>Book Ticket</button>
          </div>
        ))}
      </div>
    </div>
  );
}
