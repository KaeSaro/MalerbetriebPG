export function Title({
  className = "",
  children,
  withDot,
  withStroke,
  fontSize, // Neue Prop für benutzerdefinierte Schriftgröße
  strokeColor = "#889cab", // Neue Prop für Strichfarbe mit Standardwert
}) {
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

  // Basis-Schriftgrößen-Klassen, falls keine benutzerdefinierten Größen angegeben sind
  const defaultSizeClasses =
    "text-[33px] sm:text-[33px] md:text-[40px] lg:text-[60px] xl:text-[80px]";

  // Kombinierte Klassen mit benutzerdefinierten Größen oder Standardgrößen
  const combinedClasses = `${
    fontSize || defaultSizeClasses
  } leading-[1.1] font-fira text-left ${className}`;

  return (
    <h1 className={combinedClasses}>
      {typeof children === "string" ? (
        <>
          {withStroke ? (
            <span className="relative inline-block">
              <span
                className="absolute top-0 left-0 right-0 h-[4px]"
                style={{ backgroundColor: strokeColor }} // Dynamische Strichfarbe
              ></span>
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
        <span className="text-[#000000] -ml-[0.75px] sm:-ml-0.5 md:-ml-0.5 lg:ml-[2px]">
          .
        </span>
      ) : null}
    </h1>
  );
}
