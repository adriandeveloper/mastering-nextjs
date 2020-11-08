import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const onLogin = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };
  return (
    <>
      <input placeholder="user Name" />
      <input placeholder="Password" type="password" />
      <button onClick={onLogin} type="button">
        Login In
      </button>
    </>
  );
};

export default Login;
