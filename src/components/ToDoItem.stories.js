import TodoItem from './TodoItem.vue';

import { action } from '@storybook/addon-actions';

export default{
    component:TodoItem,
    title:'TodoItem',
    tags:['autodocs'],
    argTypes:{
        onPinTask: {},
    onArchiveTask: {},
    },
    excludeStories: /.*Data$/,
}

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};


export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
