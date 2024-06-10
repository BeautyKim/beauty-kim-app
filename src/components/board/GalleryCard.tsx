import styles from '@/styles/board/galleryCard.module.css';
import formattedDate from "@/app/lib/notion/formatteddate";
import Link from 'next/link';
import { tagColors } from '@/app/lib/notion/colorPalette';
import Image from 'next/image';

export default function GalleryCard({data}: any) {
    
    const link = data.id;
    const category = data.properties.Category.select;
    let title = data.properties.Name.title[0].plain_text;
    let imgSrc = data.cover.file?.url; //|| data.cover.external.url;
    const tags = data.properties.Tag.multi_select;
    let description = data.properties.Description.rich_text[0].plain_text;

    return(
        <Link href={link}>
            <div className={styles.container}>
                <div className={styles.coverImage}>
                    <Image
                        src={imgSrc}
                        alt="cover image"
                        width={400}
                        height={250}
                    />
                </div>
                <div className={styles.newText}>
                    <p className={styles.category}>
                        {category.name}
                    </p>
                    <h1 className={styles.title}>
                        {title}
                    </h1>
                    <div className={styles.tags}>
                            {tags.map((aTag: any) => {
                                return (
                                    <p className="tag" key={aTag.id} style={tagColors(aTag.color)}>{aTag.name}</p>
                                )
                            })}
                    </div>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <p className={styles.date}>
                        {formattedDate(data)}
                    </p>
                </div>
            </div>
        </Link>
    )    
}