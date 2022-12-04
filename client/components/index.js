import dynamic from "next/dynamic";

export const renderComponent = ({ name, props }) => {
  const Component = dynamic(() => import(`./generated/${name}`));
  const componentProps = {};

  props.map(({ name, value }) => {
    componentProps[name] = value;
  });

  return <Component {...componentProps} />;
};

const pageStyle = {
  marginTop: 100,
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 1200,
}

export const renderUI = components => {
  return (
    <div style={pageStyle}>
    <React.Fragment>
      {components.map(({ name, props }, key) => (
        <React.Fragment key={key}>
          {renderComponent({ name, props })}
        </React.Fragment>
      ))}
    </React.Fragment>
    </div>
  );
};
