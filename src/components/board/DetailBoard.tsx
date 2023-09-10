import { Fragment } from "react";
import styles from "@/styles/board/detailBoard.module.css";
import formattedDate from "@/app/lib/notion/formatteddate";
import { Text, renderBlock } from "@/components/board/NotionBlock"
import Image from "next/image";


export default function DetailBoard({ page, blocks }: any) {
    if (!page || !blocks) {
        return <div />;
      }
    const imgSrc = page.cover.file?.url;;

    return (
        <section className={styles.container}>
            <div>
                <Image
                    className={styles.coverImage}
                    src={imgSrc}
                    alt="cover image"
                    width={400}
                    height={300}
                />
            </div>
            <h1 className={styles.name}>
                <Text text={page.properties.Name.title} />
            </h1>
            <p>{formattedDate(page)}</p>
            <article>
                {blocks.map((block: any) => (
                    <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                ))}
            </article>
        </section>
    )
}