import Button from "@mui/material/Button";
import styled from "styled-components";
import { Doggo } from "../types";

const DoggoProfile = ({ doggo }: { doggo: Doggo }) => {
  return (
    <Container>
      <ProfileImage src={doggo.imageUrl} alt="doggo-profile-image" />
      <Name>{doggo.name}</Name>
      <Age>age {doggo.age}</Age>
      <Button color="error">Delete Doggo</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 140px;
  margin: 10px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100%;
`;

const Name = styled.h3`
  color: #ffffff;
  margin: 20px 0px 10px 0px;
`;

const Age = styled.p`
  color: #ffffff;
  margin: 0px 0px 5px 0px;
`;

export default DoggoProfile;
