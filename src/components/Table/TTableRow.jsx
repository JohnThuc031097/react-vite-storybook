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

import * as Utils from '../../utils'
import TTableColumn from "./TTableColumn";
import TTableCell from "./TTableCell";

export default function TTableRow({ cols, row, colsChild, rowChild }) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell  >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {Object.keys(row).map((name, index) => {
                    const headCell = cols[index]
                    const cell = row[name]
                    const typeCell = (typeof cell)
                    console.log(typeCell)
                    return (typeCell) !== 'object' &&
                        (<TTableCell key={index}
                            type={typeCell}
                            cell={cell}
                            headCell={headCell}
                        />)
                })}
            </TableRow>
            {rowChild && Object.keys(rowChild).map((name, index) => {
                return colsChild[index] && (
                    <TableRow key={name} >
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={cols.length + 1}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        {name.toUpperCase()}
                                    </Typography>
                                    <Table size="small" aria-label={name}>
                                        {Array.isArray(rowChild[name]) && <TTableColumn cols={colsChild[index]} numColsEmpty={0} />}
                                        <TableBody>
                                            {Array.isArray(rowChild[name]) ? rowChild[name].map((item, indexRow) => {
                                                return (
                                                    <TableRow key={indexRow}>
                                                        {Object.keys(item).map((nameCell, indexCell) => {
                                                            const headCell = colsChild[index][indexCell]
                                                            const cell = item[nameCell]
                                                            const typeCell = (typeof cell)
                                                            return (
                                                                <TTableCell key={indexCell}
                                                                    type={typeCell}
                                                                    cell={cell}
                                                                    headCell={headCell}
                                                                />
                                                            )
                                                        })}
                                                    </TableRow>
                                                )
                                            }) : (
                                                Object.keys(rowChild[name]).map((nameKey, indexCell) => {
                                                    const headCell = colsChild[index][indexCell]
                                                    const cell = rowChild[name][nameKey]
                                                    return (
                                                        <div key={indexCell}>
                                                            <TableCell
                                                                align={headCell?.align}
                                                                sx={{ width: headCell?.width }}
                                                            >
                                                                {Utils.toUpperCaseFirstChar(headCell?.name)}:
                                                            </TableCell>
                                                            <TableCell>{cell}</TableCell>
                                                        </div>
                                                    )
                                                })
                                            )}
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