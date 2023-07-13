import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import Rockets from '../pages/Rockets';
import RocketDetails from '../components/Rockets/RocketsDetails';
import Crew from '../pages/Crew';
import CrewDetails from '../components/Crew/CrewDetails';
import History from '../pages/History';
import Company from '../pages/Company';
import Navigation from '../layout/navigation';
import LatestLaunched from '../components/LatestLaunch';
import Roadster from '../components/Roadster';

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation>
                <Routes>
                    <Route path="/" element={<Crew />} />
                    <Route path="/crew/:id" element={<CrewDetails />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/rockets" element={<Rockets />} />
                    <Route path="/rockets/:id" element={<RocketDetails />} />
                    <Route exact path="/latest_launch/" element={<LatestLaunched />} />
                    <Route exact path="/roadster/" element={<Roadster />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </Navigation>
        </BrowserRouter>
    );
};

export default Router;
