import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    width: "100px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "20px",
    position: "fixed",
    right: "20px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#181622",
  },

  tile: {
    width: "42px",
    height: "42px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? "#481741" : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  icon: {
    width: "20px",
  },
}));

export default function FloatingIcons() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <a
          href="https://github.com/Atharane"
          target="_blank"
          className={classes.tile}
        >
          <img src="images/github.png" alt="" className={classes.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/atharane"
          target="_blank"
          className={classes.tile}
        >
          <img src="images/linkedin.png" alt="" className={classes.icon} />
        </a>
        <a
          href="https://www.instagram.com/atharva_rane0511/"
          target="_blank"
          className={classes.tile}
        >
          <img src="images/instagram.png" alt="" className={classes.icon} />
        </a>
        <a
          href="https://twitter.com/Atharane"
          target="_blank"
          className={classes.tile}
        >
          <img src="images/twitter.png" alt="" className={classes.icon} />
        </a>
        {/* go to top icon tile */}
        <a href="#top" className={classes.tile}>
          <img src="images/up-chevron.png" alt="" className={classes.icon} />
        </a>
      </div>
    </div>
  );
}
