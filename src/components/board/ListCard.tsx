import styles from '@/styles/board/listCard.module.css';

function ListCard({ data }: any) {
    if (data.properties) {
      const title = data.properties.Name.title;
      const date = data.created_time;
  
      return (
        <div>
          {title.map((aName: any, index: number) => (
            <div key={index}>
              <div>
                <h1>{aName.plain_text}</h1>
              </div>
              <span>{aName.created_time}</span>
            </div>
          ))}
        </div>
      );
    } else {
      return <div>No data available</div>;
    }
  }
  
  export default ListCard;