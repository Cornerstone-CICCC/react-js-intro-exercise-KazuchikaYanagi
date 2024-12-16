type LogoTextProps = {
  logoText: "My First React App";
};

const Header = ({ logoText }: LogoTextProps) => {
  return (
    <header>
      <h1>{logoText}</h1>
    </header>
  );
};

export default Header;
