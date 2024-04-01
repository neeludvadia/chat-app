import { React , useState, useEffect }from 'react';
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { allUsersRoutes } from '../utils/APIRoutes';
const Chat = () => {
  const navigate = useNavigate();
  const [contacts,setContacts] = useState([]);
  const[currentUser,setCurrentUser] = useState(undefined);
  useEffect( ()=>{
    if(!localStorage.getItem("chat-app-user")){
        navigate("/login");
    }else{
      const func = async ()=>{
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
      }
      func();
      }
  },[])
  useEffect(()=>{
    const api = async ()=>{
      const data = await axios.get(`${allUsersRoutes}/${currentUser._id}`);
      return data;
    }
    
    if(currentUser){
      if(currentUser.isAvatarImageSet){
        const data = api();
        setContacts(data.data);
      } else{
        navigate("/setAvatar");
      }
      
    }
    
  },[])
  return (
    <>
    <Container>
      <div className="container">

      </div>
    </Container>
    </>
  )
}

const Container = styled.div `
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;
.container{
  height: 85vh;
  width: 85vw;
  background-color: #00000076;
  display: grid;
  grid-template-columns: 25% 75%;
  @media screen and (min-width:720px) and (max-width: 1080px)(
    grid-template-columns: 35% 65%;
  )
}
`;

export default Chat;
