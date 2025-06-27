import { create } from "zustand";
import { authApi } from "../api/authApi";
import { createJSONStorage, persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      token: "",
      login: async (input) => {
        const result = await authApi.post("/login", input);
        set({ token: result.data.token, user: result.data.user });
        return result;
      },
      logout: () => set({ token: "", user: null }),
    }),
    {
      name: "userState",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
