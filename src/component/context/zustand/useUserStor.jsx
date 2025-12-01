import { create } from "zustand";

const useUserStore = create((set) => ({
    user: null,
    login: () =>
        set({
            user: { name: "john", email: "john@gmail.com" }
        }),
    logout: () =>
        set({ user: null })
}));

export default useUserStore;
    