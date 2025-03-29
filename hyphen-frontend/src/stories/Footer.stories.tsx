// components/Footer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/Footer';

const meta: Meta<typeof Footer> = {
    title: 'Layout/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
        companyName: {
            control: 'text',
            description: 'Name of the company to display in the footer',
        },
        year: {
            control: 'number',
            description: 'Year to display in the copyright notice',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const CustomCompanyName: Story = {
    args: {
        companyName: 'Other Company Inc.',
    },
};

export const CustomYear: Story = {
    args: {
        year: 2020,
    },
};