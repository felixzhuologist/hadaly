import React from 'react';
import Card from 'material-ui/lib/card/card';
import CompanyCard from './CompanyCard'
import StageCard from './StageCard'
import OfferCard from './OfferCard'
import PendingCard from './PendingCard'
import Paper from 'material-ui/lib/paper';

const styles = {
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '150px',
  },

  cardContainer: {
    backgroundColor: 'red',
    height: '130px',
    width: '180px',
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 10,
    overflow: 'scroll'
  }
}

/* Returns a pending card/empty card if no end card is passed in to an AppRow */
const getEndCard = ({ companyCard, restCards }) => {
  let lastStage = restCards.length > 0 ? restCards[restCards.length - 1] : companyCard;
  return companyCard.date != undefined ? <PendingCard days_elapsed="5" /> : null
}

const AppRow = ({ companyCard, restCards, offerCard }) => {
  let endCard = offerCard != undefined ? <OfferCard {...offerCard} /> : 
                                        getEndCard({ companyCard, restCards })
  return (
    <Paper style={styles.row}>
      <div style={styles.cardContainer}>
        <CompanyCard {...companyCard} />
      </div>
      {restCards.map((cardInfo) => {
        return (
          <div style={styles.cardContainer}>
            <StageCard {...cardInfo} />
          </div>
        )
      })}
      <div style={styles.cardContainer}>
        {endCard}
      </div>
    </Paper>
  )
}

export default AppRow