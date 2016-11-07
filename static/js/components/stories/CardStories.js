import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import '../../../stylesheets/main.css';

import StageRow from '../StageRow';
import * as api from '../../api';

storiesOf('Stage Row', module)
  .add('Phone Screen', () => (
    <StageRow {...api.phoneScreenInfo} />
  ))