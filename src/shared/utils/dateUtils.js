export const calculateMonths = (startDate, endDate = new Date()) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();

    return years * 12 + months + 1; // +1 to include the current month
};
