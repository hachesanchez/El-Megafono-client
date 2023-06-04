import { useState } from "react"
import unfavCandidatImg from '../../../src/assets/images/fav-icon3.png'
import favCandidateImg from '../../../src/assets/images/fav-icon2.png'



const FavouriteCandidate = () => {

    const [favourite, setFavourite] = useState(false)

    const handleClick = () => {
        setFavourite(!favourite)
    }

    return (
        <img
            src={favourite ? favCandidateImg : unfavCandidatImg}
            onClick={handleClick}
            className="favourite-icon"
            style={{ maxWidth: '30px', maxHeight: '30px' }}
            alt="favourtie-candidate"
        />
    )
}

export default FavouriteCandidate