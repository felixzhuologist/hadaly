import React from 'react';
import Card from 'material-ui/lib/card/card';
import CompanyCard from './CompanyCard'
import StageCard from './StageCard'
import Paper from 'material-ui/lib/paper';

const styles = {
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '150',
  },

  cardContainer: {
    backgroundColor: 'red',
    height: '130',
    width: '180',
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 10,
    overflow: 'scroll'
  }
}
const AppRow = ({ firstCard, restCards }) => (
  <Paper style={styles.row}>
    <div style={styles.cardContainer}>
      <CompanyCard {...firstCard} />
    </div>
    {restCards.map((cardInfo) => {
      return (
        <div style={styles.cardContainer}>
          <StageCard {...cardInfo} />
        </div>
      )
    })}
  </Paper>
)

AppRow.PropTypes = {
}

export default AppRow