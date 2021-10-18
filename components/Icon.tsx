import React, { FC, HTMLAttributes } from 'react';

const Icon: FC<HTMLAttributes<HTMLElement>> = ({ ...otherProps }) => (
  <i {...otherProps} />
);

export default Icon;
