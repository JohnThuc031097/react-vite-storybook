import {
    Paper,
    Table, TableBody, TableContainer, TableHead,
} from '@mui/material';

import TTableColumn from './TTableColumn';
import TTableRow from './TTableRow';

export default function TTable({ cols, colsChild, rows, rowsOrigin }) {

    return (
        <TableContainer component={Paper}>
            <Table size='small' aria-label="collapsible table">
                <TableHead>
                    <TTableColumn cols={cols} numColsEmpty={1} />
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {
                        let rowChild = null
                        let rowChildOrigin = null
                        Object.keys(row).forEach(name => {
                            if ((typeof row[name]) === 'object' && row[name]) {
                                rowChild = row[name]
                                rowChildOrigin = rowsOrigin[index][name]
                            }
                        })
                        return <TTableRow key={index} cols={cols} row={row} rowOrigin={rowsOrigin[index]} colsChild={colsChild} rowChild={rowChild} rowChildOrigin={rowChildOrigin} />
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}