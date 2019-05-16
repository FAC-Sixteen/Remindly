const dateFormat = (date) => {
    const slicedDate = date.toString().slice(8, 10);
    return slicedDate[0] == 0 ? slicedDate[1] : slicedDate;
};

module.exports = dateFormat;