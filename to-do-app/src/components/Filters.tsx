import { TODO_FILTERS, FILTERS_BUTTONS } from "../const";

interface Props {
  filterSelected: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  return (
    <ul className="filters">
      <li>
        <a
          className={`${filterSelected === "all" ? "selected" : ""}`}
          onClick={() => setFilters({ showAll: true })}
        >
          Todos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === "active" ? "selected" : ""}`}
          onClick={() => setFilters({ showAll: true })}
        >
          Todos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === "all" ? "selected" : ""}`}
          onClick={() => setFilters({ showAll: true })}
        >
          Todos
        </a>
      </li>
    </ul>
  );
};
