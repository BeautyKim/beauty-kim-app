export default function BoardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ko">
        <body>{children}</body>
      </html>
    )
  }