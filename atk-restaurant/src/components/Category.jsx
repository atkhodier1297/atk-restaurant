import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks, GiTacos, GiGreekTemple} from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink >
        <SLink to={"/cuisine/Thai"}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink >
        <SLink to={"/cuisine/Japanese"}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink >
        <SLink to={"/cuisine/Mexican"}>
            <GiTacos/>
            <h4>Mexican</h4>
        </SLink >
        <SLink to={"/cuisine/Greek"}>
            <GiGreekTemple/>
            <h4>Greek</h4>
        </SLink >
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    transform: scale(0.8);
    width: 6rem;
    height: 6rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);

    h4{
        color: white;
        font-size: 1rem;
    }

    svg{
        color: white;
        font-size: 1.5rem
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white
        }

    }

`;

 



export default Category