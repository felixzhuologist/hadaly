import { configure } from '@kadira/storybook';

function loadStories() {
  require('../static/js/components/stories/CardStories');
  // require as many stories as you need.
}

configure(loadStories, module);