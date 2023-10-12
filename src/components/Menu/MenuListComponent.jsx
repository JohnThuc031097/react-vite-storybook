import {
    List, ListItemButton, ListItemIcon,
    Box,
    Typography,
    Collapse,
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';
import { useState } from 'react';

export default function MenuListComponent({ Icon, title, onClick, items }) {
    const [open, setOpen] = useState(false);

    const handleOpenMenuClick = () => {
        setOpen(!open);
        return onClick
    };

    return items ? (
        <>
            <ListItemButton onClick={handleOpenMenuClick}>
                <ListItemIcon sx={{ minWidth: '32px', color: 'text.primary' }}>
                    <Icon sx={{ width: '18px', height: '18px' }} />
                </ListItemIcon>
                <Box
                    color='text.primary'
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                    <Typography sx={{ fontSize: '14px', }} >
                        {title}
                    </Typography>
                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Box>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {items.map((item, index) => {
                        return (
                            <ListItemButton
                                key={index}
                                onClick={items.onClick}
                                sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ minWidth: '18px' }}>
                                </ListItemIcon>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%',
                                    }}
                                    color='text.secondary'
                                >
                                    <Typography sx={{ fontSize: '14px' }} >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </ListItemButton>
                        )
                    })}
                </List>
            </Collapse>
        </>
    ) : (
        <ListItemButton onClick={onClick}>
            <ListItemIcon sx={{ minWidth: '32px', color: 'text.primary' }}>
                <Icon sx={{ width: '18px', height: '18px' }} />
            </ListItemIcon>
            <Box
                color='text.primary'
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}>
                <Typography sx={{ fontSize: '14px', }} >
                    {title}
                </Typography>
            </Box>
        </ListItemButton>
    )
}