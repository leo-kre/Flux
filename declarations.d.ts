declare module '*.png' {
  const value: any;
  export default value;
}
declare module '*.jpg' {
  const value: any;
  export default value;
}
declare module '*.jpeg' {
  const value: any;
  export default value;
}
declare module '*.svg' {
  import * as React from 'react';
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
