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

const styles = {
  img: {
    maxHeight: '100px',
    maxWidth: '100px'
  }
}
const CompanyCard = ({company, position, description}) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={company}/>}
    >
      <img style={styles.img} src='http://i.imgur.com/HNauxCQ.png?1' />
    </CardMedia>
    <CardTitle title={position}/>
    <CardText>
      {description}
      <Call />
    </CardText>
    <CardActions expandable={true}>
      <FlatButton label="apply here" />
    </CardActions>
  </Card>
)

CompanyCard.PropTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default CompanyCard