function Card({ data }: any) {
    if (data.properties) {
      const title = data.properties.Name.title;
  
      return (
        <div>
          <div>
            {title.map((aName: any, index: number) => (
              <h1 key={index}>{aName.plain_text}</h1>
            ))}
          </div>
        </div>
      );
    } else {
      return <div>No data available</div>;
    }
  }
  
  export default Card;