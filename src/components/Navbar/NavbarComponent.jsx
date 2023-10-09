
import {
    Logout as LogoutIcon,
    NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
    Search as SearchIcon,
} from "@mui/icons-material";
import {
    Box, Stack,
    IconButton,
    Avatar,
    Menu, MenuItem,
    Divider,
    ListItemIcon,
    Paper,
    InputBase,
    Badge
} from "@mui/material";

import { useState } from 'react'

export default function NavbarComponent() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                sx={{
                    bgcolor: 'white',
                    width: '99%',
                    height: '50px',
                    borderRadius: '15px',
                }}
            >
                <Box sx={{ width: '20px' }}></Box>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: 600,
                        height: 25,
                        backgroundColor: '#fdfdfd',
                    }}
                >
                    <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 18, m: 0.5 }} orientation="vertical" />
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Quick search..."
                        inputProps={{ 'aria-label': 'quick search' }}
                    />
                </Paper>
                <Box sx={{ width: '100%' }}></Box>
                <IconButton
                    // onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Badge color="error" badgeContent={1}>
                        <NotificationsNoneOutlinedIcon sx={{ width: 24, height: 24 }} />
                    </Badge>
                </IconButton>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 24, height: 24 }}>T</Avatar>
                </IconButton>
                <Box sx={{ width: '10px' }}></Box>
            </Stack>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                    elevation: 0,
                    width: '200px',
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}
