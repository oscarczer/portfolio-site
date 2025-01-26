import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="CyberSaur Revenge">
      <Container>
        <Title>
          CyberSaur Revenge <Badge>2023</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>play</Meta>
            <Link href="https://scibuild.itch.io/cybersaur-revenge">
              itch.io/cybersaur-revenge <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>HTML</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity</span>
          </ListItem>
        </List>

        <WorkImage src="/images/cybersaur/cybersaur.png" alt="temp" />

        <Paragraph>
          A relatively simple game made with a small group in 3 days for the
          inaugural 2023 ANU Game Jam. The theme for this year was parallel
          dimensions and our interpretation of this was to have two worlds that
          the player can swap between at will. The enemies in each world differ
          in their health, damage, etc, while the map itself differs in its
          layout, forcing the player to have to think about which dimension they
          should exist in and when.
          {<br />} {<br />}
        </Paragraph>

        <Paragraph>
          The player collects coins from defeating enemies allowing them to
          purchase new weapons and upgrades at the end of each "wave". While
          there is no distinct end of the game, the waves get progressively more
          challenging, encouraging the pursuit of a new high score.
          {<br />} {<br />}
        </Paragraph>

        <Paragraph>
          The game itself along with both its music and art were made by our
          group of 5 over the course of the three days and although the game is
          not especially polished, we were all very proud of what we
          accomplished. This is especially true as none of the programmers had
          any prior experience working in Unity meaning we had to learn on the
          fly, an experience as rewarding as it was incredibly stressful.
          {<br />} {<br />}
        </Paragraph>

        <WorkImage src="/images/cybersaur/cybersaur-1.png" alt="temp" />
        <WorkImage src="/images/cybersaur/cybersaur-2.png" alt="temp" />
      </Container>
    </Layout>
  )
}

export default Work
