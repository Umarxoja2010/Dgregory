export async function getData(url) {
    let fetchData = await fetch("https://umar-aka-backend-2.onrender.com/" + url.trim());

    let json = await fetchData.json()

    return  json
}
