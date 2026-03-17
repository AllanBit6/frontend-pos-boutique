import BarGraph from "./Charts/BarGraph";
import RadialGraph from "./Charts/RadialGraph";
import HistoryGraph from "./Charts/HistoryGraph";
import "./GraphCard.css";

const graphMap = {
  bar: BarGraph,
  radial: RadialGraph,
  history: HistoryGraph
};

function GraphCard({ type, title, data }) {

  const GraphComponent = graphMap[type];

  return (
    <div className="report-card">

      <h3 className="graph-title">{title}</h3>

      {GraphComponent && <GraphComponent data={data} />}

    </div>
  );
}

export default GraphCard;