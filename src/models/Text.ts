import { ReactNode } from "react";

export interface ITextProps {
    size?: 'sm' | 'md' | 'lg',
    children: ReactNode,
    asChild?: boolean,
    className?: string
}