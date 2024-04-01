import { Icons } from ".";

export default {
  title: "Components/Icons",
  component: Icons,
  argTypes: {
    type: {
      options: ["profile", "email"],
      control: { type: "select" },
    },
    status: {
      options: ["inactive", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "profile",
    status: "inactive",
    className: {},
    overlapGroupClassName: {},
    ellipseClassName: {},
    ellipseClassNameOverride: {},
    divClassName: {},
  },
};
