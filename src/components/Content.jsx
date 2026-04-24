export const Content = ({ data, isActive }) => {
  const { content } = data;

  return (
    <ul className="content-accordion">
      {content.map((item, id) => {
        return (
          <li key={id}>
            <p>
              {isActive && `${item.type} ${item.text}`}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
