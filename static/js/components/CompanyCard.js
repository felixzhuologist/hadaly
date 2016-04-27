import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const CompanyCard = ({company, position, description}) => (
  <Card>
    <CardHeader
      title={company}
      subtitle={position}
    />
    <CardText>
      {description}
    </CardText>
  </Card>
)

CompanyCard.PropTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default CompanyCard