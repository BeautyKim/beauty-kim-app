import formattedDate from "@/app/lib/notion/formatteddate";
import styles from "@/styles/board/newText.module.css";
import Link from "next/link";

export default function NewText({data}: any) {

    const link = data.id;
    const category = data.properties.Category.select;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const title = data.properties.Name.title[0].plain_text;
    const tags = data.properties.Tag.multi_select;
    const description = data.properties.Description.rich_text[0].plain_text;

    return (
        <div className={styles.newTextBox}>
              <Link href={link}>
            <img
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width={200}
                height={200}
            />
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
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{formattedDate(data)}</p>
            </div>
          </Link>
          </div>
    )
}