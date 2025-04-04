import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="feesh">
      <Container>
        <Title>
          feesh <Badge>2025</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>play</Meta>
            <Link href="https://oscarczer.itch.io/feesh" isExternal>
              itch.io/feesh <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>platform</Meta>
            <span>HTML</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity</span>
          </ListItem>
        </List>

        <WorkImage src="/images/feesh/feesh-title.png" alt="title page" />

        <Paragraph>
          <i>feesh</i> was made as the submission on behalf of a group
          containing myself, two other coders and an artist/musician. Over the
          course of (just under) 3 days, we managed to make a game where you
          play as a marine biologist who goes undercover as a fish in order to
          learn the secrets of high-fish-society.
          {<br />} {<br />}
        </Paragraph>

        <Paragraph>
          Grab what little oxygen you can and talk with the fish you meet to
          sneak past the cops and uncover the conspiracies that lie within
          Physhland. And remember if thing get dire, you can always blow a
          bubble with space.
          {<br />} {<br />}
        </Paragraph>

        <WorkImage src="/images/feesh/feesh-level1.png" alt="level1" />
        <WorkImage src="/images/feesh/feesh-boss.png" alt="boss" />
      </Container>
    </Layout>
  )
}

export default Work
