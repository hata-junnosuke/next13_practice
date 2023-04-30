'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '../../utils/supabase'
import useStore from '../../store'

export default function SupabaseListener({
// アクセストークンの受け取り
  accessToken,
}: {
  accessToken?: string
}) {
  const router = useRouter()
  const { updateLoginUser } = useStore()
  // userのセッション情報を取得
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        updateLoginUser({
          id: data.session?.user.id,
          email: data.session?.user.email!,
        })
      }
    }
    getUserInfo()
    // userのセッション情報が変更された場合(ログインやログアウトした場合)の処理
    supabase.auth.onAuthStateChange((_, session) => {
      updateLoginUser({ id: session?.user.id, email: session?.user.email! })
      // サーバーとクライアントのアクセストークンが一致しない場合refreshする
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })
  }, [accessToken])
  return null
}
