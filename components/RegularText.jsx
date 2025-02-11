export function RegularText({
  children,
  withQuotes,
  withDot,
  textColor = "text-black",
  isBold = false,
}) {
  return (
    <p
      className={`${textColor} ${
        isBold ? "font-bold" : "font-normal"
      } text-md sm:text-lg md:text-xl lg:text-2xl leading-tight font-montserrat text-left`}
    >
      {withQuotes ? <>&quot;</> : null}

      {children}

      {withDot ? (
        <span
          className={
            withQuotes
              ? `text-red-600 -ml-1 sm:-ml-1 md:-ml-1 lg:-ml-2 -mr-1 sm:-mr-1 md:-mr-2 lg:-mr-3`
              : `text-red-600 -ml-1 sm:-ml-1 md:-ml-1 lg:-ml-1.5`
          }
        >
          .
        </span>
      ) : null}

      {withQuotes ? <>&quot;</> : null}
    </p>
  );
}
