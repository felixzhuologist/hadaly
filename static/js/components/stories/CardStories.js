import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import '../../../stylesheets/main.css'

import AppRow from '../AppRow'
import CompanyCard from '../CompanyCard'
import StageCard from '../StageCard'
import OfferCard from '../OfferCard'
import NoOfferCard from '../NoOfferCard'
import PendingCard from '../PendingCard'


const googleInfo = {
  company: 'Google',
  position: 'Software Engineer (New Grad)',
  date: 'September 20th, 2016'
}

const phoneScreenInfo = {
  'stageName': 'Phone Screen with John',
  'date': 'Feb 29th, 2016',
  'description': 'Quick 1 hour technical phone screen.'
}

const rowInfo = {
  'companyCard': googleInfo,
  'restCards': [phoneScreenInfo]
}

storiesOf('Company Card', module)
  .add('Applied', () => (
    <CompanyCard {...googleInfo} />
  ))

storiesOf('Stage Card', module)
  .add('Phone Screen', () => (
    <StageCard {...phoneScreenInfo} />
  ))

storiesOf('Pending Card', module)
  .add('Pending', () => (
    <PendingCard days_elapsed="10" />
  ))

storiesOf('End Card', module)
  .add('Offer', () => (
    <OfferCard deadline="December 30th, 2016" />
  ))
  .add('No Offer', () => (
    <NoOfferCard />
  ))

storiesOf('Row', module)
  .add('Screen + Offer', () => (
    <div>
      <AppRow {...rowInfo} />
      <AppRow {...rowInfo} />
    </div>
  ))

