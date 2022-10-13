import { IHeading } from '../../models/Heading'

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'

export default function Heading({ size = 'md', children, asChild, className }: IHeading) {
    const Comp = asChild ? Slot : 'h2'

    return (
        <Comp className={clsx('text-gray-100 font-bold font-sans', {
                    'text-ls': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                }, className
            )}
        >
            {children}
        </Comp>
    )
}
