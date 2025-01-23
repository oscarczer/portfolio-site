import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="kronos">
      <Container>
        <Title>
          Kronos <Badge>2023</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>play</Meta>
            <Link href="https://oscarczer.itch.io/kronos">
              itch.io/kronos <ExternalLinkIcon mx="2px" />
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

        <WorkImage src="/images/kronos/kronos.png" alt="original" />

        <Paragraph>
          This game was made with the help of three other students from ANU for
          the course COMP3540 (Game Development) in 2023. The initial prototype
          was designed by myself and the four of us then worked together to make
          the final game over the course of the semester.
          {<br />} {<br />}
        </Paragraph>

        <Paragraph>
          In Kronos you play as a swordsman going deeper through a series of
          caves, fighting enemies and beating bosses. The catch? Time is
          everything. When you get hit, your time goes down. When you purchase
          items from the shop, your time goes down. However, littered around the
          map are extra time powerups that will replenish your time, and every
          enemy you kill will restore some as well.
          {<br />} {<br />}
          Can you find your way to the end before the time runs out?
          {<br />} {<br />}
        </Paragraph>

        <WorkImage src="/images/kronos/kronos-shooting.png" alt="shooting" />
        <WorkImage src="/images/kronos/kronos-shop.png" alt="shop" />
        <WorkImage src="/images/kronos/kronos-boss.png" alt="boss" />
        <WorkImage src="/images/kronos/kronos-second-level.png" alt="level2" />
      </Container>
    </Layout>
  )
}

export default Work
