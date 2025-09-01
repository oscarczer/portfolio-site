import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="Unity / PureData Platformer">
      <Container>
        <Title>
          Unity / PureData Platformer <Badge>2025</Badge>
        </Title>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Course</Meta>
            <span>COMP4350</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity, PureData, LibPdIntegration</span>
          </ListItem>
        </List>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RumbxwMNXMY?si=wwqXh8XtcM6AS0gx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <Paragraph>{<br />}</Paragraph>
        <Paragraph>
          This performance focuses primarily on creating an unique interface to
          facilitate novel ways of musicians interacting with their instrument.
          This is accomplished through converting a PureData patch into an
          online game, changing the method of altering sliders or sending bangs
          from clicking on them with a mouse to using a player character that
          can move around the scene.
          {<br />} {<br />}
        </Paragraph>
        <Paragraph>
          The program uses Unity Relay, allowing for players to host their own
          servers locally and facilitates online multiplayer over WiFi
          (technically supporting players to come together internationally,
          although it may be slightly laggy). This is integrated with a Pd patch
          using the LibPdIntegration library for two way communication between
          Pd and Unity.
          {<br />} {<br />}
        </Paragraph>
        <Paragraph>
          Some of the notable features in this patch include the ability to
          combine Unity and PureData in an online context, for which there does
          not seem to exist any online precedent for. This required sending
          bang/float information from the client game instance to the server to
          ensure that everything remained in sync. Additionally, facilitating
          both the random selection of notes in the table and allowing the
          player to interact with them required totally separate workflows that
          had to be swapped at the client's discretion, resulting in a number of
          server/client transactions to occur and some slightly odd Pd
          workarounds.
          {<br />} {<br />}
        </Paragraph>

        <WorkImage src="/images/pdplatformer/full_patch.png" alt="temp" />
      </Container>
    </Layout>
  )
}

export default Work
