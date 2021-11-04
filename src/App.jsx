import React from "react";
import AppRouter from "./routers/AppRouter";
import './App.css';
import AuthProvider from "./auth/AuthProvider";

const App = () => {
    return (
        <div>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </div>
    )
}


export default App;