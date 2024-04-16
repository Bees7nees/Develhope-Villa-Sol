import classes from "../Styles/ContactCommentSection.module.scss";

export function ContactCommentSection() {
  return (
    <div className={classes["comments"]}>
      <div className={classes["text-section"]}></div>
      <svg
        className={classes["more-tool"]}
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="More tool">
          <line
            id="Line 1"
            x1="9.8584"
            y1="19.3205"
            x2="19.1137"
            y2="10.0652"
            stroke="#8AA8C4"
            strokeWidth="1.3625"
            strokeLinecap="round"
          />
          <line
            id="Line 3"
            x1="16.1162"
            y1="19.7975"
            x2="20.2622"
            y2="15.6516"
            stroke="#8AA8C4"
            strokeWidth="1.3625"
            strokeLinecap="round"
          />
          <line
            id="Line 2"
            x1="1.1875"
            y1="20.7657"
            x2="20.6616"
            y2="1.29163"
            stroke="#8AA8C4"
            strokeWidth="1.3625"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <div className={classes["add-your-comments"]}>Add your comments...</div>
    </div>
  );
}
