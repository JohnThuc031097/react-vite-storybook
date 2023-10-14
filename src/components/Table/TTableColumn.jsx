import {
    TableRow, TableCell,
} from '@mui/material'


export default function TTableColumn({ cols, aligns }) {
    return (
        <TableRow>
            <TableCell />
            {cols.map((col, index) =>
                <TableCell key={index} align={aligns[index]}>{cols}</TableCell>
            )}
        </TableRow>
    );
}