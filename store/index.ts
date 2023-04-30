// グローバルステイトを管理する
import create from 'zustand'

type EditedTask = {
  id: string
  title: string | null
}
type LoginUser = {
  id: string | undefined
  email: string | undefined
}
// stateの型を定義
type State = {
  editedTask: EditedTask
  updateEditedTask: (payload: EditedTask) => void
  resetEditedTask: () => void
  loginUser: LoginUser
  updateLoginUser: (payload: LoginUser) => void
  resetLoginUser: () => void
}
// stateの初期値を定義
const useStore = create<State>((set) => ({
  editedTask: { id: '', title: '' },
  updateEditedTask: (payload) =>
    set({
      editedTask: payload,
    }),
  resetEditedTask: () => set({ editedTask: { id: '', title: '' } }),
  loginUser: { id: '', email: '' },
  updateLoginUser: (payload) =>
    set({
      loginUser: payload,
    }),
  resetLoginUser: () => set({ loginUser: { id: '', email: '' } }),
}))
export default useStore
