// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button className="mb-2" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </Button>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <ul>
                    <li>
                        <NavLink to="/caretaker" className={({ isActive }) => isActive ? 'active' : ''}>
                            Caretaker
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                            Neuro Corp
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
