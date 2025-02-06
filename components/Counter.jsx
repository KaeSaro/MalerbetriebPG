"use client";

import CountUp from "react-countup";

export function Counter({ value }) {
  return (
    <CountUp
      start={0}
      end={value}
      duration={2.5}
      separator=""
      decimal=","
      delay={0.5}
      enableScrollSpy={true}
      scrollSpyOnce
    >
      {({ countUpRef }) => <span ref={countUpRef}>0</span>}
    </CountUp>
  );
}
