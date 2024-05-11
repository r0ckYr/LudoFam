import { Button, Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import { useRecoilState } from 'recoil';
import { codeState } from '../atoms/atom';

export const Landing = () => {
    const [code, setCode] = useRecoilState(codeState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value);
    };
    
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