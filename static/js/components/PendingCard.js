import React, { PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

const PendingCard = ({ days_elapsed }) => (
  <Card className="node" >
    <CardHeader
      title={days_elapsed + " days since last step"}
    />
  </Card>
)

PendingCard.PropTypes = {
  days_elapsed: PropTypes.number,
}

export default PendingCard