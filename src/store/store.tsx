import { FormType } from '@/models/form';
import { DashTabs } from '@/models/selectedTabs';
import { create } from 'zustand';

type CountStore = {
    count: number;
    inc: () => void;
}

type FormStore = {
    type: FormType;
    changeTypeOfForm: () => void;
}

type LoginStore = {
    loggedIn: boolean;
    setLoggedIn: () => void;
}

type DashTabsStore = {
    selectedTab: DashTabs;
    setSelectedDashTab: (tab: DashTabs) => void;
}


export const useCounter = create<CountStore>() ((set) => ({
 count: 1,
 inc: () => set((state) => ({count: state.count + 1}))
}));

export const useFormStore = create<FormStore>() ((set) => ({
    type: "login",
    changeTypeOfForm: () => set((state) => ({type: state.type == 'login' ? 'signup' : 'login'}))
}));

export const useLoginStore = create<LoginStore>() ((set) => ({
    loggedIn: false,
    setLoggedIn: () => set((state) => ({loggedIn: !state.loggedIn}))
}));

export const useDashTabStore = create<DashTabsStore>() ((set) => ({
    selectedTab: "home",
    setSelectedDashTab: (tabVal) => set((state) => ({selectedTab: tabVal}))
}));


