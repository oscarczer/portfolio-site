import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  Heading
} from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => {
  return (
    <Layout title="C++ Graphics Renderer">
      <Container>
        <Title>
          Custom C++ Graphics Renderer <Badge>2025</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Course</Meta>
            <span>COMP4610</span>
          </ListItem>
          <ListItem>
            <Meta>Report</Meta>
            <Link
              href="/images/graphicsrenderer/report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Report (PDF)
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" fontSize={20} mb={4}>
          Reference Image
        </Heading>
        <WorkImage src="/images/graphicsrenderer/reference.png" alt="temp" />

        <Heading as="h3" fontSize={20} mb={4}>
          Final Render
        </Heading>
        <WorkImage src="/images/graphicsrenderer/final_render.png" alt="temp" />
        
        <Paragraph>
          This renderer was made as part of a group project for the ANU course
          Computer Graphics (COMP4610) and required us to choose a reference and
          attempt to recreate it using a custom built renderer made in C++. This
          required sourcing models and textures as well as finding ways of
          representing and visualising these in space through appropriate data
          structures.
          {<br />} {<br />}
        </Paragraph>

        <Paragraph>
          Personally, I was responsible for the skydome and sun, texture
          loading, composition, motion blur and writing up ~half of the report
          linked above which explains all of the techniques used in much greater
          detail.
          {<br />} {<br />}
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Work
