import React, { useEffect, useState } from 'react'
import { Nav, NavContainer, NavLogo, NavItems, StyledLink } from './styles/NavBar.styled'
import navLogo from '../assets/Hrease_logo.png'
import { useNavigate } from 'react-router-dom';
import pb from "../lib/pocketbase";

function NavBar() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [isManager, setIsManager] = useState('');

    useEffect(() => {
        const updateViewport = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        updateViewport();

        window.addEventListener('resize', updateViewport);

        return () => {
            window.removeEventListener('resize', updateViewport);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const userID = localStorage.getItem('userID');
            const IDResponse = await pb.collection("employee").getList(1, 1, {
                filter: `loginInfo ~ "${userID}"`,
            });
            console.log(IDResponse.items[0]?.isManager);
            setIsManager(IDResponse.items[0]?.isManager);
        }
        fetchData();
    });

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', false);
        navigate('/', { replace: true }); // Navigate to the home page
        window.location.reload();
    };

    return (
        <NavContainer>
            <Nav>
                {!isMobile ? <NavLogo src={navLogo}></NavLogo> : null}
                <NavItems>
                    <StyledLink to={"/personal"}>Dashboard</StyledLink>
                    {isManager && <StyledLink to={"/employee"}>Employee</StyledLink>}
                    {isManager && <StyledLink to={"/detailBranch"}>Branches</StyledLink>}
                    <StyledLink to={"/map"}>Map</StyledLink>
                </NavItems>
                <div style={{ marginTop: isMobile ? '0' : 'auto', width: '100%' }}>
                    <StyledLink onClick={handleLogout}>Logout</StyledLink>
                </div>
            </Nav>
        </NavContainer>

    )
}

export default NavBar