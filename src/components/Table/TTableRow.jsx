import {
    KeyboardArrowUp as KeyboardArrowUpIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material";
import {
    Box,
    Collapse,
    IconButton,
    Table, TableBody, TableCell, TableRow,
    Typography
} from "@mui/material";
import { useState } from "react";
import TTableColumn from "./TTableColumn";

export default function TTableRow({ row, aligns, colsChild, dataChild }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell padding="none">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {Object.keys(row).map((name, index) =>
                    (typeof row[name]) !== 'object' && <TableCell padding="none" key={index} align={aligns[index]}>{row[name]}</TableCell>
                )}
            </TableRow>
            {dataChild && Object.keys(dataChild).map((name, index) => {
                console.log(index, colsChild[index])
                return colsChild[index] && (
                    <TableRow key={name} >
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        {name.toUpperCase()}
                                    </Typography>
                                    <Table size="small" aria-label="purchases">
                                        <TTableColumn cols={colsChild[index]} />
                                        <TableBody>
                                            {Array.isArray(dataChild[name]) && dataChild[name].map((item, index) => {
                                                return (
                                                    <TableRow key={index}>
                                                        {Object.keys(item).map((name, index) => {
                                                            return (<TableCell key={index}>{item[name]}</TableCell>)
                                                        })}
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow >
                )
            })}
        </>
    );
}