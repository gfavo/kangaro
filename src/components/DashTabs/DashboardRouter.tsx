import { useDashTabStore } from "@/store/store";
import Home from './Home';
import Students from "./Students";
import Teachers from "./Teachers";
import Classes from "./Classes";

export const DashboardRouter = () => {
    const { selectedTab } = useDashTabStore();

    return (
        <>
            <div className={`tab-content ${selectedTab === 'home' ? 'visible' : 'hidden'}`}>
                <Home />
            </div>
            <div className={`tab-content ${selectedTab === 'students' ? 'visible' : 'hidden'}`}>
                <Students />
            </div>
            <div className={`tab-content ${selectedTab === 'teachers' ? 'visible' : 'hidden'}`}>
                <Teachers />
            </div>
            <div className={`tab-content ${selectedTab === 'classes' ? 'visible' : 'hidden'}`}>
                <Classes />
            </div>
        </>
    );
};