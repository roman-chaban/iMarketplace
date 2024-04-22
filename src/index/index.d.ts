declare module '*.module.scss';
declare module '*.png';
declare module '*.webp';
declare module '*.jpg';
declare module '*.svg' {
  const content: string;
  export default content;
}
