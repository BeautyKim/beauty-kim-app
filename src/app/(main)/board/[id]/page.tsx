import { databaseId } from "@/app/lib/notion";
import { getDatabase, getPage } from "@/app/lib/notion/getNotionData";
import DetailBoard from "@/components/board/detailBoard";

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
};
export default async function DetailBoardPage({ params }: { params: { id: string } }) {
  const { id } = params
  const data = await getPage(id);
  
  console.log(data);
    return (
        <div>
          <h1>{data.id}</h1>
          <DetailBoard>
            
          </DetailBoard>
        </div>
    )
  }