import { Button, Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import { useRecoilState } from 'recoil';
import { codeState, socketState } from '../atoms/atom';
import { useEffect } from 'react';

export const Landing = () => {
    const [code, setCode] = useRecoilState(codeState);
    const [socket, setSocket] = useRecoilState(socketState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value);
    };
    
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen = () => {
            console.log('Connected');
            setSocket(socket);
        };

        
    }, []);

    return (
        <Container fluid className="full-height-container">
        <Row className="align-items-center text-center" style={{height: "100vh"}}>
            <Col className='col-12 text-center'>
                <input className='m-4' style={{width: "50vh"}} onChange={handleChange}/>
                <br></br>
                <Button 
                    variant='outline-success' 
                    className='button'
                    onClick={() => {
                        console.log(code);
                    }}
                >Enter the Game!!</Button>
            </Col>
        </Row>
        </Container>
    );
}