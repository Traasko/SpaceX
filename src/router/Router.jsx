import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import About from '../pages/About';
import Crew from '../pages/Crew';
import History from '../pages/History';
import Company from '../pages/Company';
import Quiz from '../pages/Quiz';
import Navigation from '../layout/navigation';

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation>
                <Routes>
                    <Route path="/" element={<Crew />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/quiz" element={<Quiz />} />

                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </Navigation>
        </BrowserRouter>
    );
};

export default Router;
