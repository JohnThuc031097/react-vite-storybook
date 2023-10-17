import {
    KeyboardArrowUp as KeyboardArrowUpIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material";
import {
    Box, Chip,
    Collapse,
    IconButton,
    Table, TableBody, TableCell, TableRow,
    Typography
} from "@mui/material";
import { useState } from "react";
import TTableColumn from "./TTableColumn";

export default function TTableRow({ cols, row, rowOrigin, colsChild, rowChild, rowChildOrigin }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {Object.keys(row).map((name, index) => {
                    return (typeof row[name]) !== 'object' &&
                        <TableCell padding="none" key={index} align={cols[index].align}>
                            {cols[index]?.options?.highLight ?
                                <Chip label={row[name]} variant="outlined" color={cols[index].options.highLight.color[Number(rowOrigin[name])]} /> :
                                row[name]
                            }
                        </TableCell>
                })}
            </TableRow>
            {rowChild && Object.keys(rowChild).map((name, index) => {
                return colsChild[index] && (
                    <TableRow key={name} >
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={colsChild[index].length}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        {name.toUpperCase()}
                                    </Typography>
                                    <Table size="small" aria-label="purchases">
                                        <TTableColumn cols={colsChild[index]} numColsEmpty={0} />
                                        <TableBody>
                                            {Array.isArray(rowChild[name]) && rowChild[name].map((item, indexRow) => {
                                                return (
                                                    <TableRow key={indexRow}>
                                                        {Object.keys(item).map((nameCell, indexCell) => {
                                                            // return (<TableCell key={indexCell} align={colsChild[index][indexCell].align}>{item[name]}</TableCell>)

                                                            console.log(rowChildOrigin[name][indexRow][nameCell])

                                                            return (<TableCell key={indexCell} align={colsChild[index][indexCell].align}>
                                                                {/* {item[nameCell]} */}
                                                                {colsChild[index][indexCell]?.options?.highLight ?
                                                                    <Chip label={item[nameCell]} variant="outlined" sx={{ width: colsChild[index][indexCell].options.highLight.width }}
                                                                        color={colsChild[index][indexCell].options.highLight.color[Number(rowChildOrigin[name][indexRow][nameCell])]} /> :
                                                                    item[nameCell]
                                                                }
                                                            </TableCell>)
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