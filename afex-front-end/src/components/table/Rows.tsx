import TableCell from "@mui/material/TableCell";

type TableDataProps = {
  row: any;
};

export default function Rows({ row }: TableDataProps) {
  return (
    <>
      <TableCell sx={{ color: "#609700" }} align="left">
        {row.name} {row.lastName}
      </TableCell>
      <TableCell align="right">{row.country}</TableCell>
      <TableCell align="right">{row.date}</TableCell>
      <TableCell align="right">${row.amount.toLocaleString("es-CL")}</TableCell>
      <TableCell align="right">{row.type}</TableCell>
    </>
  );
}
