import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../Button/Button'
import amologo from '../../img/amologo.svg';
import amologotipo from '../../img/amologotipo.svg';
import logowmc from '../../img/logowmc.png';
import bolinha from '../../img/bolinha.png';
import icGithub from '../../img/ic-github.svg';
import icInstagram from '../../img/ic-instagram.svg';
// import bg from '../../img/bg.png'
import { Link, useHistory } from 'react-router-dom'

const StyledLanding = styled.div`
    max-width: 1280px;
    width: 90%;
    margin: 0 auto;
        nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 120px;
            div{
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
            align-items: center;
            width: 60%;
            height: 80vh;
            margin: 0 auto;
                h1{
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 120px;
                    line-height: 90%;
                    text-align: center;
                    letter-spacing: -0.03em;
                    text-transform: uppercase;
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
        section {
            width: 100%;
                h1{
                    font-size: 3.6rem;
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
    background-color: #552B9A;
    padding: 200px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    margin: 100px auto;
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
            padding: 100px;
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
    margin: 60px auto;
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
                <nav>
                    <div>
                        <a href="#">sobre</a>
                        <a href="#">github</a>
                    </div>
                    <div>
                        <img src={amologo} alt="logo da amobrindes"/>
                    </div>
                    <div>
                        <Link to={'/login/new-register'}>cadastre-se</Link>
                        <StyledButton label="entrar" type="red" onClick={() => history.push('login')}/>
                    </div>
                </nav>

                <section>
                    <h1>Amo brindes</h1>
                    {/* Aqui eu colocaria 'amo brindes' tipo o logo mesmo */}
                    <p>Descubra como sortear brindes de forma simples, divertida e gratuita! </p>
                </section>
                
            </StyledLanding>
            <StyledSection>
                <StyledMainContainer>
                    <StyledMain>
                        <card>
                            <img src={bolinha}/>
                            <h4>Gerenciamento simples do sorteio</h4>
                            <p>Adicione participantes, cadastre brindes e crie rodadas de sorteio.</p>
                        </card>
                        <card>
                            <img src={bolinha}/>
                            <h4>Visibilidade para os patrocinadores</h4>
                            <p>Sabemos como a visibilidade é muito importante para os patrocinadores do evento, por isso adicionamos um cantinho especial para as marcas patrocinadoras.</p>
                        </card>
                        <card>
                            <img src={bolinha}/>
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
                    <img src={logowmc} alt='logo womakercode'/>
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
                    <img src={logowmc} alt='logo womakercode' />
                </div>
            </StyledFeatures>

            <StyledFeatures>
                <div>
                    <img src={logowmc} alt='logo womakercode'/>
                </div>
                <div>
                    <p>Para criar uma rodada de sorteio, escolha um brinde e clique em sortear. <br />Simples assim.</p>
                </div>
            </StyledFeatures>

            <StyledFooter>
                <img src={amologotipo} alt="logotipo"/>
                <div>
                    <a href="#"><img src={icGithub}/></a>
                    <a href="#"><img src={icInstagram}/></a>
                </div>
            </StyledFooter>
        </>

     );
}
