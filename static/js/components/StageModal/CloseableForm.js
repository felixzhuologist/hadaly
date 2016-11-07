import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const styles = {
  container: {
    marginTop: '25px',
    position: 'relative'
  },
  iconDiv: {
    position: 'relative',
    width: '100%',
  },
  iconButton: {
    float: 'right',
    position: 'absolute',
    top: '-25px',
    right: '-10px',
  },
  iconDiv: {
    zIndex: 1,
  },
  icon: {
    color: 'lightgrey',
    height: '18px',
    width: '18px',
  },
}

const CloseableForm = ({ innerFields, onClose }) => (
  <div style={styles.container} >
    <div style={styles.iconDiv} >
      <div style={styles.iconButton} >
      <IconButton 
        style={styles.iconDiv}
        iconStyle={styles.icon}
        onTouchTap={onClose} >
        <NavigationClose />
      </IconButton>
      </div>
    </div>
    {innerFields}
  </div>
)

export default CloseableForm