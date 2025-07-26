import React, { useState } from 'react';
import VelocityChart from './components/VelocityChart';
import './App.css';

// Main application component. Manages sprint data and show/hide state,
// passes this information to the VelocityChart component.
function App() {
  // Example sprint data (e.g. from a future fetch). Each sprint has a name
  // and a ticketCount representing number of tickets completed.
  const [sprints] = useState([
    { id: 1, name: 'Sprint 1', ticketCount: 10 },
    { id: 2, name: 'Sprint 2', ticketCount: 20 },
    { id: 3, name: 'Sprint 3', ticketCount: 15 },
    { id: 4, name: 'Sprint 4', ticketCount: 5 },
    { id: 5, name: 'Sprint 5', ticketCount: 12 },
  ]);

  // State to toggle bar visibility. This is controlled by the
  // checkbox in the UI. It toggles whether to show or hide bars.
  const [showBars, setShowBars] = useState(true);

  return (
    <div className="App">
      <h1>JIRA Velocity Bar Chart</h1>
      <label className="toggle">
        <input
          type="checkbox"
          checked={showBars}
          onChange={() => setShowBars(!showBars)}
        />
        Show bars
      </label>
      <VelocityChart sprints={sprints} showBars={showBars} />
    </div>
  );
}

export default App;
