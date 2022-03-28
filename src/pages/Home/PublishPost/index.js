import { useRef, useState, } from "react";
import { useLocation, useNavigate } from "react-router";
import { fireAlert } from "../../../utils/alerts";
import useApi from "../../../hooks/useApi";
import useMenu from "../../../hooks/useMenu";
import useAuth from "../../../hooks/useAuth";
import usePost from "../../../hooks/usePost";
import ProfilePicture from "../../../components/ProfilePicture";
import { 
  Button, 
  Container, 
  ContainerProfilePicture, 
  Description, 
  Input, 
  TextArea 
} from "./style";
import { findHashtags } from "../../../utils/findHastags";

export default function PublishPost() {
  const [formData, setFormData] = useState({ url: "", description: "", });
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  const { auth, logout } = useAuth();
  const { reloadPage, setReloadPage } = usePost();
  const { handleHideLogout } = useMenu();
  const api = useApi();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const input = useRef();

  function handleInputChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    input.current.style.outlineColor ="#efefef";
    e.preventDefault();

    if (!formData.url) {
      return;
    }

    const isHashtagsValid = findHashtags(formData.description);
    
    if (!isHashtagsValid){
      setError("Invalid Hashtags");
      input.current.focus();
      input.current.style.outlineColor = "#dc3545";
      return;
    }

    setIsLoading(true);

    try {
      const headers = { headers: { Authorization: `Bearer ${auth?.token}` } }

      await api.posts.publish(formData, headers);
      setFormData({ url: "", description: "", });
      setReloadPage(!reloadPage);
    } catch (error) {
      await fireAlert(error.response.data);
      if(error.response.status === 401) {
        logout();
        return navigate("/");
      }
    }
    setError("");
    setIsLoading(false);
  }

  if (pathname.includes('hashtag') || pathname.includes('user')) {
    return null;
  }

  return (
    <Container onClick={() => handleHideLogout()}>
      <ContainerProfilePicture>
        <ProfilePicture />
      </ContainerProfilePicture>

      <form onSubmit={handleSubmit}>
        <Description>What are you going to share today?</Description>

        <Input
          type="url"
          name="url"
          value={formData.url}
          placeholder="http://..."
          onChange={handleInputChange}
          disabled={isLoading}
          required
        />

        <TextArea
          ref={input}
          name="description"
          value={formData.description}
          placeholder="Awesome article about #javascript"
          onChange={handleInputChange}
          disabled={isLoading}
        />
        <span className="error-message">{error}</span>

        <Button disabled={isLoading} onClick={() => setReloadPage(!reloadPage)}>
          {isLoading ? "Publishing..." : "Publish"}
        </Button>
      </form>
    </Container>
  );
}