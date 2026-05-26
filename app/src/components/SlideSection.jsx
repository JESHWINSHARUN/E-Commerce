import React, { useEffect, useRef, useState } from "react";
import "../styles/global.css";
const SlideSection = ({ children }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`slide-section ${visible ? "show" : ""}`}>
      {children}
    </div>
  );
};

export default SlideSection;
