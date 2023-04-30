
import { Row,Col,Card,Icon,CardTitle } from "react-materialize"

function Car1(props){
    return(
        <Row className="Car">
  <Col
    m={6}
    s={12}
  >
    <Card 
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle className="For" image={props.img} reveal waves="light"/>}
      reveal={<p> {props.desc} </p>}
      revealIcon={<Icon>visibility</Icon>}
      title={props.titre}
    >
      <p>
        <a href="#">
          {props.Nom}  
        </a>
      </p>
    </Card>
  </Col>
</Row>
    )
} export default Car1