import { databaseId } from "@/app/lib/notion";
import { getBlocks, getDatabase, getPage } from "@/app/lib/notion/getNotionData";
import DetailBoard from "@/components/board/DetailBoard";

export default async function DetailBoardPage({ params }: { params: { id: string } }) {
  const { id } = params
  const page = await getPage(id);
  const blocks = await getBlocks(id);
  
  console.log(page);

  return (
      <div>
        <DetailBoard page={page} blocks={blocks}/>  
      </div>
  )
}

export function generateStaticParams() {
  return [{ id: '1' }]
};