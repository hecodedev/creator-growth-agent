import { NavLink, Outlet } from "react-router-dom";

export function AppShell() {
  return (
    <div className="app-shell">
      <header>
        <nav className="top-nav" aria-label="Main">
          <span className="brand">Creator Growth Agent</span>
          <NavLink className="nav-link" to="/" end>
            Dashboard
          </NavLink>
          <NavLink
            className="nav-link"
            to="/creative-studio"
            data-testid="nav-ai-creative-studio"
            aria-label="AI Creative Studio"
          >
            AI Creative Studio
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}