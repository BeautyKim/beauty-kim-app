'use client'
 
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter();
  
  return (
    <div>
      <button type="button" onClick={() => router.replace('/')}>
        Go Home
      </button>
      <h1>404 페이지</h1>
    </div>
  )
}