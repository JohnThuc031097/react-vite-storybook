import {
    TableRow, TableCell,
} from '@mui/material'


export default function TTableColumn({ cols }) {
    return (
        <TableRow>
            <TableCell />
            {cols.map(({ name, align }, index) =>
                <TableCell key={index} align={align}>{name}</TableCell>
            )}
        </TableRow>
    );
}