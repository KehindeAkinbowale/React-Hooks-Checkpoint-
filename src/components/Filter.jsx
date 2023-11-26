import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Filter(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><span className='fw-bold me-2'>Title:</span>{props.title}</ListGroup.Item>
        <ListGroup.Item><span className='fw-bold me-2'>Ratings:</span>{props.ratings}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
export default Filter;