import {
    Chip,
    TableCell
} from "@mui/material";

export default function TTableCell({ type, cell, headCell }) {
    if (type === 'boolean') {
        return (<TableCell align={headCell?.align}>
            <Chip
                label={headCell?.text[Number(cell)]}
                variant="outlined"
                sx={{ width: headCell?.width }}
                color={headCell?.color[Number(cell)]}
            />
        </TableCell>)
    }
    return <TableCell align={headCell?.align} sx={{ width: headCell?.width }}>{cell}</TableCell>
}