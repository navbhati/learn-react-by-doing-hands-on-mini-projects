import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'

function PizzaCard({ data, setOrdered }) {

    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={data.image} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
                    <Badge pill className="mb-1" variant="warning">£{data.price}</Badge>
                </div>
                <Card.Text className="text-secondary">{data.desc}</Card.Text>
                <Button
                    className="mt-auto font-weight-bottom"
                    onClick={() => setOrdered()}
                    variant="success"
                    block>Order Pizza 🍕</Button>
            </Card.Body>
        </Card>
    )
}
export default PizzaCard