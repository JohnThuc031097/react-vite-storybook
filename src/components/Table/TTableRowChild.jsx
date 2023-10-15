import {
    Box, Collapse,
    Table, TableBody, TableCell, TableHead, TableRow,
    Typography
} from "@mui/material";
import TTableColumn from "./TTableColumn";

export default function TTableRowChild({ title, cols, rows }) {
    const alignsRow = cols.map(({ align }) => align)

    return (
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            {title}
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TTableColumn cols={cols} />
                            <TableBody>
                                {data.map((item, index) =>
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {item[Object(item).keys(0)]}
                                        </TableCell>
                                        {Object(item).keys().map((name, indexChild) => {
                                            <TableCell key={indexChild}>{item[name]}</TableCell>
                                        })}
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    )
}