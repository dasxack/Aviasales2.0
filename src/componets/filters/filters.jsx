import React from 'react';
import { connect } from 'react-redux';
import { checkboxAllFilter, checkboxOtherFilter } from '../../redux/actions';
import classes from './filters.module.scss';
import PropTypes from 'prop-types';
const Filters = (props) => {
  const element = props.checkboxes.map((el) => {
    return (
      <div className={classes.filters_input} key={el.id}>
        <label className={classes.check}>
          <input
            type="checkbox"
            className={classes.check__input}
            id={el.id}
            checked={el.checked}
            onChange={props.changeChecked}
          />
          <span className={classes.check__box}></span>
          {el.value}
        </label>
      </div>
    );
  });

  return (
    <div className={classes.filters}>
      <span className={classes.filters_title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
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
