import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const domain = "http://localhost:8080"

const Main = () => {

    return (
    <> 
        <div className="images">
            <Link to = "/friend">
                <button className="friend_image" onClick={() => {
                    axios.get(domain + '/friend/*')
                    .then((res) => {
                        console.log(res.data)
                    })
                    .catch(() => {
                        console.log('failed to load friends')
                    })
                }}>
                    <img src="./friends.png"/>
                </button>
            </Link>
            <br></br>
            <Link to = "/project">
                <button className="project_image" onClick={() => {
                    axios.get(domain + '/friend/*')
                    .then((res) => {
                        console.log(res.data)
                    })
                    .catch(() => {
                        console.log('failed to load projects')
                    })
                }}>
                    <img src="../images/project.png"/>
                </button>
            </Link>
        </div>

        <div className='container'>     
            <h1 className="main_title">STOOL</h1>
        </div>
    </>
    )
}

export default Main;