import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaFileAlt, FaBars } from "react-icons/fa";

const Sidebar = ({ collapsed, onToggle }) => {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <button className="btn btn-light toggle-btn" onClick={onToggle} aria-label="Toggle sidebar">
          <FaBars />
        </button>
        {!collapsed && <span className="brand">Author</span>}
      </div>

      <nav className="mt-3">
        <NavLink
          to="/profile"
          className={({ isActive }) => "side-item " + (isActive ? "active" : "")}
        >
          <FaUser className="me-2" />
          {!collapsed && <span>Profile</span>}
        </NavLink>

        <NavLink
          to="/articles"
          className={({ isActive }) => "side-item " + (isActive ? "active" : "")}
        >
          <FaFileAlt className="me-2" />
          {!collapsed && <span>My Articles</span>}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
