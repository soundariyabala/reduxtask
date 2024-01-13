import React,{useContext,useState} from 'react'
import { UserContext } from './UserContextComponents';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'


function Cards() {
  let {user} = useContext(UserContext)

  return (<>
  <div className="text-center" id="container">
 
    {user.map((e,i)=>{
      const [quantity,setQuantity]=useState(0)

      const addQuantity=()=>{
      setQuantity(quantity+1)}
      const removeQuantity=()=>{
      setQuantity(quantity-1)}
      const deleteQuantity=()=>{
        setQuantity(0)
      }


return (
  <Card style={{ width: '18rem' }} key={i}>
    <Card.Img variant="top" />
  <Card.Body >
    <Card.Title>{e.title}</Card.Title>
    <Card.Text >{e.description}</Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush" >
    <ListGroup.Item>Price:Rs.{e.price}</ListGroup.Item>
    <ListGroup.Item>Discount:{e.discountPercentage}</ListGroup.Item>
    <ListGroup.Item>rating:{e.rating}</ListGroup.Item>
    <ListGroup.Item>StockItem:{e.stock}</ListGroup.Item>
    <ListGroup.Item>Brand:{e.brand}</ListGroup.Item>
    <ListGroup.Item>Category:{e.category}</ListGroup.Item>
  </ListGroup>
  <Card.Body>
  
  
  <Button variant="success"  onClick={()=>addQuantity()}>+</Button>
&nbsp;{quantity}&nbsp;
  <Button variant="danger" className="text-center"onClick={()=>removeQuantity()}>-</Button><br/><br/>
  <div><p className="text-center" >TotalAmount:Rs.{e.price*quantity}</p></div>

  <Button variant="primary"onClick={()=>addQuantity()} >Add to Cart</Button><br/><br/>
  <Button variant="warning"onClick={()=>deleteQuantity()} >remove</Button><br/><br/>
  </Card.Body>
</Card>)   
 
    })}
    </div>

</>)
}
export default Cards