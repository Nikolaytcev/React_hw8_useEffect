interface Iusers {
    users: {
     id: number,
     name: string,
    }[],
    handleOnClick: (e: React.MouseEvent<HTMLElement>) => void  
}

export const Users = ({ users, handleOnClick }: Iusers) => {
  return (
    <ul className="users">{
        users.map(user =>
            <li className="description" id={user.id.toString()} onClick={handleOnClick} key={user.id.toString()}>{user.name}</li>)
    }</ul>
  )
}
