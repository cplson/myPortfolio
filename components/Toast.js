const toast = {
  boxSizing: "border-box",
  margin: "-24px 8px 8px auto",
  border: "solid 1px black",
  padding: "padding: 8px 16px;",
  display: "flex",
  alignItems: "center",
  color: "#f8f1ff",
  fontSize: "16px",
};

export const toastSuccess = {
  ...toast,
  backgroundColor: "rgba(50, 200, 50, 0.5)",
};

export const toastFailure = {
  ...toast,
  backgroundColor: "#f71735",
};
