import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

const StageCard = ({ stageName, date, description }) => (
  <Card className="node" >
    <CardHeader
      title={stageName}
      subtitle={date}
    />
    <CardText expandable={true}>
      {description}
    </CardText>
  </Card>
)

StageCard.PropTypes = {
  stageName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default StageCard