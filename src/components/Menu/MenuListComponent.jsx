import {
    List, ListItemButton, ListItemIcon, ListItemText,
    Collapse,
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    FiberManualRecord as FiberManualRecordIcon,
} from '@mui/icons-material';
import { useState } from 'react';

export default function MenuListComponent({ Icon, title, onClick, items }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(new Array(items?.length).fill(false));

    const handleMenuClick = () => {
        setOpen(!open);
    };

    const handleSelectedClick = (key) => {
        const dataNew = selected.map((val, i) => {
            if (key === i) {
                return true
            } else {
                return false
            }
        })
        setSelected(dataNew)
    };

    return items ? (
        <>
            <ListItemButton onClick={handleMenuClick}>
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {items.map((item, index) => {
                        return (
                            <ListItemButton key={index} sx={{ pl: 6 }} onClick={() => handleSelectedClick(index)}>
                                <ListItemIcon>
                                    {/* {selected[index] && <FiberManualRecordIcon sx={{ width: '12px', height: '12px', color: '#696CFF' }} />} */}
                                    <FiberManualRecordIcon sx={{ width: '12px', height: '12px', color: '#696CFF' }} />
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        )
                    })}
                </List>
            </Collapse>
        </>
    ) : (
        <ListItemButton onClick={onClick}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItemButton>
    )
}

// export default function MenuButton({ Icon, title, onClick, items }) {
//     return (
//         <>
//             <Stack
//                 direction="row"
//                 justifyContent="flex-start"
//                 justifyItems="center"
//                 alignItems="center"
//                 spacing={1}
//                 width='100%'
//                 sx={{ ':hover': { color: '#696CFF' } }}
//             >
//                 <Icon />
//                 <Button
//                     sx={{
//                         color: '#000000',
//                         width: '100%',
//                         textTransform: 'none',
//                         justifyContent: 'space-between',
//                         flexGrow: 1,
//                         "&:hover": {
//                             color: '#696CFF',
//                             // fontWeight: 'bold'
//                         },
//                     }}
//                     size='medium' variant='text' endIcon={items ? <ExpandMoreIcon /> : null}
//                     onClick={onClick}>
//                     {title}
//                 </Button>
//             </Stack >
//             {
//                 items &&
//                 <Stack
//                     direction='column'
//                     justifyContent="flex-start"
//                     justifyItems="center"
//                     alignItems="center"
//                     width='100%'
//                 >
//                     {items.forEach((item, index) => <MenuButton key={index} Icon={null} title={item.title} onClick={item.onClick} />)}
//                 </Stack>
//             }
//         </>
//     )
// }