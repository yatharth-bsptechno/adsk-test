import type { Meta, StoryObj } from "@storybook/react";
import SectionProfessionalInfo from "../components/SectionProfessionalInfo";

const meta: Meta<typeof SectionProfessionalInfo> = {
  title: "Sections/SectionProfessionalInfo",
  component: SectionProfessionalInfo,
};

export default meta;
type Story = StoryObj<typeof SectionProfessionalInfo>;

export const Default: Story = {
  args: {
    onNext: () => console.log("Next button clicked"),
  },
};
