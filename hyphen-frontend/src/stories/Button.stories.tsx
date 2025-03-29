import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'outline'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'GET INSPIRED',
        size: 'medium',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'SIGN UP',
        size: 'medium',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'MY PORTFOLIO',
        size: 'medium',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'EDIT',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        children: 'SUBMIT',
    },
};

export const Disabled: Story = {
    args: {
        children: 'DISABLED',
        disabled: true,
    },
};
