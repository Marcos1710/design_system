import { Meta, StoryObj } from '@storybook/react'
import Heading from './index'
import { IHeading } from '../../models/Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading'
    }
} as Meta<IHeading>

export const Default: StoryObj<IHeading> = {
    args: {
        size: 'sm'
    }
}

export const Small: StoryObj<IHeading> = { 
    args: {
        size: 'md'
    }
}

export const Large: StoryObj<IHeading> = { 
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<IHeading> = { 
    args: {
        asChild: true,
        children: (
            <h1>Testando</h1>
        )
    }
}