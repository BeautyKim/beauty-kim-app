import styles from '@/styles/board/galleryCard.module.css';
import formattedDate from "@/app/lib/notion/formatteddate";
import Link from 'next/link';

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
                                let tagColor = "";
                                switch(aTag.color) {
                                case "blue":
                                    tagColor = "#D3E5EF";
                                    break;
                                case "brown":
                                    tagColor = "#EEE0DA";
                                    break;
                                case "default":
                                    tagColor = "#E3E2E080";
                                    break;
                                case "gray":
                                    tagColor = "#E3E2E0";
                                    break;
                                case "green":
                                    tagColor = "#DBEDDB";
                                    break;
                                case "orange":
                                    tagColor = "#FADEC9";
                                    break;
                                case "pink":
                                    tagColor = "#F5E0E9";
                                    break;
                                case "purple":
                                    tagColor = "#E8DEEE";
                                    break;
                                case "red":
                                    tagColor = "#FFE2DD";
                                    break;
                                case "yellow":
                                    tagColor = "#FDECC8";
                                    break;
                                }
                                return (
                                    <p className="tag" key={aTag.id} style={{ backgroundColor: tagColor}}>{aTag.name}</p>
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