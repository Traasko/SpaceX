import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<NoMatch />} />
                </Routes>
            </Navigation>
        </BrowserRouter>
    );
};

export default Router;
