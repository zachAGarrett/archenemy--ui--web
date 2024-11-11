import { Button, Flex } from "antd";

export default function Home() {
  return (
    <Flex vertical gap={10}>
      <Button size="large" type="primary">
        Start a new session
      </Button>
      <Button size="large">Continue a previous session</Button>
    </Flex>
  );
}
