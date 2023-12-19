import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { StyleProvider } from '@ant-design/cssinjs';
import { SnackbarProvider } from "notistack";
import Alert, { AlertOptions } from "./components/alerts/Alert.component.tsx";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { theme } from './theme/Theme.ts';

declare module "notistack" {
  interface VariantOverrides {
    alert: AlertOptions;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <SnackbarProvider
      autoHideDuration={2_000}
      maxSnack={4}
      Components={{ alert: Alert }}
    >
      <CssVarsProvider theme={theme}>
        <StyleProvider hashPriority="high">
          <Provider store={store}>
            <App />
          </Provider>
        </StyleProvider>
      </CssVarsProvider>
    </SnackbarProvider>
  </BrowserRouter>,
)
