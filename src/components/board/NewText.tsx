import { tagColors } from "@/app/lib/notion/colorPalette";
import formattedDate from "@/app/lib/notion/formatteddate";
import styles from "@/styles/board/newText.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NewText({data}: any) {

    const link = data.id;
    const category = data.properties.Category.select;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const title = data.properties.Name.title[0].plain_text;
    const tags = data.properties.Tag.multi_select;
    const description = data.properties.Description.rich_text[0].plain_text;

    return (
        <div className={styles.container}>
                <div className={styles.imageBox}>
                    <Link href={link}>
                        <Image
                            className={styles.coverImage}
                            src={imgSrc}
                            width={400}
                            height={300}
                            alt="cover image"
                    />
                    </Link>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.category}>
                        {category.name}
                    </p>
                    <Link href={link}>
                        <h1 className={styles.title}>
                            {title}
                        </h1>
                    </Link>
                    <div className={styles.tags}>
                            {tags.map((aTag: any) => {
                                return (
                                    <p className={styles.tag} key={aTag.id} style={tagColors(aTag.color)}>{aTag.name}</p>
                                )
                            })}
                    </div>
                    <p className={styles.text}>{description}</p>
                    <p className={styles.date}>{formattedDate(data)}</p>
                </div>
            </div>
    )
}