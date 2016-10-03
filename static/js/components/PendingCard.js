import React, { PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';

const PendingCard = ({ days_elapsed }) => {
  console.log(days_elapsed);
  return (
    <Card className="node" >
      <CardHeader
        title={days_elapsed + " days since last step"}
      />
      <CardActions>
        <FlatButton label="Follow up" />
        <FlatButton label="Update" />
      </CardActions>
    </Card>
  )}

PendingCard.PropTypes = {
  days_elapsed: PropTypes.number.isRequired,
}

export default PendingCard