import { FormType } from '@/types/form';
import { create } from 'zustand';

type CountStore = {
    count: number;
    inc: () => void;
}

type FormStore = {
    type: FormType;
    changeTypeOfForm: () => void;
}


export const useCounter = create<CountStore>() ((set) => ({
 count: 1,
 inc: () => set((state) => ({count: state.count + 1}))
}));

export const useFormStore = create<FormStore>() ((set) => ({
    type: "login",
    changeTypeOfForm: () => set((state) => ({type: state.type == 'login' ? 'signup' : 'login'}))
}));
