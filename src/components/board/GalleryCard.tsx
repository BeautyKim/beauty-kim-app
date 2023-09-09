import styles from '@/styles/board/galleryCard.module.css';
import formattedDate from "@/app/lib/notion/formatteddate";
import Link from 'next/link';
import { tagColors } from '@/app/lib/notion/colorPalette';

export default function GalleryCard({data}: any) {
    
    const link = data.id;
    const category = data.properties.Category.select;
    const title = data.properties.Name.title[0].plain_text;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const tags = data.properties.Tag.multi_select;
    const description = data.properties.Description.rich_text[0].plain_text;

    return(
        <Link href={link}>
            <div className={styles.container}>
                <div>
                    <img
                        className="rounded-t-xl"
                        src={imgSrc}
                        alt="cover image"
                        width={200}
                        height={200}
                    />
                </div>
                <div>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.newText}>
                    <h1>
                        {category.name}
                    </h1>
                    <div className="tags">
                            {tags.map((aTag: any) => {
                                return (
                                    <p className="tag" key={aTag.id} style={tagColors(aTag.color)}>{aTag.name}</p>
                                )
                            })}
                    </div>
                </div>
                
                <p className={styles.text}>{description}</p>
                <p>{formattedDate(data)}</p>
                </div>
            </div>
        </Link>
    )    
}