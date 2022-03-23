import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ProfilePicture from "../../components/profilePicture";

import { Container, DownArrow, Logout, Title, UserIcon } from "./style";

export default function Header() {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const { pathname } = useLocation();
  const [toggleLogout, setToggleLogout] = useState(false);

  useEffect(() => {
    if(!auth) navigate("/");
    //eslint-disable-next-line
  }, [auth]);

  if (pathname === "/" || pathname === "/sign-up") {
    return null;
  }

  return (
    <Container>
      <Title>linkr</Title>
      <UserIcon>
        <DownArrow 
          show={toggleLogout ? 1 : undefined} 
          onClick={() => setToggleLogout(!toggleLogout)}
        />

        <Logout onClick={() => logout()} show={toggleLogout ? 1 : undefined}>Logout</Logout>

        <ProfilePicture />
      </UserIcon>
    </Container>
  );
}
