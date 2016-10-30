import React from 'react';
import { ListItem } from 'material-ui/lib/lists';
import FontIcon from 'material-ui/lib/font-icon';

let styles = {
  container: {
    display: 'flex',
    width: '250px',
    height: '150px',
    backgroundColor: 'black'
  },
  timeline: {
    width: '30%',
    height: '100%',
  },
  text: {
    width: '70%',
    height: '100%'
  },
  icon: {
    height: '30%',
    width: '100%',
    backgroundColor: 'red'
  },
  line: {
    height: '70%',
    width: '100%',
    backgroundColor: 'blue'
  },
  title: {
    width: '100%',
    height: '50%',
    backgroundColor: 'green'
  },
  subtitle: {
    width: '100%',
    height: '25%',
    backgroundColor: 'yellow'
  }
}

const StageRow = (props) => {
  let icon = <FontIcon className="material-icons">phone</FontIcon>
  return (
    <div style={styles.container} className="stage-row-container">
      <div style={styles.timeline} className="stage-row-timeline">
        <div style={styles.icon} className="stage-row-icon">
        </div>
        <div style={styles.line} className="stage-row-line">
          <div className="stripe">
          </div>
        </div>
      </div>
      <div style={styles.text} className="stage-row-text">
        <div style={styles.title} className="stage-row-title">
        </div>
        <div style={styles.subtitle} className="stage-row-subtitle">
        </div>
      </div>
    </div>
  )
}

export default StageRow
