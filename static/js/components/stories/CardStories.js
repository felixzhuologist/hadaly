import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import '../../../stylesheets/main.css'

import AppRow from '../AppRow'
import CompanyCard from '../CompanyCard'
import StageCard from '../StageCard'
import OfferCard from '../OfferCard'
import NoOfferCard from '../NoOfferCard'
import PendingCard from '../PendingCard'
import * as api from '../../api'

storiesOf('Company Card', module)
  .add('Applied', () => (
    <CompanyCard {...api.googleInfo} />
  ))

storiesOf('Stage Card', module)
  .add('Phone Screen', () => (
    <StageCard {...api.phoneScreenInfo} />
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
      <AppRow {...api.rowInfo} />
      <AppRow {...api.rowInfo} />
    </div>
  ))

