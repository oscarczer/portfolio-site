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
            <span>Unity, OpenAPI</span>
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
          For a 3 day hackathon hosted at Penten we got into small teams to
          create a project that was loosely based on our products capabilities.
          As our products include capabilities for deception, we decided to try
          and make as convincing a simulation of real world relationships as we
          could, utilising typecast "personas" and a Retrieval-Augmented
          Generation (RAG) memory alongside OpenAI's GPT 4o API.
          {<br />} {<br />}
        </Paragraph>
        <Paragraph>
          On initialisation, a set number of randomised personas are created
          with unique profiles, interests, personality traits, etc, and they
          have the ability to talk to each other and share this information.
          While we were quite happy with the ability to do do even this, we
          wanted to introduce a novel aspect of user interaction with the
          personas, including the ability to provide your own information and
          having that persona (and only that persona) remember it. This allows
          the user to start rumours and simulate the spreading of
          misinformation, exploring how this can occur in the real world.
          {<br />} {<br />}
        </Paragraph>
        <Paragraph>
          Some of the improvements that we wanted to include were directing the
          personas based on their like and dislike of others to further see how
          rumours can often be more prevalent within certain groups and how this
          can further divides in the population, however unfortunately we
          weren't able to finish this in the fairly short time period.
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
