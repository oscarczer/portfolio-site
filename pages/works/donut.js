import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="donut">
      <Container>
        <Title>
          Blender Donut <Badge>2025</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>view in hd</Meta>
            <Link href="https://youtu.be/a6zxyWXrbPk" isExternal>
              youtube.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Made In</Meta>
            <span>Blender</span>
          </ListItem>
        </List>

        <Paragraph>
          These donuts were made in Blender following the famous{' '}
          <Link
            href="https://www.youtube.com/playlist?list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z"
            isExternal
          >
            Blender Guru Donut tutorial
          </Link>{' '}
          and are here to show the beginnings of my familiarity with Blender as
          a 3D model making tool. Above is a link to a Youtube video to see the
          animation in full quality.
          {<br />} {<br />}
        </Paragraph>

        <Paragraph>
          Through making these I learnt the basics of modelling, sculpting,
          geometry nodes, rendering, compositing, lighting and animation and am
          now using these skills to make more complex projects.
          {<br />} {<br />}
        </Paragraph>

        <div>
          <WorkImage src="/images/donut/donut.gif" alt="donut gif" />
          {<br />} {<br />}
        </div>
      </Container>
    </Layout>
  )
}

export default Work
