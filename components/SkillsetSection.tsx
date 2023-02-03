import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Container,
  ThemeIcon,
  Badge,
  Grid,
  Col,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 4,
    backgroundColor: "#13111c",
  },

  title: {
    fontSize: 48,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  techTitle: {
    fontSize: 26,
    fontWeight: 700,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
  },

  techBadge: {
    backgroundColor: theme.colorScheme === "dark" ? "#1e1c2a" : "#f5f5f5",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginRight: 8,
    marginBottom: 12,
  },
}));

const skills = [
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "PHP",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Cloud & DevOps",
    technologies: ["Azure", "Google Cloud", "Azure DevOps", "Docker", "GitHub Actions"],
  },
  {
    title: "Miscellaneous",
    technologies: ["Postman", "Figma", "Wordpress", "Jira"],
  },
];

export default function SkillsetSection() {
  const { classes } = useStyles();

  const items = skills.map((feature) => (
    <div key={feature.title}>
      <Text className={classes.techTitle}>{feature.title}</Text>
      <Text color="dimmed" size="sm">
        {feature.technologies.map((tech) => (
          <Badge key={tech} size={"lg"} className={classes.techBadge}>
            {tech}
          </Badge>
        ))}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper} id="skillset">
      <Container size="lg">
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              Skillset
            </Title>
            <Text color="dimmed">
              As a MERN stack developer with proficiency in cloud computing and
              DevOps, I have a strong foundation in web development. In addition
              to participating in hackathons, I also actively seek out
              opportunities to attend various developer events. My passion for
              programming extends beyond web development, as I have also gained
              experience in competitive programming. Beyond my technical skills,
              I have a strong interest in design.
            </Text>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid
              cols={2}
              spacing={30}
              breakpoints={[{ maxWidth: "md", cols: 1 }]}
            >
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
