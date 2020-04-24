import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../Button/Button'
// import amologo from '../../img/amologo.svg';
import amologotipo from '../../img/amologotipo.svg';
import logowmc from '../../img/logowmc.png';
import bolinha from '../../img/bolinha.png';
import icGithub from '../../img/ic-github.svg';
import icInstagram from '../../img/ic-instagram.svg';
import AddPeople from '../../img/1add.png';
import AddGift from '../../img/2gifts.png';
import SortPeople from '../../img/3sort.png';
import Card1 from '../../img/card1.png';
import Card2 from '../../img/card2.png';
import Card3 from '../../img/card3.png';
import BackgroundLegal from '../../img/bg.png'
import { Link, useHistory } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const StyledLanding = styled.div`
    box-sizing: border-box;
    max-width: 1280px;
    width: 90%;
    margin: 0 auto;
        nav{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 120px;
            div{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                a {
                    padding-right: 20px;
                    color: #552B9A;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 17px;
                }
            }
        }

        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            // width: 60%;
            height: 80vh;
            margin: 0 auto;
                img {
                    width: 150%;
                    padding-bottom: 100px;
                }
                h1{
                    width: 80%;
                    font-family: Montserrat;
                    font-style: normal;
                    font-size: 400%;
                    line-height: 140%;
                    text-align: left;
                    // letter-spacing: -0.03em;
                    // text-transform: uppercase;
                    color: #552B9A;
                }
                p{
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 28px;
                    line-height: 160%;
                    text-align: center;
                    color: #272727;
                    padding-top: 40px;
                    span {
                        font-weight: 800;
                    }
                }
        }

    @media (max-width: 768px) {
        nav {
            div {
                img {
                    width: 180px;
                }
            }
        }
        section {
            width: 100%;
            height: 60vh;
                h1{
                    font-size: 2rem;
                    text-align: left;
                }
                p{
                    font-size: 1.2rem;
                    text-align: left;
                }
        }
    }
`

const StyledSection = styled.div`
    background-image: url(${BackgroundLegal});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    padding: 300px 0 200px 0;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -150px;
       
`

const StyledMainContainer = styled.div`
    max-width: 1280px;
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

const StyledMain = styled.div`
    display: grid;
    grid-gap: 70px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 120px 100px;
        img {
            padding-bottom: 50px;
        }
        h4 {
            padding-bottom: 10px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 180%;
        }
        p {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 180%;
        }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 120px 40px;
    }
`

const StyledAbout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
        card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            box-sizing: border-box;
            padding: 120px 100px;
            background: linear-gradient(209.41deg, #F4F4F4 0.97%, rgba(247, 247, 247, 0) 65.76%);
            img {
                margin: 0 auto;
                width: 80%;
            }
                h3{
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 30px;
                    line-height: 160%;
                    padding-bottom: 40px;
                        span {
                            font-weight: bold;
                        }
                }
        }

        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
            card {
                img {
                width: 60%;
                }
                box-sizing: border-box;
                width: 100%;
                padding: 100px 40px;
            }
        }
        
`

const StyledFeatures = styled.div`
    max-width: 1280px;
    width: 90%;
    margin: 10px auto;
    display: flex;
    
        div {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 30px;
            line-height: 160%;
            padding: 10px;
        }

    @media (max-width: 1024px) {
        width: 100%;
        flex-direction: column;
        div {
            width: 100%;
            padding: 40px;
        }

    }
`

const StyledFooter = styled.div`
    max-width: 1280px;
    width: 90%;
    margin: 120px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
        div {
            img {
                padding-left: 20px;
            }
        }
`

export const Landing = () => {
    let history = useHistory();
    return ( 
        <>
            <StyledLanding>
                <nav id= "start">
                    <div>
                        <img src={amologotipo} alt="logo da amobrindes"/>
                    </div>
                    <div>
                        <Link to={'/login/new-register'}>cadastre-se</Link>
                        <StyledButton label="entrar" type="red" onClick={() => history.push('login')}/>
                    </div>
                </nav>

                <section>
                    <h1>Descubra como sortear brindes de forma simples, divertida e gratuita!</h1>
                    <p> </p>
                </section>
                
            </StyledLanding>
            <StyledSection>
                <StyledMainContainer>
                    <StyledMain>
                        <card>
                            <img src={Card1}/>
                            <h4>Gerenciamento simples do sorteio</h4>
                            <p>Adicione participantes, cadastre brindes e crie rodadas de sorteio.</p>
                        </card>
                        <card>
                            <img src={Card2}/>
                            <h4>Visibilidade para os patrocinadores</h4>
                            <p>Sabemos como a visibilidade é muito importante para os patrocinadores do evento, por isso adicionamos um cantinho especial para as marcas patrocinadoras.</p>
                        </card>
                        <card>
                            <img src={Card3}/>
                            <h4>Sorteios mais justos, dinâmicos e divertidos</h4>
                            <p>Empolgue e surpreenda os seus participantes. A cada rodada o sortudo e seu respectivo brinde ficam registrados na aba 'ganhadores’.</p>
                        </card>
                    </StyledMain>
                    <StyledAbout>
                        <card>
                            <img src={logowmc} alt='logo womakercode'/>
                        </card>
                        <card>
                            <h3><span>amobrindes</span> é um projeto open source que nasceu do React Bootcamp, realizado pela WoMakersCode.
                            </h3>
                            <StyledButton label="Visite o nosso github" type="red"/>
                        </card>
                    </StyledAbout>
                </StyledMainContainer>
            </StyledSection>

            <StyledFeatures>
                <div>
                    <img src={AddPeople} alt='logo womakercode'/>
                </div>
                <div>
                    <p>Adicione os participantes manualmente ou importe uma tabela.</p>
                </div>
            </StyledFeatures>

            <StyledFeatures>
                <div>
                    <p>Insira os brindes a serem sorteados e os respectivos patrocinadores.</p>
                </div>
                <div>
                    <img src={AddGift} alt='logo womakercode' />
                </div>
            </StyledFeatures>

            <StyledFeatures>
                <div>
                    <img src={SortPeople} alt='logo womakercode'/>
                </div>
                <div id="changeOrder">
                    <p>Para criar uma rodada de sorteio, escolha um brinde e clique em sortear. <br />Simples assim.</p>
                </div>
            </StyledFeatures>

            <StyledFooter>
                 <HashLink to={'/#start'}><img src={amologotipo} alt="logotipo"/></HashLink>
                <div>
                    <a href="https://github.com/React-Bootcamp-WoMarkersCode/gift-drawer"><img src={icGithub}/></a>
                    <a href="http://instagram.com/amobrindesapp"><img src={icInstagram}/></a>
                </div>
            </StyledFooter>
        </>

     );
}
