import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import Rockets from '../pages/Rockets';
import RocketDetails from '../components/Rockets/RocketsDetails';
import Crew from '../pages/Crew';
import CrewDetails from '../components/Crew/CrewDetails';
import History from '../pages/History';
import Company from '../pages/Company';
import Quiz from '../pages/Quiz';
import Navigation from '../layout/navigation';
import '../assets/style/index.css';
import Roadster from '../components/Roadster';
import LastLaunch from '../components/LatestLaunch';
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
                    <Route path="/latest_launch" element={<LastLaunch />} />
                    <Route exact path="/roadster/" element={<Roadster />} />
                    <Route path="/quiz" element={<Quiz />} />

                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </Navigation>
        </BrowserRouter>
    );
};

export default Router;
