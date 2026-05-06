const { useState: useAppState } = React;

function App() {
  const [currentView, setCurrentView] = useAppState('events'); // 'events', 'booking', 'confirmation'
  const [selectedEvent, setSelectedEvent] = useAppState(null);
  const [bookingDetails, setBookingDetails] = useAppState(null);

  const handleBookClick = (event) => {
    setSelectedEvent(event);
    setCurrentView('booking');
  };

  const handleConfirmBooking = (details) => {
    setBookingDetails(details);
    setCurrentView('confirmation');
  };

  const handleCancelBooking = () => {
    setSelectedEvent(null);
    setCurrentView('events');
  };

  const handleGoHome = () => {
    setSelectedEvent(null);
    setBookingDetails(null);
    setCurrentView('events');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Internal Department Event Tickets</h1>
      </header>
      
      <main className="app-main">
        {currentView === 'events' && (
          <EventList onBook={handleBookClick} />
        )}
        
        {currentView === 'booking' && selectedEvent && (
          <BookingForm 
            event={selectedEvent} 
            onConfirm={handleConfirmBooking} 
            onCancel={handleCancelBooking}
          />
        )}
        
        {currentView === 'confirmation' && bookingDetails && (
          <Confirmation 
            bookingDetails={bookingDetails} 
            onHome={handleGoHome} 
          />
        )}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
