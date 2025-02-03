import { Container, Badge, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Work = () => {
  const internshipImgSrc = useColorModeValue("/images/penten/internship-light.png", "/images/penten/internship-dark.png");


  return (
    <Layout title="Kronos">
      <Container>
        <Title>
          Penten Internship<Badge>2024</Badge>
        </Title>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Results</Meta>
            <Link href="https://github.com/oscarczer/comp-internship-project">
              github.com/comp-internship-project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Transformers</span>
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta>
            <span>
              Google CoLab, Hugging Face, OpenAI (for creating datasets)
            </span>
          </ListItem>
        </List>

        <Paragraph>
          When I was originally hired at Penten, it was for the primarily
          purpose of improving the quality of offline models for generating
          structured text. The project was also tasked to another student and
          while there was some collaboration, we decided in the end to mostly
          work separately with him focusing on Retrieval Augmented Generation
          (RAG) based methods and myself focusing on Low Rank Adaptation (LoRA)
          and Quantisation.
          {<br />} {<br />}
        </Paragraph>

        <Paragraph>
          See below for the attached README but for a full explanation I would
          recommend looking through the GitHub page which contains an
          explanation of LoRA and Quantisation, a history of the datasets that
          were both compiled and manually generated, and all of the results with
          different combinations of each.
          {<br />} {<br />}
        </Paragraph>

        <WorkImage src={internshipImgSrc} alt="temp" />
      </Container>
    </Layout>
  )
}

export default Work
