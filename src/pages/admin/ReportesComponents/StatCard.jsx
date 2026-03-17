import "./StatCard.css";

function StatCard({ title = "default", actualValue = 1, oldValue = 1, showDate = false }) {
  const difference = ((actualValue - oldValue) / oldValue) * 100;
  const today = new Date();
  const formattedDate = today.toLocaleDateString("es-GT", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});  

  let status = "stat-card-legend neutral";
  let dateClassName = "";

  if (difference > 0) {
    status = "stat-card-legend positive";
  } else if (difference < 0) {
    status = "stat-card-legend negative";
  }

  if(showDate){
    dateClassName = "stat-card-date"; 
  }else{
    dateClassName = "stat-card-date hidden";
  }

  return (
    <div className="stat-card">

      <h2 className="stat-card-title">{title}</h2>


      <p className={dateClassName}>{formattedDate}</p>
      

      <h3 className="stat-card-value">{actualValue}</h3>

      <p className={status}>
        {difference > 0 && " "}
        {difference < 0 && " "}
        {difference === 0 && "➖ "}
        {difference >= 0 ? "+" : ""}
        {difference.toFixed(2)}% respecto a ayer.
      </p>
    </div>
  );
}

export default StatCard;
