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

import StageRow from '../StageRow';
import StageModal from '../StageModal';
import { getPresentationProps } from '../../reducers/stages';


class CompanyCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      expanded: false,
      stageModalOpen: false,
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState(nextProps)
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

  handleStageModalOpen = () => {
    this.setState({ stageModalOpen: true });
  }

  hanldeStageModalClose = () => {
    this.setState({ stageModalOpen: false });
  }

  render() {
    const footerAction = !this.state.expanded ?
      <FontIcon className="material-icons">expand_more</FontIcon> :
      <FontIcon className="material-icons">expand_less</FontIcon>

    const cardFooter = this.state.stages.length == 0 ?
      <CardActions>
        <FlatButton label="apply"
                    disabled={this.state.url === ""}
                    onTouchTap={() => window.open(this.state.url, '_blank')} />
        <FlatButton label="update" 
                    onTouchTap={this.handleStageModalOpen} />
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

    const dropDown = 
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      style={{position: 'absolute', top: '5px', right: '10px'}}
    >
      <MenuItem primaryText="Edit" onTouchTap={this.handleStageModalOpen} />
      <MenuItem primaryText="Delete" onTouchTap={() => this.state.deleteJob(this.state)} />
    </IconMenu>

    const stages = this.state.expanded && this.state.stages.length > 0 ?
      getPresentationProps(this.state.stages).map(stage => 
        <StageRow {...stage} key={stage.stageId} />) :
      null

    const styles = {
      cardStyles: {
        width: '92%', 
        margin: 'auto', 
        marginTop: '3%', 
        marginBottom: '3%'
      }
    }

    return (
      <Card 
        className="node" 
        expanded={this.state.expanded} 
        onExpandChange={this.handleExpandChange}
        style={styles.cardStyles} >
        <StageModal 
          stages={this.state.stages}
          jobId={this.state.jobId} 
          open={this.state.stageModalOpen} 
          openModal={this.handleStageModalOpen} 
          closeModal={this.hanldeStageModalClose} 
          company={this.state.company}
          position={this.state.position} />
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