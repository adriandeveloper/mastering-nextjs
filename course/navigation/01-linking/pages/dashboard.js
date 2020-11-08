const Dashboard = ({ name, bio, public_repos }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{`Bio: ${bio}`}</p>
      <p>{`# of public Repos: ${public_repos}`}</p>
    </>
  );
};

Dashboard.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/adriandeveloper');
  const user = res.json();
  console.log('user', user);
  return user;
};

export default Dashboard;
