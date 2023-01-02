import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    // add skewed bottom border
    // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw))",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    backgroundImage:
      theme.colorScheme === "dark"
        ? "linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(144,144,144,1) 100%)"
        : "linear-gradient(69deg, rgba(255,25,89,1) 0%, rgba(203,91,238,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Clash Grotesk, sans-serif",
    fontSize: 74,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 46,
    },
  },

  subtitle: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 26,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 22,
    },
  },

  control: {
    background:
      "linear-gradient(69deg, rgba(128,26,230,1) 0%, rgba(133,10,194,1) 100%)",
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    background:
      "linear-gradient(69deg, rgba(211,94,245,0.1) 0%, rgba(238,91,91, 0.1) 100%)",
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container id="top">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Atharva Rane</Title>
            <Title className={classes.subtitle}>
              A&nbsp;
              <span className={classes.highlight}>
                fullstack developer
              </span>{" "}
              with a passion for crafting elegant code
            </Title>
            <Text color="dimmed" mt="md">
              Fullstack developer based in Mumbai, passionate about building
              amazing things with code. From crafting intuitive user interfaces
              to developing scalable web applications, constantly striving to
              create powerful solutions.
            </Text>

            <Group mt={30}>
              <a href="resume.pdf" download>
                <Button radius="xl" size="md" className={classes.control}>
                  Download Resume
                </Button>
              </a>

              <a href="mailto:atharane.works@gmail.com" target="_blank">
                <Button radius="xl" size="md" className={classes.control}>
                  Reach Out
                </Button>
              </a>
            </Group>

            {/* <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl" color={"#853bce"}>
                  <IconStar size={10} stroke={3} color={"#17111e"} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List> */}

          </div>
          <Image src="images/macbook.png" className={classes.image} />
          {/* <iframe
            src="https://my.spline.design/robot4legslightcopy-7bca3a84b5772d4e3a4e976face27a54/"
            style={{border: "none"}}
          ></iframe> */}
        </div>
      </Container>
    </div>
  );
}
