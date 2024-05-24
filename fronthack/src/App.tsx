import SideBar from './components/sideBar/SideBar';
import HomePage from './pages/homePage/HomePage';
import ResultPage from './pages/resultPage/ResultPage';
import WarningPage from './pages/warningPage/WarningPage';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './styles/App.scss';

export type DataType = Array<DataObjType>

export type DataObjType = {
    name: string;
    text: string;
    errors: Array<DataErrorsType>
}

export type DataErrorsType = {
    name_error: string;
    text_error: string;
}

const App = () => {
    const [data, setData] = useState<DataType>();

    return (
        <>
            <div className="grad-background" />
            <SideBar setData={setData} />
            <Routes>
                <Route
                    path='/*'
                    element={<HomePage />}
                />
                {data == undefined || data == null ?
                    <Route
                        path='warning'
                        element={<WarningPage />}
                    /> :
                    <Route
                        path='result'
                        element={<ResultPage data={data} />}
                    />
                }
            </Routes>
        </>
    )
}

export default App;
