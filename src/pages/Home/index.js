import React from 'react'
import {
    Col,
    Container,
    Row
} from 'reactstrap'

import LeftAsideB from "../../components/leftAside"
import RightSidebar from "../../components/rightAside"
import Content from "../../components/content"
import Footer from '../../components/Footer'

const Home = (props)=> {
    
    const userData = props.userData
    props.changeIsCreatePost(false)


    return(
    <>
       <Container>
            <Row className="main-container d-flex">

                <Col className="col-aside-left" xs="0" md='4' xl='3' >
                   <LeftAsideB
                   userData = { userData }
                   />

                </Col>  
                <Col xs='12' md='8' xl='6'>
                   <Content/>
                </Col>
                <Col xs='0' md='0' xl='3'>
                   <RightSidebar/>
                </Col>  
            </Row>
            
        </Container>   
        <Footer/>
    </>
    )

}

export default Home