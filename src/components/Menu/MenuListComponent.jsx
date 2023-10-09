import {
    List, ListItemButton, ListItemIcon, ListItemText,
    Collapse,
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    // FiberManualRecord as FiberManualRecordIcon,
} from '@mui/icons-material';
import { useState } from 'react';

export default function MenuListComponent({ Icon, title, onClick, items }) {
    const [open, setOpen] = useState(false);
    // const [selected, setSelected] = useState(false);
    // const [selectedChild, setSelectedChild] = useState(new Array(items?.length).fill(false));

    const handleOpenMenuClick = () => {
        setOpen(!open);
        return onClick
    };

    // const handleSelectedChildClick = (key) => {
    //     const dataNew = selectedChild.map((val, i) => {
    //         if (key === i) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     })
    //     setSelectedChild(dataNew)
    // };

    // const handleSelectedClick = () => {
    //     setSelected(!selected)
    // }

    return items ? (
        <>
            <ListItemButton onClick={handleOpenMenuClick}>
                <ListItemIcon sx={{ minWidth: '32px' }}>
                    <Icon sx={{ width: '18px', height: '18px' }} />
                </ListItemIcon>
                <ListItemText secondary={title} />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {items.map((item, index) => {
                        return (
                            <ListItemButton key={index} sx={{ pl: 4 }} onClick={items.onClick} >
                                <ListItemIcon sx={{ minWidth: '18px' }}>
                                    {/* {selected[index] && <FiberManualRecordIcon sx={{ width: '12px', height: '12px', color: '#696CFF' }} />} */}
                                    {/* <FiberManualRecordIcon sx={{ width: '12px', height: '12px', color: '#696CFF' }} /> */}
                                </ListItemIcon>
                                <ListItemText secondary={item.title} />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Collapse>
        </>
    ) : (
        <ListItemButton onClick={onClick}>
            <ListItemIcon sx={{ minWidth: '32px' }}>
                <Icon sx={{ width: '18px', height: '18px' }} />
            </ListItemIcon>
            <ListItemText secondary={title} />
        </ListItemButton>
    )
}