export const formatDate = (dateString) => {

    const date = new Date(dateString)
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear().toString()

    return `${month} / ${year}`
}