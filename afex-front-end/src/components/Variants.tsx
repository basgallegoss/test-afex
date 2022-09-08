import { Skeleton, Card, Divider } from "@mui/material";

export default function Variants() {
  return (
    <Card>
      <Skeleton variant="rectangular" sx={{ paddingTop: "3.2%" }} />
      <Divider />
      <Skeleton variant="rectangular" sx={{ paddingTop: "16%" }} />
    </Card>
  );
}
