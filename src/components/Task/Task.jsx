
// import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import IconButton from '@mui/joy/IconButton';
import StarBorderRounded from '@mui/icons-material/StarBorderRounded';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Task({ task, isArchive, isPin }) {
    const [archiveTask, setArchiveTask] = useState(isArchive)
    const [pinTask, setPinTask] = useState(isPin)

    useEffect(() => {
        setArchiveTask(isArchive)
    }, [isArchive])

    useEffect(() => {
        setPinTask(isPin)
    }, [isPin])

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
                <Checkbox size='lg' color='primary' variant='outlined' checked={archiveTask}
                    onChange={() => setArchiveTask(!archiveTask)}
                />
                <Input size='md' sx={{ width: '100%' }} placeholder="Input task here..." variant="soft" defaultValue={task.title} />
                <IconButton
                    onClick={() => setPinTask(!pinTask)}
                >
                    <StarBorderRounded color={pinTask ? 'warning' : 'neutral'} />
                </IconButton>
            </Stack>
        </Sheet>
    );
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    isArchive: PropTypes.bool,
    isPin: PropTypes.bool,
}