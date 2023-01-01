import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {IconBrandTwitter} from "@tabler/icons"

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


    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? "#481741" : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

const links = [
  {
    link: "/blogs",
    label: "Blogposts",
  },
  {
    link: "/contacts",
    label: "Get in touch",
  },
];

export default function HeaderResponsive() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  // const items = links.map((link) => (
  //   <a
  //     key={link.label}
  //     href={link.link}
  //     className={cx(classes.link, {
  //       [classes.linkActive]: active === link.link,
  //     })}
  //     onClick={(event) => {
  //       event.preventDefault();
  //       setActive(link.link);
  //       close();
  //     }}
  //   >
  //     {link.label}
  //   </a>
  // ));

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.tile}/>
        <div className={classes.tile}/>
        <div className={classes.tile}/>
        <div className={classes.tile}/>
        <div className={classes.tile}/>
      </div>
    </div>
  );
}
