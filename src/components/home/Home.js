import React, { useState } from 'react';
import { Dropdown, FormControl, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const [selectedIndustry, setSelectedIndustry] = useState('Industry');
    const [selectedLocation, setSelectedLocation] = useState('Location');

    const handleIndustrySelect = (eventKey) => {
        setSelectedIndustry(eventKey);
    };

    const handleLocationSelect = (eventKey) => {
        setSelectedLocation(eventKey);
    };

    return (
        <div className="banner d-flex justify-content-center align-items-center">
            <div className="search-section text-center">
                <div className="search-container d-flex justify-content-center align-items-center bg-light p-3 rounded shadow">
                    <Dropdown className="mr-2" onSelect={handleIndustrySelect}>
                        <Dropdown.Toggle variant="white" id="industryDropdown">
                            <i className="fas fa-briefcase"></i> {selectedIndustry}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Technology">Technology</Dropdown.Item>
                            <Dropdown.Item eventKey="Finance">Finance</Dropdown.Item>
                            <Dropdown.Item eventKey="Healthcare">Healthcare</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mr-2" onSelect={handleLocationSelect}>
                        <Dropdown.Toggle variant="white" id="locationDropdown">
                            <i className="fas fa-map-marker-alt"></i> {selectedLocation}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="New York">New York</Dropdown.Item>
                            <Dropdown.Item eventKey="San Francisco">San Francisco</Dropdown.Item>
                            <Dropdown.Item eventKey="Los Angeles">Los Angeles</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl type="text" placeholder="Keyword" className="mr-2" />
                    <Button variant="primary">
                        <i className="fas fa-search"></i> Search
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
