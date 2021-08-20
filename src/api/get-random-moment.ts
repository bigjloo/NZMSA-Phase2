
// API to get random moment quotes
const URL = "https://nzmsa-moments.azurewebsites.net/api/rand-moment"

export const getRandomMoment = async () => {
    const res = await fetch(URL, {mode: "cors", headers: {'Content-Type': 'application/json' }})
    if (!res.ok) {
        throw new Error("Error when fetching data")
    }
    const data = await res.json()
    return data
}
