import { getBlocks, getPage } from "@/app/lib/notion/getNotionData";
import DetailBoard from "@/components/board/DetailBoard";
import styles from "@/styles/board/boardPage.module.css"

type Props = {
  params: {
    id: string,
  }
}

export default async function DetailBoardPage({ params: { id } }: Props) {
  const page = await getPage(id);
  const blocks = await getBlocks(id);
  return (
      <div className={styles.container}>
        <DetailBoard page={page} blocks={blocks}/>  
      </div>
  )
}