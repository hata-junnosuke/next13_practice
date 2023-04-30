import NotesList from "./components/notes-list";
import TimerCounter from "./components/timer-counter";
import { Suspense } from "react";
import Spinner from "./components/spinner";
import RefreshBtn from "./components/refresh-btn";

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">Hello World🚀</div>
      {/* Suspenseで囲むことでレンダリングを待たずしてそのほかを表示できる */}
      <Suspense fallback={<Spinner color="border-green-500" />}>
        {/* ベータ版のため指摘がvscode上で表示されるので以下のコメントで回避する */}
        {/* @ts-ignore */}
        <NotesList />
      </Suspense>
      {/* クライアントコンポーネント */}
      <TimerCounter />
      <RefreshBtn />
    </main>
  )
}
