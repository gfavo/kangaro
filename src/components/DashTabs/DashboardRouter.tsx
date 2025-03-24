import { useDashTabStore } from "@/store/store"
import Home from './Home';
import Students from "./Students";
import Teachers from "./Teachers";
import Classes from "./Classes";

export const DashboardRouter = () => {
    const {selectedTab} = useDashTabStore();

    switch (selectedTab) {
        case 'home':
            return <Home />
            break;
        case 'students':
            return <Students />
            break;
        case 'teachers':
            return <Teachers />
            break;
        case 'classes': 
            return <Classes />
            break;
        default:
            break;
    }
}