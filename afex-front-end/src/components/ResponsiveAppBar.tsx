import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#00462c" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            width={"10%"}
            height={"70%"}
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NDQo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4zLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+DQ0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NDQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQ0KCSB3aWR0aD0iNjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgNjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NDQo8Zz4NDQoJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNGRkZGRkYiIGQ9Ik01LjYxMSw0LjI3OUwwLjQwNCwxOS41NzZoMy44OGwwLjk2My0zLjExOWg0Ljg0NGwwLjk2LDMuMTE5DQ0KCQloMy45OEw5LjgzMyw0LjI3OUg1LjYxMXogTTYuMDk2LDEzLjY4bDEuNTcyLTUuMDQ0bDEuNTc0LDUuMDQ0SDYuMDk2eiIvPg0NCgk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxNi41NjMsMTkuNTc2IDIwLjQxMiwxOS41NzYgMjAuNDEyLDEzLjAwMiANDQoJCTI2LjM1OSwxMy4wMDIgMjYuMzU5LDEwLjA4NSAyMC40MTIsMTAuMDg1IDIwLjQxMiw3LjE5OSAyNi44NzksNy4xOTkgMjYuODc5LDQuMjc5IDE2LjU2Myw0LjI3OSAJIi8+DQ0KCTxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjI4Ljg3MywxOS41NzYgMzkuMjksMTkuNTc2IDM5LjI5LDE2LjY2IDMyLjcyMiwxNi42NiANDQoJCTMyLjcyMiwxMi43OTkgMzguNzczLDEyLjc5OSAzOC43NzMsOS44NzcgMzIuNzIyLDkuODc3IDMyLjcyMiw3LjE5OSAzOS4yOSw3LjE5OSAzOS4yOSw0LjI3OSAyOC44NzMsNC4yNzkgCSIvPg0NCgk8cG9seWdvbiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSI0OS45NDQsMTEuNzE5IDU0Ljc3Niw0LjI3OSA1MC40ODUsNC4yNzkgNDcuNjQsOC44OTQgDQ0KCQk0NC44NjYsNC4yNzkgNDAuMzg2LDQuMjc5IDQ1LjE5LDExLjg3MyA0MC4xOSwxOS41NzYgNDQuNDc0LDE5LjU3NiA0Ny40OTEsMTQuNjk3IDUwLjQ1NSwxOS41NzYgNTQuOTQsMTkuNTc2IAkiLz4NDQoJPHBhdGggZmlsbD0iIzYwOTcwMCIgZD0iTTU5LjIxMSwwLjQyM0w1OS4yMTEsMC40MjNoLTMuMDg0Yy0wLjIxMywwLTAuMzg2LDAuMTczLTAuMzg2LDAuMzg2djMuMDgzDQ0KCQljMCwwLjIxNCwwLjE3MywwLjM4NiwwLjM4NiwwLjM4NmgzLjA4NGMwLjIxMiwwLDAuMzg1LTAuMTcyLDAuMzg1LTAuMzg2VjAuODFDNTkuNTk2LDAuNTk2LDU5LjQyMywwLjQyMyw1OS4yMTEsMC40MjMiLz4NDQo8L2c+DQ0KPC9zdmc+DQ0K"
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
