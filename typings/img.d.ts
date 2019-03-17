declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.svg' {
  const component: React.ComponentClass<{width: string}>;
  export default component;
}
