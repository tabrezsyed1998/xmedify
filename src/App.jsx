import { Outlet } from 'react-router-dom';
import { CssBaseline } from "@mui/material";


function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
    </div>
  );
}

export default App;
