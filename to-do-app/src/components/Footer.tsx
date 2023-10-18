export const Footer: React.FC<Props> = ({
  todos,
  onClearCompleted,
  activeCount,
}) => {
  return (
    <footer className="footer">
      <span>
        <strong>{todos.length} tareas pendientes</strong>
      </span>
      <Filters filterSelected={} onFilterChange={()=>{
        
      }}
    </footer> 
  );
};
 