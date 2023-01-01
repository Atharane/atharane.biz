import { Container, Badge, Card, Image, Group } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Text,
  Title,
  Button,
  useMantineTheme,
} from "@mantine/core";

export default function ProjectsSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const useStyles = createStyles((theme) => ({
    root: {
      background: "#13111c",
      backgroundImage:
        'url("images/damascus.svg"), linear-gradient(115deg, #13111c 0%, #13111c 100%)',
      // "linear-gradient(115deg, rgba(20,30,57,1) 0%, rgba(0,0,0,1) 100%)",
    },

    title: {
      width: "fit-content",
      margin: "0 auto",
      marginBottom: theme.spacing.xl * 2,
      fontSize: 34, 
      fontWeight: 900,
      [theme.fn.smallerThan("sm")]: {
        fontSize: 24,
      },
    },

    category: {
      color: "#13111c",
      opacity: 0.7,
      fontWeight: 700,
      textTransform: "uppercase",
    },
    card: {
      background: "#1e1c2a",
      border: "none",
    },

    imageWrapper: {
      // cover
      backgroundSize: "cover",
    },

    gradient: {
      height: 200,
      background:
        "-webkit-gradient(linear, left bottom, left top, color-stop(1, rgba(0,0,0,0.0)),  color-stop(0, #1e1c2a))",
    },

    section: {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },

    like: {
      color: theme.colors.red[6],
    },

    label: {
      textTransform: "uppercase",
      fontSize: theme.fontSizes.xs,
      fontWeight: 700,
    },
  }));

  function BadgeCard({ title, image, description, technologies }) {
    const features = technologies.map((badge) => (
      <Badge color={theme.colorScheme === "dark" ? "dark" : "gray"} key={badge}>
        {badge}
      </Badge>
    ));

    return (
      <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
          <div
            className={classes.imageWrapper}
            style={{ background: `url("${image}")`, backgroundSize: "cover" }}
          >
            <div className={classes.gradient}></div>
          </div>
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Title>{title}</Title>
          </Group>
          <Text size="sm" mt="xs">
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} color="dimmed">
            Technologies Used
          </Text>
          <Group spacing={7} mt={5}>
            {features}
          </Group>
        </Card.Section>
      </Card>
    );
  }

  const data = [
    {
      image: "images/contest-calendar.png",
      title: "Contest Calendar",
      description:
        "A browser extension that shows upcoming hackathons and competitive programming contests. Features include sorting by platform and notifying users.",
      technologies: ["React", "momentjs", "axios"],
    },
    {
      image: "images/quizzical.png",
      title: "Quizzical",
      description:
        "A simple quiz app that allows users to take quizzes on a variety of topics. Users can also view their quiz history and statistics. Built with React and Firebase. ",
      technologies: ["React", "axios"],
    },
    {
      image: "images/inventory-management.png",
      title: "Inventory Management System",
      description: "",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      image: "images/contest-calendar.png",
      title: "Hash Table Visualizer",
      description:
        "Model the workings of hash tables. Animations on key-value pair insertion and deletion. Designed to assist learners in understanding the workings of data structures. An intuitive and minimal user interface.",
      technologies: ["React", "lorem"],
    },
  ];

  const { classes, cx } = useStyles();

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <BadgeCard
        title={item.title}
        image={item.image}
        description={item.description}
        technologies={item.technologies}
      />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.root}>
      <Container size="lg" pt={40} pb={40}>
        <Title className={classes.title}>Projects</Title>
        <Carousel
          slideSize="50%"
          breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
          slideGap="xl"
          align="start"
          slidesToScroll={mobile ? 1 : 2}
        >
          {slides}
        </Carousel>
      </Container>
    </div>
  );
}
