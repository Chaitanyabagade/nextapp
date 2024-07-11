async function getData() {
   return "this is try";
}
 
export default async function Page() {
  const data = await getData()
 
  return <main>{data}</main>
}