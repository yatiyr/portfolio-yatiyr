import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Button } from "reactstrap";

const Home = () => {
  return (
    <BaseLayout>
      <Container>
        <Button color="danger">DANGER</Button>
      </Container>
    </BaseLayout>
  )
}

export default Home;