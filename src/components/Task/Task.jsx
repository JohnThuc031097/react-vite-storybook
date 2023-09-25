
// import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import IconButton from '@mui/joy/IconButton';

import StarBorderRounded from '@mui/icons-material/StarBorderRounded';

// import './task.css'
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
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
                <Checkbox size='lg' color='primary' variant='outlined' checked={state === 'TASK_ARCHIVED'}
                    onChange={onArchiveTask}
                />
                <Input size='md' sx={{ width: '100%' }} placeholder="Input task here..." variant="soft" defaultValue={title} />
                <IconButton
                    onClick={onPinTask}
                >
                    <StarBorderRounded color={state === 'TASK_PINNED' ? 'warning' : 'neutral'} />
                </IconButton>
            </Stack>
        </Sheet>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
}