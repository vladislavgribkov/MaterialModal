import { ReactNode } from 'react';

interface IMaterialModal {
  label: string;
  content?: ReactNode | undefined;
  propsButton?: any;
  style?: any;
  propsCloseButton?: any;
  closeButton?: boolean;
}

export default IMaterialModal;
