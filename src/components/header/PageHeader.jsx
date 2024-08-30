import PageBreadCrumb from "./PageBreadCrumb";

const page_header_container = {
  borderBottom: "1px solid var(--text_muted)",
};

const PageHeader = ({ page_name }) => {
  return (
    <div style={page_header_container} className="pt-3 pb-2 mb-4">
      <h2 className="text-muted">{page_name}</h2>

      <PageBreadCrumb page_name={page_name} />
    </div>
  );
};

export default PageHeader;
