export default async function DetailBoard({page, blocks}: any) {
  const id = page;
  console.log(id)

    return (
        <div>
          <h1>{id || "undefined"}</h1>
        </div>
    )
  }