export function Title({ className, children, withDot, withStroke }) {
  // Nur Text aufteilen wenn children ein String ist
  const splitText = () => {
    if (typeof children === "string") {
      const text = children;
      const firstChar = text.charAt(0);
      const restOfText = text.slice(1);
      return { firstChar, restOfText };
    }
    return { firstChar: null, restOfText: null };
  };

  const { firstChar, restOfText } = splitText();

  return (
    <h1
      className={
        "text-[33px] sm:text-[33px] md:text-[40px] lg:text-[60px] xl:text-[80px] leading-[1.1] font-fira text-left " +
        className
      }
    >
      {typeof children === "string" ? (
        <>
          {withStroke ? (
            <span className="relative inline-block">
              <span className="absolute top-0 left-0 right-0 h-[4px] bg-[#889cab]"></span>
              {firstChar}
            </span>
          ) : (
            firstChar
          )}
          {restOfText}
        </>
      ) : (
        children
      )}
      {withDot ? (
        <span className="text-[#D0312D] -ml-[0.75px] sm:-ml-0.5 md:-ml-0.5 lg:ml-[2px]">
          .
        </span>
      ) : null}
    </h1>
  );
}
