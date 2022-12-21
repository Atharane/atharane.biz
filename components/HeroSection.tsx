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
import { IconCheck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
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
        ? theme.white
        : "linear-gradient(45deg, rgba(19,17,28,1) 0%, rgba(84,24,77,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Clash Grotesk, sans-serif",
    fontSize: 92,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 52,
    },
  },

  subtitle: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 36,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
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
    backgroundColor: "#bb00ff40",
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Atharane</Title>
            <Title className={classes.subtitle}>
              A <span className={classes.highlight}>modern</span> React <br />{" "}
              components library
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl" color={"#853bce"}>
                  <IconCheck color={"#291839"} size={12} stroke={3} />
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
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Download Resume
              </Button>

              <Button radius="xl" size="md" className={classes.control}>
                View Blogs
              </Button>
            </Group>
          </div>
          <Image src="images/behance.png" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
