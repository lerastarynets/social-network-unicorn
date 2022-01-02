import { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionsCount = Math.ceil(props.totalItemsCount / props.portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftNumber = (portionNumber - 1) * props.portionSize + 1;
  let rightNumber = portionNumber * props.portionSize;

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && (
        <button
          className={s.paginationButton}
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          PREV
        </button>
      )}
      {pages
        .filter((p) => p >= leftNumber && p <= rightNumber)
        .map((p, idx) => {
          return (
            <span
              key={idx}
              className={
                props.currentPage === p
                  ? s.selectedItem + " " + s.paginationItem
                  : s.paginationItem
              }
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionsCount > portionNumber && (
        <button
          className={s.paginationButton}
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
