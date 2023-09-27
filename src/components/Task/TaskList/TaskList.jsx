
// import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Skeleton from '@mui/joy/Skeleton';

import DoneAllIcon from '@mui/icons-material/DoneAll';

import Task from '../Task';
import PropTypes from 'prop-types'

export default function TaskList({ loading, tasks, isArchive, isPin }) {
    const LoadingRow = (
        <Sheet
            sx={{
                width: 500,
                mx: 'auto',
                borderRadius: 'sm',
                boxShadow: 'md'
            }}
        >
            <Stack
                direction="row"
                justifyContent="left"
                alignItems="center"
                spacing={2}
                sx={{
                    my: 2,
                    px: 2,
                    py: 1.5,
                    borderRadius: 'sm',
                    boxShadow: 'md'
                }}
            >
                <Skeleton variant='rectangular' width={25} height={25} />
                <Skeleton variant='rectangular' width={400} height={40} />
                <Skeleton variant='rectangular' width={25} height={25} />
            </Stack>
        </Sheet>
    );
    if (loading) {
        return (
            <Sheet
                sx={{
                    width: 500,
                    mx: 'auto',
                    px: 2,
                    py: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md'
                }}
            >
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </Sheet>

        );
    }
    if (tasks.length === 0) {
        return (
            <Sheet
                sx={{
                    height: 500,
                }}
            >
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{
                        width: '100%',
                        height: '100%',
                        pb: 2,
                        borderRadius: 'sm',
                        boxShadow: 'md'
                    }}
                >
                    <DoneAllIcon fontSize='large' color='success' />
                    <Typography level='h3'>You have no tasks</Typography>
                    <Typography level='h5'>Sit back and relax</Typography>
                </Stack>
            </Sheet>
        );
    }

    const tasksInOrder = [
        ...tasks.filter((t) => t.state === 'TASK_PINNED'),
        ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
    ];
    return (
        <Sheet
            sx={{
                width: 500,
                mx: 'auto',
                px: 2,
                py: 2,
                borderRadius: 'sm',
                boxShadow: 'md'
            }}
        >
            {tasksInOrder.map((task) => (
                <Task key={task.id} task={task} isArchiv={isArchive} isPin={isPin} />
            ))}
        </Sheet>
    );
}

TaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.array,
    isArchive: PropTypes.bool,
    isPin: PropTypes.bool,
}

TaskList.defalutProps = {
    loading: false,
}