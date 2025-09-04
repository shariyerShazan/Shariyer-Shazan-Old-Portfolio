import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);

  const [active, setActive] = useState(false);
  const pos = useRef({ x: 0, y: 0 }); // current cursor
  const circle = useRef({ x: 0, y: 0 }); // circle position

  useEffect(() => {
    const moveMouse = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const addHover = () => setActive(true);
    const removeHover = () => setActive(false);

    document.addEventListener("mousemove", moveMouse);
    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveMouse);
      document.querySelectorAll("button, a").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  useEffect(() => {
    const speed = 0.12; // 0.05–0.2 adjust smoothness

    const animate = () => {
      // delta
      const dx = pos.current.x - circle.current.x;
      const dy = pos.current.y - circle.current.y;

      circle.current.x += dx * speed;
      circle.current.y += dy * speed;

      // update DOM directly for lag-free movement
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${circle.current.x}px, ${circle.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${active ? "active" : ""}`}
    ></div>
  );
}
