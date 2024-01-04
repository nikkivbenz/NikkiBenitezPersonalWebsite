import { Container, Row, Col, Card} from "react-bootstrap";

function Projects(){
    return(
        <div> 
        <div id="projects"> 
            <input class="form-control" type="text" placeholder="search projects..."/>
        </div> 
        <Container> 
            <Row id="project-elements"> 
                <Col>
                    <Card>
                        <Card.Header as="h5">Google Chrome Extension: Anti-Scatter</Card.Header>
                        <Card.Body>
                            <Card.Title> Website Blocking! Focus!</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Row> 
                                <Col> 
                                    <a class="btn btn-dark" href="https://boisterous-biscotti-c124c9.netlify.app/login" target="_blank" rel="noopener noreferrer" role="button">Demo</a>
                                </Col>  
                                <Col> 
                                <a class="btn btn-dark" href="https://github.com/nikkivbenz/Anti-Scatter#readme-ov-file" target="_blank" rel="noopener noreferrer" role="button">Github</a>
                                </Col>
                            </Row> 
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header as="h5"> NBA Data Visualization & Analysis</Card.Header>
                        <Card.Body>
                            <Card.Title> Sports betting aid.  </Card.Title>
                            <Card.Text>
                            Technologies: Python, Plot.ly, Dash GUI, 
                            </Card.Text>
                            <Row> 
                                <Col> 
                                    <a class="btn btn-dark" href="https://boisterous-biscotti-c124c9.netlify.app/login" target="_blank" rel="noopener noreferrer" role="button">Demo</a>
                                </Col>  
                                <Col> 
                                    <a class="btn btn-dark" href="https://github.com/nikkivbenz/Anti-Scatter#readme-ov-file" target="_blank" rel="noopener noreferrer" role="button">Github</a>
                                </Col>
                            </Row> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
            <Row id="projects"> 
                <Col>                   
                     <Card>
                        <Card.Header as="h5">GeoSpatial Data & Analysis </Card.Header>
                        <Card.Body>
                            <Card.Title> Nasa WorldWind JS   </Card.Title>
                            <Card.Text>
                            Technologies: NASA Wordwind, Java, Live Data Feeds, 
                            </Card.Text>
                            <Row> 
                                <Col> 
                                    <a class="btn btn-dark" href="#link" target="_blank" rel="noopener noreferrer" role="button">Demo</a>
                                </Col>  
                                <Col> 
                                    <a class="btn btn-dark" href="link" target="_blank" rel="noopener noreferrer" role="button">Github</a>
                                </Col>
                            </Row> 
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                        <Card.Header as="h5"> Swerte Cryptocurrency Wallet </Card.Header>
                        <Card.Body>
                            <Card.Title> Stellar XLM Test Network </Card.Title>
                            <Card.Text>
                            Technologies: Python, API, Stellar Lumens Test Network, Blockchain, Web3
                            </Card.Text>
                            <Row> 
                                <Col> 
                                    <a class="btn btn-dark" href="#link" target="_blank" rel="noopener noreferrer" role="button">Demo</a>
                                </Col>  
                                <Col> 
                                    <a class="btn btn-dark" href="link" target="_blank" rel="noopener noreferrer" role="button">Github</a>
                                </Col>
                            </Row> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 

            <Row> 
                <Col></Col>
                <Col></Col>
            </Row> 
        </Container>
        </div> 
    ); 
 }
 export default Projects; 