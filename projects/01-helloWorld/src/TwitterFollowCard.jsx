import './App.css'
import { useState } from 'react'


export function TwitterFollowCard({userName="unknown", name, initialIsFollow}) {
  // El hook de useState devuelve un array con dos elementos: el valor actual y una función para cambiarlo.
 /*  const state = useState(false)
  const isFollowing = state[0]
  const toggleIsFollowing = state[1] */
  const [isFollowing, setIsFollowing] = useState(initialIsFollow)
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
  return (
      <article className='tw-followCard' style={{width:"400px"}}>
        <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt={`Imagen de twitter de ${userName}`} />
          <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>
            @{userName}
            </span>
            {/* <div className="badge">
              Te sigue      
            </div> */}
          </div>
        </header>
        <aside>
          <button onClick={handleClick} className={buttonClassName}>
            <span className='tw-followCard-text'>{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </article>
  )
}
