export interface Idatails {
        id: number,
        name: string,
        avatar: string,
        details: {
            city: string,
            company: string,
            position: string
        }   
}

export const Details = ({ id, name, avatar, details }: Idatails) => {
  console.log(avatar)
  return (
    <div className='details' id={id.toString()}>
        <img src={avatar} alt="avatar" />
        <div className='description'>
            <h3 className='title'>{name}</h3>
        </div>
        <div className='description'>City: {details.city}</div>
        <div className='description'>Company: {details.company}</div>
        <div className='description'>Position: {details.position}</div>
    </div>
  )
}
