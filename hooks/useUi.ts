import { UiContext } from "@/contexts"
import { useContext } from "react"

export const useUi = () => {
  const state = useContext(UiContext);
  return {
    ...state,
  }
}