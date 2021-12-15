import React from 'react'
import '../App.css'
import { map } from "lodash";


const Ranking = ({ theme, score }) => {

    return (
        <><h1 className={`heading ${theme ? "heading-dark" : "heading-light"}`}>Ranking : </h1>
        <table className="TableScore">
            <thead>
                <tr>
                    <th className={`para ${theme ? "para-dark" : "para-light"}`}>Ranking</th>
                    <th className={`para ${theme ? "para-dark" : "para-light"}`}>Avatar</th>
                    <th className={`para ${theme ? "para-dark" : "para-light"}`}>Username</th>
                    <th className={`para ${theme ? "para-dark" : "para-light"}`}>Score</th>
                </tr>
            </thead>
            <tbody>
                {map(score, user => (
                    <React.Fragment key={user.username}>
                        <tr>
                            <td className={`para ${theme ? "para-dark" : "para-light"}`}>{user.position}</td>
                            <td><img src={user.avatar} alt={user.username} /></td>
                            <td className={`para ${theme ? "para-dark" : "para-light"}`}>{user.username}</td>
                            <td className={`para ${theme ? "para-dark" : "para-light"}`}>{user.score}</td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table></>
    )
}

export default Ranking