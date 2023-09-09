import Head from "next/head";
import { Text, renderBlock } from "@/components/board/NotionBlock"
import styles from "@/styles/board/DetailBoard.module.css";
import { Fragment } from "react";
import formattedDate from "@/app/lib/notion/formatteddate";


export default function DetailBoard({ page, blocks }: any) {
    if (!page || !blocks) {
        return <div />;
      }
    const imgSrc = page.cover.file?.url;;

    return (
        <div>
            <Head>
                <title>{page.properties.Name.title[0].plain_text}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.container}>
                <div>
                    <img
                        className="rounded-t-xl"
                        src={imgSrc}
                        alt="cover image"
                        width={700}
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
        </div>
        )
}