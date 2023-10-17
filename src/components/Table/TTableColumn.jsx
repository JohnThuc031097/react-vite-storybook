import {
    TableRow, TableCell,
} from '@mui/material'


export default function TTableColumn({ cols, numColsEmpty }) {
    return (
        <TableRow>
            {Array(numColsEmpty).fill(null).map((value, index) => <TableCell key={index} />)}
            {cols.map(({ name, align }, index) => {
                return <TableCell key={index} align={align}>{name}</TableCell>
            })}
        </TableRow>
    );
}