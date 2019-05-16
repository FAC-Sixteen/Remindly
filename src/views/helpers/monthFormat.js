const monthArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const monthFormat = (date) => {
    const month = date.getMonth();
    return monthArr[month];
};

module.exports = monthFormat;