import { getBlocks, getPage } from "@/app/lib/notion/getNotionData";
import DetailBoard from "@/components/board/DetailBoard";
import styles from "@/styles/board/boardPage.module.css"

export default async function DetailBoardPage({ params }: { params: { id: string } }) {
  const { id } = params
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return (
      <div className={styles.container}>
        <DetailBoard page={page} blocks={blocks}/>  
      </div>
  )
}

export function generateStaticParams() {
  return [{ id: '1' }]
};