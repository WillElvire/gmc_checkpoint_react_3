import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlayerComponent , players} from './Player';
export function PlayerList () {
    
    return (
        <Container> 
            <Row className='justify-content-center'>
                <Col md={3} className='d-flex flex-column align-items-center'>
                {
                    players.map((player) => (
                        <PlayerComponent key={player.name} player={player} />
                    ))
                }
                </Col>
            </Row>
          
        </Container>
    )
}