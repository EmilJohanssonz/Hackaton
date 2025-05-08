import HomeButton from "../components/buttons/HomeButton/HomeButton";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <HomeButton
        title={"Utforska Borås"}
        className={"homebutton-colored"}
      ></HomeButton>
      <HomeButton
        title={"Om appen"}
        className={"homebutton-unColored "}
      ></HomeButton>
    </div>
  );
};

export default HomePage;
