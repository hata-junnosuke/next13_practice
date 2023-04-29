import '../styles/globals.css'
import NavBar from './components/nav-bar'

export default function RootLayout({
  // ここでのchildrenは、app/page.tsxのreturnの中身が入る
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
