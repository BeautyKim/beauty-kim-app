import { getBlocks, getPage } from "@/app/lib/notion/getNotionData";
import DetailBoard from "@/components/board/DetailBoard";
import styles from "@/styles/board/boardPage.module.css"

export default async function DetailBoardPage(props: any) {
  return (
      <div className={styles.container}>
        <DetailBoard page={props.page} blocks={props.blocks}/>  
      </div>
  )
}

export async function generateStaticParams(context: any) {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return {
    props: {
      page,
      blocks,
    },
  };
};