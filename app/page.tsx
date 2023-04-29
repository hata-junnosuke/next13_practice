import NotesList from "./components/notes-list";

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">Hello World🚀</div>
      {/* ベータ版のため指摘がvscode上で表示されるので以下のコメントで回避する */}
      {/* @ts-ignore */}
      <NotesList />
    </main>
  )
}
