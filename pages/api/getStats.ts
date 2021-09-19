
export default async function getStats() {
    let data = await fetch('http://hook.tunes.ninja/stats').then((res) => res.json());
    console.log(data)
    return data;
}