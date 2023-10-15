import {
    Paper,
    Table, TableBody, TableContainer, TableHead,
} from '@mui/material';

import TTableColumn from './TTableColumn';
import TTableRow from './TTableRow';

export default function TTable({ cols, colsChild, rows }) {
    const alignsRow = cols.map(({ align }) => align)

    return (
        <TableContainer component={Paper}>
            <Table size='small' aria-label="collapsible table">
                <TableHead>
                    <TTableColumn cols={cols} />
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {
                        let dataChild = null
                        Object.keys(row).forEach(name => {
                            if ((typeof row[name]) === 'object' && row[name]) {
                                dataChild = row[name]
                            }
                        })
                        return <TTableRow key={index} row={row} aligns={alignsRow} colsChild={colsChild} dataChild={dataChild} />
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}