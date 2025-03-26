import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import "./i18n/i18n";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

function App() {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>  
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
