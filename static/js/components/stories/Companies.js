import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import CompanyCard from '../CompanyCard'

const googleInfo = {
  company: 'Google',
  position: 'Software Engineer (New Grad)',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

storiesOf('Companies', module)
  .add('draft', () => (
    <CompanyCard {...googleInfo} />
  ))