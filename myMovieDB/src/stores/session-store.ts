import { create } from 'zustand';
import UserType from '../models/userType';

type SessionStore = {
    isLoggedIn: UserType | null;
    login: (user: UserType) => void;
    logout: () => void;
}

const useSessionStore = create<SessionStore>((set) => ({
    isLoggedIn: null,
    login: (user: UserType) => set({isLoggedIn: user}),
    logout: () => set({isLoggedIn: null})

}));

export default useSessionStore;