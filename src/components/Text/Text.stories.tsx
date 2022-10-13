import { Meta, StoryObj } from '@storybook/react'
import Text from './index'
import { ITextProps } from '../../models/Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum'
    }
} as Meta<ITextProps>

export const Default: StoryObj<ITextProps> = {
    args: {
        size: 'sm'
    }
}

export const Small: StoryObj<ITextProps> = { 
    args: {
        size: 'md'
    }
}

export const Large: StoryObj<ITextProps> = { 
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<ITextProps> = { 
    args: {
        asChild: true,
        children: (
            <p>Testando</p>
        )
    }
}