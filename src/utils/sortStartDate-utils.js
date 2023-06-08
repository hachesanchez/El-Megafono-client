export const sortByStartDate = (jobs) => {
    return jobs.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
};