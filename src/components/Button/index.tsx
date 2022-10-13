import { IButtonProps } from '../../models/Button'

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'

export default function Button({ children, asChild, className, ...props }: IButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp className={clsx(
            'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-cyan-500'
            ,className
            )}
            {...props}
            >
            {children}
        </Comp>
    )
}
