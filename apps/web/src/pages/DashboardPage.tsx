import { Link } from "react-router-dom";

const DEFAULT_CAMPAIGN = "demo-launch-q4";

export function DashboardPage() {
  return (
    <section>
      <h1>Dashboard</h1>
      <p className="muted">SYNTHETIC demo — Stage 4.5.2 QA profile 452.</p>
      <div className="panel">
        <h2>Active campaign</h2>
        <p>
          <strong>demo-launch-q4</strong> — Q4 launch nurture (draft)
        </p>
        <Link
          className="btn-primary"
          to={`/campaigns/${DEFAULT_CAMPAIGN}`}
          data-testid="dashboard-open-campaign"
        >
          Open campaign
        </Link>
      </div>
    </section>
  );
}