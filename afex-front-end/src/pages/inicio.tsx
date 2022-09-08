import { useQuery } from "@apollo/client";
import { Alert, Card, Container, Typography, Box } from "@mui/material";
import { GET_TRANSACTIONS } from "../gpql/transactions";
import Variants from "../components/Variants";
import TableData from "../components/table/TableData";

export default function App() {
  interface TransactionResult {
    id: number;
    date: string;
    name: string;
    lastName: string;
    amount: number;
    country: string;
    type: string;
    allTransaction: any;
  }

  const { loading, error, data } =
    useQuery<TransactionResult>(GET_TRANSACTIONS);
  return (
    <Container fixed >
      {error ? (
        <Alert severity="error" sx={{ margin: "1%" }}>
          Hemos presentado problemas al cargar datos.
        </Alert>
      ) : null}
      <Card sx={{ m: "1%", mt: "5%" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ m: "1%", color: "#609700" }}
        >
          Últimas Transacciones
        </Typography>

        {loading || !data ? (
          <Variants />
        ) : (
          <Card>
            <TableData data={data?.allTransaction} />
          </Card>
        )}
      </Card>
    </Container>
  );
}
