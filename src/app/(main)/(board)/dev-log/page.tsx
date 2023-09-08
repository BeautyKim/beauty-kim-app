
import { databaseId, notion } from '@/app/lib/notion';
import { getDatabase } from '@/app/lib/notion/getNotionData';
import ListCard from '@/components/board/ListCard';
import Link from 'next/link';

export default async function DevLogPage() {
  const data = await getDatabase(databaseId);

  return (
    <>
    <h1>게시판</h1>
    <ol>
      {data.map((res) => (
        <li key={res.id}>
          <Link href={`/${res.id}`}>
            <ListCard data={res}/>
            <span>{res.id}</span>
          </Link>
        </li>
      ))}
    </ol>
    </>
  )

}


