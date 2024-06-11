import { create } from 'zustand';
import UserType from '../models/userType';

type UserStore = {
    userItems: UserType[];
    setUsers: (users: UserType[]) => void;
    addUser: (user: UserType) => void;
    

}

const useUserStore = create<UserStore>((set) => ({
    userItems: [],
    setUsers: (users) => set({ userItems: users }),
    addUser: (user) => set((state) => ({userItems: [...state.userItems, user]})),

}));

export default useUserStore;