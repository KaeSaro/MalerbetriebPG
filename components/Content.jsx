export function Content({ children, withoutMargin, withoutTopMargin }) {
  const styles = withoutMargin
    ? "mx-auto w-full max-w-[1200px] px-8 sm:px-12 lg:px-16"
    : withoutTopMargin
    ? "mx-auto mb-32 w-full max-w-[1200px] px-8 sm:px-12 lg:px-16"
    : "mx-auto mb-32 mt-24 w-full max-w-[1200px] px-8 sm:px-12 lg:px-16";

  return <div className={styles}>{children}</div>;
}
