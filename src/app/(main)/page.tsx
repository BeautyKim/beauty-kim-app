import { getDatabase } from "@/app/lib/notion/getNotionData";
import { databaseId } from "@/app/lib/notion";
import styles from "@/styles/home/home.module.css";
import Title from "@/components/home/Title";
import GalleryCard from "@/components/board/GalleryCard";
import NewText from "@/components/board/NewText";

export default async function Home(){
  const data = await getDatabase(databaseId);
  const modiArray = data.slice(1);
  const newData = modiArray.map((res: any) => res)

  return (
    <>
      <Title/>
      <section className={styles.homeSection}>
        <h1 className={styles.newText}>New</h1>
        <NewText className={styles.galleryCardItem} data={data[0]}/>
        <article className={styles.galleryCardContainer}>
          <div className={styles.galleryCards}>
            {newData.map((aProject) => (
              <GalleryCard key={aProject.id} data={aProject}/>
            ))}
          </div>
        </article>
        <article>
        </article>
      </section>
    </>
  )
}

// export const getServerSideProps = async () => {
//   try {
//     const data = await getDatabase(databaseId);

//     return {
//       props: {
//         data,
//       },
//       revalidate: 10,
//     };
//   } catch (error) {
//     console.error('데이터를 가져오는 중 오류 발생:', error);

//     return {
//       props: {
//         data: null,
//       },
//     };
//   }
// };
