import React, { PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

const OfferCard = ({ deadline, terms }) => (
  <Card className="node" >
    <CardHeader
      title="Congratulations!"
      subtitle={"Deadline: " + deadline}
    />
  </Card>
)

OfferCard.PropTypes = {
  deadline: PropTypes.string,
  terms: PropTypes.string
}

export default OfferCard