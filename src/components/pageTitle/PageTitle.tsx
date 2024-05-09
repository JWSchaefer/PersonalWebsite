import "./PageTitle.css";

interface PageTitleProps {
  pageTitle: string;
}

export function PageTitle({ pageTitle }: PageTitleProps) {
  return (
    <div className="PageTitleBar">
      <span className="PageTitle">{pageTitle}</span>
    </div>
  );
}
