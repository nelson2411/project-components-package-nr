/*
Here we define the types for our "styles.module.css" file.
*/

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}
