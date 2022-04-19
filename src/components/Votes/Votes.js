import React, { useState } from 'react'
import blackUpVote from '../../assets/blackUpVote.png'
import whiteUpVote from '../../assets/whiteUpVote.png'
import blackDownVote from '../../assets/blackDownVote.png'
import whitedownVote from '../../assets/whitedownVote.png'
import { createPostVote, changePostVote, deletePostVote } from '../../services/votes'
import { ContainerVotesPost } from './styled'

const Votes = ({ voteSum, id, getData }) => {
    const [upVote, setUpVote] = useState(false)
    const [dowmVote, setDownVote] = useState(false)
    const [iconUpVote, setIconUpVote] = useState(whiteUpVote)
    const [iconDownVote, setIconDownVote] = useState(whitedownVote)

    const onClickUpVote = () => {
        if (upVote && !dowmVote) {
            console.log("upVote && !dowmVote")
            setUpVote(false)
            setIconUpVote(whiteUpVote)
            deletePostVote(id, getData)
        }else if(!upVote && dowmVote){
            console.log("!upVote && dowmVote")
            setDownVote(false)
            setUpVote(true)
            setIconUpVote(blackUpVote)
            deletePostVote(id, getData)
            createPostVote(id, getData)
        } else {
            console.log("upVote")
            setUpVote(true)
            setIconUpVote(blackUpVote)
            createPostVote(id, getData)
        }
    }

    const onClickDownVote = () => {
        if (upVote && !dowmVote) {
            console.log("upVote && !dowmVote")
            setUpVote(false)
            setDownVote(true)
            setIconDownVote(blackDownVote)
            setIconUpVote(whiteUpVote)
            deletePostVote(id, getData)
            changePostVote(id, getData)
        } else if (!upVote && dowmVote) {
            console.log("!upVote && dowmVote")
            setDownVote(false)
            setIconDownVote(whitedownVote)
            deletePostVote(id, getData)
        }else {
            console.log("down vote")
            setUpVote(true)
            setIconDownVote(blackDownVote)
            changePostVote(id, getData)
        }
    }

    return (
        <ContainerVotesPost>
            <img src={iconUpVote} alt={"Voto Positivo"} onClick={onClickUpVote} />
            {voteSum ? <p>{voteSum}</p> : <p>0</p>}
            <img src={iconDownVote} alt={"Voto Negativo"} onClick={onClickDownVote} />
        </ContainerVotesPost>
    )
}

export default Votes