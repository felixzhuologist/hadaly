import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AppRow from '../AppRow'
import Card from 'material-ui/lib/card/card';

const googleInfo = {
  company: 'Google',
  position: 'Software Engineer (New Grad)',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

const phoneScreenInfo = {
  'stageName': 'Phone Screen with John',
  'date': 'Feb 29th, 2016',
  'description': 'Quick 1 hour technical phone screen.'
}

const rowInfo = {
  'firstCard': googleInfo,
  'restCards': [phoneScreenInfo]
}

storiesOf('Companies', module)
  .add('draft', () => (
    <AppRow {...rowInfo}/>
  ))