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
  console.log(newData);

  return (
    <>
      <Title/>
      <section className={styles.homeSection}>
        <article>
          <h1>최신글</h1>
        </article>
        <article className={styles.galleryCardContainer}>
          <NewText className={styles.galleryCardItem} data={data[0]}/>
            {newData.map((aProject) => (
              <GalleryCard className={styles.galleryCardItem} key={aProject.id} data={aProject}/>
            ))}
        </article>
      </section>
    </>
  )
}
