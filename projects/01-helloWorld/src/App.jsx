import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const users = [
    {
      userName: "midudev",
      name: "Miguel Angel Duran",
      initialIsFollow: true,
    },
    {
      userName: "PedroVicFu",
      name: "PedroVic - Analista Deportivo",
      initialIsFollow: false,
    },
    {
      userName: "realmadrid",
      name: "Real Madrid",
      initialIsFollow: true,
    },
  ];
  /* const format = (userName) => `@${userName}`; 
  Se pueden pasar funciones 
  
  */
  /*  const userName = "midudev";
  const formattedUserName = (<span>@{userName}</span>) 
  También se pueden pasar elementos
  <Componente
    prop={elemento}/>
  */
  return (
    <>
      <section
        className="flex f-col center"
        style={{ margin: "20px", gap: "10px" }}
      >
        <h2 className="txt-left">A quien Seguir</h2>
        {users.map(({ userName, name, initialIsFollow }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            initialIsFollow={initialIsFollow}
          />
        ))}
      </section>
    </>
  );
}
