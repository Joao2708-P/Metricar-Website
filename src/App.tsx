import RunRoutes from "./Router/Routes";
import './Styles/App.css'
import { BrowserRouter } from "react-router-dom";

function App()
{
    return(
        <BrowserRouter>
            <div className="App">
                <RunRoutes/>
            </div>
        </BrowserRouter>
    )
}

export default App