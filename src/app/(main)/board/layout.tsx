export default function BoardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main>
        <h1>상세페이지 레이아웃</h1>
        {children}
      </main>
    )
  }