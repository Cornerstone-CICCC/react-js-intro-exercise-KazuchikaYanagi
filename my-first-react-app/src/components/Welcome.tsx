type GreetingProps = {
  greeting: "Hello!";
};

const Welcome = ({ greeting }: GreetingProps) => {
  return <p>{greeting}</p>;
};

export default Welcome;
