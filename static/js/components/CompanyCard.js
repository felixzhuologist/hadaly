import React, { PropTypes } from 'react';
import {Card, 
        CardActions,
        CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import StageRow from './StageRow';
import { getPresentationProps } from '../reducers/stages';

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

    let cardFooter = this.state.stages.length == 0 ?
      <CardActions>
        <FlatButton label="apply" onTouchTap={() => console.log("")} />
      </CardActions>
      :
      <div style={{padding: '10px'}}>
        <FlatButton label={!this.state.expanded ? 
                          "view steps (" + this.state.stages.length + ")" :
                          "hide steps"} 
                    onTouchTap={() => this.handleToggle()} />
        <IconButton style={{float: 'right'}} 
                    onTouchTap={() => this.handleToggle()} >
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
      getPresentationProps(this.state.stages).map(stage => <StageRow {...stage} />) :
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