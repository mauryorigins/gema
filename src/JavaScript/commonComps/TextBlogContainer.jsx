// ------------------------------------------ COMPONENT-----------------------------------------
export default function TextBlogContainer (props) {
  const { title, children, isMovil } = props
  return (
    <div className={isMovil?'text-blog-container-mobil':'text-blog-container'}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}