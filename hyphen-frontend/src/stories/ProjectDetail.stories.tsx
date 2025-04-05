import type { Meta, StoryObj } from "@storybook/react";
import { ProjectDetail } from "../components/ProjectDetail";

const meta: Meta<typeof ProjectDetail> = {
  title: "UI/ProjectDetail",
  component: ProjectDetail,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    projectName: {
      control: "text",
      description: "Main project name displayed at top (40px size)",
    },
    title: {
      control: "text",
      description: "Project title text",
    },
    description: {
      control: "text",
      description: "Project description text",
    },
    images: {
      control: "object",
      description: "Array of image objects with url and optional caption",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectDetail>;

export const Default: Story = {
  args: {
    projectName: "HOME//HOME",
    title: "IS AN ODE TO THE TWO PLACES I FEEL MOST MYSELF",
    description:
      "WHAT I CALL HOME HAS CHANGED MUCH OVER TIME, AND I'VE REALIZED A CONSTANT: HOME IS NOT JUST A PHYSICAL SPACE, BUT A FEELING. THROUGH THESE EXPLORATIONS, I STRIVE TO FIND THE EXTRAORDINARY IN THE MUNDANE AND CAPTURE FLEETING MOMENTS THAT MIGHT OTHERWISE GO UNNOTICED. MY WORK IS CHARACTERIZED BY A STRONG EMPHASIS ON COLOR, TEXTURE, AND COMPOSITION.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b",
        caption: "Morning light through bedroom window",
      },
      {
        url: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b",
        caption: "Kitchen details with natural textures",
      },
      {
        url: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b",
        caption: "Evening shadows in living space",
      },
      {
        url: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b",
      },
    ],
  },
};

export const SingleImage: Story = {
  args: {
    projectName: "THE VIOLET CAFE",
    title: "COLOR THEORY EXPLORATION",
    description:
      "A SERIES EXPLORING COLOR THEORY THROUGH ABSTRACT COMPOSITIONS. THIS PROJECT EXAMINES HOW DIFFERENT COLORS INTERACT AND CREATE EMOTIONAL RESPONSES IN VIEWERS.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
        caption: "Main counter area with signature violet tones",
      },
    ],
  },
};

export const NoCaptions: Story = {
  args: {
    projectName: "URBAN LANDSCAPES",
    title: "CITY ARCHITECTURE STUDY",
    description: "EXPLORATION OF CITY ARCHITECTURE AND URBAN GEOMETRY.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      },
      {
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      },
    ],
  },
};
