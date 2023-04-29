import type { Database } from '../../database.types'
import { format } from 'date-fns'

// データの型を定義
type Note = Database['public']['Tables']['notes']['Row']

// データを取得する関数を定義
async function fetchNotes() {
  // 意図的に2秒待つ処理を追加
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: 'no-store',
    // ISRを使う場合はrevalidateを設定する
    // next: { revalidate: 10 },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const notes: Note[] = await res.json()
  return notes
}


export default async function NotesList()  {
  // Reactのサーバーコンポーネントならasyncとawaitが使える
  // クライアントコンポーネントではuseEffectやSWRを使うことが必要
  const notes = await fetchNotes()
  return(
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Notes
      </p>
      <ul className="m-3">
        {notes.map((note) => (
          <li key={note.id}>
            <p> {note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
