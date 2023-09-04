import Navbar from "./Navbar";
import "@/styles/Home/header.css"

export default function Header() {
  return(
    <header>
      <div className="container">
        <h1>Header</h1>
        <Navbar/>
      </div>
    </header>
  )
}