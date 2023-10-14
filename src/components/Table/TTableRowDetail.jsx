import {
    Box, Collapse,
    Table, TableBody, TableCell, TableHead, TableRow,
    Typography
} from "@mui/material";

export default function TTableRowDetail(title, cols, data) {
    return (
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            {title}
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    {cols.map((name, align, index) =>
                                        <TableCell key={index} align={align}>{name}</TableCell>
                                    )}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) =>
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {item[Object(item).key(0)]}
                                        </TableCell>
                                        {Object(item).key().map((name, indexChild) => {
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