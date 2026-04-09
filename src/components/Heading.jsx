const headingStyle = "text-[28px] text-primary font-medium mb-2.5";
export function Heading({ content, className = "" }) {
  return <div className={`${headingStyle} ${className}`}>{content}</div>;
}
