import { configure } from '@kadira/storybook';

function loadStories() {
  require('../static/js/components/stories/Companies');
  // require as many stories as you need.
}

configure(loadStories, module);