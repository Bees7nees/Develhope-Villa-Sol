import { EnterUsername } from ".";

export default {
  title: "Components/EnterUsername",
  component: EnterUsername,
  argTypes: {
    status: {
      options: ["inactive", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "inactive",
    className: {},
    contentClassName: {},
    iconsTypeEmailStatusClassName: {},
    iconsOverlapGroupClassName: {},
    iconsEllipseClassName: {},
    iconsEllipseClassNameOverride: {},
    iconsDivClassName: {},
    enterUsernameClassName: {},
  },
};
