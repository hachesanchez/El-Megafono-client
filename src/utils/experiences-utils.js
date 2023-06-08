const sortByStartDate = (experiences) => {
    return Array.isArray(experiences)
        ? [...experiences].sort(
            (b, a) => new Date(a.startDate) - new Date(b.startDate)
        )
        : [];
};

export default sortByStartDate
