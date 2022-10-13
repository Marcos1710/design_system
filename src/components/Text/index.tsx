import { ITextProps } from '../../models/Text'

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'

export default function Text({ size = 'md', children, asChild, className }: ITextProps) {
    const Comp = asChild ? Slot : 'span'

    return (
        <Comp className={clsx('text-gray-100 font-sans', {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }, className
            )}
        >
            {children}
        </Comp>
    )
}
