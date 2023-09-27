
import Task from './Task';

export default {
    component: Task,
    title: 'Task',
    tags: ['autodocs'],
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
        },
        isArchive: false,
        isPin: false,
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_PINNED',
        },
        isArchive: false,
        isPin: true,
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED',
        },
        isArchive: true,
        isPin: false,
    },
};