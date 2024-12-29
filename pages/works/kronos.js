import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="Kronos">
      <Container>
        <Title>
          Kronos <Badge>2020</Badge>
        </Title>
        <Paragraph>A game that I made</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Test</Meta>
            <Link href="https://www.inkdrop.app/">
              link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity</span>
          </ListItem>
        </List>

        <WorkImage src="/images/bleh.png" alt="temp" />
      </Container>
    </Layout>
  )
}

export default Work
