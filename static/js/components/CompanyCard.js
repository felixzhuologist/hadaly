import React, { PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Divider from 'material-ui/lib/divider';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import StageRow from './StageRow';

class CompanyCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, props, {
      expanded: false
    })
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  handleToggle = () => {
    console.log("???")
    if (this.state.expanded == true) {
      this.handleReduce()
    } else {
      this.handleExpand()
    }
  }

  render() {
    let footerAction = !this.state.expanded ?
      <FontIcon className="material-icons">expand_more</FontIcon> :
      <FontIcon className="material-icons">expand_less</FontIcon>

    let cardFooter = this.state.length == 0 ?
      <CardActions>
        <FlatButton label="apply" onTouchTap={() => console.log("")} />
      </CardActions>
      :
      <div style={{padding: '10px'}}>
        <FlatButton label={!this.state.expanded ? 
                          "view steps (" + this.state.stages.length + ")" :
                          "hide steps"} 
                    onTouchTap={() => this.handleToggle()} />
        <IconButton style={{float: 'right'}} onTouchTap={() => this.handleToggle()} >
          {footerAction}
        </IconButton>       
      </div>

    let dropDown = 
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      style={{position: 'absolute', top: '5px', right: '10px'}}
    >
      <MenuItem primaryText="Edit" />
      <MenuItem primaryText="Delete" />
    </IconMenu>

    let stages = this.state.expanded && this.state.stages.length > 0 ?
      this.state.stages.map(stage => <StageRow {...stage} />) :
      null

    return (
      <Card 
        className="node" 
        expanded={this.state.expanded} 
        onExpandChange={this.handleExpandChange} >
        <CardHeader
          avatar={this.state.profile}
          title={<div className="title"> {this.state.position} {dropDown} </div>}
          subtitle={this.state.company}
        />
        <Divider />
        {stages}
        {cardFooter}
      </Card>
    );
  }
}

CompanyCard.PropTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  date: PropTypes.string,
  stages: PropTypes.array,
}

export default CompanyCard