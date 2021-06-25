import Image from "next/image";
import { Container } from "./Landing.style";

const Landing = () => {
  return (
    <div>
      <h3>Only in this week. Free shipping for all orders over $400</h3>
      <Container>
        <Image
          src="https://images.unsplash.com/photo-1619622376461-28732c2b88c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=399&q=80"
          alt="img-1"
          width={500}
          height={500}
        />
        <Image
          src="https://images.unsplash.com/photo-1617059070087-d05ea39977dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="img-2"
          width={500}
          height={500}
        />
      </Container>
    </div>
  );
};

export default Landing;
