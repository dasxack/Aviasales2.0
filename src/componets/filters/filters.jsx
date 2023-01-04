import React from 'react';
import { connect } from 'react-redux';
import { checkboxAllFilter, checkboxOtherFilter } from '../../redux/actions';
// import classes from './filters.module.scss';
import PropTypes from 'prop-types';
const Filters = (props) => {
  const element = props.checkboxes.map((el) => {
    return (
      <div key={el.id}>
        <label>
          <input type="checkbox" id={el.id} checked={el.checked} onChange={props.changeChecked} />
          <span></span>
          {el.value}
        </label>
      </div>
    );
  });

  return (
    <div>
      <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      {element}
    </div>
  );
};
function mapStateToProps(state) {
  const { filterReducer } = state;
  return {
    checkboxes: filterReducer.checkboxes,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeChecked: (e) => (e.target.id === 'All' ? dispatch(checkboxAllFilter(e)) : dispatch(checkboxOtherFilter(e))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
Filters.defaultProps = {
  checkboxes: [],
  changeChecked: () => {},
};
Filters.propTypes = {
  checkboxes: PropTypes.array,
  changeChecked: PropTypes.func,
};
