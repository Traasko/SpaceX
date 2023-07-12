import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import Rockets from '../pages/Rockets';
import RocketDetails from '../components/RocketsDetails';
import Crew from '../pages/Crew';
import History from '../pages/History';
import Company from '../pages/Company';
import Navigation from '../layout/navigation';

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation>
                <Routes>
                    <Route path="/" element={<Crew />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/rockets" element={<Rockets />} />
                    <Route path="/rockets/:id" element={<RocketDetails />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </Navigation>
        </BrowserRouter>
    );
};

export default Router;
