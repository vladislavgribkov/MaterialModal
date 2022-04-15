/// <reference types="react" />
import { ReactNode } from 'react';

interface IMaterialModal {
    label: string;
    content?: ReactNode | undefined;
    propsButton?: any;
    style?: any;
    propsCloseButton?: any;
    closeButton?: boolean;
}

declare const MaterialModal: ({ label, content, propsButton, style, propsCloseButton, closeButton }: IMaterialModal) => JSX.Element;

export { MaterialModal };
