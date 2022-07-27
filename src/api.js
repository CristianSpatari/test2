export default async function getNames() {
  const url = `https://eucc.me/magic/list.json`;
  const response = await fetch(url);
  return await response.json();
}
