import Head from "next/head";
import { Text, renderBlock } from "@/components/board/notionBlock"
import styles from "@/styles/board/DetailBoard.module.css";
import { Fragment } from "react";
import Link from "next/link";
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
                <p>{formattedDate(page)}</p>
                </h1>
                <article>
                {blocks.map((block: any) => (
                    <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                ))}
                <Link href="/" className={styles.back}>
                    ← Go home
                </Link>
                </article>
            </section>
        </div>
        )
}