import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import FlatButton from 'material-ui/lib/flat-button';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import FontIcon from 'material-ui/lib/font-icon';
import Call from 'material-ui/lib/svg-icons/communication/call';

const CompanyCard = ({company, position, date}) => (
  <Card className="node" >
    <CardTitle title={company} subtitle={position} />
    <CardText> Applied {date} </CardText>
  </Card>
)

CompanyCard.PropTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  date: PropTypes.string
}

export default CompanyCard