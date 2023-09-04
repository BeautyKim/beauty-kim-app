import { databaseId, notion } from '@/app/lib/notion';
import { getBlocks, getDatabase, getPage } from '@/app/lib/notion/getNotionData';
import Card from '@/components/common/card';
import Link from 'next/link';

export default async function Board() {

  const data = await getDatabase(databaseId);
  console.log(data)

  return (
    <>
    <h1>게시판</h1>
    <ol>
      {data.map((res) => (
        <li key={res.id}>
          <Link href={`/board/${res.id}`}>
            <Card data={res}/>
          </Link>
        </li>
      ))}
    </ol>
    </>
  )

}


