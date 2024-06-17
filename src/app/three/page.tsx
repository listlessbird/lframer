"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import useMeasure from "react-use-measure";
import "./styles.css";

export default function Example() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [ref, bounds] = useMeasure();
  return (
    <div className="wrapper">
      <div style={{ color: "white" }}>{JSON.stringify(bounds, null, 2)}</div>
      <button className="button" onClick={() => setShowExtraContent((b) => !b)}>
        Toggle height
      </button>
      <motion.div className="element" animate={{ height: bounds.height }}>
        <div className="inner" ref={ref}>
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>

          {showExtraContent ? (
            <p>
              This extra content will change the height of the drawer. Some even
              more content to make the drawer taller and taller and taller...
            </p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
