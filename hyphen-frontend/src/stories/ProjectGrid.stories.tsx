import type { Meta, StoryObj } from '@storybook/react';
import { ProjectGrid } from '../components/ProjectGrid';

const meta: Meta<typeof ProjectGrid> = {
  title: 'UI/ProjectGrid',
  component: ProjectGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectGrid>;

const sampleProjects = [
  {
    id: '1',
    title: 'THE STORMY NIGHT',
    imageUrl: 'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b',
  },
  {
    id: '2',
    title: 'THE VIOLET CAFE',
    imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
    description: 'A series exploring color theory through abstract compositions',
  },
  {
    id: '3',
    title: 'WAVES IN THE PURPLE BLISS',
    imageUrl: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
    description: 'An exploration of fluid dynamics and color interactions in abstract art',
  },
  {
    id: '4',
    title: 'THE RED CURTAIN',
    imageUrl: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85',
  },
  {
    id: '5',
    title: 'GOLDEN WAVES',
    imageUrl: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031',
    description: 'Exploring the interplay between light and water',
  },
  {
    id: '6',
    title: 'BLUE GRADIENT',
    imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926',
  },
  {
    id: '7',
    title: 'GREEN HORIZONS',
    imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d',
    description: 'Landscape studies in emerald tones',
  },
  {
    id: '8',
    title: 'SILVER MOMENTS',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
];

export const Default: Story = {
  args: {
    projects: sampleProjects.slice(0, 6), // Original 6-project layout
  },
};

export const FewProjects: Story = {
  args: {
    projects: sampleProjects.slice(0, 3), // Tests odd number handling
  },
};

export const SingleProject: Story = {
  args: {
    projects: sampleProjects.slice(0, 1), // Tests single project case
  },
};

export const ManyProjects: Story = {
  args: {
    projects: sampleProjects, // Tests all 8 projects
  },
};

export const WithCustomClass: Story = {
  args: {
    projects: sampleProjects.slice(0, 4),
    className: 'p-8', // Tests custom className prop
  },
};

export const MinimalProjects: Story = {
  args: {
    projects: sampleProjects.slice(0, 2), // Tests basic pair
  },
};