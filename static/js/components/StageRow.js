import React from 'react';
import { ListItem } from 'material-ui/lib/lists';
import FontIcon from 'material-ui/lib/font-icon';

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '70px',
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
    height: '70%',
    width: '18%',
    margin: 'auto',
  },
  line: {
    height: '30%',
    width: '100%',
  },
  title: {
    width: '100%',
    height: '25%',
    fontSize: '16',
    marginTop: '10%'
  },
  subtitle: {
    width: '95%',
    height: '25%',
    fontSize: '12',
    marginLeft: '5px'
  },
  strip: {
    width: '3%',
    height: '100%',
    margin: 'auto',
    backgroundColor: 'grey'
  },
  para: {
    margin: 0
  }
}

const stage_type_to_icon = {
  Phone: "phone",
  Onsite: "flight_takeoff"
}

const StageRow = (props) => {
  console.log(props)
  let icon = <FontIcon style={{top: '50%'}} className="material-icons">
                {stage_type_to_icon[props.type]}
              </FontIcon>
  return (
    <div style={styles.container} className="stage-row-container">
      <div style={styles.timeline} className="stage-row-timeline">
        <div style={styles.icon} className="stage-row-icon">
          {icon}
        </div>
        <div style={styles.line} className="stage-row-line">
          <div style={styles.strip} className="stripe">
          </div>
        </div>
      </div>
      <div style={styles.text} className="stage-row-text">
        <div style={styles.title} className="stage-row-title">
          <p style={styles.para} > {props.type + " interview"} </p>
        </div>
        <div style={styles.subtitle} className="stage-row-subtitle">
          <p style={styles.para} > Received response in 9 days </p>
        </div>
      </div>
    </div>
  )
}

export default StageRow
