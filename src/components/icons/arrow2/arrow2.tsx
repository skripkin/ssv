import React from 'react';
import { IconSvg } from '../styles';

interface IIconProp {
  className?: string;
  props?: any;
}

const Arrow2 = ({ className, props }: IIconProp) => {
  return (
    <IconSvg
      className={className}
      width="20"
      height="8"
      viewBox="0 0 20 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.4907 4.11357C19.686 3.91831 19.686 3.60173 19.4907 3.40647L16.3088 0.224443C16.1135 0.0291787 15.7969 0.0291746 15.6017 0.224434C15.4064 0.419694 15.4064 0.736276 15.6017 0.931541L18.4301 3.76001L15.6016 6.5884C15.4063 6.78365 15.4063 7.10024 15.6016 7.2955C15.7969 7.49077 16.1134 7.49077 16.3087 7.29551L19.4907 4.11357ZM0.0449154 4.25977L19.1372 4.26001L19.1372 3.26001L0.0449284 3.25977L0.0449154 4.25977Z"
        fill="black"
      />
    </IconSvg>
  );
};

export default Arrow2;
