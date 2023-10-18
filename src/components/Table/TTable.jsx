import {
    Paper,
    Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
} from '@mui/material';

import TTableColumn from './TTableColumn';
import TTableRow from './TTableRow';
import { useState } from 'react';
import TTablePaginationActions from './TTablePaginationActions';

export default function TTable({ cols, colsChild, rows, rowsPerPageInit, rowsPerPageOptions }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageInit);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer component={Paper}
                sx={{
                    maxHeight: ((49 * rowsPerPageInit) + 34),
                    '::-webkit-scrollbar': {
                        '-webkit-appearance': 'none',
                        width: 10
                    },
                    '::-webkit-scrollbar-thumb': {
                        borderRadius: '4px',
                        backgroundColor: 'rgba(0, 0, 0, .5)',
                        boxShadow: '0 0 1px rgba(255, 255, 255, .5)'
                    }
                }}>
                <Table size='small' aria-label="collapsible table">
                    <TableHead>
                        <TTableColumn cols={cols} numColsEmpty={1} />
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0 ?
                            rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) :
                            rows
                        ).map((row, index) => {
                            let rowChild = null
                            Object.keys(row).forEach(name => {
                                if ((typeof row[name]) === 'object' && row[name]) {
                                    rowChild = row[name]
                                }
                            })
                            return <TTableRow key={index}
                                cols={cols} row={row}
                                colsChild={colsChild} rowChild={rowChild}
                            />
                        })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 49 * emptyRows }}>
                                <TableCell colSpan={cols.length + 1} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                colSpan={cols.length}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                        'aria-label': 'rows per page',
                    },
                    native: false,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TTablePaginationActions}
            />
        </Paper >
    )
}