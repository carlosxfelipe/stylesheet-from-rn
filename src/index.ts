type Style = React.CSSProperties;

type Styles = {
  [key: string]: Style;
};

export const StyleSheet = {
  create: (styles: Styles): Styles => styles,
};
