export default function timeline() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <iframe
        className="h-[100vh] object-center"
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1LnwogYjXlV3WjsXrCoMVkqb4PFkx9pH7jA7ekb6knrU&font=Default&lang=en&initial_zoom=2&height=650"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
