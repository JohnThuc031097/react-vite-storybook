
import {
    Logout as LogoutIcon,
    NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
    Search as SearchIcon,
    Brightness7 as Brightness7Icon,
    Brightness4 as Brightness4Icon
} from "@mui/icons-material";
import {
    Box, Stack,
    IconButton,
    Avatar,
    Menu, MenuItem,
    Divider,
    Paper,
    InputBase,
    Badge,
    Typography,
    useTheme
} from "@mui/material";

import { useState, useContext } from 'react'
import ColorModeContext from "../../contexts/ColorModeContext";

export default function NavbarComponent() {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
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
                bgcolor='primary.main'
                sx={{
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
                        borderRadius: '15px'
                    }}
                >
                    <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
                        <SearchIcon sx={{ color: 'text.secondary' }} />
                    </IconButton>
                    <Divider sx={{ height: 18, m: 0.5 }} orientation="vertical" />
                    <InputBase
                        sx={{ ml: 1, pl: 2, flex: 1, bgcolor: 'background.input', color: 'text.secondary', fontSize: '14px', width: '100%', borderRadius: '12px' }}
                        placeholder="Quick search..."
                        inputProps={{ 'aria-label': 'quick search' }}
                    />
                </Paper>
                <Box sx={{ width: '100%' }}></Box>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <IconButton
                    // onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Badge color="error" badgeContent={1}>
                        <NotificationsNoneOutlinedIcon sx={{ width: 24, height: 24, color: 'text.primary' }} />
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
                    <Avatar sx={{ width: 28, height: 28 }}>T</Avatar>
                </IconButton>
                <Box sx={{ width: '10px' }}></Box>
            </Stack>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '150px'
                    }}>
                        <PersonIcon sx={{ width: '18px' }} />
                        <Typography sx={{ fontSize: '14px', flexGrow: 1, pl: 2 }} >
                            Profile
                        </Typography>
                    </Box>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <SettingsIcon sx={{ width: '18px' }} />
                        <Typography sx={{ fontSize: '14px', flexGrow: 1, pl: 2 }} >
                            Settings
                        </Typography>
                    </Box>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <LogoutIcon sx={{ width: '18px' }} />
                        <Typography sx={{ fontSize: '14px', flexGrow: 1, pl: 2 }} >
                            Logout
                        </Typography>
                    </Box>
                </MenuItem>
            </Menu>
        </>
    );
}
