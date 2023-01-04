import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchId, sliceTicket, getTickets } from '../../redux/actions';
import WarningMsg from '../warningMsg';
// import classes from './ticketList.module.scss';
import Ticket from '../ticket';
import { filterTicket } from '../../utilites/filterTicket';
import Spinner from '../spinner/spinner';
import ErrorMsg from '../error';
const TicketList = () => {
  const dispatch = useDispatch();

  const arrayTicket = useSelector((state) => {
    return state.ticketReducer.ticket;
  });
  const error = useSelector((state) => state.errorReducer.error);

  const sliceNum = useSelector((state) => state.sliceReducer.sliceNum);
  const checkBox = useSelector((state) => state.filterReducer.checkboxes);
  const searchId = useSelector((state) => state.searchReducer.id);
  const stopTicket = useSelector((state) => state.ticketReducer.stop);

  const elems = filterTicket(
    arrayTicket.map((item, index) => {
      return <Ticket key={index} {...item} />;
    }),
    checkBox
  );

  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (searchId) {
      dispatch(getTickets(searchId));
    }
  }, [searchId]);
  useEffect(() => {
    if (!stopTicket && searchId && checkBox) {
      dispatch(getTickets(searchId, checkBox));
    }
  }, [stopTicket, searchId, arrayTicket, checkBox]);

  return (
    <div>
      <Spinner />
      {error ? <ErrorMsg /> : null}
      {elems.length === 0 && !error && arrayTicket.length !== 0 ? <WarningMsg /> : elems.slice(0, sliceNum)}
      {elems.length > sliceNum && (
        <div>
          <button onClick={() => dispatch(sliceTicket())}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
        </div>
      )}
    </div>
  );
};
export default TicketList;
