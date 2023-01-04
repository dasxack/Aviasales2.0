export const filterTicket = (Array, checkBoxes) => {
  if (Array === []) {
    return Array;
  }
  let elemsFilter = [];
  for (let i = 1; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      elemsFilter.push(
        ...Array.filter(
          (elem) =>
            elem.props.segments[0].stops.length === i - 1 ||
            (elem.props.segments[1].stops.length === i - 1 && !elemsFilter.includes(elem))
        )
      );
    }
  }

  return elemsFilter.filter((item, index) => elemsFilter.indexOf(item) === index);
};
