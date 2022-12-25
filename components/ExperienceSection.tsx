import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";

const data = [
  {
    brand: "Digital Prudentia",
    position: "Fullstack Developer Intern",
    description:
      "PERN stack web application development. Work also involves learning cloud computing technologies and DevOps basics.",
    image_path: "digital-prudentia.png",
  },
  {
    brand: "Google Developer Student Clubs",
    position: "Web Development Core Team Member",
    description:
      "Conducted hackathons, taught web development to over 100 students, and instilled a developer mindset in emerging developers.",
    image_path: "gdsc.png",
  },
  {
    brand: "Tantrafiesta",
    position: "Content Lead",
    description:
      "Oversaw the development, distribution, and strategic efforts of creating messaging for Tantrafiesta, our college’s annual technical festival",
    image_path: "tantrafiesta.webp",
  },
];

const useStyles = createStyles((theme) => ({
  root: {
    background: "linear-gradient(120deg, #20242c 0%, #181622 100%)",
    paddingTop: theme.spacing.xl * 2,
  },

  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  // description: {
  //   maxWidth: 600,
  //   margin: "auto",

  //   "&::after": {
  //     content: '""',
  //     display: "block",
  //     backgroundColor: theme.fn.primaryColor(),
  //     width: 45,
  //     height: 2,
  //     marginTop: theme.spacing.sm,
  //     marginLeft: "auto",
  //     marginRight: "auto",
  //   },
  // },

  card: {
    backgroundColor: "#181622",
    // boxShadow: "5px 5px 10px rgba(120, 120, 120, 0.1), -5px -5px 10px rgba(40, 40, 40, 0.1)",
  },

  brand: {
    fontSize: "1.2rem",
    fontWeight: 700,
  },

  position: {
    fontWeight: 500,
    "&::after": {
      content: '""',
      display: "block",
      width: 45,
      height: 2,
      backgroundColor: theme.fn.primaryColor(),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = data.map((feature) => (
    <Card
      key={feature.brand}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <img src={`images/${feature.image_path}`} alt="brand" height={30} />
      <Text className={classes.brand} mt="md">
        {feature.brand}
      </Text>
      <Text className={classes.position}>
        {feature.position}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <div className={classes.root}>
      <Container size="lg" py="xl">
        <Group position="center">
          <Badge variant="filled" size="lg">
            Position of Responsibility
          </Badge>
        </Group>

        <Title order={2} className={classes.title} align="center" mt="sm">
          Professional Background
        </Title>

        {/* <Text
          color="dimmed"
          className={classes.description}
          align="center"
          mt="md"
        >
          Every once in a while, you’ll see a Golbat that’s missing some fangs.
          This happens when hunger drives it to try biting a Steel-type Pokémon.
        </Text> */}

        <SimpleGrid
          cols={3}
          spacing="xl"
          mt={50}
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {features}
        </SimpleGrid>
      </Container>
    </div>
  );
}
