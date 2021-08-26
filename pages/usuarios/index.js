export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data,
    }
  }
}

const Usuarios = ({users}) => {
  return ( 
  <div>
    <h1>Usuários</h1>
    {users.map(user => (
      <div key={user.id}>
        <h3>{user.name}</h3>
      </div>
    ))}
  </div>);
}
 
export default Usuarios;