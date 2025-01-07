import type { Meta, StoryObj } from "@storybook/react";
import SectionExperience from "../components/SectionExperience";

const meta: Meta<typeof SectionExperience> = {
  title: "Sections/SectionExperience",
  component: SectionExperience,
};

export default meta;
type Story = StoryObj<typeof SectionExperience>;

export const Default: Story = {
  args: {
    onNext: () => console.log("Next button clicked"),
  },
};
