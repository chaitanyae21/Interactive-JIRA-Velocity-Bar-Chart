import React from 'react';
import PropTypes from 'prop-types';
import './VelocityChart.css';

// Component to display sprint velocity as an animated bar chart.
// Accepts sprints array and showBars boolean to toggle bar visibility.
function VelocityChart({ sprints, showBars }) {
  // Determine the maximum ticket count to scale bar heights relative to this.
  const maxTickets = Math.max(...sprints.map((s) => s.ticketCount));

  return (
    <div className="chart-container">
      {sprints.map((sprint) => (
        <div key={sprint.id} className="bar-wrapper">
          <div
            className="bar"
            style={{
              height: `${(sprint.ticketCount / maxTickets) * 100}%`,
              opacity: showBars ? 1 : 0,
            }}
            title={`${sprint.name}: ${sprint.ticketCount} tickets`}
          >
            {/* bar label at top inside the bar */}
            <span className="label">{sprint.ticketCount}</span>
          </div>
          <div className="x-axis-label">{sprint.name}</div>
        </div>
      ))}
    </div>
  );
}

VelocityChart.propTypes = {
  sprints: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      ticketCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  showBars: PropTypes.bool.isRequired,
};

export default VelocityChart;
