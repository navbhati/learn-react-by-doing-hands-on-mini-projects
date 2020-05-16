import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col } from 'react-bootstrap'
import Conformation from './components/Conformation'
import PizzaCard from './components/PizzaCard'
import pizzas from './data'



function App() {

    const [ordered, setOrdered] = useState(false)

    function displayConformation() {
        setOrdered(true)

        setTimeout(() => {
            setOrdered(false)
        }, 2000);
    }

    return (
        <Container>
            {ordered && <Conformation toggle={setOrdered} />}
            <Row>
                {pizzas.map(data => (
                    <Col xs={3} className='mb-5' key={`${data.id}`}>
                        <PizzaCard data={data} setOrdered={displayConformation} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default App