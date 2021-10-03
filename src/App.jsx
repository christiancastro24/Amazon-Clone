import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div>
      <Routes />
      <GlobalStyle />
      <Toaster />
    </div>
  );
}

export default App;
