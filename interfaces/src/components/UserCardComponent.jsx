export default function UserCardComponent(props) {
  return (
    <div className="card">
      <img src={ props.foto } alt="Foto do usuário" />
      <p>{ props.nome }</p>
      <p>{ props.email }</p>
      <p>{ props.username }</p>
      <p>{ props.idade }</p>
    </div>
  )
};
