import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="Gossip Simulator">
      <Container>
        <Title>
          Penten Hackathon <Badge>2024</Badge>
        </Title>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity, OpenAI API</span>
          </ListItem>
        </List>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hQJ7CtnQIO8?si=x7CKPbA0gh-2l4hQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <Paragraph>{<br />}</Paragraph>
        <Paragraph>
          For this 3 day circuit-breaker hackathon we got into small teams to
          create a project that was loosely based on our product's capabilities.
          Our team decided to try make as convincing a simulation of real world
          relationships as we could, utilising typecast personalities and a
          Retrieval-Augmented Generation (RAG) memory alongside OpenAI's API.
          {<br />} {<br />}
        </Paragraph>
        <Paragraph>
          On initialisation, a set number of randomised personalities are
          created with unique profiles, interests, traits, etc, that have the
          ability to talk to each other and share information. While we were
          quite happy with the ability to do do even this, we wanted to
          introduce a novel aspect of user interaction within these
          personalities, including the ability to provide your own information
          and have them remember it. This allows the user to start rumours and
          simulate the spreading of misinformation, exploring how this can also
          occur in the real world.
          {<br />} {<br />}
        </Paragraph>
        <Paragraph>
          Some of the improvements that we wanted to include were directing the
          personalities towards each other based on their opinions of others to
          further see how rumours can propagate within certain groups and how
          this can further divides in the population. Unfortunately due to the
          relatively short time period we weren't able to implement this however
          it still exists as a possibility for future work.
          {<br />} {<br />}
        </Paragraph>

        <WorkImage src="/images/gossip/gossip.png" alt="temp" />
        <WorkImage src="/images/gossip/gossip2.png" alt="temp" />
        <WorkImage src="/images/gossip/gossip3.png" alt="temp" />
      </Container>
    </Layout>
  )
}

export default Work
