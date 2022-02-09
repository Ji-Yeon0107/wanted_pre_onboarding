import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./Header";
import { ClickToEdit } from "./ClickToEdit";
import { Home } from "./Home";
import { Modal } from "./Modal";
import { Tab } from "./Tab";
import { Tag } from "./Tag";
import { Toggle } from "./Toggle";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/tab" element={<Tab />} />
            <Route path="/tag" element={<Tag />} />
            <Route path="/toggle" element={<Toggle />} />
            <Route path="/clickToEdit" element={<ClickToEdit />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};
