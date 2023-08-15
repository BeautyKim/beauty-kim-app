import Config from "config/config.export"

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_MODE)
  return (
    <div>
      <h1>일단 만들어보자구~~</h1>
      <h1>{Config().baseUrl}</h1>
    </div>
  )
}
