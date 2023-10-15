import {
    Paper,
    Table, TableBody, TableContainer, TableHead,
} from '@mui/material';

import TTableColumn from './TTableColumn';
import TTableRow from './TTableRow';

export default function TTable({ cols, colsChild, rows }) {

    return (
        <TableContainer component={Paper}>
            <Table size='small' aria-label="collapsible table">
                <TableHead>
                    <TTableColumn cols={cols} numColsEmpty={1} />
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {
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
                </TableBody>
            </Table>
        </TableContainer>
    )
}