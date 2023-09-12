import { textColors } from "@/app/lib/notion/colorPalette";
import styles from "@/styles/board//detailBoard.module.css";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Text = ({ text }: any) => {
    if (!text) {
      return null;
    }
    return text.map((value: any) => {
      const {
        annotations: { bold, code, color, italic, strikethrough, underline },
        text,
      } = value;
      return (
        <span
          className={[
            bold ? styles.bold : "",
            code ? styles.code : "",
            italic ? styles.italic : "",
            strikethrough ? styles.strikethrough : "",
            underline ? styles.underline : "",
          ].join(" ")}
          key={text.content}
        >
          {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
        </span>
      );
    });
  };

const renderNestedList = (block: any) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return <ol>{value.children.map((block: any) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block: any) => renderBlock(block))}</ul>;
};

const renderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p style={textColors(value.color)}>
          <Text text={value.rich_text}/>
        </p>
      );
    case "heading_1":
      return (
        <h1 style={textColors(value.color)}>
          <Text text={value.rich_text}/>
        </h1>
      );
    case "heading_2":
      return (
        <h2 style={textColors(value.color)}>
          <Text text={value.rich_text}/>
        </h2>
      );
    case "heading_3":
      return (
        <h3 style={textColors(value.color)}>
          <Text text={value.rich_text}/>
        </h3>
      );
    case "bulleted_list": {
      return <ul>{value.children.map((child: any) => renderBlock(child))}</ul>;
    }
    case "numbered_list": {
      return <ol>{value.children.map((child: any) => renderBlock(child))}</ol>;
    }
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <div key={block.id}>
          <li style={textColors(value.color)}>
            <Text text={value.rich_text} style={textColors(value.color)}/>
            {!!value.children && renderNestedList(block)}
          </li>
          {block.children?.map((child: any) => (
              <div style={{padding: "0 1rem"}} key={child.id}>
                <Fragment>{renderBlock(child)}</Fragment>
              </div>
            ))}
        </div>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
              <Text text={value.rich_text} style={textColors(value.color)}/>
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary style={textColors(value.color)}>
            <Text text={value.rich_text} />
          </summary>
          {block.children?.map((child: any) => (
            <div style={{padding: "0 1.5rem"}} key={child.id}>
              <Fragment>{renderBlock(child)}</Fragment>
            </div>
          ))}
        </details>
      );
    case "child_page":
      return (
        <div className={styles.childPage}>
          <strong>{value.title}</strong>
          {block.children?.map((child: any) => renderBlock(child))}
        </div>
      );
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <Image src={src} alt={caption} width={400} height={300}/>
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote className={styles.blockquote} key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return (
        <pre className={styles.pre}>
          <code className={styles.code_block} key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url;
      return (
        <div>
          <Link href={href} target="_brank" className={styles.bookmark}>
            {href}
          </Link>
        </div>
      );
    case "table": {
      return (
        <table className={styles.table}>
          <tbody>
            {block.children?.map((child: any, i: any) => {
              const RowElement =
                value.has_column_header && i == 0 ? "th" : "td";
              return (
                <tr key={child.id}>
                  {child.table_row?.cells?.map((cell: any, i: any) => {
                    return (
                      <RowElement key={`${cell.plain_text}-${i}`}>
                        <p>
                          <Text text={cell} />
                        </p>
                      </RowElement>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    case "column_list": {
      return (
        <div className={styles.row}>
          {block.children?.map((block: any) => renderBlock(block))}
        </div>
      );
    }
    case "column": {
      return <div>{block.children?.map((child: any) => renderBlock(child))}</div>;
    }
    case "callout": {
      const calloutText = value.rich_text;
      return (
      <div className={styles.calloutBox}>
        <div className={styles.calloutText}>
          <p>{value.icon.emoji}</p>
          <p>{calloutText.map((res: any) => res.text.content)}</p>
        </div>
      </div>
      );
    }
    case "video": {
      const originalText = value.external.url;
      const youtubeLink = originalText.split("https://youtu.be/");
      return (
      <iframe src={`https://www.youtube.com/embed/${youtubeLink[1]}`} width="708" height="398"/>
      );
    }
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export {Text, renderNestedList, renderBlock};